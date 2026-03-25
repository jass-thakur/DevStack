import { Tool } from "@/data/tools";
import { useCompare } from "@/context/CompareContext";
import { Star, Plus, Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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
    <div className="glass-card-hover p-5 flex flex-col gap-3 group">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{tool.icon}</span>
          <div>
            <h3 className="font-semibold text-foreground">{tool.name}</h3>
            <span className="text-xs font-mono text-muted-foreground">{tool.category}</span>
          </div>
        </div>
        <span className={cn("pill-badge text-[11px]", pricingColor[tool.pricing])}>
          {tool.pricing}
        </span>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{tool.description}</p>

      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn("h-3.5 w-3.5", i < Math.round(tool.rating) ? "text-gold fill-gold" : "text-muted")}
          />
        ))}
        <span className="text-xs text-muted-foreground ml-1">{tool.rating}</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {tool.features.map(f => (
          <span key={f} className="pill-badge-default text-[11px]">{f}</span>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-auto pt-2">
        <button
          onClick={() => inCompare ? removeTool(tool.id) : addTool(tool)}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
            inCompare
              ? "bg-primary/15 text-primary border border-primary/30"
              : "bg-muted/50 text-muted-foreground border border-border hover:bg-muted hover:text-foreground"
          )}
        >
          {inCompare ? <Check className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
          {inCompare ? "Added" : "Compare"}
        </button>
        <button
          onClick={() => onViewDetails?.(tool)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-muted/50 text-muted-foreground border border-border hover:bg-muted hover:text-foreground transition-all"
        >
          <ExternalLink className="h-3 w-3" />
          Details
        </button>
      </div>
    </div>
  );
}
