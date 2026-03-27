import { skillsRoadmapsData } from "@/data/skills-roadmap";

// Maps a tool category or Hero Search string to the 'domain' name in skills-roadmap
export const domainMap: Record<string, string> = {
  "Frontend Frameworks": "Frontend Web Development",
  "Backend Frameworks": "Backend Development",
  "Full Stack Development": "Full Stack Development",
  "Database": "Database Engineering",
  "DevOps & Cloud": "DevOps & Cloud",
  "Hosting & Deployment": "DevOps & Cloud",
  "Dev Tools": "DevOps & Cloud",
  "Mobile Frameworks": "App Development", // Adjusted based on roadmap data
  "AI / ML Tools": "AI / ML Engineering",
  "Cybersecurity": "Cybersecurity",
  "Data Science & Analysis": "Data Science",
  "Game Development": "Game Development",
  "UI/UX Design": "UI/UX Design",
  "Authentication": "Full Stack Development",
  "CSS & Styling": "Frontend Web Development", // Mapping to Frontend
  "Analytics & Dashboards": "Data Science",
  "Payment Tools": "Full Stack Development",
  "Testing Tools": "QA & Testing",
  "Web3 & Blockchain": "Full Stack Development",
  "CMS & E-commerce": "Full Stack Development",
  "No-Code / Low-Code": "Full Stack Development",
  
  // Fallbacks for missing exact matches
  "frontend": "Frontend Web Development",
  "backend": "Backend Development",
  "database": "Database Engineering",
  "hosting": "DevOps & Cloud",
  "mobile": "App Development",
  "ai": "AI / ML Engineering",
  "devtools": "DevOps & Cloud",
  "auth": "Full Stack Development",
  "styling": "UI/UX Design",
  "analytics": "Data Science",
  "cybersecurity": "Cybersecurity",
  "gamedev": "Game Development",
  "qatest": "QA & Testing",
  "fullstack": "Full Stack Development",
  "uiux": "UI/UX Design"
};

export function getRoadmapSlug(category: string): string | null {
  const targetDomain = domainMap[category] || category;
  const domains = Object.values(skillsRoadmapsData);
  
  const found = domains.find(d => 
    d.domain.toLowerCase() === targetDomain.toLowerCase() ||
    d.domain.toLowerCase().includes(targetDomain.toLowerCase()) ||
    targetDomain.toLowerCase().includes(d.domain.toLowerCase())
  );
  
  return found ? found.id : null;
}
