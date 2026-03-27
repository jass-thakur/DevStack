import { useQuery } from "@tanstack/react-query";
import { Tool, StackRecommendation } from "@/data/tools";
import { useApiKey } from "@/context/ApiKeyContext";
import { DEMO_DATA, searchKeywords, getRecommendedStack } from "@/data/demoData";

// Google Gemini API Configuration - Restoring 2.5-flash (verified model for 2026 env)
const GEMINI_API_BASE = "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent";

function cleanJsonString(text: string): string {
  // 1. Find the first [ or { and the last ] or }
  const firstBracket = text.indexOf('[');
  const firstBrace = text.indexOf('{');
  const start = (firstBracket !== -1 && (firstBrace === -1 || firstBracket < firstBrace)) ? firstBracket : firstBrace;
  
  const lastBracket = text.lastIndexOf(']');
  const lastBrace = text.lastIndexOf('}');
  const end = Math.max(lastBracket, lastBrace);

  if (start === -1 || end === -1 || end <= start) {
    throw new Error("Could not find any JSON block in the response");
  }

  let json = text.substring(start, end + 1);

  // 2. Remove common LLM pollution
  json = json
    .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1') // Strip comments
    .replace(/,\s*([\]}])/g, '$1') // Strip trailing commas
    .replace(/\\n/g, ' ') // Replace literal newlines
    .trim();

  return json;
}

async function fetchFromGemini(prompt: string, apiKey: string, model: string): Promise<any> {
  const API_URL = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent`;
  
  // 1. Check LocalStorage Cache (24 hour persistence)
  const safeQuery = prompt.substring(0, 100).replace(/[^a-zA-Z0-9]/g, '_');
  const cacheKey = `tools_cache_v3_${model}_${safeQuery}`;
  
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < 1000 * 60 * 60 * 24) { // 24 hours
        return { data, isCached: true };
      }
    }
  } catch (e) {
    console.warn("[Gemini] Cache read error:", e);
  }

  // 2. Client-Side Rate Limiter (Quota Guard) - Keeping history logic for safety
  const now = Date.now();
  const requestHistoryKey = "gemini_request_history_v2";
  const historyRaw = localStorage.getItem(requestHistoryKey);
  let history: number[] = historyRaw ? JSON.parse(historyRaw) : [];
  history = history.filter(ts => now - ts < 60000);
  
  // 5s Cooldown Check
  const lastRequest = history.length > 0 ? history[history.length - 1] : 0;
  if (now - lastRequest < 5000) {
    const wait = Math.ceil((5000 - (now - lastRequest)) / 1000);
    throw new Error(`Cooldown: Please wait ${wait}s before another search.`);
  }

  if (history.length >= 15) { 
    const waitTime = Math.ceil((60000 - (now - history[0])) / 1000);
    throw new Error(`Quota Guard: Please wait ${waitTime}s. You've sent ${history.length} searches recently.`);
  }

  // Record this request
  history.push(now);
  localStorage.setItem(requestHistoryKey, JSON.stringify(history));
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(`${API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.1,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        },
      }),
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const rawMessage = errorData.error?.message || "Failed to fetch from Google Gemini";
      
      // 429 Parsing for Retry Time
      if (response.status === 429) {
        const match = rawMessage.match(/retry in ([\d.]+)s/);
        const retryAfter = match ? parseFloat(match[1]) : 60;
        const err = new Error(`Quota exceeded. Automatically retrying in ${Math.ceil(retryAfter)}s.`);
        (err as any).retryAfter = retryAfter;
        throw err;
      }
      
      throw new Error(rawMessage);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error("Empty response from Gemini");

    try {
      const cleanedJson = cleanJsonString(text);
      const parsed = JSON.parse(cleanedJson);
      
      // Store in cache
      localStorage.setItem(cacheKey, JSON.stringify({
        data: parsed,
        timestamp: Date.now()
      }));
      
      return { data: parsed, isCached: false };
    } catch (err) {
      throw new Error("Failed to parse valid JSON from AI response.");
    }
  } catch (error: any) {
    clearTimeout(timeoutId);
    throw error;
  }
}

export function useTools(query: string) {
  const { apiKey, selectedModel } = useApiKey();

  return useQuery<Tool[]>({
    queryKey: ["tools", query, selectedModel],
    queryFn: async () => {
      if (!query) return [];

      try {
        const prompt = `Return a JSON array of exactly 5 software tools for: "${query}".
1. "description": MAX 15 words.
2. "tagline": MAX 5 words.
3. Use the Tool structure but keep values ultra-short.
Return ONLY JSON.`;

        if (!apiKey) throw new Error("No API Key");
        const result = await fetchFromGemini(prompt, apiKey, selectedModel);
        
        // Inject isCached status
        return result.data.map((tool: any) => ({
          ...tool,
          isCached: result.isCached
        }));
      } catch (error) {
        console.warn("[useTools] API Error, checking fallback:", error);
        
        // Fallback Logic: Check if the query matches our demo keywords
        const normalizedQuery = query.toLowerCase().trim();
        for (const [key, category] of Object.entries(searchKeywords)) {
          if (normalizedQuery.includes(key)) {
            const demoResults = DEMO_DATA[category];
            if (demoResults) {
              return demoResults.map(tool => ({
                ...tool,
                isSample: true
              }));
            }
          }
        }
        
        // If no keyword match but it was a quota error, we still throw to show the quota banner
        if (normalizedQuery.length > 0) {
           return DEMO_DATA["Frontend Frameworks"].map(tool => ({ ...tool, isSample: true }));
        }
 
        throw error;
      }
    },
    enabled: !!query,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 2,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: (failureCount, error: any) => {
      // Auto-retry once if it's a 429 and we haven't retried yet
      if (error.retryAfter && failureCount < 1) return true;
      return false;
    },
    retryDelay: (attemptIndex, error: any) => {
      return (error.retryAfter || 60) * 1000;
    }
  });
}

export function useStackRecommender(query: string) {
  const { apiKey, selectedModel } = useApiKey();

  return useQuery<StackRecommendation | null>({
    queryKey: ["stack", query, selectedModel],
    queryFn: async () => {
      if (!query) return null;

      try {
        const prompt = `Suggest a professional tech stack for: "${query}". 
Return a JSON object with this exact structure:
{
  "stackName": "string",
  "description": "string",
  "projectType": "string",
  "frontend": { "name", "tagline", "pricing", "rating", "reason", "officialUrl", "color" },
  "backend": { "name", "tagline", "pricing", "rating", "reason", "officialUrl", "color" },
  "database": { "name", "tagline", "pricing", "rating", "reason", "officialUrl", "color" },
  "hosting": { "name", "tagline", "pricing", "rating", "reason", "officialUrl", "color" },
  "authentication": { "name", "tagline", "pricing", "rating", "reason", "officialUrl", "color" },
  "devtools": [ { "name", "reason", "officialUrl" } ],
  "estimatedCost": "string",
  "difficulty": "Beginner" | "Intermediate" | "Advanced",
  "scalability": "Low" | "Medium" | "High" | "Enterprise",
  "timeToMVP": "string",
  "tags": ["string"]
}
Return ONLY JSON. No other text.`;

        if (!apiKey) throw new Error("No API Key");
        const result = await fetchFromGemini(prompt, apiKey, selectedModel);
        return result.data;
      } catch (error) {
        console.warn("[useStackRecommender] API Error, using demo fallback:", error);
        return getRecommendedStack(query);
      }
    },
    enabled: !!query,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 2,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: 0,
  });
}

