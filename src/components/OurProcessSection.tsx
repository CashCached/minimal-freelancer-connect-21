
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
      description: 'Once we've proven success, we scale your campaign to deliver more high-quality leads.'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F6F6F7]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="heading-md text-brand-darkGreen mb-4">Our Process</h2>
          <p className="text-brand-darkGreen/70 max-w-2xl mx-auto text-lg">
            A systematic approach to generating high-intent leads for your business
          </p>
        </div>
        
        <div className="grid gap-16 md:gap-24">
          {processSteps.map((step, index) => (
            <div 
              key={step.number}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
            >
              {/* Step Number */}
              <div className="w-full md:w-1/4 flex justify-center">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-brand-green/10 to-brand-green/5">
                  <span className="text-3xl font-light text-brand-green">{step.number}</span>
                </div>
              </div>
              
              {/* Step Content */}
              <div className="w-full md:w-3/4 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-brand-darkGreen mb-3">{step.title}</h3>
                <p className="text-brand-darkGreen/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-brand-green hover:text-brand-darkGreen transition-colors duration-300">
            <span className="font-medium">Learn more about our process</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
