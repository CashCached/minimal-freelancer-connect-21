import React from 'react';
import { Building, Handshake, Award, Users } from 'lucide-react';

const PartnersSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="heading-md text-brand-darkGreen mb-3">Trusted by Leading Companies</h2>
          <p className="text-brand-darkGreen/70 max-w-2xl mx-auto">
            We partner with industry leaders to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {/* Dexter Agency Logo */}
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <img 
              src="/lovable-uploads/7d9b9752-20da-4013-ae11-df2bec3bc9de.png" 
              alt="Dexter Agency" 
              className="h-12 object-contain mb-2" 
            />
            <span className="font-medium text-brand-darkGreen">Dexter Agency</span>
          </div>
          
          {/* Other partner logos with icons as placeholders */}
          <div className="flex flex-col items-center">
            <Building size={48} className="text-brand-green mb-2" />
            <span className="font-medium text-brand-darkGreen">Acme Corp</span>
          </div>
          <div className="flex flex-col items-center">
            <Handshake size={48} className="text-brand-green mb-2" />
            <span className="font-medium text-brand-darkGreen">Global Tech</span>
          </div>
          <div className="flex flex-col items-center">
            <Award size={48} className="text-brand-green mb-2" />
            <span className="font-medium text-brand-darkGreen">Summit Inc</span>
          </div>
          <div className="flex flex-col items-center">
            <Users size={48} className="text-brand-green mb-2" />
            <span className="font-medium text-brand-darkGreen">Elevate Group</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
