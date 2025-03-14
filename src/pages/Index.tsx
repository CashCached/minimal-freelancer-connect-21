
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';
import VideoSalesLetterSection from '@/components/VideoSalesLetterSection';
import HeroVideoBackground from '@/components/HeroVideoBackground';

const Index = () => {
  // Use a publicly accessible video URL
  const videoUrl = "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4";
  // Fallback in case the video doesn't load
  const fallbackImageUrl = "/lovable-uploads/0ba739f3-dbf9-4b3a-8f40-5a69fa44a8a8.png";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-teal/5">
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Video Background */}
        <HeroVideoBackground videoUrl={videoUrl} fallbackImageUrl={fallbackImageUrl} />
        
        {/* Background Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-yellow/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-teal/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-brand-coral/10 blur-2xl"></div>
        
        {/* Content */}
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20">
            <span className="text-brand-teal text-sm font-medium">B2B Lead Generation & Appointment Setting Agency</span>
          </div>
          
          <h1 className="heading-xl mb-6">
            <span className="relative inline-block">
              Founders: 
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-brand-coral opacity-30"></div>
            </span>{" "}
            <span className="text-gradient">Get 3-5 High Intent Calls</span> Every Week on autopilot
          </h1>
          
          <p className="subtitle max-w-2xl mx-auto mb-8">
            Pay 100% for Results
          </p>
          
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
