import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Sparkles, AlertCircle, ChevronDown, X, Zap } from "lucide-react";
import { useApiKey } from "@/context/ApiKeyContext";
import { cn } from "@/lib/utils";
import { useTools } from "@/hooks/use-tools";
import { ToolCard } from "@/components/ToolCard";
import { SkeletonCard } from "@/components/SkeletonCard";
import { ToolDetailModal } from "@/components/ToolDetailModal";
import { type Tool } from "@/data/tools";
import { Button } from "@/components/ui/button";
import { getRoadmapSlug } from "@/lib/navigation";

type CategoryOptionType = { name: string; icon: string; activeBorder: string; hoverBorder: string; iconColor: string };

const CATEGORY_OPTIONS: CategoryOptionType[] = [
  { name: "Select a Technology Category", icon: "🧩", activeBorder: "border-white/50", hoverBorder: "hover:border-white/50", iconColor: "text-white/70" },
  { name: "Frontend Frameworks", icon: "⚛️", activeBorder: "border-blue-400", hoverBorder: "hover:border-blue-400", iconColor: "text-blue-400" },
  { name: "Backend Frameworks", icon: "⚙️", activeBorder: "border-emerald-400", hoverBorder: "hover:border-emerald-400", iconColor: "text-emerald-400" },
  { name: "Full Stack Development", icon: "🧩", activeBorder: "border-violet-400", hoverBorder: "hover:border-violet-400", iconColor: "text-violet-400" },
  { name: "Database", icon: "🗄️", activeBorder: "border-amber-400", hoverBorder: "hover:border-amber-400", iconColor: "text-amber-400" },
  { name: "DevOps & Cloud", icon: "☁️", activeBorder: "border-sky-400", hoverBorder: "hover:border-sky-400", iconColor: "text-sky-400" },
  { name: "Hosting & Deployment", icon: "🚀", activeBorder: "border-cyan-400", hoverBorder: "hover:border-cyan-400", iconColor: "text-cyan-400" },
  { name: "Dev Tools", icon: "🛠️", activeBorder: "border-pink-400", hoverBorder: "hover:border-pink-400", iconColor: "text-pink-400" },
  { name: "Mobile Frameworks", icon: "📱", activeBorder: "border-indigo-400", hoverBorder: "hover:border-indigo-400", iconColor: "text-indigo-400" },
  { name: "AI / ML Tools", icon: "🤖", activeBorder: "border-purple-400", hoverBorder: "hover:border-purple-400", iconColor: "text-purple-400" },
  { name: "Cybersecurity", icon: "🛡️", activeBorder: "border-red-500", hoverBorder: "hover:border-red-500", iconColor: "text-red-500" },
  { name: "Data Science & Analysis", icon: "📈", activeBorder: "border-emerald-500", hoverBorder: "hover:border-emerald-500", iconColor: "text-emerald-500" },
  { name: "Game Development", icon: "🎮", activeBorder: "border-lime-400", hoverBorder: "hover:border-lime-400", iconColor: "text-lime-400" },
  { name: "UI/UX Design", icon: "✨", activeBorder: "border-fuchsia-400", hoverBorder: "hover:border-fuchsia-400", iconColor: "text-fuchsia-400" },
  { name: "Authentication", icon: "🔐", activeBorder: "border-yellow-400", hoverBorder: "hover:border-yellow-400", iconColor: "text-yellow-400" },
  { name: "CSS & Styling", icon: "🎨", activeBorder: "border-rose-400", hoverBorder: "hover:border-rose-400", iconColor: "text-rose-400" },
  { name: "Analytics & Dashboards", icon: "📊", activeBorder: "border-teal-400", hoverBorder: "hover:border-teal-400", iconColor: "text-teal-400" },
  { name: "Payment Tools", icon: "💳", activeBorder: "border-green-400", hoverBorder: "hover:border-green-400", iconColor: "text-green-400" },
  { name: "Testing Tools", icon: "🧪", activeBorder: "border-orange-400", hoverBorder: "hover:border-orange-400", iconColor: "text-orange-400" },
  { name: "Web3 & Blockchain", icon: "⛓️", activeBorder: "border-blue-500", hoverBorder: "hover:border-blue-500", iconColor: "text-blue-500" },
  { name: "CMS & E-commerce", icon: "🛍️", activeBorder: "border-pink-500", hoverBorder: "hover:border-pink-500", iconColor: "text-pink-500" },
  { name: "No-Code / Low-Code", icon: "⚡", activeBorder: "border-yellow-500", hoverBorder: "hover:border-yellow-500", iconColor: "text-yellow-500" },
];

