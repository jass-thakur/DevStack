import { useState } from "react";
import { useStackRecommender } from "@/hooks/use-tools";
import { type Tool, type RecommendedTool } from "@/data/tools";
import { ToolDetailModal } from "@/components/ToolDetailModal";
import { Copy, Share2, Sparkles, Send, Loader2, Info, ChevronRight, Star, ExternalLink, ShieldCheck, Zap, BarChart3, Clock, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function StackBuilderPage() {
  const [description, setDescription] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const { toast } = useToast();
  const [detailTool, setDetailTool] = useState<Tool | null>(null);
  
  const { data: stack, isLoading, error, refetch } = useStackRecommender(activeQuery);
  
  const handleBuild = () => {
    if (!description.trim()) {
      toast({ title: "Please describe your project", variant: "destructive" });
      return;
    }
    setActiveQuery(description);
  };

  const layers = [
    { key: "frontend", label: "Frontend", color: "text-blue-400", bgColor: "bg-blue-400/10", borderColor: "border-blue-400/20" },
    { key: "backend", label: "Backend", color: "text-indigo-400", bgColor: "bg-indigo-400/10", borderColor: "border-indigo-400/20" },
    { key: "database", label: "Database", color: "text-emerald-400", bgColor: "bg-emerald-400/10", borderColor: "border-emerald-400/20" },
    { key: "hosting", label: "Hosting", color: "text-rose-400", bgColor: "bg-rose-400/10", borderColor: "border-rose-400/20" },
    { key: "authentication", label: "Authentication", color: "text-amber-400", bgColor: "bg-amber-400/10", borderColor: "border-amber-400/20" },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-32 px-4 animate-in fade-in duration-700 slide-in-from-bottom-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            AI Stack Architect
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Custom <span className="gradient-text">Architecture</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto italic">
            Describe your project, and we'll build a production-ready stack in seconds.
          </p>
        </div>

        {/* Input Area */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-500" />
            <div className="relative bg-[#1A1D25] border border-white/10 rounded-2xl p-4 overflow-hidden transition-all group-focus-within:border-primary/40 shadow-2xl">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. A real-time chat app for medical professionals with strict HIPAA compliance and file sharing..."
                className="w-full h-32 bg-transparent text-white placeholder:text-muted-foreground/50 outline-none resize-none px-2 py-1 text-base leading-relaxed"
              />
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground/60 uppercase tracking-widest px-2">
                  <Info className="h-3 w-3" />
                  Keywords detect project presets
                </div>
                <Button 
                  onClick={handleBuild} 
                  disabled={isLoading || !description.trim()}
                  className="gradient-button h-10 px-6 rounded-xl font-bold transition-all disabled:opacity-50"
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Sparkles className="h-4 w-4 mr-2" />}
                  {stack ? "Regenerate" : "Build Stack"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Result Area */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="h-20 w-20 relative mb-8">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
              <div className="absolute inset-2 bg-primary/30 rounded-full animate-pulse" />
              <Loader2 className="absolute inset-0 m-auto h-8 w-8 text-primary animate-spin" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Architecting Your Solution...</h3>
            <p className="text-muted-foreground max-w-sm text-center italic">Scanning thousands of tool combinations for the perfect fit.</p>
          </div>
        ) : stack ? (
          <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
            {/* Header Badge */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#1A1D25] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-white">{stack.stackName}</h2>
                  {stack.isSample && (
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-500 uppercase tracking-tighter">
                      Demo Mode
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{stack.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                {stack.tags?.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Layers Diagram */}
            <div className="flex flex-col gap-4">
              {layers.map((layer) => {
                const tool = stack[layer.key as keyof typeof stack] as RecommendedTool;
                if (!tool) return null;
                return (
                  <div key={layer.key} className="group relative">
                    <div className={cn(
                      "flex flex-col md:flex-row items-start md:items-center gap-4 p-5 rounded-2xl border transition-all hover:bg-white/[0.02]",
                      "bg-[#1A1D25] border-white/5 hover:border-white/10"
                    )}>
                      {/* Icon & Label */}
                      <div className="flex items-center gap-4 md:w-48 shrink-0">
                        <div className={cn(
                          "h-12 w-12 rounded-xl flex items-center justify-center shadow-inner border group-hover:scale-110 transition-transform overflow-hidden",
                          (tool.icon?.length || 0) > 2 ? "text-[10px] font-black uppercase leading-none px-1 text-center" : "text-2xl",
                          layer.bgColor, 
                          layer.borderColor
                        )}>
                          {tool.icon || "🛠️"}
                        </div>
                        <div className="flex flex-col">
                          <span className={cn("text-[10px] font-bold uppercase tracking-widest", layer.color)}>{layer.label}</span>
                          <span className="text-white font-bold">{tool.name}</span>
                        </div>
                      </div>

                      {/* Reason & Details */}
                      <div className="flex-1 min-w-0 md:border-l md:border-white/5 md:pl-6">
                        <p className="text-muted-foreground text-sm line-clamp-2 italic mb-2 md:mb-0">"{tool.reason}"</p>
                      </div>

                      {/* Stats & Actions */}
                      <div className="flex items-center gap-6 shrink-0 w-full md:w-auto justify-between md:justify-end border-t border-white/5 pt-4 md:border-t-0 md:pt-0">
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={cn("h-3 w-3", i < Math.floor(tool.rating) ? "fill-amber-400 text-amber-400" : "text-white/10")} />
                            ))}
                          </div>
                          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{tool.pricing}</span>
                        </div>
                        <a 
                          href={tool.officialUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/40 transition-all hover:rotate-12"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* DevTools Multi-Layer */}
              {stack.devtools && stack.devtools.length > 0 && (
                <div className="p-5 rounded-2xl border bg-[#1A1D25] border-white/5">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex items-center gap-4 md:w-36 shrink-0">
                      <div className="h-12 w-12 rounded-xl flex items-center justify-center text-2xl bg-zinc-500/10 border border-zinc-500/20 text-zinc-400">
                        🛠️
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">DevTools</span>
                        <span className="text-white font-bold">{stack.devtools.length} Tools</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-wrap gap-4">
                      {stack.devtools.map(tool => (
                        <div key={tool.name} className="flex flex-col gap-0.5 min-w-[120px]">
                          <span className="text-white text-xs font-bold flex items-center gap-1">
                            {tool.name}
                            <a href={tool.officialUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"><ExternalLink className="h-2.5 w-2.5" /></a>
                          </span>
                          <span className="text-[10px] text-muted-foreground leading-tight">{tool.reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Summary Metrics Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <DollarSign className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Est. Cost</div>
                  <div className="text-white font-bold text-sm">{stack.estimatedCost}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Scalability</div>
                  <div className="text-white font-bold text-sm tracking-tight">{stack.scalability}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Level</div>
                  <div className="text-white font-bold text-sm">{stack.difficulty}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Time to MVP</div>
                  <div className="text-white font-bold text-sm">{stack.timeToMVP}</div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => {
                  const layersList = layers.map(l => {
                    const t = stack[l.key as keyof typeof stack] as RecommendedTool;
                    return t ? `${l.label}: ${t.name}` : null;
                  }).filter(Boolean);
                  const devToolsList = stack.devtools?.map(t => t.name).join(", ");
                  const text = `Stackspark Architect Suggestion: ${stack.stackName}\n\n` + 
                    layersList.join("\n") + 
                    (devToolsList ? `\nDevTools: ${devToolsList}` : "") + 
                    `\n\nEst. Cost: ${stack.estimatedCost}\nTime to MVP: ${stack.timeToMVP}`;
                  navigator.clipboard.writeText(text);
                  toast({ title: "Architecture copied to clipboard", description: "You can now paste it into your notes." });
                }}
                className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10 h-12 rounded-xl"
              >
                <Copy className="h-4 w-4 mr-2" /> Copy Full Stack
              </Button>
              <Button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast({ title: "Link copied", description: "Share this architecture with your team." });
                }}
                className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10 h-12 rounded-xl"
              >
                <Share2 className="h-4 w-4 mr-2" /> Share Architecture
              </Button>
            </div>
          </div>
        ) : error ? (
          <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-8 text-center animate-fade-in max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-rose-500 mb-2">Architectural Timeout</h3>
            <p className="text-muted-foreground mb-6 italics">
              The AI architect is currently over-capacity. Try a specific keyword like "Ecommerce", "AI", or "SaaS" to trigger immediate presets.
              <br/>
              <span className="text-[10px] font-mono bg-rose-500/20 text-rose-400 px-2 py-1 rounded mt-4 inline-block uppercase tracking-tighter">
                {(error as Error).message}
              </span>
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => refetch()} className="gradient-button h-11 px-8">
                Try Reconnect
              </Button>
              <Button onClick={() => { setDescription(""); setActiveQuery(""); }} variant="outline" className="border-white/10 text-white h-11 px-8">
                Reset Prompt
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in border-2 border-dashed border-white/[0.03] rounded-3xl">
            <div className="h-24 w-24 rounded-full bg-white/[0.02] flex items-center justify-center mb-6">
              <Sparkles className="h-10 w-10 text-muted-foreground/20" />
            </div>
            <h3 className="text-xl font-medium text-white/40 mb-2">Ready to architect your vision</h3>
            <p className="text-muted-foreground/40 max-w-sm">Enter your project requirements above to see a recommended technology stack.</p>
          </div>
        )}
      </div>

      <ToolDetailModal tool={detailTool} onClose={() => setDetailTool(null)} />
    </div>
  );
}

