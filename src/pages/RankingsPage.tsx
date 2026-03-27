import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useTools } from "@/hooks/use-tools";
import { Trophy, Medal, Search, TrendingUp, Zap, BarChart3, ArrowLeft, AlertCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { SkeletonCard } from "@/components/SkeletonCard";
import { Button } from "@/components/ui/button";

const CATEGORY_OPTIONS_NAMES = [
  "Frontend Frameworks", "Backend Frameworks", "Full Stack Development", "Database",
  "DevOps & Cloud", "Hosting & Deployment", "Dev Tools", "Mobile Frameworks",
  "AI / ML Tools", "Cybersecurity", "Data Science & Analysis", "Game Development",
  "UI/UX Design", "Authentication", "CSS & Styling", "Analytics & Dashboards",
  "Payment Tools", "Testing Tools", "Web3 & Blockchain", "CMS & E-commerce", "No-Code / Low-Code"
];

export default function RankingsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const fromHome = searchParams.get("fromHome") === "true";
  const categoryParam = searchParams.get("category");
  
  // Map category code to full title if needed, or use as is
  const getFullCategory = (param: string | null) => {
    if (!param) return "Frontend Frameworks";
    const lower = param.toLowerCase();
    if (lower === "backend") return "Backend Frameworks";
    if (lower === "frontend") return "Frontend Frameworks";
    if (lower === "mobile") return "Mobile Frameworks";
    if (lower === "database") return "Database";
    if (lower === "ai" || lower === "ai/ml") return "AI / ML Tools";
    // Check if it's already a full name
    const found = CATEGORY_OPTIONS_NAMES.find(n => n.toLowerCase() === lower);
    if (found) return found;
    return param.charAt(0).toUpperCase() + param.slice(1);
  };

  const initialQuery = categoryParam ? getFullCategory(categoryParam) : (searchParams.get("q") || "Frontend Frameworks");

  const [query, setQuery] = useState(initialQuery);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const { data: tools = [], isLoading, error, refetch } = useTools(initialQuery);
  
  useEffect(() => {
    if (fromHome) {
      setIsHighlighted(true);
      const timer = setTimeout(() => setIsHighlighted(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [fromHome]);
  
  const displayTools = tools || [];

  const ranked = [...displayTools].sort((a, b) => {
    const scoreA = (a.performance + a.popularity + a.usability) / 3;
    const scoreB = (b.performance + b.popularity + b.usability) / 3;
    return scoreB - scoreA;
  });

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/rankings?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-32 px-4 animate-in fade-in duration-700 slide-in-from-bottom-4">
      <div className="container mx-auto max-w-4xl">
        {fromHome && (
          <nav className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-8 animate-in fade-in slide-in-from-left-4 duration-500">
            <Link to={`/?q=${encodeURIComponent(query)}`} className="p-2 rounded-full hover:bg-white/5 transition-all text-white/50 hover:text-white border border-white/10 group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center gap-2">
              <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <span className="text-sm">🏠</span> Home
              </Link>
              <span className="opacity-30">/</span>
              <Link to={`/?q=${encodeURIComponent(query)}`} className="hover:text-primary transition-colors">
                {query}
              </Link>
              <span className="opacity-30">/</span>
              <span className="text-white">Rankings</span>
            </div>
          </nav>
        )}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-2">
              Performance <span className="gradient-text">Rankings</span>
            </h1>
            <p className="text-sm text-muted-foreground">Top vetted picks for <span className="text-primary font-bold">"{query}"</span></p>
          </div>
          
          <div className="w-full md:w-80 relative group">
            <div className={cn(
              "absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur transition duration-500",
              isHighlighted ? "opacity-100 scale-105" : "opacity-10 group-focus-within:opacity-30"
            )} />
            <div className={cn(
              "relative flex items-center bg-[#1A1D25] border border-white/10 rounded-xl overflow-hidden p-1 transition-all group-focus-within:border-primary/40",
              isHighlighted && "border-primary/60 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            )}>
              <Search className="h-4 w-4 text-muted-foreground ml-3" />
              <input
                type="text"
                placeholder="Search category to rank..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 bg-transparent text-white placeholder:text-muted-foreground outline-none px-3 py-2 text-xs"
              />
              <Button onClick={handleSearch} size="sm" className="gradient-button h-8 rounded-lg text-[10px] px-3">
                Update
              </Button>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="space-y-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          <>
            {!displayTools || displayTools.length === 0 ? (
              <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                <div className="h-16 w-16 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mx-auto mb-6">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No Results Found</h3>
                <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                  Try searching for a broad category like "Frontend", "Backend", or "AI Tools".
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => refetch()} className="gradient-button">
                    Retry
                  </Button>
                  <Button onClick={() => { setQuery(""); navigate("/rankings"); }} variant="outline" className="border-white/10 text-white">
                    Clear Search
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {ranked.map((tool, i) => (
                  <div 
                    key={tool.id} 
                    className="group bg-[#1A1D25] border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute -right-4 -bottom-8 text-9xl font-black text-white/[0.02] select-none italic">
                      {i + 1}
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-center gap-8 relative z-10">
                      <div className="flex items-center gap-5 flex-1 min-w-0">
                        <div className="relative shrink-0">
                          <div className={cn(
                            "h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-white/10 shadow-lg shadow-black/20 overflow-hidden",
                            (tool.icon?.length || 0) > 2 ? "text-[12px] font-black uppercase leading-none px-2 text-center" : "text-4xl"
                          )}>
                            {tool.icon}
                          </div>
                          {i < 3 && (
                            <div className="absolute -top-3 -left-3 scale-110">
                              {i === 0 && <Trophy className="h-8 w-8 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]" />}
                              {i === 1 && <Medal className="h-8 w-8 text-slate-300 drop-shadow-[0_0_8px_rgba(203,213,225,0.5)]" />}
                              {i === 2 && <Medal className="h-8 w-8 text-orange-400 drop-shadow-[0_0_6px_rgba(251,146,60,0.4)]" />}
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors truncate">{tool.name}</h3>
                          <p className="text-sm text-muted-foreground italic truncate max-w-full">"{tool.tagline}"</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 flex-1 min-w-[280px] border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-8">
                        <ScoreRow 
                          label="Performance" 
                          value={tool.performance} 
                          colorClass="bg-blue-500" 
                          textColor="text-blue-400"
                          icon={Zap} 
                        />
                        <ScoreRow 
                          label="Popularity" 
                          value={tool.popularity} 
                          colorClass="bg-violet-500" 
                          textColor="text-violet-400"
                          icon={TrendingUp} 
                        />
                        <ScoreRow 
                          label="Usability" 
                          value={tool.usability} 
                          colorClass="bg-amber-500" 
                          textColor="text-amber-400"
                          icon={BarChart3} 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function ScoreRow({ 
  label, 
  value, 
  colorClass, 
  textColor, 
  icon: Icon 
}: { 
  label: string; 
  value: number; 
  colorClass: string; 
  textColor: string;
  icon: any 
}) {
  return (
    <div className="flex items-center gap-3 group/row">
      {/* Label Section */}
      <div className="flex items-center gap-2 w-28 shrink-0">
        <Icon className={cn("h-3.5 w-3.5", textColor)} />
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover/row:text-white/60 transition-colors">
          {label}
        </span>
      </div>

      {/* Progress Bar Section */}
      <div className="flex-1 h-[6px] bg-white/5 rounded-full overflow-hidden relative">
        <div 
          className={cn("h-full rounded-full transition-all duration-1000", colorClass)} 
          style={{ width: `${value * 10}%` }} 
        />
      </div>

      {/* Score Badge */}
      <div className={cn("w-12 text-right text-sm font-black font-mono tracking-tighter", textColor)}>
        {value}<span className="text-[10px] opacity-40 ml-0.5">/10</span>
      </div>
    </div>
  );
}


