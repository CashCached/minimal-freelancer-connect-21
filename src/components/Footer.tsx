
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-black/80 border-t border-white/10 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">CashCached</h3>
            <p className="text-white/70 mb-4">
              The unified AI fund management platform that helps companies allocate, 
              track, and audit AI spending with ease.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full border-white/20 bg-transparent">
                <Mail className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="flex flex-col gap-2">
                <li><a href="#products" className="text-white/70 hover:text-white">Vora</a></li>
                <li><a href="#products" className="text-white/70 hover:text-white">Mosaic</a></li>
                <li><a href="#products" className="text-white/70 hover:text-white">Flow</a></li>
                <li><a href="#products" className="text-white/70 hover:text-white">Nexus</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="flex flex-col gap-2">
                <li><a href="#why" className="text-white/70 hover:text-white">Why Us</a></li>
                <li><a href="#case-study" className="text-white/70 hover:text-white">Case Studies</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <p className="text-white/70 mb-2">
              Email: cashcach3@gmail.com
            </p>
            <p className="text-white/70 mb-4">
              123 AI Street, Tech Valley
            </p>
            <Button className="bg-brand-purple hover:bg-brand-purpleDark text-white">
              Schedule Consultation
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {year} CashCached. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
