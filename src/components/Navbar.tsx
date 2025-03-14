
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Linkedin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
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
          <div className="flex-1 flex items-center space-x-4">
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
                className="p-0 border-0 shadow-none bg-transparent" 
                side="right" 
                align="center" 
                sideOffset={5}
              >
                <div className="flex items-center p-0 overflow-hidden">
                  <div className="flex items-center h-8 pl-1 pr-3 py-1 rounded-full bg-gradient-to-br from-brand-teal to-brand-darkBlue text-white animate-in zoom-in-90 slide-in-from-left-5 duration-200">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2">
                      <Phone size={14} />
                    </div>
                    <p className="text-white font-medium whitespace-nowrap">+1 (555) 123-4567</p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="flex-1 flex justify-center items-center">
            <div className="h-[120px] relative">
              <img 
                src="/lovable-uploads/2a70dfb2-6e84-419a-a547-1f4c0f67c494.png" 
                alt="SchedulePro Logo" 
                className="h-full object-contain"
                style={{ filter: "brightness(0) saturate(100%) invert(55%) sepia(69%) saturate(1511%) hue-rotate(335deg) brightness(99%) contrast(92%)" }}
              />
            </div>
          </div>
          
          <div className="flex-1 flex justify-end">
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
      </div>
    </header>
  );
};

export default Navbar;
