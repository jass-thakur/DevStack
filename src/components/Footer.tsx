import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-background py-8 mt-auto z-10 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 font-bold text-lg opacity-80">
          <Zap className="h-4 w-4 text-primary" />
          <span className="gradient-text">DevStack</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
        <div className="text-xs text-white/30">
          © {new Date().getFullYear()} DevStack Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
