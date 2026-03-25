import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { categories } from "@/data/tools";
import { cn } from "@/lib/utils";

const floatingBadges = [
  { label: "⚛️ React", x: "10%", y: "20%", delay: "0s" },
  { label: "🟢 Node", x: "80%", y: "15%", delay: "0.5s" },
  { label: "🐘 PostgreSQL", x: "15%", y: "70%", delay: "1s" },
  { label: "🐳 Docker", x: "75%", y: "65%", delay: "1.5s" },
  { label: "▲ Next.js", x: "85%", y: "40%", delay: "0.8s" },
  { label: "🔥 Svelte", x: "5%", y: "45%", delay: "1.2s" },
  { label: "⚡ FastAPI", x: "70%", y: "80%", delay: "0.3s" },
  { label: "🎨 Tailwind", x: "25%", y: "85%", delay: "1.8s" },
];

export default function HeroPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (activeCategory) params.set("category", activeCategory);
    navigate(`/discover?${params.toString()}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Dot pattern bg */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      {/* Floating badges */}
      {floatingBadges.map((badge, i) => (
        <div
          key={i}
          className="absolute hidden lg:flex items-center gap-1.5 glass-card px-3 py-1.5 text-xs font-mono text-muted-foreground animate-float opacity-40"
          style={{ left: badge.x, top: badge.y, animationDelay: badge.delay, animationDuration: `${3 + i * 0.5}s` }}
        >
          {badge.label}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 pill-badge-active mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-xs">⚡</span>
          <span>DevStack Explorer</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Find the Right Tools{" "}
          <span className="gradient-text">for Your Stack</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
          Search, compare, and discover the best technologies for your next project.
        </p>

        {/* Search bar */}
        <div className="animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="glass-card flex items-center gap-3 p-2 max-w-xl mx-auto border-primary/20 focus-within:border-primary/40 transition-colors">
            <Search className="h-5 w-5 text-muted-foreground ml-3" />
            <input
              type="text"
              placeholder="Search tools... e.g. frontend frameworks, databases, hosting"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSearch()}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none py-2"
            />
            <button onClick={handleSearch} className="gradient-button px-5 py-2 rounded-lg text-sm">
              Search
            </button>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(activeCategory === cat ? null : cat);
              }}
              className={cn(
                activeCategory === cat ? "pill-badge-active" : "pill-badge-default",
                "cursor-pointer"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </div>
  );
}
