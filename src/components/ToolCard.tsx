import { Tool } from "@/data/tools";
import { useCompare } from "@/context/CompareContext";
import { Star, Plus, Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { getRoadmapSlug } from "@/lib/navigation";

interface ToolCardProps {
  tool: Tool;
  onViewDetails?: (tool: Tool) => void;
}

const pricingColor: Record<string, string> = {
  "Free": "text-success border-success/30 bg-success/10",
  "Open Source": "text-primary border-primary/30 bg-primary/10",
  "Freemium": "text-warning border-warning/30 bg-warning/10",
  "Paid": "text-accent border-accent/30 bg-accent/10",
};

export function ToolCard({ tool, onViewDetails }: ToolCardProps) {
  const { addTool, removeTool, isInCompare } = useCompare();
  const inCompare = isInCompare(tool.id);

  return (
    <div className="glass-card-hover p-6 flex flex-col gap-4 group relative overflow-hidden h-full">
      <div className="flex items-start justify-between relative z-10">
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className={cn(
            "h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors shrink-0",
            (tool.icon?.length || 0) > 2 ? "text-[10px] font-black uppercase leading-none px-1 text-center truncate" : "text-2xl"
          )}>
            {tool.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-white group-hover:text-primary transition-colors leading-tight mb-0.5">{tool.name}</h3>
            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60 truncate">{tool.category}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {tool.isSample && (
            <div className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[8px] font-bold text-amber-500 uppercase">
              Sample
            </div>
          )}
          <div className={cn("px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tight border", pricingColor[tool.pricing] || "text-muted-foreground border-border")}>
            {tool.pricing}
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2 min-h-[2.5rem] italic">
        {tool.tagline ? `"${tool.tagline}"` : "No tagline provided"}
      </p>

      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn("h-3 w-3", i < Math.round(tool.rating || 0) ? "text-amber-400 fill-amber-400" : "text-white/10")}
            />
          ))}
        </div>
        <span className="text-[10px] font-mono text-muted-foreground">{tool.rating || 0}</span>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1 min-h-[74px] content-start">
        {(tool.features || []).slice(0, 3).map(f => (
          <span key={f} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-muted-foreground">
            {f}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-2 mt-auto pt-4 relative z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => inCompare ? removeTool(tool.id) : addTool(tool)}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all border",
              inCompare
                ? "bg-primary/20 text-primary border-primary/30"
                : "bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10 hover:text-white"
            )}
          >
            {inCompare ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
            {inCompare ? "Added" : "Compare"}
          </button>
          <button
            onClick={() => onViewDetails?.(tool)}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold bg-primary text-white hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            View Details
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 pt-1 border-t border-white/5">
          <Link
            to={`/roadmap/${getRoadmapSlug(tool.category) || ''}?fromHome=true&q=${encodeURIComponent(tool.category)}`}
            className="flex-1 text-center py-1.5 text-[10px] font-medium text-muted-foreground hover:text-purple-400 hover:underline transition-colors"
          >
            🗺️ Roadmap
          </Link>
          <div className="w-[1px] h-3 bg-white/10" />
          <Link
            to={`/rankings?category=${encodeURIComponent(tool.category)}&fromHome=true`}
            className="flex-1 text-center py-1.5 text-[10px] font-medium text-muted-foreground hover:text-amber-400 hover:underline transition-colors"
          >
            🏆 Rankings
          </Link>
        </div>
      </div>

      {/* Subtle hover glow */}
      <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}
