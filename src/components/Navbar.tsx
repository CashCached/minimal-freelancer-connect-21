
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Phone } from 'lucide-react';
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
            : "bg-gradient-to-r from-brand-darkGreen to-brand-green border border-white/10 px-6 py-3"
        )}>
          <div className="flex-1 flex items-center space-x-4">
            <a 
              href="https://linkedin.com/company/schedulepro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-green to-brand-darkGreen flex items-center justify-center text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
            
            <Popover>
              <PopoverTrigger asChild>
                <button className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-green to-brand-darkGreen flex items-center justify-center text-white">
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
                  <div className="flex items-center h-8 pl-1 pr-3 py-1 rounded-full bg-gradient-to-br from-brand-green to-brand-darkGreen text-white animate-in zoom-in-90 slide-in-from-left-5 duration-200">
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
            <div className="h-[45px] relative">
              <img 
                src="/lovable-uploads/0ba739f3-dbf9-4b3a-8f40-5a69fa44a8a8.png" 
                alt="SchedulePro Logo" 
                className="h-full object-contain"
              />
            </div>
          </div>
          
          <div className="flex-1 flex justify-end">
            <Button 
              onClick={scrollToBooking}
              className={cn(
                "btn-primary rounded-full",
                !isScrolled && "bg-brand-gold hover:bg-brand-gold/90 text-brand-darkGreen font-semibold"
              )}
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
