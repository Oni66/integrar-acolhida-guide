import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Index from "./pages/Index";
import About from "./pages/About";
import MigrantArea from "./pages/MigrantArea";
import Training from "./pages/Training";
import Jobs from "./pages/Jobs";
import CCE from "./pages/CCE";
import CCI from "./pages/CCI";
import PTRIG from "./pages/PTRIG";
import Health from "./pages/Health";
import Shelters from "./pages/Shelters";
import Interiorization from "./pages/Interiorization";
import TrainingOffers from "./pages/TrainingOffers";
import SuccessStories from "./pages/SuccessStories";
import Announcements from "./pages/Announcements";
import Resume from "./pages/Resume";
import RegistrationsAnalysis from "./pages/RegistrationsAnalysis";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/sobre" element={<About />} />
            <Route path="/area-migrante" element={<MigrantArea />} />
            <Route path="/capacitacao" element={<Training />} />
            <Route path="/vagas-emprego" element={<Jobs />} />
            <Route path="/cce" element={<CCE />} />
            <Route path="/cci" element={<CCI />} />
            <Route path="/ptrig" element={<PTRIG />} />
                <Route path="/saude" element={<Health />} />
                <Route path="/abrigos" element={<Shelters />} />
                <Route path="/interiorizacao" element={<Interiorization />} />
                <Route path="/ofertas-capacitacao" element={<TrainingOffers />} />
                <Route path="/casos-sucesso" element={<SuccessStories />} />
                <Route path="/avisos" element={<Announcements />} />
                <Route path="/cadastro-curriculo" element={<Resume />} />
                <Route path="/analise-cadastros" element={<RegistrationsAnalysis />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
