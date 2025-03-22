
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { createContext, useContext } from "react";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Waitlist from "./pages/Waitlist";
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

// Create an auth-only redirect component
const AuthRedirect = () => {
  const { user, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  
  if (user) {
    return <Navigate to="/waitlist" replace />;
  }
  
  return <Auth />;
};

const queryClient = new QueryClient();

const App = () => {
  const auth = useSupabaseAuth();

  return (
    <AuthContext.Provider value={auth}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<AuthRedirect />} />
              <Route path="/waitlist" element={
                <ProtectedRoute>
                  <Waitlist />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          <SignupNotificationBar />
        </TooltipProvider>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
};

export default App;
