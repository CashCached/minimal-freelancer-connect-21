
import React from 'react';
import { Search, UserRound, Bot, Calendar, BarChart, ArrowRight } from 'lucide-react';

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
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F6F6F7]/80 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 rounded-full bg-brand-teal/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 rounded-full bg-brand-yellow/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-orange/10">
            <span className="text-brand-orange font-semibold text-sm">Our AI-Powered Process</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkGreen mb-4">
            How SalesBridge Works
          </h2>
          
          <p className="text-lg text-brand-darkGreen/70 max-w-2xl mx-auto">
            Our systematic approach combines cutting-edge AI technology with proven sales methodologies to generate high-intent leads on autopilot.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all bg-white/70 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-sm bg-white/80 shadow-sm border border-white/20">
                  <span className="text-lg font-light text-brand-green">{step.number}</span>
                </div>
                <div className="p-2 rounded-lg bg-gray-50">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-brand-darkGreen mb-3">{step.title}</h3>
              <p className="text-brand-darkGreen/70 flex-grow">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* How It Works Section */}
        <div className="mt-16 text-center">
          <div className="p-6 md:p-8 max-w-4xl mx-auto rounded-xl bg-gradient-to-r from-brand-darkGreen to-brand-green text-white">
            <h3 className="text-2xl font-bold mb-3">AI-Powered Lead Generation</h3>
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
          
          <div className="mt-12">
            <button className="btn-primary flex items-center mx-auto gap-2 group">
              Book a Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTechnologySection;
