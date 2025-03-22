
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  stat: string;
  description: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, stat, description, color }) => {
  return (
    <div className="glass-card p-6 animate-fade-up opacity-0 delay-200 hover:translate-y-[-5px] transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/20 group">
      <div className={`mx-auto h-12 w-12 ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white text-center group-hover:text-brand-purple transition-colors">{stat}</h3>
      <p className="text-white/70 text-center">{description}</p>
    </div>
  );
};

export default StatCard;
