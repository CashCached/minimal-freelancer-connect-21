
import React, { useEffect } from 'react';
import { Instagram, Search, MessageSquare, UserCheck, CalendarCheck } from 'lucide-react';

const FlowchartSection = () => {
  useEffect(() => {
    const demoButton = document.getElementById('watch-demo-btn');
    const flowchartSection = document.getElementById('flowchart-section');
    
    if (demoButton && flowchartSection) {
      demoButton.addEventListener('click', () => {
        flowchartSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
    
    return () => {
      if (demoButton) {
        demoButton.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <section id="flowchart-section" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-teal/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-coral/5 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-brand-yellow/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-coral/10">
            <span className="text-brand-coral font-semibold text-sm">Our Instagram DM Automation Flow</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkGreen mb-4">See How Our AI Works</h2>
          <p className="text-brand-darkGreen/60 max-w-2xl mx-auto">
            A visual guide to our intelligent Instagram DM automation process
          </p>
        </div>
        
        {/* Premium Flowchart */}
        <div className="relative py-10 px-4 md:px-0 overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100">
          {/* Center Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-teal/10 via-brand-yellow/20 to-brand-coral/10 hidden md:block"></div>
          
          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-10 md:mb-24">
            {/* Step 1 */}
            <div className="glass-panel p-6 md:p-8 w-full md:w-72 text-center mb-10 md:mb-0 animate-fade-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: 'forwards' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-teal/70 flex items-center justify-center shadow-lg transform -rotate-3">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-darkGreen mb-3">1. Connect Instagram</h3>
              <p className="text-brand-darkGreen/60">Secure OAuth connection to your Instagram account with just a few clicks</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:flex w-20 items-center justify-center mx-4">
              <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M79.0607 13.0607C79.6464 12.4749 79.6464 11.5251 79.0607 10.9393L69.5147 1.3934C68.9289 0.807611 67.9792 0.807611 67.3934 1.3934C66.8076 1.97919 66.8076 2.92893 67.3934 3.51472L75.8787 12L67.3934 20.4853C66.8076 21.0711 66.8076 22.0208 67.3934 22.6066C67.9792 23.1924 68.9289 23.1924 69.5147 22.6066L79.0607 13.0607ZM0 13.5H78V10.5H0V13.5Z" fill="url(#arrow-gradient-1)"/>
                <defs>
                  <linearGradient id="arrow-gradient-1" x1="0" y1="12" x2="80" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#29B8A5" stopOpacity="0.5"/>
                    <stop offset="1" stopColor="#29B8A5" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Step 2 */}
            <div className="glass-panel p-6 md:p-8 w-full md:w-72 text-center mb-10 md:mb-0 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: 'forwards' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-yellow to-brand-yellow/70 flex items-center justify-center shadow-lg transform rotate-3">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-darkGreen mb-3">2. AI Finds Leads</h3>
              <p className="text-brand-darkGreen/60">Our intelligent AI scans Instagram to find your ideal customers based on your criteria</p>
            </div>
          </div>
          
          {/* Center Arrow Down for Mobile */}
          <div className="flex justify-center mb-10 md:hidden">
            <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0607 59.0607C12.4749 59.6464 11.5251 59.6464 10.9393 59.0607L1.3934 49.5147C0.807611 48.9289 0.807611 47.9792 1.3934 47.3934C1.97919 46.8076 2.92893 46.8076 3.51472 47.3934L12 55.8787L20.4853 47.3934C21.0711 46.8076 22.0208 46.8076 22.6066 47.3934C23.1924 47.9792 23.1924 48.9289 22.6066 49.5147L13.0607 59.0607ZM13.5 0V58H10.5V0H13.5Z" fill="url(#arrow-gradient-2)"/>
              <defs>
                <linearGradient id="arrow-gradient-2" x1="12" y1="0" x2="12" y2="60" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F6BA42" stopOpacity="0.5"/>
                  <stop offset="1" stopColor="#E27A60" stopOpacity="0.8"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Middle Row (mobile only) */}
          <div className="flex flex-col items-center justify-center mb-10 md:hidden">
            {/* Step 3 (Mobile) */}
            <div className="glass-panel p-6 md:p-8 w-full text-center mb-10 animate-fade-up opacity-0" style={{ animationDelay: "300ms", animationFillMode: 'forwards' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange/70 flex items-center justify-center shadow-lg transform -rotate-3">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-darkGreen mb-3">3. Smart DMs Sent</h3>
              <p className="text-brand-darkGreen/60">Personalized messages are sent that get responses and start conversations</p>
            </div>
          </div>
          
          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Step 3 (Desktop) */}
            <div className="hidden md:block glass-panel p-6 md:p-8 w-full md:w-72 text-center animate-fade-up opacity-0" style={{ animationDelay: "300ms", animationFillMode: 'forwards' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange/70 flex items-center justify-center shadow-lg transform -rotate-3">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-darkGreen mb-3">3. Smart DMs Sent</h3>
              <p className="text-brand-darkGreen/60">Personalized messages are sent that get responses and start conversations</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:flex w-20 items-center justify-center mx-4">
              <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M79.0607 13.0607C79.6464 12.4749 79.6464 11.5251 79.0607 10.9393L69.5147 1.3934C68.9289 0.807611 67.9792 0.807611 67.3934 1.3934C66.8076 1.97919 66.8076 2.92893 67.3934 3.51472L75.8787 12L67.3934 20.4853C66.8076 21.0711 66.8076 22.0208 67.3934 22.6066C67.9792 23.1924 68.9289 23.1924 69.5147 22.6066L79.0607 13.0607ZM0 13.5H78V10.5H0V13.5Z" fill="url(#arrow-gradient-3)"/>
                <defs>
                  <linearGradient id="arrow-gradient-3" x1="0" y1="12" x2="80" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E27A60" stopOpacity="0.5"/>
                    <stop offset="1" stopColor="#F18F43" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Step 4 */}
            <div className="glass-panel p-6 md:p-8 w-full md:w-72 text-center mb-10 md:mb-0 animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: 'forwards' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-coral to-brand-coral/70 flex items-center justify-center shadow-lg transform rotate-3">
                <UserCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-darkGreen mb-3">4. AI Qualifies Leads</h3>
              <p className="text-brand-darkGreen/60">Our AI handles conversations and qualifies leads without your involvement</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:flex w-20 items-center justify-center mx-4">
              <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M79.0607 13.0607C79.6464 12.4749 79.6464 11.5251 79.0607 10.9393L69.5147 1.3934C68.9289 0.807611 67.9792 0.807611 67.3934 1.3934C66.8076 1.97919 66.8076 2.92893 67.3934 3.51472L75.8787 12L67.3934 20.4853C66.8076 21.0711 66.8076 22.0208 67.3934 22.6066C67.9792 23.1924 68.9289 23.1924 69.5147 22.6066L79.0607 13.0607ZM0 13.5H78V10.5H0V13.5Z" fill="url(#arrow-gradient-4)"/>
                <defs>
                  <linearGradient id="arrow-gradient-4" x1="0" y1="12" x2="80" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F18F43" stopOpacity="0.5"/>
                    <stop offset="1" stopColor="#125C6F" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Step 5 */}
            <div className="glass-panel p-6 md:p-8 w-full md:w-72 text-center animate-fade-up opacity-0" style={{ animationDelay: "500ms", animationFillMode: 'forwards' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-darkBlue to-brand-darkBlue/70 flex items-center justify-center shadow-lg transform -rotate-3">
                <CalendarCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-darkGreen mb-3">5. Sales on Autopilot</h3>
              <p className="text-brand-darkGreen/60">Qualified leads are scheduled directly into your calendar, ready for closing</p>
            </div>
          </div>
        </div>
        
        {/* Demo CTA */}
        <div className="mt-16 text-center">
          <button className="btn-primary px-8 py-4 shadow-xl">
            Get Started Free for 14 Days
          </button>
          <p className="mt-4 text-brand-darkGreen/60 text-sm">
            No credit card required. Full access to all features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlowchartSection;
