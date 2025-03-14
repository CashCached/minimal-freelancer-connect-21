
import React, { useState } from 'react';
import { Linkedin, Phone } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-darkBlue/10">
      <div className="container mx-auto px-4 flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-brand-darkBlue to-brand-teal bg-clip-text text-transparent">
            Schedule<span className="text-brand-coral">Pro</span>
          </span>
        </div>
        
        {/* Main Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-brand-darkBlue hover:text-brand-teal transition-colors">Features</a>
          <a href="#testimonials" className="text-brand-darkBlue hover:text-brand-teal transition-colors">Testimonials</a>
          <a href="#pricing" className="text-brand-darkBlue hover:text-brand-teal transition-colors">Pricing</a>
          <a href="#contact" className="text-brand-darkBlue hover:text-brand-teal transition-colors">Contact</a>
        </nav>
        
        {/* Social Icons and Contact */}
        <div className="flex items-center space-x-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-teal to-brand-darkBlue flex items-center justify-center text-white hover:opacity-90 transition-opacity"
          >
            <Linkedin size={16} />
          </a>
          
          <Popover>
            <PopoverTrigger>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-coral to-brand-orange flex items-center justify-center text-white hover:opacity-90 transition-opacity cursor-pointer">
                <Phone size={16} />
              </div>
            </PopoverTrigger>
            <PopoverContent className="bg-white p-3 rounded-lg shadow-lg border border-brand-teal/20 w-auto">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-brand-coral" />
                <span className="text-brand-darkBlue font-medium">+1 (555) 123-4567</span>
              </div>
            </PopoverContent>
          </Popover>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col space-y-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block w-6 h-0.5 bg-brand-darkBlue transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-brand-darkBlue transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-brand-darkBlue transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
        <nav className="flex flex-col space-y-4 p-4">
          <a href="#features" className="text-brand-darkBlue hover:text-brand-teal transition-colors py-2 px-4">Features</a>
          <a href="#testimonials" className="text-brand-darkBlue hover:text-brand-teal transition-colors py-2 px-4">Testimonials</a>
          <a href="#pricing" className="text-brand-darkBlue hover:text-brand-teal transition-colors py-2 px-4">Pricing</a>
          <a href="#contact" className="text-brand-darkBlue hover:text-brand-teal transition-colors py-2 px-4">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
