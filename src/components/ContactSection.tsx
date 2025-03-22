
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="glass-card p-6 animate-fade-up delay-200 text-center interactive-hover">
        <div className="mx-auto h-12 w-12 bg-brand-purple/10 text-brand-purple rounded-xl flex items-center justify-center mb-4 glow-purple">
          <Mail className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white glow-text-subtle">Email</h3>
        <p className="text-white/70">cashcached@gmail.com</p>
      </div>

      <div className="glass-card p-6 animate-fade-up delay-300 text-center interactive-hover">
        <div className="mx-auto h-12 w-12 bg-brand-purpleDark/10 text-brand-purpleLight rounded-xl flex items-center justify-center mb-4 glow-purple">
          <MapPin className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white glow-text-subtle">Location</h3>
        <p className="text-white/70">123 AI Avenue, Tech Valley</p>
      </div>
    </div>
  );
};

export default ContactSection;
