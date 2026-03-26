import React, { createContext, useContext, useState, useEffect } from "react";

interface ApiKeyContextType {
  apiKey: string | null;
  selectedModel: string;
  setApiKey: (key: string) => void;
  setSelectedModel: (model: string) => void;
  removeApiKey: () => void;
  isConfigured: boolean;
  isGlobal: boolean;
}

const ApiKeyContext = createContext<ApiKeyContextType | null>(null);

export const AVAILABLE_MODELS = [
  { id: "gemini-2.0-flash-exp", label: "Gemini 2.0 Flash (Exp)", description: "Next-gen Fast Reasoning" },
  { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash (2026)", description: "Verified Core Model" },
  { id: "gemini-1.5-flash", label: "Gemini 1.5 Flash", description: "Standard (Fast, 15 req/min)" },
  { id: "gemini-1.5-pro", label: "Gemini 1.5 Pro", description: "Complex Reasoning (Paid)" },
  { id: "gemini-1.0-pro", label: "Gemini 1.0 Pro", description: "Legacy Stable" },
];

export function ApiKeyProvider({ children }: { children: React.ReactNode }) {
  // Check if a global key is provided in the environment
  const globalKey = import.meta.env.VITE_GEMINI_API_KEY || null;

  const [apiKey, setApiKeyInternal] = useState<string | null>(() => {
    const key = globalKey || localStorage.getItem("gemini_api_key");
    return key;
  });

  const [selectedModel, setSelectedModelInternal] = useState<string>(() => {
    return localStorage.getItem("gemini_selected_model") || "gemini-2.5-flash";
  });

  const setApiKey = (key: string) => {
    if (globalKey) return; 
    localStorage.setItem("gemini_api_key", key);
    setApiKeyInternal(key);
  };

  const setSelectedModel = (model: string) => {
    localStorage.setItem("gemini_selected_model", model);
    setSelectedModelInternal(model);
  };

  const removeApiKey = () => {
    if (globalKey) return; 
    localStorage.removeItem("gemini_api_key");
    setApiKeyInternal(null);
  };

  const isConfigured = !!apiKey;
  const isGlobal = !!globalKey;

  return (
    <ApiKeyContext.Provider value={{ 
      apiKey, 
      selectedModel, 
      setApiKey, 
      setSelectedModel, 
      removeApiKey, 
      isConfigured, 
      isGlobal 
    }}>
      {children}
    </ApiKeyContext.Provider>
  );
}

export function useApiKey() {
  const ctx = useContext(ApiKeyContext);
  if (!ctx) throw new Error("useApiKey must be used within ApiKeyProvider");
  return ctx;
}
