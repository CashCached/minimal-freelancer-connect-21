
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
              className="p-6 rounded-xl backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all bg-white/70"
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
              <p className="text-brand-darkGreen/70">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* AI Technology Features */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-teal/10">
              <span className="text-brand-teal font-semibold text-sm">AI-Powered Automation</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-brand-darkGreen mb-4">
              Our Technology
            </h2>
            
            <p className="text-lg text-brand-darkGreen/70 max-w-2xl mx-auto">
              SalesBridge deploys sophisticated AI agents that work 24/7 to identify, engage, and convert your ideal prospects into qualified sales opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl backdrop-blur-sm border border-gray-100 bg-white/70">
              <h3 className="text-xl font-semibold text-brand-darkGreen mb-4">Intelligent Prospecting</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-teal/10 text-brand-teal mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="text-brand-darkGreen/80">AI agents continuously scan multiple data sources to find perfect-fit prospects</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-teal/10 text-brand-teal mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="text-brand-darkGreen/80">Algorithms identify decision-makers with purchasing authority at target companies</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-teal/10 text-brand-teal mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="text-brand-darkGreen/80">Advanced filtering ensures prospects match your ideal customer profile</p>
                </li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl backdrop-blur-sm border border-gray-100 bg-white/70">
              <h3 className="text-xl font-semibold text-brand-darkGreen mb-4">Personalized Engagement</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-yellow/10 text-brand-yellow mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="text-brand-darkGreen/80">AI analyzes each prospect's profile to craft hyper-personalized outreach</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-yellow/10 text-brand-yellow mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="text-brand-darkGreen/80">Multi-channel coordination across email, LinkedIn, and other platforms</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-yellow/10 text-brand-yellow mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="text-brand-darkGreen/80">Automated follow-ups with timing optimized for maximum response rates</p>
                </li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl backdrop-blur-sm border border-gray-100 bg-white/70">
              <h3 className="text-xl font-semibold text-brand-darkGreen mb-4">Meeting Scheduling</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-coral/10 text-brand-coral mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="text-brand-darkGreen/80">Seamless transition from conversation to calendar booking</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-coral/10 text-brand-coral mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="text-brand-darkGreen/80">AI handles negotiating times based on your availability preferences</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-coral/10 text-brand-coral mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="text-brand-darkGreen/80">Automatic meeting reminders and pre-meeting preparation materials</p>
                </li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl backdrop-blur-sm border border-gray-100 bg-white/70">
              <h3 className="text-xl font-semibold text-brand-darkGreen mb-4">Analytics & Optimization</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-darkBlue/10 text-brand-darkBlue mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="text-brand-darkGreen/80">Real-time dashboards track campaign performance metrics</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-darkBlue/10 text-brand-darkBlue mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="text-brand-darkGreen/80">AI continuously learns what works and adjusts strategies accordingly</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-brand-darkBlue/10 text-brand-darkBlue mt-1">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="text-brand-darkGreen/80">Weekly reports with actionable insights for improving conversion rates</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="p-6 md:p-8 max-w-4xl mx-auto rounded-xl bg-gradient-to-r from-brand-darkGreen to-brand-green text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
            <p className="mb-6 text-white/90">
              Our AI prospecting system replaces traditional manual outreach with an intelligent, automated solution that delivers consistent results.
            </p>
            <button className="px-6 py-3 bg-white text-brand-darkGreen rounded-full font-medium hover:bg-brand-cream transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTechnologySection;
