import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import CustomerDashboard from "./pages/customer/Dashboard";
import EmployeeDashboard from "./pages/employee/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/customer" replace />} />
          <Route path="/customer" element={<DashboardLayout type="customer" />}>
            <Route index element={<CustomerDashboard />} />
          </Route>
          <Route path="/employee" element={<DashboardLayout type="employee" />}>
            <Route index element={<EmployeeDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;