
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import VideoSalesLetterSection from '@/components/VideoSalesLetterSection';
import OurProcessSection from '@/components/OurProcessSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-teal/5">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Elements with enhanced animation */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-yellow/10 blur-3xl animate-pulse-soft"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-teal/10 blur-3xl animate-pulse-soft delay-300"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-brand-coral/10 blur-2xl animate-pulse-soft delay-500"></div>
        
        {/* Content */}
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 animate-fade-in">
            <span className="text-brand-teal text-sm font-medium">B2B Lead Generation & Appointment Setting Agency</span>
          </div>
          
          <h1 className="heading-xl mb-6 animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <span className="relative inline-block">
              Founders: 
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-brand-coral opacity-30"></div>
            </span>{" "}
            <span className="text-gradient">Get 3-5 High Intent Calls</span> Every Week on <span className="relative inline-block">autopilot
              <svg className="absolute -bottom-1 left-0 w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="8" viewBox="0 0 100 8" fill="none" preserveAspectRatio="none">
                <path d="M1 5.5C20 0.5 50 9 99 3.5" stroke="#BE9553" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="subtitle max-w-2xl mx-auto mb-8 animate-fade-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Pay 100% for Results
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <button className="btn-primary relative overflow-hidden group">
              <span className="relative z-10">Book Now</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button className="btn-secondary relative overflow-hidden group">
              <span className="relative z-10">Watch Demo</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </div>
          
          {/* Brand Color Indicators with animation */}
          <div className="flex justify-center gap-2 mt-8 animate-fade-up opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <div className="w-8 h-2 rounded-full bg-brand-darkBlue"></div>
            <div className="w-8 h-2 rounded-full bg-brand-teal"></div>
            <div className="w-8 h-2 rounded-full bg-brand-yellow"></div>
            <div className="w-8 h-2 rounded-full bg-brand-orange"></div>
            <div className="w-8 h-2 rounded-full bg-brand-coral"></div>
          </div>
        </div>
      </section>
      
      {/* Video Sales Letter Section */}
      <VideoSalesLetterSection />
      
      {/* Partners Section */}
      <PartnersSection />
      
      {/* Our Process Section */}
      <OurProcessSection />

      <Footer />
    </div>
  );
};

export default Index;
