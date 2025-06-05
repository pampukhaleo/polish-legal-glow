
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import PartnerPage from "./pages/PartnerPage";
import About from "./pages/About";
import { useEffect } from "react";

// ScrollToTop component to handle scroll behavior on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <div className="dark">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/partners/:id" element={<PartnerPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
