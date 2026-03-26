import { useCompare } from "@/context/CompareContext";
import { X, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export function CompareTray() {
  const { compareTools, removeTool, clearAll } = useCompare();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (compareTools.length === 0 || pathname !== "/discover") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] animate-slide-up">
      <div className="container mx-auto px-4 pb-6">
        <div className="bg-[#1A1D25]/90 backdrop-blur-2xl border border-white/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)] p-4 rounded-2xl flex items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary shrink-0 mr-2 hidden sm:inline">Compare <br/> Tray</span>
            {compareTools.map(tool => (
              <div key={tool.id} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 shrink-0 group hover:border-primary/30 transition-colors">
                <span className="text-lg">{tool.icon}</span>
                <span className="text-xs font-semibold text-white truncate max-w-[80px]">{tool.name}</span>
                <button onClick={() => removeTool(tool.id)} className="text-muted-foreground hover:text-rose-400 transition-colors">
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button 
              onClick={clearAll} 
              className="text-[10px] font-bold uppercase tracking-tight text-muted-foreground hover:text-white transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={() => navigate("/compare")}
              className="gradient-button px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform"
            >
              Compare <span className="hidden sm:inline">Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

