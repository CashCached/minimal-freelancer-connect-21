
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  delay?: string;
  className?: string;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  delay = "delay-0",
  className 
}: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "glass-panel p-6 md:p-8 animate-fade-up opacity-0 flex flex-col", 
        delay,
        className
      )}
      style={{ animationFillMode: 'forwards' }}
    >
      <div className="mb-4 text-brand-teal">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11L8 17H5L8 11V7H4V11H6L4 17H1L4 11V7H10V11ZM22 11L20 17H17L20 11V7H16V11H18L16 17H13L16 11V7H22V11Z" fill="currentColor" />
        </svg>
      </div>
      <p className="italic text-brand-darkBlue/80 mb-4">{quote}</p>
      <div className="mt-auto">
        <p className="font-semibold text-brand-darkBlue">{author}</p>
        <p className="text-sm text-brand-darkBlue/70">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
