
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const VideoSalesLetterSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-brand-cream/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-brand-green/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/2 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-cream/30">
            <AspectRatio ratio={16 / 9}>
              <div className="absolute inset-0 bg-brand-darkGreen/10 backdrop-blur-sm flex items-center justify-center">
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
            </AspectRatio>
          </div>
          
          {/* Content Container */}
          <div>
            <div className="inline-block mb-6 px-4 py-1 rounded-full bg-brand-green/10 border border-brand-green/20">
              <span className="text-brand-green text-sm font-medium">Watch Our Process</span>
            </div>
            
            <h2 className="heading-lg mb-6">
              <span className="text-gradient-cool">See how we generate</span>{" "}
              <span className="relative">
                high-intent leads
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-brand-gold/50"></div>
              </span>
            </h2>
            
            <p className="text-lg text-brand-darkGreen/80 mb-8 leading-relaxed">
              Our proven methodology has helped hundreds of founders schedule quality meetings with decision-makers who are actively seeking your solutions.
            </p>
            
            {/* Testimonial card */}
            <Card className="mb-8 bg-white/80 backdrop-blur-sm border border-brand-cream/30 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-brand-gold/20 p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-brand-darkGreen/90 italic mb-3">
                      "Within just 2 weeks of working with their team, we had 4 calls booked with our ideal target customers. These were high-quality leads that converted into deals worth over $50,000."
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center mr-3">
                        <span className="text-brand-green font-semibold">MK</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-darkGreen">Michael Klein</p>
                        <p className="text-xs text-brand-darkGreen/70">CEO, TechSolutions Inc.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-6">
                Watch Full Demo
              </Button>
              <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green/10 rounded-full px-6">
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSalesLetterSection;
