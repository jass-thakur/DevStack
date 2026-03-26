import React, { createContext, useContext, useState, useCallback } from "react";
import { Tool } from "@/data/tools";
import { toast } from "@/hooks/use-toast";

interface CompareContextType {
  compareTools: Tool[];
  addTool: (tool: Tool) => void;
  removeTool: (toolId: string) => void;
  isInCompare: (toolId: string) => boolean;
  clearAll: () => void;
}

const CompareContext = createContext<CompareContextType | null>(null);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [compareTools, setCompareTools] = useState<Tool[]>([]);

  const addTool = useCallback((tool: Tool) => {
    setCompareTools(prev => {
      if (prev.length >= 4) {
        toast({ title: "Maximum 4 tools", description: "Remove a tool before adding another.", variant: "destructive" });
        return prev;
      }
      if (prev.find(t => t.id === tool.id)) return prev;
      toast({ title: `${tool.name} added`, description: "Added to comparison tray." });
      return [...prev, tool];
    });
  }, []);

  const removeTool = useCallback((toolId: string) => {
    setCompareTools(prev => prev.filter(t => t.id !== toolId));
  }, []);

  const isInCompare = useCallback((toolId: string) => {
    return compareTools.some(t => t.id === toolId);
  }, [compareTools]);

  const clearAll = useCallback(() => setCompareTools([]), []);

  return (
    <CompareContext.Provider value={{ compareTools, addTool, removeTool, isInCompare, clearAll }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used within CompareProvider");
  return ctx;
}
