
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Logo from '@/components/Logo';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/use-toast';
import { Provider } from '@supabase/supabase-js';

const Auth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<{[key: string]: boolean}>({
    google: false
  });
  const [showProviderError, setShowProviderError] = useState(false);

  // Add animations on load
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });
    
    const sections = document.querySelectorAll('.section-animate');
    const staggerLists = document.querySelectorAll('.stagger-list');
    
    sections.forEach(section => observer.observe(section));
    staggerLists.forEach(list => observer.observe(list));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
      staggerLists.forEach(list => observer.unobserve(list));
    };
  }, []);

  const handleSocialLogin = async (provider: Provider) => {
    try {
      setLoading({...loading, [provider]: true});
      setShowProviderError(false);
      
      // Supabase social sign-in
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });

      if (error) {
        if (error.message.includes("provider is not enabled")) {
          setShowProviderError(true);
          throw new Error("Authentication provider is not enabled in your Supabase project settings.");
        }
        throw error;
      }

      // If we get here without redirect, something went wrong
      if (!data.url) {
        throw new Error('No redirect URL returned');
      }

      // Handle successful login
      toast({
        title: "Authentication initiated",
        description: `Redirecting to ${provider} for authentication...`,
      });

    } catch (error: any) {
      console.error(`Error signing in with ${provider}:`, error);
      toast({
        title: "Authentication failed",
        description: error.message || `Failed to sign in with ${provider}. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setLoading({...loading, [provider]: false});
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden amoled-grid">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-brand-purpleDark/20 z-0"></div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen relative z-10">
        <div 
          className="w-full max-w-md glass-card p-8 border border-brand-purple/20 backdrop-blur-xl animate-fade-up section-animate"
          style={{ backdropFilter: 'blur(16px)' }}
        >
          <div className="flex justify-center mb-8">
            <Logo />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gradient-primary text-center mb-2 glow-text-strong">Welcome Back</h1>
          <p className="text-white/70 text-center mb-8">Sign in to access your dashboard</p>
          
          {showProviderError && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-white">
              <h3 className="font-medium mb-1">Authentication Provider Not Enabled</h3>
              <p className="text-sm text-white/80">
                The Google authentication provider is not enabled in your Supabase project. 
                You need to enable it in the Supabase dashboard under Authentication → Providers.
              </p>
            </div>
          )}
          
          <div className="space-y-4 stagger-list">
            <Button 
              onClick={() => handleSocialLogin('google')}
              variant="outline" 
              className="w-full bg-white/5 hover:bg-white/10 border-white/10 text-white group relative overflow-hidden"
              disabled={loading.google}
            >
              <FaGoogle className="mr-2 h-4 w-4 text-red-500" />
              <span className="relative z-10">
                {loading.google ? 'Connecting...' : 'Continue with Google'}
              </span>
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-brand-purple/20 to-brand-purpleLight/20 transition-all duration-300 group-hover:w-full"></span>
            </Button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-white/50 text-sm">
              By continuing, you agree to our 
              <span className="text-brand-purple hover:text-brand-purpleLight transition-colors cursor-pointer"> Terms of Service </span> 
              and 
              <span className="text-brand-purple hover:text-brand-purpleLight transition-colors cursor-pointer"> Privacy Policy</span>
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-white/70 hover:text-white"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
