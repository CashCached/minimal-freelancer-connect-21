
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const VideoSalesLetterSection = () => {
  return (
    <section className="py-10 md:py-20 px-4 md:px-12 lg:px-24 bg-gradient-to-b from-white to-brand-cream/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-brand-green/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/2 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-4 md:mb-8">
          <p className="text-xs font-medium text-brand-green mb-2 md:mb-4">Watch Our Process</p>
          
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-1 md:mb-4">
            <span className="text-gradient-cool font-bold">Get 12-20+ Qualified Sales Meetings</span>{" "}
            <span className="relative inline-block">
              Every Month
              <svg className="absolute -bottom-1 left-0 w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="8" viewBox="0 0 100 8" fill="none" preserveAspectRatio="none">
                <path d="M1 5.5C20 0.5 50 9 99 3.5" stroke="#BE9553" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-sm md:text-lg font-semibold text-brand-darkGreen mb-1 md:mb-3 leading-tight md:leading-relaxed max-w-2xl mx-auto">
            All while working 100% pay-on-result
          </p>

          <p className="text-xs md:text-base text-brand-darkGreen/80 mb-2 md:mb-4 leading-tight md:leading-relaxed max-w-2xl mx-auto">
            We help companies grow through targeted outreach, delivering qualified meetings with decision-makers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3 mb-3 md:mb-6 max-w-3xl mx-auto text-left">
            <div className="flex items-start">
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-brand-green/20 flex items-center justify-center mt-0.5 mr-1 md:mr-2 flex-shrink-0">
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="#2A6D4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-brand-darkGreen text-xs md:text-sm">Consistent High Quality Leads & Appointments</p>
            </div>
            
            <div className="flex items-start">
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-brand-green/20 flex items-center justify-center mt-0.5 mr-1 md:mr-2 flex-shrink-0">
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="#2A6D4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-brand-darkGreen text-xs md:text-sm">Hyper-Targeted Messaging for your Specific Niches</p>
            </div>
            
            <div className="flex items-start">
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-brand-green/20 flex items-center justify-center mt-0.5 mr-1 md:mr-2 flex-shrink-0">
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="#2A6D4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-brand-darkGreen text-xs md:text-sm">Data-Driven Campaigns That Improve Over Time</p>
            </div>
          </div>
        </div>
        
        {/* Video Container - Centered and Smaller */}
        <div className="relative max-w-2xl mx-auto rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-brand-cream/30">
          <AspectRatio ratio={16 / 9}>
            <div className="absolute inset-0 bg-brand-darkGreen/10 backdrop-blur-sm flex items-center justify-center z-10">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-brand-green flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <svg 
                  className="w-5 h-5 md:w-8 md:h-8 text-white ml-1" 
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
            <div className="absolute bottom-0 left-0 right-0 bg-brand-darkGreen/70 backdrop-blur-sm p-2 md:p-3 text-white z-20">
              <p className="text-xs md:text-base font-medium">How We Generate 3-5 Qualified Leads Every Week</p>
            </div>
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default VideoSalesLetterSection;
