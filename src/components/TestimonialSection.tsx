
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "We've increased our qualified leads by 300% since implementing the Instagram DM automation. The AI actually books meetings while I sleep!",
      author: "Sarah Johnson",
      position: "Founder, Artisan Crafts Co.",
      delay: "delay-100"
    },
    {
      quote: "Our team was skeptical at first, but the results speak for themselves. 15 new high-ticket clients in our first month using this system.",
      author: "Michael Rodriguez",
      position: "CEO, Digital Marketing Agency",
      delay: "delay-200"
    },
    {
      quote: "The personalization is what impressed me most. The AI creates messages that sound like they were written by our top sales reps.",
      author: "Jessica Lee",
      position: "Sales Director, SaaS Platform",
      delay: "delay-300"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-teal/10">
            <span className="text-brand-teal font-semibold text-sm">Trusted by 200+ Businesses</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-darkGreen mb-4">What Our Clients Say</h2>
          <p className="text-brand-darkGreen/60 max-w-2xl mx-auto">
            Real results from businesses like yours using our Instagram DM automation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              delay={testimonial.delay}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-brand-teal/5 rounded-full px-6 py-3">
            <span className="text-brand-teal font-semibold mr-2">200+</span>
            <span className="text-brand-darkGreen">Businesses trust our Instagram DM automation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
