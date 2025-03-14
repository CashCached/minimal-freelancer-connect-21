
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: string;
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  delay = "delay-0",
  className 
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "glass-panel p-6 md:p-8 hover-lift animate-fade-up opacity-0", 
        delay,
        className
      )}
      style={{ animationFillMode: 'forwards' }}
    >
      <div className="h-12 w-12 bg-brand-teal/10 text-brand-teal rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="heading-md mb-2 text-brand-darkBlue">{title}</h3>
      <p className="text-brand-darkBlue/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
