
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import VideoSalesLetterSection from '@/components/VideoSalesLetterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-teal/5">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <iframe 
            src="https://www.canva.com/design/DAGhvFVL6rc/LxSpe7rEgag5ARFuGjLSog/watch?utm_content=DAGhvFVL6rc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0f5f5c0c64&embed&autoplay=1&loop=1&muted=1" 
            className="w-full h-full scale-[1.02] object-cover"
            allow="autoplay" 
            allowFullScreen
            title="Background Video"
          ></iframe>
        </div>
        
        {/* Content */}
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/30 backdrop-blur-sm">
            <span className="text-white text-sm font-medium">B2B Lead Generation & Appointment Setting Agency</span>
          </div>
          
          <h1 className="heading-xl mb-6 text-white">
            <span className="relative inline-block">
              Founders: 
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-brand-coral opacity-50"></div>
            </span>{" "}
            <span className="text-gradient">Get 3-5 High Intent Calls</span> Every Week on autopilot
          </h1>
          
          <p className="subtitle max-w-2xl mx-auto mb-8 text-white">
            Pay 100% for Results
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary">
              Book Now
            </button>
            <button className="btn-secondary bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
              Watch Demo
            </button>
          </div>
          
          {/* Brand Color Indicators */}
          <div className="flex justify-center gap-2 mt-8">
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

      <Footer />
    </div>
  );
};

export default Index;
