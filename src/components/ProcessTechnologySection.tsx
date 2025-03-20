
import React from 'react';
import { Search, UserRound, Bot, Calendar, BarChart } from 'lucide-react';

const ProcessTechnologySection = () => {
  const processSteps = [
    {
      number: '01',
      icon: <Search className="h-6 w-6 text-brand-teal" />,
      title: 'Discovery & Research',
      description: 'Our AI agents scan the web, databases, and social platforms to identify ideal prospects that match your customer profile.'
    },
    {
      number: '02',
      icon: <UserRound className="h-6 w-6 text-brand-yellow" />,
      title: 'Planning & Personalization',
      description: 'We craft personalized messaging sequences tailored to each prospect's specific needs and pain points.'
    },
    {
      number: '03',
      icon: <Bot className="h-6 w-6 text-brand-orange" />,
      title: 'Implementation & Engagement',
      description: 'Our AI orchestrates outreach across multiple channels, automatically adjusting tactics based on response patterns.'
    },
    {
      number: '04',
      icon: <Calendar className="h-6 w-6 text-brand-coral" />,
      title: 'Meeting Scheduling',
      description: 'When prospects show interest, our system seamlessly schedules meetings directly on your calendar.'
    },
    {
      number: '05',
      icon: <BarChart className="h-6 w-6 text-brand-darkBlue" />,
      title: 'Optimization & Scaling',
      description: 'We continuously refine campaigns based on performance data to maximize results and scale successful approaches.'
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F6F6F7]/80">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-orange/10">
            <span className="text-brand-orange font-semibold text-sm">Our AI-Powered Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkGreen mb-5">Our Technology & Process</h2>
          <p className="text-brand-darkGreen/60 max-w-xl mx-auto text-lg font-light">
            A systematic approach powered by AI to generate high-intent leads for your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-20">
          {processSteps.map((step) => (
            <div 
              key={step.number}
              className="flex flex-col items-center"
            >
              {/* Step Number and Icon */}
              <div className="mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-sm bg-white/80 shadow-lg border border-white/20">
                  <span className="text-2xl font-light text-brand-green flex items-center gap-2">
                    {step.number}
                    {step.icon}
                  </span>
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
        
        {/* Technology Benefits Section */}
        <div className="mt-20 text-center">
          <div className="p-6 md:p-8 rounded-xl bg-gradient-to-r from-brand-darkGreen to-brand-green text-white">
            <h3 className="text-2xl font-bold mb-3">How Our AI Technology Works</h3>
            <p className="mb-6 text-white/90">
              Our proprietary AI agents replace traditional manual prospecting with an intelligent, automated system that scales your outreach while maintaining a personal touch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="w-6 h-6 flex items-center justify-center bg-white text-brand-darkGreen rounded-full text-sm font-bold">1</span>
                <span>Deploy AI Agents</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="w-6 h-6 flex items-center justify-center bg-white text-brand-darkGreen rounded-full text-sm font-bold">2</span>
                <span>Intelligent Prospecting</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="w-6 h-6 flex items-center justify-center bg-white text-brand-darkGreen rounded-full text-sm font-bold">3</span>
                <span>Personalized Outreach</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="w-6 h-6 flex items-center justify-center bg-white text-brand-darkGreen rounded-full text-sm font-bold">4</span>
                <span>Meeting Booking</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="w-6 h-6 flex items-center justify-center bg-white text-brand-darkGreen rounded-full text-sm font-bold">5</span>
                <span>You Close Deals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTechnologySection;
