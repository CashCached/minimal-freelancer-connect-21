
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/App';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import { toast } from '@/hooks/use-toast';
import { Clock, Mail, CalendarClock, Rocket, ArrowRight } from 'lucide-react';

const Waitlist = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    // Set user email from auth if available
    if (user?.email) {
      setEmail(user.email);
    }
    
    // Animation setup
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });
    
    const sections = document.querySelectorAll('.section-animate');
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [user]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send a notification toast
    toast({
      title: "Success!",
      description: "You've been added to our waitlist. We'll notify you when we launch!",
    });
    
    setIsSubmitted(true);
  };
  
  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };
  
  return (
    <div className="min-h-screen bg-black relative overflow-hidden amoled-grid">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-brand-purpleDark/20 z-0"></div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl glass-card p-8 border border-brand-purple/20 backdrop-blur-xl section-animate"
          style={{ backdropFilter: 'blur(16px)' }}
        >
          <div className="flex justify-center mb-8">
            <Logo />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-gradient-primary text-center mb-2 glow-text-strong">
              We're Almost Ready!
            </h1>
            <p className="text-white/70 text-center mb-8">
              Thanks for your interest in CashCached. Our suite of products is currently in private beta.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="w-32 h-32 relative">
              <motion.div 
                className="absolute inset-0 bg-brand-purple/20 rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.4, 0.7] 
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-10 h-10 bg-brand-purple/30 rounded-full absolute" style={{ top: '0', left: '50%', transform: 'translateX(-50%)' }} />
                <div className="w-8 h-8 bg-brand-purple/30 rounded-full absolute" style={{ bottom: '10%', right: '10%' }} />
                <div className="w-6 h-6 bg-brand-purple/30 rounded-full absolute" style={{ bottom: '10%', left: '10%' }} />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-purple flex items-center justify-center glow-purple">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
          
          {!isSubmitted ? (
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-white/70 text-sm block mb-2">Join our waitlist for early access</label>
                  <div className="flex">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-grow px-4 py-2 rounded-l bg-white/5 border border-brand-purple/30 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/50"
                      required
                    />
                    <Button type="submit" className="rounded-l-none">
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.form>
          ) : (
            <motion.div 
              className="text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
              <p className="text-white/70">We'll notify you as soon as we launch.</p>
            </motion.div>
          )}
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center mb-3">
                <CalendarClock className="h-5 w-5 text-brand-purple" />
              </div>
              <h3 className="text-white font-medium mb-1">Launch Soon</h3>
              <p className="text-white/60 text-sm">We're in final testing</p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center mb-3">
                <Mail className="h-5 w-5 text-brand-purple" />
              </div>
              <h3 className="text-white font-medium mb-1">Early Access</h3>
              <p className="text-white/60 text-sm">Waitlist members first</p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center mb-3">
                <Clock className="h-5 w-5 text-brand-purple" />
              </div>
              <h3 className="text-white font-medium mb-1">Stay Updated</h3>
              <p className="text-white/60 text-sm">Exclusive updates</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Button 
              variant="outline" 
              onClick={handleSignOut}
              className="text-white/70 hover:text-white border-brand-purple/30 hover:bg-brand-purple/10"
            >
              Back to Home
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Waitlist;
