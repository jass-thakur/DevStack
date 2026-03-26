import { Tool } from "@/data/tools";
import { X, Star, ExternalLink, ShieldCheck, TrendingUp, Zap, Users, Check, Plus, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCompare } from "@/context/CompareContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface ToolDetailModalProps {
  tool: Tool | null;
  onClose: () => void;
}

const pricingColor: Record<string, string> = {
  "Free": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "Open Source": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "Freemium": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  "Paid": "text-rose-400 bg-rose-400/10 border-rose-400/20",
};

export function ToolDetailModal({ tool, onClose }: ToolDetailModalProps) {
  const { addTool, removeTool, isInCompare } = useCompare();
  if (!tool) return null;

  const inCompare = isInCompare(tool.id);

  return (
    <Sheet open={!!tool} onOpenChange={() => onClose()}>
      <SheetContent className="w-full sm:max-w-xl bg-[#13161C] border-l border-white/10 text-white p-0 flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <SheetHeader className="text-left mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className={cn(
              "h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-white/10 shadow-xl shadow-primary/10 overflow-hidden",
              (tool.icon?.length || 0) > 2 ? "text-[12px] font-black uppercase leading-none px-2 text-center" : "text-4xl"
            )}>
              {tool.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                {tool.isSample && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500/10 border border-amber-500/20 text-amber-500">
                    Demo Mode
                  </span>
                )}
                <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold uppercase border", pricingColor[tool.pricing])}>
                  {tool.pricing}
                </span>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">{tool.category}</span>
              </div>
              <SheetTitle className="text-3xl font-bold text-white leading-tight">{tool.name}</SheetTitle>
            </div>
          </div>
          {tool.isSample && (
            <div className="mb-6 p-4 bg-amber-500/5 border border-amber-500/10 rounded-xl flex items-center gap-3">
              <Info className="h-5 w-5 text-amber-500" />
              <p className="text-xs text-amber-200/70 leading-relaxed">
                This is high-quality <span className="text-amber-500 font-bold">Demo Data</span> used as a fallback. 
                Configure a Gemini API key in settings for real-time AI results.
              </p>
            </div>
          )}
          <SheetDescription className="text-lg text-primary italic font-medium leading-normal">
            "{tool.tagline}"
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-8">
          {/* Main Description */}
          <section>
            <p className="text-muted-foreground leading-relaxed">
              {tool.description}
            </p>
          </section>

          {/* Ratings Grid */}
          <section className="grid grid-cols-2 gap-4">
            {[
              { label: "Performance", value: tool.performance, icon: ShieldCheck },
              { label: "Popularity", value: tool.popularity, icon: TrendingUp },
              { label: "Usability", value: tool.usability, icon: Zap },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
                    <stat.icon className="h-3 w-3" />
                    {stat.label}
                  </div>
                  <span className="text-sm font-mono font-bold text-primary">{stat.value}/10</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000" 
                    style={{ width: `${stat.value * 10}%` }} 
                  />
                </div>
              </div>
            ))}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
                  <Star className="h-3 w-3" />
                  Avg Rating
                </div>
                <span className="text-sm font-mono font-bold text-amber-400">{tool.rating}</span>
              </div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={cn("h-3 w-3", i < Math.round(tool.rating) ? "text-amber-400 fill-amber-400" : "text-white/10")} />
                ))}
              </div>
            </div>
          </section>

          {/* Feature Pills */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">Key Features</h3>
            <div className="flex flex-wrap gap-2">
              {tool.features.map(f => (
                <span key={f} className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                  {f}
                </span>
              ))}
            </div>
          </section>

          {/* Pros & Cons */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Pros ✅</h3>
              <ul className="space-y-2">
                {tool.pros.map(p => (
                  <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-emerald-400 shrink-0">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-rose-400">Cons ❌</h3>
              <ul className="space-y-2">
                {tool.cons.map(c => (
                  <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-rose-400 shrink-0">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Best For */}
          <section className="bg-accent/5 border border-accent/20 rounded-xl p-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-2 flex items-center gap-2">
              <Users className="h-3.5 w-3.5" />
              Best For
            </h3>
            <p className="text-sm text-white font-medium">{tool.bestFor}</p>
          </section>
        </div>
        
        {/* Sticky Actions */}
        <div className="p-6 bg-[#13161C] border-t border-white/10 flex gap-4 shrink-0">
          <Button
            onClick={() => inCompare ? removeTool(tool.id) : addTool(tool)}
            variant={inCompare ? "outline" : "secondary"}
            className={cn(
              "flex-1 h-12 font-bold",
              inCompare ? "border-primary/20 text-primary" : "bg-white/10 hover:bg-white/20 text-white"
            )}
          >
            {inCompare ? <Check className="mr-2 h-4 w-4" /> : <Plus className="mr-2 h-4 w-4" />}
            {inCompare ? "In Compare" : "Add to Compare"}
          </Button>
          <Button
            asChild
            className="flex-1 h-12 font-bold gradient-button border-none"
          >
            <a href={tool.officialUrl} target="_blank" rel="noopener noreferrer">
              Visit Site <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

