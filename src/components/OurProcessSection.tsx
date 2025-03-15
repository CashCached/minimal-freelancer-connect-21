
import React from 'react';
import { Sparkles } from 'lucide-react';

const OurProcessSection = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We analyze your business goals and target audience to create a tailored lead generation strategy.'
    },
    {
      number: '02',
      title: 'Research',
      description: 'Our team identifies ideal prospects and decision-makers within your target industry verticals.'
    },
    {
      number: '03',
      title: 'Planning',
      description: 'We craft personalized messaging and outreach sequences tailored to your unique value proposition.'
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'Our specialists build and deploy your custom B2B lead generation campaign.'
    },
    {
      number: '05',
      title: 'Optimization',
      description: 'We continuously refine your campaign based on performance data to maximize results.'
    },
    {
      number: '06',
      title: 'Scale',
      description: 'Once we\'ve proven success, we scale your campaign to deliver more high-quality leads.'
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F6F6F7]/80 relative overflow-hidden">
      {/* Background elements for personality */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-brand-gold/5 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-brand-green/5 blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-brand-cream/10 blur-2xl animate-pulse-soft delay-300"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-brand-green/10 border border-brand-green/20">
            <Sparkles className="h-4 w-4 text-brand-gold" />
            <span className="text-brand-green text-sm font-medium">Our Proven Method</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-darkGreen to-brand-green">Our Process</span>
          </h2>
          <p className="text-brand-darkGreen/60 max-w-xl mx-auto text-lg font-light">
            A systematic approach to generating high-intent leads for your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-20">
          {processSteps.map((step, index) => (
            <div 
              key={step.number}
              className={`flex flex-col items-center transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg rounded-2xl p-6 backdrop-blur-sm bg-white/40 border border-white/20 animate-fade-up opacity-0`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Step Number */}
              <div className="mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-green to-brand-gold opacity-20 blur-sm transform scale-110"></div>
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-sm bg-white/80 shadow-lg border border-white/20">
                  <span className="text-2xl font-light bg-clip-text text-transparent bg-gradient-to-r from-brand-darkGreen to-brand-green">{step.number}</span>
                </div>
              </div>
              
              {/* Step Content */}
              <div className="text-center">
                <h3 className="text-xl font-medium text-brand-darkGreen mb-3">{step.title}</h3>
                <p className="text-brand-darkGreen/60 text-base font-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
