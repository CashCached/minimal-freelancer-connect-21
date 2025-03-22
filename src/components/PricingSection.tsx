
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 lg:px-24 bg-brand-teal/5">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-yellow/10">
            <span className="text-brand-yellow font-semibold text-sm">Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkGreen mb-4">Start Growing Your Business Today</h2>
          <p className="text-brand-darkGreen/60 max-w-2xl mx-auto">
            No long-term contracts. Cancel anytime. 14-day free trial on all plans.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="glass-panel p-8 hover-lift transition-all">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-brand-darkGreen mb-2">Starter</h3>
              <div className="inline-block mb-2 px-2 py-1 rounded-full bg-brand-yellow/10">
                <span className="text-brand-yellow font-medium text-xs">Best for startups</span>
              </div>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold text-brand-darkGreen">₹7,999</span>
                <span className="text-brand-darkGreen/60 mb-1">/month</span>
              </div>
              <p className="text-brand-darkGreen/60 text-sm">Perfect for small businesses just getting started</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-brand-teal mt-0.5" />
                <span className="text-brand-darkGreen/80">Up to 100 DM outreach per day</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-brand-teal mt-0.5" />
                <span className="text-brand-darkGreen/80">AI lead qualification</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-brand-teal mt-0.5" />
                <span className="text-brand-darkGreen/80">Basic calendar integration</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-brand-teal mt-0.5" />
                <span className="text-brand-darkGreen/80">Email support</span>
              </li>
            </ul>
            
            <Link to="/get-started" className="w-full">
              <button className="w-full btn-secondary hover:bg-brand-teal/10">
                Start Free Trial
              </button>
            </Link>
          </div>
          
          {/* Pro Plan (Featured) */}
          <div className="glass-panel p-8 border-2 border-brand-teal/20 scale-105 shadow-xl hover-lift transition-all">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-teal text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-brand-darkGreen mb-2">Professional</h3>
              <div className="inline-block mb-2 px-2 py-1 rounded-full bg-brand-teal/10">
                <span className="text-brand-teal font-medium text-xs">Best for growing businesses</span>
              </div>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold text-brand-darkGreen">₹15,999</span>
                <span className="text-brand-darkGreen/60 mb-1">/month</span>
              </div>
              <p className="text-brand-darkGreen/60 text-sm">For growing businesses ready to scale</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-brand-teal mt-0.5" />
                <span className="text-brand-darkGreen/80">Up to 500 DM outreach per day</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-brand-teal mt-0.5" />
                <span className="text-brand-darkGreen/80">Advanced AI lead qualification</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-brand-teal mt-0.5" />
                <span className="text-brand-darkGreen/80">Full CRM integration</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-brand-teal mt-0.5" />
                <span className="text-brand-darkGreen/80">Custom message templates</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-brand-teal mt-0.5" />
                <span className="text-brand-darkGreen/80">Priority support</span>
              </li>
            </ul>
            
            <Link to="/get-started" className="w-full">
              <button className="w-full btn-primary">
                Start Free Trial
              </button>
            </Link>
          </div>
          
          {/* Enterprise Plan */}
          <div className="glass-panel p-8 hover-lift transition-all">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-brand-darkGreen mb-2">Enterprise</h3>
              <div className="inline-block mb-2 px-2 py-1 rounded-full bg-brand-coral/10">
                <span className="text-brand-coral font-medium text-xs">Best for large teams</span>
              </div>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold text-brand-darkGreen">₹39,999</span>
                <span className="text-brand-darkGreen/60 mb-1">/month</span>
              </div>
              <p className="text-brand-darkGreen/60 text-sm">For large teams and agencies</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-brand-teal mt-0.5" />
                <span className="text-brand-darkGreen/80">Unlimited DM outreach</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-brand-teal mt-0.5" />
                <span className="text-brand-darkGreen/80">Dedicated account manager</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-brand-teal mt-0.5" />
                <span className="text-brand-darkGreen/80">White labeling options</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-brand-teal mt-0.5" />
                <span className="text-brand-darkGreen/80">API access</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-brand-teal mt-0.5" />
                <span className="text-brand-darkGreen/80">24/7 priority support</span>
              </li>
            </ul>
            
            <Link to="/get-started" className="w-full">
              <button className="w-full btn-secondary hover:bg-brand-teal/10">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-brand-darkGreen/60">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
