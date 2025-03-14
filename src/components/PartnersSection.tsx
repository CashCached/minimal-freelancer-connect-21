
import React from 'react';
import { Building, Handshake, Award, Users } from 'lucide-react';

const PartnersSection = () => {
  return (
    <section className="py-4 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-2">
          <h2 className="heading-md text-brand-darkGreen">Trusted Partners</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center">
          {/* Partner logos - using icons as placeholders, you can replace with actual logos */}
          <div className="flex flex-col items-center">
            <Building size={36} className="text-brand-green" />
            <span className="font-medium text-brand-darkGreen">Acme Corp</span>
          </div>
          <div className="flex flex-col items-center">
            <Handshake size={36} className="text-brand-green" />
            <span className="font-medium text-brand-darkGreen">Global Tech</span>
          </div>
          <div className="flex flex-col items-center">
            <Award size={36} className="text-brand-green" />
            <span className="font-medium text-brand-darkGreen">Summit Inc</span>
          </div>
          <div className="flex flex-col items-center">
            <Users size={36} className="text-brand-green" />
            <span className="font-medium text-brand-darkGreen">Elevate Group</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
