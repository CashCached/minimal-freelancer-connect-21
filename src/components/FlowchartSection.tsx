
import React, { useEffect } from 'react';
import { Instagram, Bot, UserCheck, Calendar, Sparkles } from 'lucide-react';

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
    <section id="flowchart-section" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto max-w-6xl">
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
        <div className="relative py-10 px-4 md:px-0 overflow-hidden">
          {/* Background Gradient Elements */}
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-teal/5 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-coral/5 blur-3xl"></div>
          
          {/* Flowchart Container */}
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center justify-center mb-8 md:mb-12">
              <div className="glass-panel p-6 md:p-8 w-full md:w-64 text-center animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-teal to-brand-teal/70 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-darkGreen mb-2">Connect Instagram</h3>
                <p className="text-brand-darkGreen/60 text-sm">Secure OAuth connection to your Instagram account</p>
              </div>
              
              {/* Arrow */}
              <div className="w-12 h-12 flex items-center justify-center my-4 md:my-0 md:mx-6 rotate-90 md:rotate-0">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807611 27.9792 0.807611 27.3934 1.3934C26.8076 1.97919 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z" fill="#102321" fillOpacity="0.2"/>
                </svg>
              </div>
            </div>
            
            {/* Step 2 & 3 */}
            <div className="flex flex-col md:flex-row items-center justify-center mb-8 md:mb-12">
              <div className="glass-panel p-6 md:p-8 w-full md:w-64 text-center animate-fade-up opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-yellow to-brand-yellow/70 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-darkGreen mb-2">AI Finds Leads</h3>
                <p className="text-brand-darkGreen/60 text-sm">Our AI analyzes profiles to find your ideal customers</p>
              </div>
              
              {/* Arrow */}
              <div className="w-12 h-12 flex items-center justify-center my-4 md:my-0 md:mx-6 rotate-90 md:rotate-0">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807611 27.9792 0.807611 27.3934 1.3934C26.8076 1.97919 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z" fill="#102321" fillOpacity="0.2"/>
                </svg>
              </div>
              
              <div className="glass-panel p-6 md:p-8 w-full md:w-64 text-center animate-fade-up opacity-0 delay-200" style={{ animationFillMode: 'forwards' }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange/70 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-darkGreen mb-2">Smart DMs Sent</h3>
                <p className="text-brand-darkGreen/60 text-sm">Personalized messages that get responses</p>
              </div>
            </div>
            
            {/* Center Arrow Down */}
            <div className="flex justify-center mb-8 md:mb-12">
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                <path d="M10.9393 39.0607C11.5251 39.6464 12.4749 39.6464 13.0607 39.0607L22.6066 29.5147C23.1924 28.9289 23.1924 27.9792 22.6066 27.3934C22.0208 26.8076 21.0711 26.8076 20.4853 27.3934L12 35.8787L3.51472 27.3934C2.92893 26.8076 1.97919 26.8076 1.3934 27.3934C0.807611 27.9792 0.807611 28.9289 1.3934 29.5147L10.9393 39.0607ZM10.5 0V38H13.5V0H10.5Z" fill="#102321" fillOpacity="0.2"/>
              </svg>
            </div>
            
            {/* Step 4 & 5 */}
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="glass-panel p-6 md:p-8 w-full md:w-64 text-center animate-fade-up opacity-0 delay-300" style={{ animationFillMode: 'forwards' }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-coral to-brand-coral/70 flex items-center justify-center">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-darkGreen mb-2">AI Qualifies Leads</h3>
                <p className="text-brand-darkGreen/60 text-sm">Automatic conversation management and qualification</p>
              </div>
              
              {/* Arrow */}
              <div className="w-12 h-12 flex items-center justify-center my-4 md:my-0 md:mx-6 rotate-90 md:rotate-0">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807611 27.9792 0.807611 27.3934 1.3934C26.8076 1.97919 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z" fill="#102321" fillOpacity="0.2"/>
                </svg>
              </div>
              
              <div className="glass-panel p-6 md:p-8 w-full md:w-64 text-center animate-fade-up opacity-0 delay-400" style={{ animationFillMode: 'forwards' }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-darkBlue to-brand-darkBlue/70 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-darkGreen mb-2">Sales on Autopilot</h3>
                <p className="text-brand-darkGreen/60 text-sm">Meetings booked directly in your calendar</p>
              </div>
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
