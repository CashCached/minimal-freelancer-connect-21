
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub, FaMicrosoft } from 'react-icons/fa';
import Logo from '@/components/Logo';

const Auth = () => {
  const navigate = useNavigate();

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

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // This will be replaced with real Supabase authentication once integrated
    alert(`Login with ${provider} will be integrated with Supabase`);
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
          
          <div className="space-y-4 stagger-list">
            <Button 
              onClick={() => handleSocialLogin('Google')}
              variant="outline" 
              className="w-full bg-white/5 hover:bg-white/10 border-white/10 text-white group relative overflow-hidden"
            >
              <FaGoogle className="mr-2 h-4 w-4 text-red-500" />
              <span className="relative z-10">Continue with Google</span>
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-brand-purple/20 to-brand-purpleLight/20 transition-all duration-300 group-hover:w-full"></span>
            </Button>
            
            <Button 
              onClick={() => handleSocialLogin('GitHub')}
              variant="outline" 
              className="w-full bg-white/5 hover:bg-white/10 border-white/10 text-white group relative overflow-hidden"
            >
              <FaGithub className="mr-2 h-4 w-4 text-white" />
              <span className="relative z-10">Continue with GitHub</span>
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-brand-purple/20 to-brand-purpleLight/20 transition-all duration-300 group-hover:w-full"></span>
            </Button>
            
            <Button 
              onClick={() => handleSocialLogin('Microsoft')}
              variant="outline" 
              className="w-full bg-white/5 hover:bg-white/10 border-white/10 text-white group relative overflow-hidden"
            >
              <FaMicrosoft className="mr-2 h-4 w-4 text-blue-500" />
              <span className="relative z-10">Continue with Microsoft</span>
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
