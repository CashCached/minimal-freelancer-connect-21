import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-0">Commonly Asked Questions</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem value="item-1" className="border border-brand-green/10 rounded-xl overflow-hidden shadow-sm">
              <AccordionTrigger className="text-left font-medium text-brand-darkGreen hover:no-underline px-4">
                How does your "pay for results" model work?
              </AccordionTrigger>
              <AccordionContent className="text-brand-darkGreen/80 px-4 bg-brand-green/5">
                With our pay-for-results model, you only pay when we deliver qualified appointments. 
                There are no upfront fees or retainers - you simply pay for the actual meetings that 
                we set up with potential clients who match your ideal customer profile.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-brand-green/10 rounded-xl overflow-hidden shadow-sm">
              <AccordionTrigger className="text-left font-medium text-brand-darkGreen hover:no-underline px-4">
                What industries do you specialize in?
              </AccordionTrigger>
              <AccordionContent className="text-brand-darkGreen/80 px-4 bg-brand-green/5">
                We specialize in B2B lead generation for SaaS, professional services, 
                financial services, healthcare technology, and manufacturing companies. 
                Our approach is highly customizable to your specific industry and target audience.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-brand-green/10 rounded-xl overflow-hidden shadow-sm">
              <AccordionTrigger className="text-left font-medium text-brand-darkGreen hover:no-underline px-4">
                How quickly can I expect to see results?
              </AccordionTrigger>
              <AccordionContent className="text-brand-darkGreen/80 px-4 bg-brand-green/5">
                Most clients start seeing qualified appointments within 2-3 weeks of starting our 
                program. After the initial ramp-up period, we typically deliver 3-5 high-quality 
                appointments per week depending on your target market and criteria.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-brand-green/10 rounded-xl overflow-hidden shadow-sm">
              <AccordionTrigger className="text-left font-medium text-brand-darkGreen hover:no-underline px-4">
                What makes your approach different from other agencies?
              </AccordionTrigger>
              <AccordionContent className="text-brand-darkGreen/80 px-4 bg-brand-green/5">
                Unlike traditional agencies that charge retainers regardless of performance, 
                we fully align our success with yours. We combine proprietary outreach methods, 
                advanced targeting, and personalized messaging to reach decision-makers. Our 
                performance-based pricing means we're incentivized to deliver quality over quantity.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-brand-green/10 rounded-xl overflow-hidden shadow-sm">
              <AccordionTrigger className="text-left font-medium text-brand-darkGreen hover:no-underline px-4">
                Can I specify the exact criteria for my ideal clients?
              </AccordionTrigger>
              <AccordionContent className="text-brand-darkGreen/80 px-4 bg-brand-green/5">
                Absolutely! We work closely with you to define your ideal customer profile, 
                including industry, company size, revenue, location, and specific pain points. 
                We only book appointments with prospects who match these criteria and have a genuine 
                interest in your solutions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="text-center mt-10 flex items-center justify-center gap-2">
            <p className="text-brand-darkGreen">Still have questions? We're here to help!</p>
            <span className="text-xl">❓</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
