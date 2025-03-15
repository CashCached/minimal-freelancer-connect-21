
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const VideoSalesLetterSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-brand-cream/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-brand-green/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/2 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-12">
          <div className="inline-block mb-6 px-4 py-1 rounded-full bg-brand-green/10 border border-brand-green/20">
            <span className="text-brand-green text-sm font-medium">Watch Our Process</span>
          </div>
          
          <h2 className="heading-lg mb-6">
            <span className="text-gradient-cool font-bold">Get 12-20+ Qualified Sales Meetings</span>{" "}
            <span className="relative">
              Every Month
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-brand-gold/50"></div>
            </span>
          </h2>
          
          <p className="text-lg font-semibold text-brand-darkGreen mb-6 leading-relaxed max-w-2xl mx-auto">
            All while working 100% pay-on-result
          </p>

          <p className="text-base text-brand-darkGreen/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            We help companies grow through targeted outreach, delivering qualified meetings with decision-makers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto text-left">
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center mt-0.5 mr-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="#2A6D4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-brand-darkGreen text-sm md:text-base">Consistent High Quality Leads & Appointments</p>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center mt-0.5 mr-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="#2A6D4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-brand-darkGreen text-sm md:text-base">Hyper-Targeted Messaging for your Specific Niches</p>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center mt-0.5 mr-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="#2A6D4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-brand-darkGreen text-sm md:text-base">Data-Driven Campaigns That Improve Over Time</p>
            </div>
          </div>
        </div>
        
        {/* Video Container - Centered and Smaller */}
        <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-brand-cream/30">
          <AspectRatio ratio={16 / 9}>
            <div className="absolute inset-0 bg-brand-darkGreen/10 backdrop-blur-sm flex items-center justify-center z-10">
              <div className="w-20 h-20 rounded-full bg-brand-green flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <svg 
                  className="w-8 h-8 text-white ml-1" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <img 
              src="/placeholder.svg" 
              alt="Video Thumbnail" 
              className="object-cover w-full h-full opacity-70"
            />
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-brand-darkGreen/70 backdrop-blur-sm p-4 text-white z-20">
              <p className="font-medium">How We Generate 3-5 Qualified Leads Every Week</p>
            </div>
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default VideoSalesLetterSection;
