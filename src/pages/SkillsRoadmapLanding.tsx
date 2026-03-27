import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { skillsRoadmapsData } from "@/data/skills-roadmap";
import { getRoadmapSlug } from "@/lib/navigation";

export default function SkillsRoadmapLanding() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const domainQuery = searchParams.get("domain");

  useEffect(() => {
    if (domainQuery) {
      const slug = getRoadmapSlug(domainQuery);
      if (slug) {
        navigate(`/roadmap/${slug}?fromHome=true&q=${encodeURIComponent(domainQuery)}`, { replace: true });
      }
    }
  }, [domainQuery, navigate]);

  const domains = Object.values(skillsRoadmapsData);

  return (
    <div className="min-h-screen bg-background pt-24 pb-32 px-4 animate-in fade-in duration-700 slide-in-from-bottom-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Skills & Tools <span className="text-primary">Roadmap</span>
        </h1>
        <p className="text-lg md:text-xl text-[rgba(255,255,255,0.55)] mb-12 max-w-2xl mx-auto">
          A clear structured map of what's needed from beginner to advanced. Select your domain to get started.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map(domain => (
            <Link
              key={domain.id}
              to={`/roadmap/${domain.id}`}
              className="group relative flex flex-col items-center justify-center p-8 bg-[rgba(255,255,255,0.02)] backdrop-blur-md rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-[rgba(255,255,255,0.05)] cursor-pointer overflow-hidden"
              style={{
                boxShadow: `0 0 0 1px rgba(255,255,255,0.05)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = domain.accentColor;
                e.currentTarget.style.boxShadow = `0 10px 40px -10px ${domain.accentColor}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.boxShadow = `0 0 0 1px rgba(255,255,255,0.05)`;
              }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {domain.icon}
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{domain.domain}</h2>
              <p className="text-sm text-white/50 mb-6 px-4">{domain.description}</p>
              
              <div className="flex flex-wrap justify-center items-center gap-2 mt-auto">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-white/80">
                  {domain.difficultyBadge}
                </span>
                {domain.totalSkills > 0 ? (
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-secondary-accent/90">
                    💡 {domain.totalSkills} Skills
                  </span>
                ) : (
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-white/50">
                    Coming Soon
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
