
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  // Scroll to section
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Navbar height + some padding
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-4 md:px-8",
        isScrolled ? "bg-white/60 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className={cn(
          "backdrop-blur-lg rounded-2xl transition-all duration-300 flex justify-between items-center",
          isScrolled 
            ? "bg-white/70 border border-white/20 shadow-lg px-6 py-3" 
            : "bg-brand-darkBlue/10 px-5 py-2"
        )}>
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-brand-teal to-brand-darkBlue text-transparent bg-clip-text">
              <span className="text-xl font-bold">Schedule<span className="text-brand-coral">Pro</span></span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['services', 'testimonials', 'booking', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-brand-darkBlue hover:text-brand-teal transition-colors capitalize link-underline"
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-darkBlue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white/90 backdrop-blur-lg z-40 px-4 pt-20 transform transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          {['services', 'testimonials', 'booking', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-lg text-brand-darkBlue hover:text-brand-teal transition-colors capitalize"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
