
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Sparkles } from 'lucide-react';

const VideoSalesLetterSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-brand-cream/20 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-brand-green/5 blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-1/3 left-1/2 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl animate-pulse-soft delay-300"></div>
      
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-12 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full bg-brand-green/10 border border-brand-green/20">
            <Sparkles className="h-4 w-4 text-brand-gold" />
            <span className="text-brand-green text-sm font-medium">Watch Our Process</span>
          </div>
          
          <h2 className="heading-lg mb-6">
            <span className="text-gradient-cool">See how we generate</span>{" "}
            <span className="relative">
              high-intent leads
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-brand-gold/50"></div>
            </span>
          </h2>
          
          <p className="text-lg text-brand-darkGreen/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Our proven methodology has helped hundreds of founders schedule quality meetings with decision-makers who are actively seeking your solutions.
          </p>
        </div>
        
        {/* Enhanced Video Container */}
        <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-brand-cream/30 transform hover:scale-[1.01] transition-all duration-500 animate-fade-up opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
          <AspectRatio ratio={16 / 9}>
            <div className="absolute inset-0 bg-brand-darkGreen/10 backdrop-blur-sm flex items-center justify-center z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-brand-green to-brand-gold flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 relative group">
                <span className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-0 group-hover:opacity-70"></span>
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
