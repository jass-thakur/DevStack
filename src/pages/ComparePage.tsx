import { useCompare } from "@/context/CompareContext";
import { Star, Trophy, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Tool } from "@/data/tools";

const rows: { label: string; render: (t: Tool) => React.ReactNode }[] = [
  { label: "Description", render: t => <p className="text-sm text-muted-foreground">{t.description}</p> },
  { label: "Category", render: t => <span className="pill-badge-active text-xs">{t.category}</span> },
  { label: "Pricing", render: t => <span className="text-sm font-medium">{t.pricing}</span> },
  {
    label: "Rating",
    render: t => (
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={cn("h-3.5 w-3.5", i < Math.round(t.rating) ? "text-gold fill-gold" : "text-muted")} />
        ))}
        <span className="text-xs ml-1">{t.rating}</span>
      </div>
    ),
  },
  {
    label: "Features",
    render: t => (
      <div className="flex flex-wrap gap-1">
        {t.features.map(f => <span key={f} className="pill-badge-default text-[11px]">{f}</span>)}
      </div>
    ),
  },
  {
    label: "Pros ✅",
    render: t => (
      <ul className="space-y-1">
        {t.pros.map(p => <li key={p} className="text-sm text-muted-foreground">• {p}</li>)}
      </ul>
    ),
  },
  {
    label: "Cons ❌",
    render: t => (
      <ul className="space-y-1">
        {t.cons.map(c => <li key={c} className="text-sm text-muted-foreground">• {c}</li>)}
      </ul>
    ),
  },
  {
    label: "Performance",
    render: t => <ScoreBar value={t.performance} />,
  },
  {
    label: "Popularity",
    render: t => <ScoreBar value={t.popularity} />,
  },
  {
    label: "Usability",
    render: t => <ScoreBar value={t.usability} />,
  },
  {
    label: "Community",
    render: t => <ScoreBar value={t.community} />,
  },
  {
    label: "Best For",
    render: t => (
      <div className="flex flex-wrap gap-1">
        {t.bestFor.map(b => <span key={b} className="pill-badge-default text-[11px]">{b}</span>)}
      </div>
    ),
  },
];

function ScoreBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all" style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs font-mono w-7 text-right">{value}</span>
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
    "Community": "community",
  };
  const field = scoreFields[label];
  if (!field) return null;
  const max = Math.max(...tools.map(t => t[field] as number));
  const winners = tools.filter(t => (t[field] as number) === max);
  return winners.length === 1 ? winners[0].id : null;
}

export default function ComparePage() {
  const { compareTools } = useCompare();

  if (compareTools.length === 0) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center px-4">
        <div className="text-5xl mb-4">⚖️</div>
        <h2 className="text-xl font-bold mb-2">No tools to compare</h2>
        <p className="text-muted-foreground text-sm mb-6">Add tools from the Discover page to compare them.</p>
        <Link to="/discover" className="gradient-button px-6 py-2.5 rounded-lg text-sm inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Browse Tools
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-32 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Tool <span className="gradient-text">Comparison</span>
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-sm font-semibold text-muted-foreground p-4 w-36 sticky left-0 bg-background">
                  Attribute
                </th>
                {compareTools.map(tool => (
                  <th key={tool.id} className="p-4 min-w-[200px]">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl">{tool.icon}</span>
                      <span className="font-semibold">{tool.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(row => {
                const winnerId = getRowWinner(compareTools, row.label);
                return (
                  <tr key={row.label} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                    <td className="text-sm font-medium text-muted-foreground p-4 sticky left-0 bg-background">
                      {row.label}
                    </td>
                    {compareTools.map(tool => (
                      <td key={tool.id} className={cn("p-4", winnerId === tool.id && "bg-primary/5")}>
                        <div className="relative">
                          {winnerId === tool.id && (
                            <Trophy className="absolute -top-1 -right-1 h-4 w-4 text-gold" />
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
