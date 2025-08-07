import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./components/auth/LoginPage";
import CreateAccountPage from "./components/auth/CreateAccountPage";
import InfantInfoPage from "./components/auth/InfantInfoPage";
import DashboardPage from "./components/admin/DashboardPage";
import HealthScreeningPage from "./components/admin/HealthScreeningPage";
import BreastmilkRequestPage from "./components/admin/BreastmilkRequestPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/infant-info" element={<InfantInfoPage />} />
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/admin/health-screening" element={<HealthScreeningPage />} />
          <Route path="/admin/breastmilk-requests" element={<BreastmilkRequestPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
