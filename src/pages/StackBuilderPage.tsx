import { useState } from "react";
import { tools, type Tool } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";
import { ToolDetailModal } from "@/components/ToolDetailModal";
import { Copy, Share2, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const projectTypes = ["Web App", "Mobile App", "API Service", "E-Commerce", "Blog/CMS"];
const scales = ["Personal", "Startup", "Enterprise"];
const languages = ["JavaScript/TypeScript", "Python", "Go", "Ruby", "Java"];

type StackLayer = { label: string; emoji: string; toolId: string };

function recommend(projectType: string, scale: string, language: string): StackLayer[] {
  const stacks: Record<string, Record<string, StackLayer[]>> = {
    "JavaScript/TypeScript": {
      "Web App": [
        { label: "Frontend", emoji: "🎨", toolId: "react" },
        { label: "Backend", emoji: "⚙️", toolId: "nodejs" },
        { label: "Database", emoji: "🗄️", toolId: "postgresql" },
        { label: "Hosting", emoji: "☁️", toolId: "vercel" },
        { label: "Dev Tools", emoji: "🛠️", toolId: "docker" },
      ],
      "default": [
        { label: "Frontend", emoji: "🎨", toolId: "nextjs" },
        { label: "Backend", emoji: "⚙️", toolId: "nodejs" },
        { label: "Database", emoji: "🗄️", toolId: "mongodb" },
        { label: "Hosting", emoji: "☁️", toolId: "vercel" },
        { label: "Dev Tools", emoji: "🛠️", toolId: "github-actions" },
      ],
    },
    "Python": {
      "default": [
        { label: "Frontend", emoji: "🎨", toolId: "react" },
        { label: "Backend", emoji: "⚙️", toolId: "fastapi" },
        { label: "Database", emoji: "🗄️", toolId: "postgresql" },
        { label: "Hosting", emoji: "☁️", toolId: "aws" },
        { label: "Dev Tools", emoji: "🛠️", toolId: "docker" },
      ],
    },
    "default": {
      "default": [
        { label: "Frontend", emoji: "🎨", toolId: "react" },
        { label: "Backend", emoji: "⚙️", toolId: "nodejs" },
        { label: "Database", emoji: "🗄️", toolId: "postgresql" },
        { label: "Hosting", emoji: "☁️", toolId: "vercel" },
        { label: "Dev Tools", emoji: "🛠️", toolId: "docker" },
      ],
    },
  };

  const langStacks = stacks[language] || stacks["default"];
  return langStacks[projectType] || langStacks["default"];
}

export default function StackBuilderPage() {
  const [projectType, setProjectType] = useState("");
  const [scale, setScale] = useState("");
  const [language, setLanguage] = useState("");
  const [stack, setStack] = useState<StackLayer[] | null>(null);
  const [detailTool, setDetailTool] = useState<Tool | null>(null);

  const handleBuild = () => {
    if (!projectType || !scale || !language) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setStack(recommend(projectType, scale, language));
  };

  const handleCopy = () => {
    if (!stack) return;
    const text = stack.map(s => `${s.emoji} ${s.label}: ${tools.find(t => t.id === s.toolId)?.name}`).join("\n");
    navigator.clipboard.writeText(text);
    toast({ title: "Stack copied!" });
  };

  return (
    <div className="min-h-screen pt-24 pb-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">
          Stack <span className="gradient-text">Builder</span>
        </h1>
        <p className="text-muted-foreground text-sm mb-8">Get a recommended tech stack tailored to your project.</p>

        <div className="glass-card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Project Type</label>
              <select
                value={projectType}
                onChange={e => setProjectType(e.target.value)}
                className="w-full bg-muted/50 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground"
              >
                <option value="">Select...</option>
                {projectTypes.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Scale</label>
              <select
                value={scale}
                onChange={e => setScale(e.target.value)}
                className="w-full bg-muted/50 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground"
              >
                <option value="">Select...</option>
                {scales.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Language</label>
              <select
                value={language}
                onChange={e => setLanguage(e.target.value)}
                className="w-full bg-muted/50 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground"
              >
                <option value="">Select...</option>
                {languages.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </div>
          <button onClick={handleBuild} className="gradient-button px-6 py-2.5 rounded-lg text-sm flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Build My Stack
          </button>
        </div>

        {stack && (
          <div className="animate-fade-in-up" style={{ opacity: 0 }}>
            <h2 className="text-xl font-bold mb-4">Your Recommended Stack</h2>
            
            <div className="space-y-3 mb-6">
              {stack.map((layer, i) => {
                const tool = tools.find(t => t.id === layer.toolId)!;
                return (
                  <div
                    key={layer.label}
                    className="glass-card-hover p-4 flex items-center gap-4 cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                    onClick={() => setDetailTool(tool)}
                  >
                    <span className="text-2xl">{layer.emoji}</span>
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground font-mono">{layer.label}</div>
                      <div className="font-semibold">{tool.name}</div>
                    </div>
                    <span className="text-xl">{tool.icon}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3">
              <button onClick={handleCopy} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-border bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
                <Copy className="h-4 w-4" />
                Copy Stack
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast({ title: "Link copied!" });
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-border bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Share2 className="h-4 w-4" />
                Share Stack
              </button>
            </div>
          </div>
        )}
      </div>

      <ToolDetailModal tool={detailTool} onClose={() => setDetailTool(null)} />
    </div>
  );
}
