
import React from 'react';
import { Users } from 'lucide-react';

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
              className="h-12 object-contain brightness-0 saturate-100 invert-[.25] sepia-[.4] saturate-[3] hue-rotate-[100deg]" 
            />
          </div>
          
          {/* Agency Watch Logo */}
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/c2897f46-1493-4b80-b7fe-f24038db9475.png" 
              alt="Agency Watch" 
              className="h-12 object-contain brightness-0 saturate-100 invert-[.25] sepia-[.4] saturate-[3] hue-rotate-[100deg]" 
            />
          </div>
          
          {/* Global Tech Logo */}
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/8665157c-b619-4900-a187-04babcb84170.png" 
              alt="Global Tech" 
              className="h-12 object-contain brightness-0 saturate-100 invert-[.25] sepia-[.4] saturate-[3] hue-rotate-[100deg]" 
            />
          </div>
          
          {/* HD Sales Logo (replacing the Award icon) */}
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/b911427e-f3ec-4d6a-98fa-7bdc4b8de91f.png" 
              alt="HD Sales" 
              className="h-12 object-contain brightness-0 saturate-100 invert-[.25] sepia-[.4] saturate-[3] hue-rotate-[100deg]" 
            />
          </div>
          
          <div className="flex flex-col items-center">
            <Users size={48} className="text-brand-green" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
