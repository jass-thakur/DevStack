import { Tool } from "@/data/tools";
import { X, Star, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCompare } from "@/context/CompareContext";

interface ToolDetailModalProps {
  tool: Tool | null;
  onClose: () => void;
}

const pricingColor: Record<string, string> = {
  "Free": "text-success",
  "Open Source": "text-primary",
  "Freemium": "text-warning",
  "Paid": "text-accent",
};

export function ToolDetailModal({ tool, onClose }: ToolDetailModalProps) {
  const { addTool, isInCompare } = useCompare();
  if (!tool) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div
        className="relative glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-4xl">{tool.icon}</span>
          <div>
            <h2 className="text-2xl font-bold">{tool.name}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-mono text-muted-foreground">{tool.category}</span>
              <span className={cn("text-xs font-medium", pricingColor[tool.pricing])}>{tool.pricing}</span>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-6">{tool.description}</p>

        <div className="flex items-center gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={cn("h-4 w-4", i < Math.round(tool.rating) ? "text-gold fill-gold" : "text-muted")} />
          ))}
          <span className="text-sm text-muted-foreground ml-2">{tool.rating} / 5</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { label: "Performance", value: tool.performance },
            { label: "Popularity", value: tool.popularity },
            { label: "Usability", value: tool.usability },
            { label: "Community", value: tool.community },
          ].map(stat => (
            <div key={stat.label} className="bg-muted/30 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{ width: `${stat.value}%` }} />
                </div>
                <span className="text-xs font-mono font-medium">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Key Features</h3>
          <div className="flex flex-wrap gap-2">
            {tool.features.map(f => <span key={f} className="pill-badge-active text-xs">{f}</span>)}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="text-sm font-semibold mb-2 text-success">Pros ✅</h3>
            <ul className="space-y-1">
              {tool.pros.map(p => <li key={p} className="text-sm text-muted-foreground">• {p}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2 text-destructive">Cons ❌</h3>
            <ul className="space-y-1">
              {tool.cons.map(c => <li key={c} className="text-sm text-muted-foreground">• {c}</li>)}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">Best For</h3>
          <div className="flex flex-wrap gap-2">
            {tool.bestFor.map(b => <span key={b} className="pill-badge-default text-xs">{b}</span>)}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {!isInCompare(tool.id) && (
            <button onClick={() => addTool(tool)} className="gradient-button px-4 py-2 rounded-lg text-sm">
              + Add to Compare
            </button>
          )}
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-border bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}
