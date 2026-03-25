import { useCompare } from "@/context/CompareContext";
import { X, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CompareTray() {
  const { compareTools, removeTool, clearAll } = useCompare();
  const navigate = useNavigate();

  if (compareTools.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="container mx-auto px-4 pb-4">
        <div className="glass-card border-primary/20 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.2)] p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-x-auto">
            {compareTools.map(tool => (
              <div key={tool.id} className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-1.5 shrink-0">
                <span className="text-sm">{tool.icon}</span>
                <span className="text-sm font-medium">{tool.name}</span>
                <button onClick={() => removeTool(tool.id)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button onClick={clearAll} className="text-xs text-muted-foreground hover:text-foreground">
              Clear
            </button>
            <button
              onClick={() => navigate("/compare")}
              className="gradient-button px-4 py-2 rounded-lg text-sm flex items-center gap-2"
            >
              Compare Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
