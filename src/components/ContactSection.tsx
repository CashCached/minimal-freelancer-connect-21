
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  // Track touch position for mobile interactivity
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
  
  // Handle mouse move for desktop interactivity
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--x', `${x}%`);
    card.style.setProperty('--y', `${y}%`);
  };

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div 
        className="glass-card p-6 animate-fade-up delay-200 text-center interactive-hover"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouch}
      >
        <div className="mx-auto h-12 w-12 bg-brand-purple/10 text-brand-purple rounded-xl flex items-center justify-center mb-4 glow-purple">
          <Mail className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white glow-text-subtle">Email</h3>
        <p className="text-white/70">contact@cashcached.com</p>
      </div>

      <div 
        className="glass-card p-6 animate-fade-up delay-300 text-center interactive-hover"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouch}
      >
        <div className="mx-auto h-12 w-12 bg-brand-purpleDark/10 text-brand-purpleLight rounded-xl flex items-center justify-center mb-4 glow-purple">
          <MapPin className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white glow-text-subtle">Location</h3>
        <p className="text-white/70">Innovation Center 104A</p>
      </div>
      
      <div 
        className="glass-card p-6 animate-fade-up delay-400 text-center interactive-hover"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouch}
      >
        <div className="mx-auto h-12 w-12 bg-brand-purple/10 text-brand-purple rounded-xl flex items-center justify-center mb-4 glow-purple">
          <Phone className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white glow-text-subtle">Phone</h3>
        <p className="text-white/70">+1 (555) 123-4567</p>
      </div>
    </div>
  );
};

export default ContactSection;
