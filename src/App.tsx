import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CompareProvider } from "@/context/CompareContext";
import { Navbar } from "@/components/Navbar";
import { CompareTray } from "@/components/CompareTray";
import HeroPage from "@/pages/HeroPage";
import DiscoverPage from "@/pages/DiscoverPage";
import ComparePage from "@/pages/ComparePage";
import RankingsPage from "@/pages/RankingsPage";
import StackBuilderPage from "@/pages/StackBuilderPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <CompareProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/rankings" element={<RankingsPage />} />
            <Route path="/stack-builder" element={<StackBuilderPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CompareTray />
        </CompareProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
