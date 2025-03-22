
import React from 'react';
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  features: string[];
  ctaText: string;
  onClick?: () => void; // Add an optional onClick prop
}

const ProductCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  features,
  ctaText,
  onClick
}: ProductCardProps) => {
  const navigate = useNavigate();
  
  const handleNavigation = () => {
    if (onClick) {
      onClick();
    } else {
      navigate('/auth');
    }
  };

  return (
    <div className="glass-card p-6 hover-lift transition-all duration-500 group interactive-hover">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="text-white h-6 w-6" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 glow-text-subtle">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="w-4 h-4 mt-1 rounded-full bg-brand-purple/20 flex items-center justify-center mr-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-purple"></div>
            </div>
            <span className="text-white/70 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white group-hover:border-brand-purple/30 transition-all duration-300"
        onClick={handleNavigation}
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default ProductCard;
