
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createContext, useContext } from "react";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import SignupNotificationBar from "./components/SignupNotificationBar";
import { AnimatePresence } from "framer-motion";
import { useSupabaseAuth } from "./hooks/useSupabaseAuth";
import { User } from "@supabase/supabase-js";

// Create the auth context
interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

// Create a protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
};

const queryClient = new QueryClient();

const AppContent = () => {
  const auth = useSupabaseAuth();

  return (
    <AuthContext.Provider value={auth}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
            <SignupNotificationBar />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
};

const App = () => <AppContent />;

export default App;
