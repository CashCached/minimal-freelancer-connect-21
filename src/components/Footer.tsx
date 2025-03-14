
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-darkBlue/10 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-brand-darkBlue">
              Schedule<span className="text-brand-teal">Pro</span>
            </span>
          </div>
          
          <div className="text-sm text-brand-darkBlue/70">
            © {year} SchedulePro. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
