import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import { initializeConsentMode, initializeGA } from "./lib/analytics";

const queryClient = new QueryClient();

// Replace this with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // You'll need to replace this with your real GA4 ID

const App = () => {
  useEffect(() => {
    // Initialize consent mode first (GDPR requirement)
    initializeConsentMode();
    
    // Initialize Google Analytics
    initializeGA(GA_MEASUREMENT_ID);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
