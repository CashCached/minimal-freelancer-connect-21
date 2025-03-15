
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 mt-16 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-brand-darkGreen to-brand-green backdrop-blur-sm border border-brand-cream/10 text-brand-cream">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-brand-cream">SalesBridge</h2>
              </div>
              <p className="text-brand-cream/90 text-center md:text-left max-w-md">
                Professional B2B lead generation made easy. Streamline your sales process and focus on what matters most.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              <div className="flex flex-col items-center md:items-start">
                <h3 className="font-semibold text-brand-cream mb-2">Quick Links</h3>
                <a href="#services" className="text-brand-cream/80 hover:text-brand-gold transition-colors">Services</a>
                <a href="#testimonials" className="text-brand-cream/80 hover:text-brand-gold transition-colors">Testimonials</a>
                <a href="#booking" className="text-brand-cream/80 hover:text-brand-gold transition-colors">Book Now</a>
                <a href="#contact" className="text-brand-cream/80 hover:text-brand-gold transition-colors">Contact</a>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="font-semibold text-brand-cream mb-2">Contact</h3>
                <span className="text-brand-cream/80">salesbridge@gmail.com</span>
                <span className="text-brand-cream/80">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-brand-cream/80 mb-4 md:mb-0">
              © {year} SalesBridge. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
