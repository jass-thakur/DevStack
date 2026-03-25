import { useState } from "react";
import { tools, categories, type Category, type Tool } from "@/data/tools";
import { Trophy, Medal } from "lucide-react";
import { cn } from "@/lib/utils";

function getTopTools(category: Category): Tool[] {
  return tools
    .filter(t => t.category === category)
    .sort((a, b) => {
      const scoreA = (a.performance + a.popularity + a.usability + a.community) / 4;
      const scoreB = (b.performance + b.popularity + b.usability + b.community) / 4;
      return scoreB - scoreA;
    });
}

const medalColors = ["text-gold", "text-silver", "text-bronze"];
const medalLabels = ["🥇", "🥈", "🥉"];

export default function RankingsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Frontend");
  const ranked = getTopTools(activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">
          Tool <span className="gradient-text">Rankings</span>
        </h1>
        <p className="text-muted-foreground text-sm mb-8">Top tools ranked by overall score across key metrics.</p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeCategory === cat
                  ? "bg-primary/15 text-primary border border-primary/30"
                  : "bg-muted/50 text-muted-foreground border border-border hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Ranked list */}
        <div className="space-y-4">
          {ranked.map((tool, i) => {
            const avgScore = Math.round((tool.performance + tool.popularity + tool.usability + tool.community) / 4);
            return (
              <div key={tool.id} className={cn("glass-card-hover p-5 animate-fade-in", i < 3 && "border-l-2")} style={{
                borderLeftColor: i === 0 ? "hsl(var(--gold))" : i === 1 ? "hsl(var(--silver))" : i === 2 ? "hsl(var(--bronze))" : undefined,
                animationDelay: `${i * 0.05}s`,
                opacity: 0,
              }}>
                <div className="flex items-center gap-4">
                  <div className="text-2xl w-10 text-center">
                    {i < 3 ? medalLabels[i] : <span className="text-sm font-mono text-muted-foreground">#{i + 1}</span>}
                  </div>
                  <span className="text-2xl">{tool.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold">{tool.name}</h3>
                    <p className="text-xs text-muted-foreground truncate">{tool.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-2xl font-bold gradient-text">{avgScore}</div>
                    <div className="text-[10px] text-muted-foreground">AVG SCORE</div>
                  </div>
                </div>

                {/* Score bars */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                  {[
                    { label: "Usability", value: tool.usability },
                    { label: "Popularity", value: tool.popularity },
                    { label: "Performance", value: tool.performance },
                    { label: "Community", value: tool.community },
                  ].map(s => (
                    <div key={s.label}>
                      <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                        <span>{s.label}</span>
                        <span>{s.value}</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{ width: `${s.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
