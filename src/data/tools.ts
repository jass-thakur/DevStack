export type Category = "Frontend" | "Backend" | "Database" | "Hosting" | "DevTools" | "Full Stack";
export type Pricing = "Free" | "Open Source" | "Freemium" | "Paid";

export interface Tool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  icon: string;
  rating: number;
  pricing: Pricing;
  features: string[];
  pros: string[];
  cons: string[];
  performance: number;
  popularity: number;
  usability: number;
  bestFor: string;
  officialUrl: string;
  isCached?: boolean;
  isSample?: boolean;
}

export interface RecommendedTool {
  name: string;
  tagline: string;
  pricing: Pricing;
  rating: number;
  reason: string;
  officialUrl: string;
  color: string;
  icon?: string;
}

export interface StackRecommendation {
  stackName: string;
  description: string;
  projectType: string;
  frontend: RecommendedTool;
  backend: RecommendedTool;
  database: RecommendedTool;
  hosting: RecommendedTool;
  authentication: RecommendedTool;
  devtools: { name: string; reason: string; officialUrl: string }[];
  estimatedCost: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  scalability: "Low" | "Medium" | "High" | "Enterprise";
  timeToMVP: string;
  tags: string[];
  isSample?: boolean;
}

export const tools: Tool[] = [];

export const categories: Category[] = ["Frontend", "Backend", "Database", "Hosting", "DevTools", "Full Stack"];
export const pricingOptions: Pricing[] = ["Free", "Open Source", "Freemium", "Paid"];

export function getToolsByCategory(category: Category): Tool[] {
  return tools.filter(t => t.category === category);
}

export function getToolById(id: string): Tool | undefined {
  return tools.find(t => t.id === id);
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase();
  return tools.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q) ||
    t.features.some(f => f.toLowerCase().includes(q))
  );
}
