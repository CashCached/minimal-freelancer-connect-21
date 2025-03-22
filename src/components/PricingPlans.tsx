
import React from 'react';
import { Check, User, Users, Building2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PricingPlans = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-brand-purple/10 via-transparent to-transparent opacity-30"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gradient-primary mb-4">Choose Your Plan</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Flexible pricing options for businesses of all sizes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Individual Plan */}
          <div className="glass-card p-8 hover-lift transition-all duration-300 hover:border-brand-purple/30 relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-purple/5 blur-3xl group-hover:bg-brand-purple/10 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple to-brand-purpleDark flex items-center justify-center mb-6">
                <User className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Individual</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-bold text-white">$49</span>
                <span className="text-white/60 mb-1">/month</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">1 AI service integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">Basic analytics dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">$5,000 monthly payment volume</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">Email support</span>
                </li>
              </ul>
              
              <Button className="w-full bg-white/10 hover:bg-brand-purple/20 text-white border border-white/10">
                Start Free Trial
              </Button>
            </div>
          </div>
          
          {/* Business Plan */}
          <div className="glass-card p-8 scale-105 hover-lift transition-all duration-300 border-brand-purple/20 shadow-lg relative overflow-hidden group">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-purple/10 blur-3xl group-hover:bg-brand-purple/20 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple to-brand-purpleDark flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Business</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-bold text-white">$149</span>
                <span className="text-white/60 mb-1">/month</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">5 AI service integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">Advanced analytics & reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">$25,000 monthly payment volume</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">Multi-user access (up to 5)</span>
                </li>
              </ul>
              
              <Button className="w-full bg-brand-purple hover:bg-brand-purpleDark text-white">
                Start Free Trial
              </Button>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="glass-card p-8 hover-lift transition-all duration-300 hover:border-brand-purple/30 relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-purple/5 blur-3xl group-hover:bg-brand-purple/10 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple to-brand-purpleDark flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-bold text-white">Custom</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">Unlimited AI service integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">Custom reporting & analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">Unlimited payment volume</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">24/7 dedicated support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">Custom API integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-purple mt-0.5" />
                  <span className="text-white/80">Dedicated account manager</span>
                </li>
              </ul>
              
              <Button className="w-full bg-white/10 hover:bg-brand-purple/20 text-white border border-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
