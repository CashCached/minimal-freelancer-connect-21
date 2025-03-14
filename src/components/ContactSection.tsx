
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="glass-panel p-6 animate-fade-up opacity-0 delay-100 text-center">
        <div className="mx-auto h-12 w-12 bg-brand-coral/10 text-brand-coral rounded-xl flex items-center justify-center mb-4">
          <Phone className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-brand-darkBlue">Phone</h3>
        <p className="text-brand-darkBlue/70">+1 (555) 123-4567</p>
      </div>

      <div className="glass-panel p-6 animate-fade-up opacity-0 delay-200 text-center">
        <div className="mx-auto h-12 w-12 bg-brand-yellow/10 text-brand-yellow rounded-xl flex items-center justify-center mb-4">
          <Mail className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-brand-darkBlue">Email</h3>
        <p className="text-brand-darkBlue/70">contact@schedulepro.com</p>
      </div>

      <div className="glass-panel p-6 animate-fade-up opacity-0 delay-300 text-center">
        <div className="mx-auto h-12 w-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center mb-4">
          <MapPin className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-brand-darkBlue">Location</h3>
        <p className="text-brand-darkBlue/70">123 Business Ave, Suite 100<br />San Francisco, CA 94107</p>
      </div>
    </div>
  );
};

export default ContactSection;
