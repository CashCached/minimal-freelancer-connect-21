
import React from 'react';
import { Building, HandShake, Award, Users } from 'lucide-react';

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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {/* Partner logos - using icons as placeholders, you can replace with actual logos */}
          <div className="flex flex-col items-center">
            <Building size={48} className="text-brand-green mb-2" />
            <span className="font-medium text-brand-darkGreen">Acme Corp</span>
          </div>
          <div className="flex flex-col items-center">
            <HandShake size={48} className="text-brand-green mb-2" />
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
