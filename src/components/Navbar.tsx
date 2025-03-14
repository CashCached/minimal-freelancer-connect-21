
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Linkedin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to booking section
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      const yOffset = -80; // Navbar height + some padding
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 py-6 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className={cn(
          "backdrop-blur-lg rounded-2xl transition-all duration-300 flex justify-between items-center mx-auto",
          isScrolled 
            ? "bg-white/60 border border-white/30 shadow-lg px-6 py-3" 
            : "bg-white/20 border border-white/10 px-6 py-3"
        )}>
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-brand-darkBlue to-brand-teal text-transparent bg-clip-text">
              <span className="text-xl font-bold">Schedule<span className="text-brand-coral">Pro</span></span>
            </div>
          </div>
          
          {/* Social and Contact Icons */}
          <div className="flex items-center space-x-4 mr-4">
            <a 
              href="https://linkedin.com/company/schedulepro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-coral to-brand-orange flex items-center justify-center text-white"
            >
              <Linkedin size={16} />
            </a>
            
            <Popover>
              <PopoverTrigger asChild>
                <button className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-teal to-brand-darkBlue flex items-center justify-center text-white">
                  <Phone size={16} />
                </button>
              </PopoverTrigger>
              <PopoverContent 
                className="p-0 overflow-hidden origin-top-left transition-all duration-200 animate-in zoom-in-90 slide-in-from-left-5" 
                side="right" 
                align="center" 
                sideOffset={5}
              >
                <div className="flex items-center p-3 bg-white/90 backdrop-blur-sm border border-brand-teal/20 rounded-md">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-teal to-brand-darkBlue flex items-center justify-center text-white mr-2 opacity-70">
                    <Phone size={12} />
                  </div>
                  <p className="text-brand-darkBlue font-medium">+1 (555) 123-4567</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Call to Action Button */}
          <Button 
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-brand-teal to-brand-coral text-white hover:shadow-lg transition-all rounded-full"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Free Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
