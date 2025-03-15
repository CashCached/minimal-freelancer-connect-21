
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const VideoSalesLetterSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-8 md:py-20 px-4 md:px-12 lg:px-24 bg-gradient-to-b from-white to-brand-cream/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-brand-green/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/2 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl">
        <div className="mb-4 md:mb-8">
          {/* Main heading - larger on mobile */}
          <h2 className="text-3xl md:text-3xl font-bold tracking-tight text-left text-brand-darkGreen mb-2 md:mb-4">
            Get 12-20+ Qualified Sales Meetings Every Month
          </h2>
          
          {/* Subheading - styled in gold color */}
          <p className="text-xl md:text-xl font-bold text-left text-brand-gold mb-3 md:mb-4 leading-tight">
            All while working 100% pay-on-result
          </p>

          {/* Description text */}
          <p className="text-base md:text-lg text-left text-brand-darkGreen mb-4 md:mb-6 leading-snug">
            We help companies grow through targeted outreach, delivering qualified meetings with decision-makers.
          </p>
          
          {/* Bullet points with gold circular background */}
          <div className="grid grid-cols-1 gap-3 mb-5 md:mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center mr-3 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-base md:text-lg text-brand-darkGreen font-medium">Consistent High Quality Leads & Appointments</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center mr-3 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-base md:text-lg text-brand-darkGreen font-medium">Hyper-Targeted Messaging for your Specific Niches</p>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center mr-3 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-base md:text-lg text-brand-darkGreen font-medium">Data-Driven Campaigns That Improve Over Time</p>
            </div>
          </div>
        </div>
        
        {/* Video Container - Styled to look like the screenshot */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-black">
          {/* Video header bar */}
          <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mr-2">
                <span className="font-bold text-white">T</span>
              </div>
              <span className="font-medium">Grow with Outbound</span>
            </div>
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
              </svg>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </div>
          </div>
          
          {/* Video duration badge */}
          <div className="absolute top-16 left-4 z-10">
            <div className="bg-black/70 text-white px-3 py-1 rounded-full flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>5 min</span>
            </div>
          </div>
          
          <AspectRatio ratio={16 / 9}>
            <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
              {/* Play button */}
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform">
                <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <img 
              src="/placeholder.svg" 
              alt="Video Thumbnail" 
              className="object-cover w-full h-full"
            />
            
            {/* Video controls at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-2 flex justify-center items-center z-20">
              <div className="bg-black/80 rounded-full px-4 py-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                <span className="text-white font-medium">1.2×</span>
              </div>
            </div>
          </AspectRatio>
        </div>
        
        {/* Call to action button */}
        <div className="mt-8 flex justify-center">
          <Button className="bg-brand-darkGreen hover:bg-brand-darkGreen/90 text-white px-8 py-6 rounded-full text-lg font-medium">
            👉 Schedule Your Free Strategy Session 👈
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSalesLetterSection;
