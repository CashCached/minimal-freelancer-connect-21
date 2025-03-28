
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  stat: string;
  description: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, stat, description, color }) => {
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

  return (
    <div 
      className="glass-card p-6 animate-fade-up delay-200 hover:translate-y-[-5px] transition-all duration-500 hover:shadow-lg hover:shadow-brand-purple/30 group product-card-glow interactive-hover"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouch}
    >
      <div className={`mx-auto h-12 w-12 ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 glow-purple-strong`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white text-center group-hover:text-gradient-primary transition-colors duration-500 glow-text-subtle">{stat}</h3>
      <p className="text-white/70 text-center group-hover:text-white/90 transition-colors duration-300">{description}</p>
    </div>
  );
};

export default StatCard;
