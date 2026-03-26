import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CompareProvider } from "@/context/CompareContext";
import { ApiKeyProvider } from "@/context/ApiKeyContext";
import { Navbar } from "@/components/Navbar";
import { CompareTray } from "@/components/CompareTray";
import HeroPage from "@/pages/HeroPage";
import DiscoverPage from "@/pages/DiscoverPage";
import ComparePage from "@/pages/ComparePage";
import RankingsPage from "@/pages/RankingsPage";
import StackBuilderPage from "@/pages/StackBuilderPage";
import TermsPage from "@/pages/TermsPage";
import NotFound from "@/pages/NotFound";

import { OnboardingModal } from "@/components/OnboardingModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ApiKeyProvider>
          <CompareProvider>
            <Navbar />
            <OnboardingModal />
            <Routes>
              <Route path="/" element={<HeroPage />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/rankings" element={<RankingsPage />} />
              <Route path="/stack-builder" element={<StackBuilderPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CompareTray />
          </CompareProvider>
        </ApiKeyProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
