
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';
import { ArrowRight, Sparkle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  color: string;
  ctaText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  color,
  ctaText
}) => {
  const navigate = useNavigate();
  
  // Track mouse position for the interactive glow effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--x', `${x}%`);
    card.style.setProperty('--y', `${y}%`);
  };
  
  // Handle touch events for mobile
  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    const y = ((e.touches[0].clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--x', `${x}%`);
    card.style.setProperty('--y', `${y}%`);
    
    // Create touch ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'touch-ripple';
    ripple.style.left = `${e.touches[0].clientX}px`;
    ripple.style.top = `${e.touches[0].clientY}px`;
    document.body.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 1000);
  };

  const handleButtonClick = () => {
    navigate('/auth');
  };

  return (
    <Card 
      className="glass-card overflow-hidden hover-lift transition-all duration-500 border-white/5 backdrop-blur-md group product-card-glow interactive-hover"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouch}
    >
      <CardHeader className="pb-2 relative">
        <div className="absolute top-[-20px] right-[-20px] opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <Sparkle className="h-40 w-40 text-brand-purple rotate-12" />
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} glow-purple-strong transform transition-all duration-500 group-hover:scale-110`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-white group-hover:text-gradient-primary transition-all duration-500 glow-text-subtle">
          {title}
        </CardTitle>
        <CardDescription className="text-white/70">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start group/item">
              <span className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center mr-2 mt-0.5 group-hover/item:bg-brand-purple/40 transition-colors duration-300">
                <span className="w-2 h-2 rounded-full bg-brand-purple group-hover/item:scale-125 transition-transform duration-300"></span>
              </span>
              <span className="text-white/80 text-sm group-hover/item:text-white transition-colors duration-300">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          variant="ghost" 
          className="w-full border border-white/10 text-white bg-black/20 hover:bg-brand-purple/20 group/button relative overflow-hidden"
          onClick={handleButtonClick}
        >
          <span className="relative z-10">{ctaText}</span>
          <span className="absolute inset-0 w-0 bg-gradient-to-r from-brand-purple/20 to-brand-purpleLight/20 transition-all duration-300 group-hover/button:w-full"></span>
          <ArrowRight size={16} className="ml-2 opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-1 transition-all duration-300" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
