
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleAuthNavigate = () => {
    navigate('/auth');
  };

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10 py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Logo />
          </div>
          <span className="text-2xl font-bold text-gradient-primary">CashCached</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-white/80 hover:text-white transition-colors">Products</a>
          <a href="#why" className="text-white/80 hover:text-white transition-colors">Why Us</a>
          <a href="#case-study" className="text-white/80 hover:text-white transition-colors">Case Study</a>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="bg-transparent border-brand-purple/50 text-white hover:bg-brand-purple/20"
              onClick={handleAuthNavigate}
            >
              Learn More
            </Button>
            <Button 
              className="bg-brand-purple hover:bg-brand-purpleDark text-white"
              onClick={handleAuthNavigate}
            >
              Try Vora Dashboard
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-black/95 border-brand-purple/20">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-gradient-primary">CashCached</span>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5 text-white" />
                </Button>
              </div>
              <div className="flex flex-col gap-6">
                <a href="#products" className="text-white text-lg" onClick={() => setIsOpen(false)}>Products</a>
                <a href="#why" className="text-white text-lg" onClick={() => setIsOpen(false)}>Why Us</a>
                <a href="#case-study" className="text-white text-lg" onClick={() => setIsOpen(false)}>Case Study</a>
              </div>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Button 
                  variant="outline" 
                  className="w-full bg-transparent border-brand-purple/50 text-white hover:bg-brand-purple/20"
                  onClick={() => {
                    setIsOpen(false);
                    handleAuthNavigate();
                  }}
                >
                  Learn More
                </Button>
                <Button 
                  className="w-full bg-brand-purple hover:bg-brand-purpleDark text-white"
                  onClick={() => {
                    setIsOpen(false);
                    handleAuthNavigate();
                  }}
                >
                  Try Vora Dashboard
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
