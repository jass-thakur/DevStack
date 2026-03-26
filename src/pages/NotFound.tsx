import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4">
    <div className="text-6xl mb-4">404</div>
    <h1 className="text-2xl font-bold mb-2">Page not found</h1>
    <p className="text-muted-foreground mb-6">The page you're looking for doesn't exist.</p>
    <Link to="/" className="gradient-button px-6 py-2.5 rounded-lg text-sm inline-flex items-center gap-2">
      <ArrowLeft className="h-4 w-4" /> Back Home
    </Link>
  </div>
);

export default NotFound;
