import { useCompare } from "@/context/CompareContext";
import { Star, Trophy, ArrowLeft, Trash2, Check, X as Cross } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Tool } from "@/data/tools";
import { Button } from "@/components/ui/button";

const rows: { label: string; render: (t: Tool) => React.ReactNode }[] = [
  { label: "Description", render: t => <p className="text-sm text-muted-foreground/80 leading-relaxed font-light">{t.description}</p> },
  { label: "Category", render: t => <span className="px-2 py-1 rounded text-[10px] bg-primary/10 text-primary border border-primary/20 font-bold uppercase">{t.category}</span> },
  { label: "Pricing", render: t => <span className="text-sm font-semibold text-white">{t.pricing}</span> },
  {
    label: "Rating",
    render: t => (
      <div className="flex items-center gap-1.5">
        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
        <span className="text-sm font-bold text-white">{t.rating}</span>
      </div>
    ),
  },
  {
    label: "Features",
    render: t => (
      <div className="flex flex-wrap gap-1.5">
        {t.features.map(f => <span key={f} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-muted-foreground">{f}</span>)}
      </div>
    ),
  },
  {
    label: "Pros ✅",
    render: t => (
      <ul className="space-y-1">
        {t.pros.map(p => <li key={p} className="text-[11px] text-emerald-400 flex items-start gap-1"><span>•</span> {p}</li>)}
      </ul>
    ),
  },
  {
    label: "Cons ❌",
    render: t => (
      <ul className="space-y-1">
        {t.cons.map(c => <li key={c} className="text-[11px] text-rose-400 flex items-start gap-1"><span>•</span> {c}</li>)}
      </ul>
    ),
  },
  {
    label: "Performance",
    render: t => <ScoreBar value={t.performance} colorClass="bg-blue-500" textColor="text-blue-400" />,
  },
  {
    label: "Popularity",
    render: t => <ScoreBar value={t.popularity} colorClass="bg-violet-500" textColor="text-violet-400" />,
  },
  {
    label: "Usability",
    render: t => <ScoreBar value={t.usability} colorClass="bg-amber-500" textColor="text-amber-400" />,
  },
  {
    label: "Best For",
    render: t => <p className="text-xs text-white font-medium italic">{t.bestFor}</p>,
  },
];

function ScoreBar({ value, colorClass, textColor }: { value: number; colorClass: string; textColor: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-[6px] bg-white/5 rounded-full overflow-hidden min-w-[60px] relative">
        <div className={cn("h-full rounded-full transition-all duration-1000", colorClass)} style={{ width: `${value * 10}%` }} />
      </div>
      <div className={cn("text-right text-sm font-black font-mono tracking-tighter w-10", textColor)}>
        {value}<span className="text-[10px] opacity-40 ml-0.5">/10</span>
      </div>
    </div>
  );
}

function getRowWinner(tools: Tool[], label: string): string | null {
  if (tools.length < 2) return null;
  const scoreFields: Record<string, keyof Tool> = {
    "Rating": "rating",
    "Performance": "performance",
    "Popularity": "popularity",
    "Usability": "usability",
  };
  const field = scoreFields[label];
  if (!field) return null;
  const max = Math.max(...tools.map(t => t[field] as number));
  const winners = tools.filter(t => (t[field] as number) === max);
  return winners.length === 1 ? winners[0].id : null;
}

export default function ComparePage() {
  const { compareTools, clearAll } = useCompare();
  const navigate = useNavigate();

  if (compareTools.length === 0) {
    return (
      <div className="min-h-screen bg-background pt-24 flex flex-col items-center justify-center px-4 animate-in fade-in duration-700 slide-in-from-bottom-4">
        <div className="text-6xl mb-6">⚖️</div>
        <h2 className="text-2xl font-bold text-white mb-2">No tools to compare</h2>
        <p className="text-muted-foreground mb-8">Add tools from the Discover page to compare them.</p>
        <Button 
          onClick={() => navigate("/discover")} 
          className="gradient-button h-11 px-8 rounded-xl font-bold"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Browse Tools
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-32 px-4 animate-in fade-in duration-700 slide-in-from-bottom-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Tool <span className="gradient-text">Comparison</span>
            </h1>
            <p className="text-sm text-muted-foreground">Detailed breakdown between your selected technologies.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={clearAll} className="border-white/10 text-muted-foreground hover:text-white hover:bg-white/5">
              <Trash2 className="h-4 w-4 mr-2" /> Clear All
            </Button>
            <Button onClick={() => navigate(-1)} variant="outline" className="border-white/10 text-muted-foreground hover:text-white hover:bg-white/5">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar pb-4">
          <table className="w-full border-separate border-spacing-x-4">
            <thead>
              <tr>
                <th className="text-left text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 p-4 min-w-[140px] sticky left-0 bg-background z-20">
                  Attribute
                </th>
                {compareTools.map(tool => (
                  <th key={tool.id} className="p-4 min-w-[240px] bg-white/5 rounded-t-2xl border-x border-t border-white/10 z-10">
                    <div className="flex flex-col items-center gap-3">
                      <div className={cn(
                        "h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-white/10 overflow-hidden",
                        (tool.icon?.length || 0) > 2 ? "text-[10px] font-black uppercase leading-none px-1 text-center" : "text-3xl"
                      )}>
                        {tool.icon}
                      </div>
                      <span className="font-bold text-lg text-white">{tool.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="before:block before:h-4">
              {rows.map((row, idx) => {
                const winnerId = getRowWinner(compareTools, row.label);
                return (
                  <tr key={row.label} className="group">
                    <td className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80 p-6 sticky left-0 bg-background group-hover:text-primary transition-colors z-20">
                      {row.label}
                    </td>
                    {compareTools.map(tool => (
                      <td 
                        key={tool.id} 
                        className={cn(
                          "p-6 bg-white/5 border-x border-white/5 transition-all duration-300 z-10",
                          winnerId === tool.id && "bg-primary/10 border-primary/20 shadow-[inset_0_0_20px_rgba(var(--primary-rgb),0.1)]",
                          idx === rows.length - 1 && "rounded-b-2xl border-b border-white/10"
                        )}
                      >
                        <div className="relative">
                          {winnerId === tool.id && (
                            <div className="absolute -top-10 -right-2 transform rotate-12 scale-110">
                              <Trophy className="h-5 w-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
                            </div>
                          )}
                          {row.render(tool)}
                        </div>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

