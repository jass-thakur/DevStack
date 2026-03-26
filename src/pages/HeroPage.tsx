import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles, AlertCircle } from "lucide-react";
import { useApiKey } from "@/context/ApiKeyContext";
import { cn } from "@/lib/utils";

const categoryPills = [
  { name: "Frontend", icon: "⚛️", color: "text-blue-400 border-blue-400/20 bg-blue-400/5 hover:bg-blue-400/10 hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" },
  { name: "Backend", icon: "⚙️", color: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5 hover:bg-emerald-400/10 hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]" },
  { name: "Database", icon: "🗄️", color: "text-amber-400 border-amber-400/20 bg-amber-400/5 hover:bg-amber-400/10 hover:border-amber-400/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]" },
  { name: "Hosting", icon: "☁️", color: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]" },
  { name: "DevTools", icon: "🛠️", color: "text-pink-400 border-pink-400/20 bg-pink-400/5 hover:bg-pink-400/10 hover:border-pink-400/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]" },
  { name: "Full Stack", icon: "🧩", color: "text-violet-400 border-violet-400/20 bg-violet-400/5 hover:bg-violet-400/10 hover:border-violet-400/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]" },
];

const AnimatedCounter = ({ end, duration = 1500, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);
  return <>{count}{suffix}</>;
};

export default function HeroPage() {
  const [query, setQuery] = useState("");
  const { isConfigured } = useApiKey();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        document.querySelector("input")?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSearch = (searchTerm: string = query) => {
    if (!isConfigured) return;
    if (!searchTerm.trim()) return;
    
    const params = new URLSearchParams();
    params.set("q", searchTerm);
    navigate(`/discover?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden px-4 animate-in fade-in duration-700 slide-in-from-bottom-4">


      <div className="relative z-10 w-full max-w-4xl mx-auto text-center mt-16">
        
        {/* Glowing Hero Badge */}
        <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(139,92,246,0.4)] text-xs font-medium text-primary mb-8 animate-fade-in overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.15)] group">
          <div className="absolute inset-0 conic-border-glow" />
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
          <span className="relative z-10 font-semibold tracking-wide flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 animate-spin-slow" />
            AI-Powered Tool Discovery
          </span>
        </div>

        {/* Animated Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 flex flex-wrap justify-center gap-[0.25em]">
          {["Search", "any"].map((word, i) => (
            <span key={i} className="animate-fade-up-stagger opacity-0" style={{ animationDelay: `${200 + i * 100}ms` }}>
              {word}
            </span>
          ))}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent gradient-shift text-glow animate-fade-up-stagger opacity-0" style={{ animationDelay: "400ms" }}>
            tool category
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-[rgba(255,255,255,0.55)] mb-12 max-w-2xl mx-auto animate-fade-up-stagger opacity-0" style={{ animationDelay: "500ms" }}>
          Discover, compare and choose the best technologies for your next project — powered by real-time AI.
        </p>

        {/* Search Bar Container */}
        <div className="w-full max-w-2xl mx-auto mb-10 animate-fade-up-stagger opacity-0" style={{ animationDelay: "600ms" }}>
          <div className="relative group search-shimmer rounded-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-500" />
            <div className="relative flex items-center bg-[#1A1D25] border border-white/5 hover:border-[#8B5CF6]/30 focus-within:border-[#8B5CF6]/50 focus-within:shadow-[0_0_0_2px_rgba(139,92,246,0.5),0_0_30px_rgba(59,130,246,0.15)] rounded-2xl overflow-hidden p-2 transition-all h-[64px]">
              <Search className="h-5 w-5 text-muted-foreground ml-4 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search e.g. Frontend Frameworks, Headless CMS, Vector DB..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 bg-transparent text-white placeholder:text-muted-foreground outline-none px-4 py-3 text-lg h-full"
              />

              <button
                onClick={() => handleSearch()}
                disabled={!isConfigured}
                className="h-full px-8 rounded-xl text-sm font-semibold transition-transform active:scale-95 disabled:opacity-50 text-white bg-[linear-gradient(45deg,#3B82F6,#8B5CF6,#3B82F6)] gradient-shift hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] border-none"
              >
                Search
              </button>
            </div>
          </div>

          {!isConfigured && (
            <div className="mt-4 flex items-center justify-center gap-2 text-amber-400 text-sm animate-pulse">
              <AlertCircle className="h-4 w-4" />
              <span>Please add your API key in Settings to fetch results.</span>
            </div>
          )}
        </div>

        {/* Quick Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categoryPills.map((pill, i) => (
            <button
              key={pill.name}
              onClick={() => handleSearch(pill.name)}
              className={cn(
                "px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 transform hover:scale-[1.05] animate-fade-up-stagger opacity-0 flex items-center gap-2",
                pill.color
              )}
              style={{ animationDelay: `${700 + i * 50}ms` }}
            >
              <span className="text-[14px] leading-none">{pill.icon}</span>
              {pill.name}
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm text-[rgba(255,255,255,0.4)] animate-fade-up-stagger opacity-0" style={{ animationDelay: "1000ms" }}>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold"><AnimatedCounter end={80} suffix="+" /></span> Tools Indexed
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-white font-bold"><AnimatedCounter end={12} /></span> Categories
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2 text-primary font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Real-Time Focus
          </div>
        </div>
      </div>

      {/* Hovering Keyboard Shortcut Hint */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-muted-foreground backdrop-blur-md animate-fade-in shadow-2xl" style={{ animationDelay: "2s", animationFillMode: "both" }}>
        Press <kbd className="px-2 py-1 rounded bg-white/10 border border-white/20 font-sans text-[10px] text-white/80"> / </kbd> to search
      </div>

    </div>
  );
}
