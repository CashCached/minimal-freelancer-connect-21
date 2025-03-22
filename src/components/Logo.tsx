
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate('/')} 
      className="logo-container cursor-pointer glow-purple-strong transition-all duration-300 hover:scale-105"
    >
      {/* This will be replaced with an actual logo image later */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple to-brand-purpleDark flex items-center justify-center">
        <span className="text-xl font-bold text-white">CC</span>
      </div>
      {/* Glow effect for the logo */}
      <div className="absolute -inset-1 bg-brand-purple/30 rounded-full blur-md -z-10"></div>
    </div>
  );
};

export default Logo;
