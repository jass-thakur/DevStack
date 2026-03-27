import { useState, useEffect, useRef } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { skillsRoadmapsData, StepFlow } from "@/data/skills-roadmap";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowDown, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function useIntersectionObserver(options: IntersectionObserverInit = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isIntersecting] as const;
}

const AnimatedStep = ({ children, delay = 0, className }: any) => {
  const [ref, inView] = useIntersectionObserver();
  return (
    <div 
      ref={ref} 
      className={cn(
        "transition-all duration-700 ease-out w-full", 
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const StepCard = ({ 
  data, 
  isCompleted, 
  onToggleComplete 
}: { 
  data: StepFlow; 
  isCompleted: boolean; 
  onToggleComplete: () => void;
}) => {
  return (
    <div 
      className={cn(
        "w-full bg-[#0d111c] border rounded-2xl overflow-hidden transition-all duration-300 relative",
        isCompleted ? "border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]" : "border-white/10 hover:border-white/20"
      )}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-4 flex-1">
          <span className="font-bold text-white tracking-widest text-sm bg-white/10 px-3 py-1 rounded-md">
            STEP {data.step}
          </span>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-white/10 to-transparent hidden sm:block" />
        </div>
        <span 
          className="font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-white/10"
          style={{ color: data.tagColor }}
        >
          {data.icon} {data.tag}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 md:p-8 flex flex-col gap-6">
        
        {/* Header Area */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
            <span className="text-3xl md:text-4xl">{data.icon}</span> 
            {data.title}
          </h2>
          <p className="text-lg text-white/70 italic border-l-4 border-white/20 pl-4 py-1">
            "{data.why}"
          </p>
        </div>

        {/* What You Need - Blue Tint Box */}
        <div className="bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.25)] rounded-xl p-5">
          <h3 className="font-bold text-blue-400 mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 block" /> What You Need
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.whatYouNeed.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                <span className="text-blue-400 mt-0.5">✦</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Options (Conditional) - Green Tint Box */}
        {data.options && data.options.length > 0 && (
          <div className="bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.25)] rounded-xl p-5">
            <h3 className="font-bold text-emerald-400 mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 block" /> Decision Matrix
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {data.options.map((opt, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-3 rounded-lg text-center">
                  <div className="text-white font-bold text-sm mb-1">{opt.label}</div>
                  <div className="text-xs font-medium" style={{ color: opt.color }}>→ {opt.recommendation}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tools Section - Purple Tint Box */}
        <div className="bg-[rgba(139,92,246,0.08)] border border-[rgba(139,92,246,0.25)] rounded-xl p-5">
          <h3 className="font-bold text-purple-400 mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 block" /> Tools & Environment
          </h3>
          <div className="flex flex-wrap gap-3">
            {data.tools.map((tool, idx) => (
              <a 
                key={idx} 
                href={tool.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                title={tool.note}
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
              >
                <span className="w-2.5 h-2.5 rounded-full block" style={{ backgroundColor: tool.color }} />
                <span className="font-semibold text-white/90 text-sm">{tool.name}</span>
                {tool.url && <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-purple-400 transition-colors ml-1" />}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Area */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span className="bg-white/5 px-3 py-1.5 rounded-md flex items-center gap-2">
              ⏱️ Time needed: <strong className="text-white/90 font-medium">{data.timeNeeded}</strong>
            </span>
          </div>
          
          <Button 
            onClick={onToggleComplete}
            variant={isCompleted ? "outline" : "default"}
            className={cn(
              "px-8 py-6 rounded-xl font-bold transition-all w-full md:w-auto text-base",
              isCompleted 
                ? "border-emerald-500/50 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20" 
                : "bg-white text-black hover:bg-white/90"
            )}
          >
            {isCompleted ? <><CheckCircle2 className="w-5 h-5 mr-2" /> Got It ✓</> : "Mark as Understood"}
          </Button>
        </div>
        
        {/* Pro Tip */}
        <div className="text-sm text-yellow-500/90 font-medium bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 w-full">
          {data.tip}
        </div>

      </div>
    </div>
  );
};


export default function SkillsRoadmapDetail() {
  const { domainId } = useParams<{ domainId: string }>();
  const [searchParams] = useSearchParams();
  const fromHome = searchParams.get("fromHome") === "true";
  const query = searchParams.get("q");
  
  const roadmap = domainId ? skillsRoadmapsData[domainId] : null;

  // Track completed steps locally
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem(`roadmap_flow_${domainId}`);
      if (stored) return JSON.parse(stored);
    } catch {}
    return [];
  });

  useEffect(() => {
    localStorage.setItem(`roadmap_flow_${domainId}`, JSON.stringify(completedSteps));
  }, [completedSteps, domainId]);

  const toggleStep = (stepNo: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepNo) ? prev.filter(s => s !== stepNo) : [...prev, stepNo]
    );
  };

  if (!roadmap) {
    return (
      <div className="min-h-screen bg-[#080B14] pt-24 pb-32 flex items-center justify-center flex-col">
        <h1 className="text-white text-3xl font-bold mb-4">Roadmap Not Found</h1>
        <Link to="/roadmap" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Roadmaps
        </Link>
      </div>
    );
  }

  const progressCount = completedSteps.length;
  const totalSteps = roadmap.steps.length;

  return (
    <div className="min-h-screen bg-[#080B14] font-sans pb-32">
      
      {/* Page Sticky Header */}
      <div className="sticky top-16 z-40 bg-[#080B14]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {fromHome ? (
              <nav className="flex items-center gap-4 text-xs font-medium text-white/50">
                <Link to={`/?q=${encodeURIComponent(query || '')}`} className="p-1.5 rounded-full hover:bg-white/5 transition-all text-white/50 hover:text-white border border-white/10 group">
                  <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center gap-2">
                  <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                    🏠 <span className="hidden sm:inline">Home</span>
                  </Link>
                  <span className="opacity-30">/</span>
                  <Link to={`/?q=${encodeURIComponent(query || '')}`} className="hover:text-white transition-colors truncate max-w-[100px] sm:max-w-none">
                    {query}
                  </Link>
                  <span className="opacity-30">/</span>
                  <span className="text-white">Roadmap</span>
                </div>
              </nav>
            ) : (
              <Link to="/roadmap" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
                <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back</span>
              </Link>
            )}
          </div>
          
          <div className="flex flex-col items-center">
            <h1 className="text-lg md:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-2xl">{roadmap.icon}</span> {roadmap.domain}
            </h1>
          </div>

          <div className="text-sm font-medium text-white/80 bg-white/10 px-3 py-1.5 rounded-full border border-white/5 flex items-center gap-2">
            Progress: <span className={progressCount === totalSteps ? "text-emerald-400 font-bold" : "text-primary font-bold"}>{progressCount}/{totalSteps}</span>
          </div>
        </div>
        <div className="h-1 w-full bg-white/5">
           <div className="h-full bg-gradient-to-r from-primary to-emerald-400 transition-all duration-700" style={{ width: totalSteps > 0 ? `${(progressCount/totalSteps)*100}%` : '0%' }} />
        </div>
      </div>

      {/* Main Flow Container */}
      <div className="max-w-3xl mx-auto px-4 pt-24 md:pt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How to Build an App</h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">Follow this systematic step-by-step instructional flow. Master one block before moving to the next.</p>
        </div>

        <div className="flex flex-col items-center w-full">
          {roadmap.steps.map((step, index) => {
            const isCompleted = completedSteps.includes(step.step);
            const nextStep = roadmap.steps[index + 1];
            
            return (
              <div key={step.step} className="w-full flex flex-col items-center">
                <AnimatedStep delay={0} className="w-full">
                  <StepCard 
                    data={step} 
                    isCompleted={isCompleted} 
                    onToggleComplete={() => toggleStep(step.step)} 
                  />
                </AnimatedStep>

                {/* Animated Arrow to next step */}
                {nextStep && (
                  <div className="h-24 md:h-32 flex items-center justify-center animate-pulse py-4">
                    <ArrowDown 
                      className="w-10 h-10 transition-colors duration-1000" 
                      style={{ color: isCompleted ? nextStep.tagColor : '#334155' }} 
                    />
                  </div>
                )}
              </div>
            )
          })}

          {roadmap.steps.length === 0 && (
            <div className="text-center p-16 w-full bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-2xl text-white font-bold mb-3">{roadmap.domain} flow coming soon</h3>
              <p className="text-white/50">Our experts are currently compiling the definitive step-by-step path for this domain.</p>
            </div>
          )}

          {progressCount === totalSteps && totalSteps > 0 && (
            <div className="mt-16 text-center animate-in zoom-in duration-700 bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-2xl w-full">
              <h2 className="text-3xl font-bold text-emerald-400 mb-2 flex items-center justify-center gap-3">
                🎉 Congratulations!
              </h2>
              <p className="text-white/80 text-lg">You now have a complete understanding of how to build an app.</p>
              <p className="text-white/50 mt-2">Go forth and start building!</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
