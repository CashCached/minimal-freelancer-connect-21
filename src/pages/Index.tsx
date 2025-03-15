
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
      <section className="pt-20 md:pt-40 pb-12 md:pb-24 px-4 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-yellow/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-teal/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-brand-coral/10 blur-2xl"></div>
        
        {/* Content */}
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-block mb-3 md:mb-4 px-3 py-1 rounded-full bg-brand-teal/10">
            <span className="text-brand-teal text-xs md:text-sm font-medium">B2B Lead Generation & Appointment Setting Agency</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">
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
          
          <p className="text-base md:text-lg text-brand-darkGreen/80 max-w-2xl mx-auto mb-6 md:mb-8">
            Pay 100% for Results
          </p>
          
          <div className="flex flex-row justify-center gap-3 mb-8 md:mb-12">
            <button className="btn-primary text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              Book Now
            </button>
            <button className="btn-secondary text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              Watch Demo
            </button>
          </div>
          
          {/* Brand Color Indicators */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            <div className="w-6 md:w-8 h-2 rounded-full bg-brand-darkBlue"></div>
            <div className="w-6 md:w-8 h-2 rounded-full bg-brand-teal"></div>
            <div className="w-6 md:w-8 h-2 rounded-full bg-brand-yellow"></div>
            <div className="w-6 md:w-8 h-2 rounded-full bg-brand-orange"></div>
            <div className="w-6 md:w-8 h-2 rounded-full bg-brand-coral"></div>
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