const categoryPills = [
  { name: "Frontend", fullName: "Frontend Frameworks", icon: "⚛️", color: "text-blue-400 border-blue-400/20 bg-blue-400/5 hover:bg-blue-400/10 hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" },
  { name: "Backend", fullName: "Backend Frameworks", icon: "⚙️", color: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5 hover:bg-emerald-400/10 hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]" },
  { name: "Database", fullName: "Database", icon: "🗄️", color: "text-amber-400 border-amber-400/20 bg-amber-400/5 hover:bg-amber-400/10 hover:border-amber-400/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]" },
  { name: "Hosting", fullName: "Hosting & Deployment", icon: "☁️", color: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]" },
  { name: "Mobile", fullName: "Mobile Frameworks", icon: "📱", color: "text-indigo-400 border-indigo-400/20 bg-indigo-400/5 hover:bg-indigo-400/10 hover:border-indigo-400/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]" },
  { name: "AI/ML", fullName: "AI / ML Tools", icon: "🤖", color: "text-purple-400 border-purple-400/20 bg-purple-400/5 hover:bg-purple-400/10 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]" },
  { name: "Cybersecurity", fullName: "Cybersecurity", icon: "🛡️", color: "text-red-500 border-red-500/20 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]" },
  { name: "Data Science", fullName: "Data Science & Analysis", icon: "📈", color: "text-emerald-500 border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]" },
  { name: "Game Dev", fullName: "Game Development", icon: "🎮", color: "text-lime-400 border-lime-400/20 bg-lime-400/5 hover:bg-lime-400/10 hover:border-lime-400/50 hover:shadow-[0_0_15px_rgba(163,230,53,0.4)]" },
  { name: "UI/UX", fullName: "UI/UX Design", icon: "✨", color: "text-fuchsia-400 border-fuchsia-400/20 bg-fuchsia-400/5 hover:bg-fuchsia-400/10 hover:border-fuchsia-400/50 hover:shadow-[0_0_15px_rgba(232,121,249,0.4)]" },
  { name: "DevTools", fullName: "Dev Tools", icon: "🛠️", color: "text-pink-400 border-pink-400/20 bg-pink-400/5 hover:bg-pink-400/10 hover:border-pink-400/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]" },
  { name: "Roadmap", isLink: true, url: "/roadmap", icon: "🗺️", color: "text-blue-400 border-blue-400/20 bg-blue-400/5 hover:bg-blue-400/10 hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" },
  { name: "Full Stack", fullName: "Full Stack", icon: "🧩", color: "text-violet-400 border-violet-400/20 bg-violet-400/5 hover:bg-violet-400/10 hover:border-violet-400/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]" },
  { name: "QA Testing", fullName: "Testing Tools", icon: "🧪", color: "text-orange-400 border-orange-400/20 bg-orange-400/5 hover:bg-orange-400/10 hover:border-orange-400/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]" },
  { name: "Auth", fullName: "Authentication", icon: "🔐", color: "text-yellow-400 border-yellow-400/20 bg-yellow-400/5 hover:bg-yellow-400/10 hover:border-yellow-400/50 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]" },
  { name: "Styling", fullName: "CSS & Styling", icon: "🎨", color: "text-rose-400 border-rose-400/20 bg-rose-400/5 hover:bg-rose-400/10 hover:border-rose-400/50 hover:shadow-[0_0_15px_rgba(244,63,94,0.4)]" },
  { name: "Analytics", fullName: "Analytics & Dashboards", icon: "📊", color: "text-teal-400 border-teal-400/20 bg-teal-400/5 hover:bg-teal-400/10 hover:border-teal-400/50 hover:shadow-[0_0_15px_rgba(45,212,191,0.4)]" },
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
  const navigate = useNavigate();
  const { } = useApiKey();
  const [searchParams] = useSearchParams();
  const qParam = searchParams.get("q");
  
  const getCategoryFromQuery = (q: string | null) => {
    return CATEGORY_OPTIONS.find(c => c.name === q) || CATEGORY_OPTIONS[0];
  };
    
  const [selectedCategory, setSelectedCategory] = useState<CategoryOptionType>(getCategoryFromQuery(qParam));

  // Sync state with URL parameter for back/forward navigation support
  useEffect(() => {
    const category = getCategoryFromQuery(qParam);
    if (category.name !== selectedCategory.name) {
      setSelectedCategory(category);
    }
  }, [qParam]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const [detailTool, setDetailTool] = useState<Tool | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);

  const activeSearch = selectedCategory.name === "Select a Technology Category" ? "" : selectedCategory.name;
  
  const { data: tools, isLoading, error, refetch } = useTools(activeSearch);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const handleCategorySelect = (category: typeof CATEGORY_OPTIONS[0]) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    // Update URL when category is selected
    if (category.name === "Select a Technology Category") {
      navigate("/", { replace: true });
    } else {
      navigate(`/?q=${encodeURIComponent(category.name)}`, { replace: true });
    }
  };

  const handlePillClick = (pill: any) => {
    if (pill.isLink) {
      navigate(pill.url);
      return;
    }
    const category = CATEGORY_OPTIONS.find(c => c.name === pill.fullName) || CATEGORY_OPTIONS[0];
    
    if (category.name === "Select a Technology Category" && pill.fullName === "Full Stack") {
       handleCategorySelect({ name: "Full Stack", icon: "🧩", activeBorder: "border-violet-400", hoverBorder: "hover:border-violet-400", iconColor: "text-violet-400" });
    } else {
       handleCategorySelect(category);
    }
  };

  const isQuotaError = error && (error as Error).message.toLowerCase().includes("quota");
  const displayTools = tools || [];

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-x-hidden pt-24 pb-32 px-4 animate-in fade-in duration-700 slide-in-from-bottom-4">

      <div className="relative z-50 w-full max-w-4xl mx-auto text-center mt-8">
        
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
          {["Discover", "any"].map((word, i) => (
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

        {/* Dropdown Selector */}
        <div className="w-full max-w-[700px] mx-auto mb-10 animate-fade-up-stagger opacity-0 relative z-[100]" style={{ animationDelay: "600ms" }} ref={dropdownRef}>
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full h-[64px] px-6 bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.12)] hover:border-[rgba(139,92,246,0.4)] rounded-2xl cursor-pointer transition-all duration-300 relative z-20 shadow-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{selectedCategory.icon}</span>
              <span className={cn("text-[18px]", selectedCategory.name === "Select a Technology Category" ? "text-white/70" : "text-white")}>
                {selectedCategory.name}
              </span>
            </div>
            <ChevronDown className={cn("h-6 w-6 text-white/50 transition-transform duration-300", isDropdownOpen && "rotate-180")} />
          </div>

          {/* Dropdown Options Panel */}
          {isDropdownOpen && (
            <div className="absolute top-[72px] left-0 w-full bg-[#0F1117] bg-opacity-100 border border-white/10 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] py-2 z-[100] animate-in slide-in-from-top-2 fade-in duration-200 max-h-[350px] overflow-y-auto touch-pan-y" style={{ fontFamily: "'Inter', sans-serif" }}>
              {CATEGORY_OPTIONS.slice(1).map((option) => (
                <div
                  key={option.name}
                  onClick={() => handleCategorySelect(option)}
                  className={cn(
                    "flex items-center gap-3 w-[calc(100%-16px)] mx-2 h-[48px] px-4 rounded-xl cursor-pointer transition-all duration-200 border-l-[3px] border-transparent group hover:bg-white/5",
                    selectedCategory.name === option.name 
                      ? `bg-white/5 ${option.activeBorder}`
                      : option.hoverBorder
                  )}
                >
                  <span className="text-[20px] group-hover:scale-110 transition-transform">{option.icon}</span>
                  <span className="text-[16px] text-white/90 group-hover:text-white transition-colors">{option.name}</span>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Quick Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categoryPills.map((pill, i) => (
            <button
              key={pill.name}
              onClick={() => handlePillClick(pill)}
              className={cn(
                "px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 transform hover:scale-[1.05] flex items-center gap-2 shadow-sm",
                selectedCategory.name === pill.fullName ? "bg-white/10 border-white/30 scale-[1.05] shadow-white/10" : pill.color
              )}
            >
              <span className="text-[14px] leading-none">{pill.icon}</span>
              {pill.name}
            </button>
          ))}
        </div>

        {/* Stats Bar (Hidden when searching) */}
        {!activeSearch && (
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
        )}
      </div>

      {/* Results Section */}
      {activeSearch && (
        <div className="container mx-auto max-w-6xl mt-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white shadow-lg backdrop-blur-sm">
                <span className="text-muted-foreground mr-1">Showing results for:</span>
                <span className={cn("mr-1 text-lg", selectedCategory.iconColor || "text-white")}>{selectedCategory.icon}</span> 
                {selectedCategory.name}
                <button 
                  onClick={() => handleCategorySelect(CATEGORY_OPTIONS[0])}
                  className="ml-3 p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="h-3.5 w-3.5 text-white/70 hover:text-white" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <Link
                to={`/roadmap/${getRoadmapSlug(selectedCategory.name) || ''}?fromHome=true&q=${encodeURIComponent(selectedCategory.name)}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(139,92,246,0.15)] border border-[rgba(139,92,246,0.4)] text-purple-300 text-sm font-medium hover:bg-[rgba(139,92,246,0.25)] hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all transform hover:scale-[1.02] w-full sm:w-auto"
              >
                <span>🗺️</span> View {selectedCategory.name.replace(/ Frameworks| Tools| & Analysis/g, '')} Roadmap →
              </Link>
              <Link
                to={`/rankings?category=${encodeURIComponent(selectedCategory.name)}&fromHome=true`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(245,158,11,0.15)] border border-[rgba(245,158,11,0.4)] text-amber-300 text-sm font-medium hover:bg-[rgba(245,158,11,0.25)] hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all transform hover:scale-[1.02] w-full sm:w-auto"
              >
                <span>🏆</span> View {selectedCategory.name.replace(/ Frameworks| Tools| & Analysis/g, '')} Rankings →
              </Link>
            </div>
          </div>

          {/* Error / Quota / Fallback Banners */}
          <div className="space-y-4 mb-8">
            {error && !isQuotaError && (
              <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-3xl flex items-center gap-5">
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
              <div className="p-6 bg-rose-500/10 border border-rose-500/20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
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

          {/* Content Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      )}

      <ToolDetailModal tool={detailTool} onClose={() => setDetailTool(null)} />
    </div>
  );
}
