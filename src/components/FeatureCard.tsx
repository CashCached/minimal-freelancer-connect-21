
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: string;
  className?: string;
  variant?: 'default' | 'cool' | 'warm';
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  delay = "delay-0",
  className,
  variant = 'default'
}: FeatureCardProps) => {
  
  const getGradient = () => {
    switch(variant) {
      case 'cool':
        return 'from-brand-darkBlue/5 to-brand-teal/5';
      case 'warm':
        return 'from-brand-yellow/5 to-brand-coral/5';
      default:
        return 'from-white to-brand-teal/5';
    }
  };
  
  const getIconBgClass = () => {
    switch(variant) {
      case 'cool':
        return 'bg-brand-darkBlue/10 text-brand-darkBlue';
      case 'warm':
        return 'bg-brand-coral/10 text-brand-coral';
      default:
        return 'bg-brand-teal/10 text-brand-teal';
    }
  };
  
  const getTitleClass = () => {
    switch(variant) {
      case 'cool':
        return 'text-brand-darkBlue';
      case 'warm':
        return 'text-brand-coral';
      default:
        return 'text-brand-teal';
    }
  };
  
  const getBorderClass = () => {
    switch(variant) {
      case 'cool':
        return 'border-brand-darkBlue/10';
      case 'warm':
        return 'border-brand-coral/10';
      default:
        return 'border-brand-teal/10';
    }
  };

  return (
    <div 
      className={cn(
        `glass-panel p-6 rounded-xl border animate-fade-up opacity-0 bg-gradient-to-br ${getGradient()} ${getBorderClass()} hover-lift`,
        delay,
        className
      )}
    >
      <div className={`w-12 h-12 rounded-lg ${getIconBgClass()} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className={`text-xl font-semibold mb-2 ${getTitleClass()}`}>{title}</h3>
      <p className="text-brand-darkBlue/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
