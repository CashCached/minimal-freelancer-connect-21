
import React from 'react';

const PartnersSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="heading-md text-brand-darkGreen mb-3">Trusted by 200+ Businesses</h2>
          <p className="text-brand-darkGreen/70 max-w-2xl mx-auto">
            Companies of all sizes are growing with our Instagram DM automation
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
          {/* Dexter Agency Logo */}
          <div className="flex items-center justify-center w-32 md:w-40">
            <img 
              src="/lovable-uploads/7d9b9752-20da-4013-ae11-df2bec3bc9de.png" 
              alt="Dexter Agency" 
              className="h-10 md:h-12 object-contain brightness-0 saturate-100 invert-[.25] sepia-[.4] saturate-[3] hue-rotate-[100deg]" 
            />
          </div>
          
          {/* Agency Watch Logo */}
          <div className="flex items-center justify-center w-32 md:w-40">
            <img 
              src="/lovable-uploads/c2897f46-1493-4b80-b7fe-f24038db9475.png" 
              alt="Agency Watch" 
              className="h-10 md:h-12 object-contain brightness-0 saturate-100 invert-[.25] sepia-[.4] saturate-[3] hue-rotate-[100deg]" 
            />
          </div>
          
          {/* Global Tech Logo */}
          <div className="flex items-center justify-center w-32 md:w-40">
            <img 
              src="/lovable-uploads/8665157c-b619-4900-a187-04babcb84170.png" 
              alt="Global Tech" 
              className="h-10 md:h-12 object-contain brightness-0 saturate-100 invert-[.25] sepia-[.4] saturate-[3] hue-rotate-[100deg]" 
            />
          </div>
          
          {/* HD Sales Logo */}
          <div className="flex items-center justify-center w-32 md:w-40">
            <img 
              src="/lovable-uploads/b911427e-f3ec-4d6a-98fa-7bdc4b8de91f.png" 
              alt="HD Sales" 
              className="h-10 md:h-12 object-contain brightness-0 saturate-100 invert-[.25] sepia-[.4] saturate-[3] hue-rotate-[100deg]" 
            />
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <div className="inline-flex items-center bg-brand-teal/5 rounded-full px-4 py-2">
            <span className="text-brand-darkGreen font-medium">Join 200+ successful businesses using our platform</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
