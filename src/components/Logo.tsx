
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate('/')} 
      className="logo-container cursor-pointer transition-all duration-300 hover:scale-105 relative"
    >
      <img 
        src="/lovable-uploads/4c347099-675d-49ab-923b-bb99d4c3a052.png" 
        alt="CashCached Logo" 
        className="w-12 h-12 rounded-full object-cover"
      />
      {/* Glow effect for the logo */}
      <div className="absolute -inset-1 bg-brand-purple/30 rounded-full blur-md -z-10"></div>
    </div>
  );
};

export default Logo;
