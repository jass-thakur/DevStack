import { Link, useLocation } from "react-router-dom";
import { Search, Zap, BarChart3, Layers, Trophy, Menu, X, Settings, Map } from "lucide-react";
import { useEffect, useState } from "react";
import { useApiKey } from "@/context/ApiKeyContext";
import { cn } from "@/lib/utils";
import { SettingsModal } from "./SettingsModal";

const navItems = [
  { path: "/", label: "Home", icon: Zap },
  { path: "/compare", label: "Compare", icon: Layers },
  { path: "/rankings", label: "Rankings", icon: Trophy },
  { path: "/roadmap", label: "Roadmap", icon: Map },
  { path: "/stack-builder", label: "Stack Builder", icon: BarChart3 },
];

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { isGlobal } = useApiKey();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 backdrop-blur-xl border-b",
      scrolled 
        ? "bg-[#080B14] border-white/10 shadow-lg" 
        : "bg-[#080B14]/95 border-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <Zap className="h-5 w-5 text-primary" />
          <span className="gradient-text">DevStack</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative flex items-center gap-2 px-3 py-5 text-sm font-medium transition-all group",
                location.pathname === item.path
                  ? "text-white"
                  : "text-muted-foreground hover:text-white"
              )}
            >
              <item.icon className={cn("h-4 w-4 transition-colors", location.pathname === item.path ? "text-primary" : "text-muted-foreground group-hover:text-primary/70")} />
              {item.label}
              {location.pathname === item.path && (
                 <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent shadow-[0_0_8px_rgba(59,130,246,0.8)] rounded-t-full" />
              )}
            </Link>
          ))}
          <button
            onClick={() => setSettingsOpen(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors ml-2 border border-white/5"
            title="Settings & Model Selection"
          >
            <Settings className="h-4 w-4" />
          </button>

        </div>

        <SettingsModal 
          open={settingsOpen} 
          onOpenChange={setSettingsOpen} 
        />

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
