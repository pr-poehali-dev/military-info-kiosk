import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Documents from "./pages/Documents";
import Contacts from "./pages/Contacts";
import MilitaryInfo from "./pages/MilitaryInfo";
import Certificates from "./pages/Certificates";
import VictimsData from "./pages/VictimsData";
import DeceasedData from "./pages/DeceasedData";
import Benefits from "./pages/Benefits";
import Vacations from "./pages/Vacations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/military-info" element={<MilitaryInfo />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/victims-data" element={<VictimsData />} />
            <Route path="/deceased-data" element={<DeceasedData />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/vacations" element={<Vacations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
