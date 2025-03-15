
import React from 'react';
import { ArrowRight } from 'lucide-react';

const OurProcessSection = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We analyze your business goals and target audience to create a tailored lead generation strategy.'
    },
    {
      number: '02',
      title: 'Implementation',
      description: 'Our specialists build and deploy your custom B2B lead generation campaign.'
    },
    {
      number: '03',
      title: 'Optimization',
      description: 'We continuously refine your campaign based on performance data to maximize results.'
    },
    {
      number: '04',
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
        
        <div className="grid gap-24">
          {processSteps.map((step) => (
            <div 
              key={step.number}
              className="flex flex-col items-center"
            >
              {/* Step Number */}
              <div className="mb-8">
                <div className="flex items-center justify-center w-20 h-20 rounded-full backdrop-blur-sm bg-white/80 shadow-lg border border-white/20">
                  <span className="text-3xl font-light text-brand-green">{step.number}</span>
                </div>
              </div>
              
              {/* Step Content */}
              <div className="text-center max-w-2xl">
                <h3 className="text-2xl font-medium text-brand-darkGreen mb-4">{step.title}</h3>
                <p className="text-brand-darkGreen/60 text-lg font-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <a href="#" className="group inline-flex items-center gap-2 text-brand-green hover:text-brand-darkGreen transition-colors duration-300">
            <span className="font-medium">Learn more about our process</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
