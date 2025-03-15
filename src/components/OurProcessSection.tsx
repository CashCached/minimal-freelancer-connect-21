
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

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
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F6F6F7]/80">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkGreen mb-5">Our Process</h2>
          <p className="text-brand-darkGreen/60 max-w-xl mx-auto text-lg font-light">
            A systematic approach to generating high-intent leads for your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-20">
          {processSteps.map((step) => (
            <div 
              key={step.number}
              className="flex flex-col items-center hover-lift transition-all duration-300"
            >
              {/* Step Number */}
              <div className="mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-sm bg-white/80 shadow-lg border border-white/20">
                  <span className="text-2xl font-light text-brand-green">{step.number}</span>
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
