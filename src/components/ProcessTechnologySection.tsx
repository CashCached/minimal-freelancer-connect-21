
import React from 'react';
import { AtSign, Search, MessagesSquare, UserCheck, Zap } from 'lucide-react';

const ProcessTechnologySection = () => {
  const processSteps = [
    {
      number: '01',
      icon: <AtSign className="h-6 w-6 text-brand-teal" />,
      title: 'Sign Up & Connect Instagram',
      description: 'Connect your Instagram account in a few clicks through our secure OAuth integration.'
    },
    {
      number: '02',
      icon: <Search className="h-6 w-6 text-brand-yellow" />,
      title: 'AI Finds Leads',
      description: 'Our AI identifies high-potential prospects that match your ideal customer profile across Instagram.'
    },
    {
      number: '03',
      icon: <MessagesSquare className="h-6 w-6 text-brand-orange" />,
      title: 'Smart DMs Sent',
      description: 'Personalized messages are automatically sent to prospects based on their profiles and activity.'
    },
    {
      number: '04',
      icon: <UserCheck className="h-6 w-6 text-brand-coral" />,
      title: 'AI Qualifies Leads',
      description: 'Our system engages with responses, answers questions, and qualifies leads without your involvement.'
    },
    {
      number: '05',
      icon: <Zap className="h-6 w-6 text-brand-darkBlue" />,
      title: 'Sales on Autopilot',
      description: 'Qualified leads are seamlessly transferred to your sales process, with meetings booked directly into your calendar.'
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F6F6F7]/80">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-orange/10">
            <span className="text-brand-orange font-semibold text-sm">Instagram DM Automation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkGreen mb-5">How It Works</h2>
          <p className="text-brand-darkGreen/60 max-w-xl mx-auto text-lg font-light">
            A 5-step automated process that turns Instagram activity into qualified sales opportunities
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
        
        {/* AI Technology Benefits Section */}
        <div className="mt-20 text-center">
          <div className="p-6 md:p-8 rounded-xl bg-gradient-to-r from-brand-darkGreen to-brand-green text-white">
            <h3 className="text-2xl font-bold mb-3">Our Instagram AI Automation Technology</h3>
            <p className="mb-6 text-white/90">
              Our proprietary AI agents handle all Instagram interactions naturally, responding like a human while scaling your outreach to hundreds of potential customers daily.
            </p>
            <button className="bg-white text-brand-darkGreen font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-all shadow-lg">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTechnologySection;
