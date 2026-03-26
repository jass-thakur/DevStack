import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useTools } from "@/hooks/use-tools";
import { ToolCard } from "@/components/ToolCard";
import { ToolDetailModal } from "@/components/ToolDetailModal";
import { SkeletonCard } from "@/components/SkeletonCard";
import { Search, ArrowLeft, SlidersHorizontal, AlertCircle, Sparkles, Zap } from "lucide-react";
import { type Tool } from "@/data/tools";
import { Button } from "@/components/ui/button";
export default function DiscoverPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryParam = searchParams.get("q") || "";
  const [query, setQuery] = useState(queryParam);
  const [detailTool, setDetailTool] = useState<Tool | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  
  const { data: tools, isLoading, error, refetch } = useTools(queryParam);

  // Handle countdown timer for 429 retries
  useEffect(() => {
    if (error && (error as any).retryAfter) {
      setCountdown(Math.ceil((error as any).retryAfter));
    } else {
      setCountdown(null);
    }
  }, [error]);

  useEffect(() => {
    if (countdown === null || countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown(prev => (prev !== null && prev > 0) ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);
  
  // Persistence Logic
  useEffect(() => {
    if (queryParam) {
      sessionStorage.setItem("lastSearch", queryParam);
    } else {
      const savedSearch = sessionStorage.getItem("lastSearch");
      if (savedSearch && !queryParam) {
        navigate(`/discover?q=${encodeURIComponent(savedSearch)}`, { replace: true });
      }
    }
  }, [queryParam, navigate]);

  const isQuotaError = error && (error as Error).message.toLowerCase().includes("quota");
  const displayTools = tools || [];

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/discover?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-32 px-4 animate-in fade-in duration-700 slide-in-from-bottom-4">
      <div className="container mx-auto max-w-6xl">
        {/* Top Search Bar (Glowing) */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-10 group-focus-within:opacity-30 transition duration-500" />
            <div className="relative flex items-center bg-[#1A1D25] border border-white/10 rounded-xl overflow-hidden p-1.5 transition-all group-focus-within:border-primary/40">
              <button onClick={() => navigate("/")} className="p-2 hover:bg-white/5 rounded-lg text-muted-foreground mr-1">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <Search className="h-4 w-4 text-muted-foreground ml-2" />
              <input
                type="text"
                placeholder="Search another category..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 bg-transparent text-white placeholder:text-muted-foreground outline-none px-3 py-2 text-sm"
              />
              <Button onClick={handleSearch} size="sm" className="gradient-button h-8 rounded-lg text-xs px-4">
                Update
              </Button>
            </div>
          </div>
          <div className="mt-3 flex justify-center">
             <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-muted-foreground animate-fade-in">
               <Zap className="h-3 w-3 text-primary" />
               <span>Ready for fresh insights</span>
             </div>
          </div>
        </div>

        {/* Error / Quota / Fallback Banners */}
        <div className="space-y-4 mb-10">
          {error && !isQuotaError && (
            <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-3xl flex items-center gap-5 animate-in fade-in slide-in-from-top-4">
              <div className="h-14 w-14 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                <AlertCircle className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold text-white mb-1">Search Error</div>
                <div className="text-sm text-amber-200/60 leading-relaxed">
                  {(error as Error).message}
                </div>
              </div>
              <Button onClick={() => refetch()} variant="outline" className="border-amber-500/20 hover:bg-amber-500/10 text-amber-500">
                Retry
              </Button>
            </div>
          )}

          {isQuotaError && (
            <div className="p-6 bg-rose-500/10 border border-rose-500/20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 animate-in fade-in slide-in-from-top-4">
              <div className="flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-rose-500/20 flex items-center justify-center text-rose-500 shrink-0 shadow-lg shadow-rose-500/10">
                  <AlertCircle className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white mb-1">API Quota Exceeded</div>
                  <div className="text-sm text-rose-200/60 max-w-lg leading-relaxed">
                    Free tier models have limits. Please wait a moment or check your API plan.
                    {countdown !== null && countdown > 0 && (
                      <span className="ml-1 font-mono text-rose-400 font-bold">
                        Retrying in {countdown}s...
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                {countdown === 0 ? (
                  <Button onClick={() => refetch()} className="gradient-button px-6 shadow-xl shadow-primary/20">
                    <Zap className="mr-2 h-4 w-4" /> Retry Now
                  </Button>
                ) : (
                  <div className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground">
                    Cooldown: {countdown}s
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">
              {isLoading ? "Fetching Results..." : `Search Results for "${queryParam}"`}
            </h2>
            <p className="text-sm text-muted-foreground">
              {isLoading ? "Our software tool expert is scanning the web..." : `Found top ${displayTools?.length || 0} tools based on your query.`}
            </p>
          </div>
        </div>

        {/* content grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {displayTools.map((tool: any) => (
              <div key={tool.id} className="relative group h-full">
                <ToolCard 
                  tool={tool} 
                  onViewDetails={setDetailTool} 
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <ToolDetailModal tool={detailTool} onClose={() => setDetailTool(null)} />
    </div>
  );
}

