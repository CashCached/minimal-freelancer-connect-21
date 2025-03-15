
import React from 'react';
import { Bot, Search, UserRound, Calendar, BarChart } from 'lucide-react';

const AIAgentsSection = () => {
  const aiFeatures = [
    {
      icon: <Search className="h-8 w-8 text-brand-teal" />,
      title: "Intelligent Prospect Identification",
      description: "Our AI agents continuously scan the web, social platforms, and business databases to identify companies and decision-makers that match your ideal customer profile with precision."
    },
    {
      icon: <UserRound className="h-8 w-8 text-brand-yellow" />,
      title: "Personalized Outreach",
      description: "The AI analyzes prospect data to craft hyper-personalized outreach messages that resonate with each potential client's specific needs and pain points."
    },
    {
      icon: <Bot className="h-8 w-8 text-brand-orange" />,
      title: "Multi-Channel Engagement",
      description: "Our AI agents orchestrate outreach across email, LinkedIn, and other channels, automatically adjusting tactics based on prospect response patterns."
    },
    {
      icon: <Calendar className="h-8 w-8 text-brand-coral" />,
      title: "Automated Meeting Scheduling",
      description: "When a prospect shows interest, our AI seamlessly transitions to scheduling meetings directly on your calendar based on your availability preferences."
    },
    {
      icon: <BarChart className="h-8 w-8 text-brand-darkBlue" />,
      title: "Performance Analytics",
      description: "Comprehensive dashboards track every interaction and optimize outreach strategies in real-time to continuously improve your conversion rates."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 rounded-full bg-brand-teal/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 rounded-full bg-brand-yellow/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-orange/10">
            <span className="text-brand-orange font-semibold text-sm">Our Technology</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkGreen mb-4">
            AI-Powered Lead Generation
          </h2>
          
          <p className="text-lg text-brand-darkGreen/70 max-w-2xl mx-auto">
            SalesBridge deploys sophisticated AI agents that work 24/7 to identify, engage, and convert your ideal prospects into qualified sales opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all bg-white/70"
            >
              <div className="mb-4 p-3 inline-block rounded-lg bg-gray-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-darkGreen mb-3">{feature.title}</h3>
              <p className="text-brand-darkGreen/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="p-6 md:p-8 max-w-4xl mx-auto rounded-xl bg-gradient-to-r from-brand-darkGreen to-brand-green text-white">
            <h3 className="text-2xl font-bold mb-3">How It Works</h3>
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

export default AIAgentsSection;
