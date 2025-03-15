
import React from 'react';
import { cn } from '@/lib/utils';

type CollageImage = {
  src: string;
  alt: string;
  className?: string;
}

const PhotoCollageSection = () => {
  // Demo images - replace with your actual uploaded images
  const images: CollageImage[] = [
    { 
      src: "/lovable-uploads/0ba739f3-dbf9-4b3a-8f40-5a69fa44a8a8.png", 
      alt: "Team collaboration", 
      className: "col-span-2 row-span-2" 
    },
    { 
      src: "/lovable-uploads/7d9b9752-20da-4013-ae11-df2bec3bc9de.png", 
      alt: "Client meeting", 
      className: "col-span-1 row-span-1" 
    },
    { 
      src: "/lovable-uploads/8665157c-b619-4900-a187-04babcb84170.png", 
      alt: "Office workspace", 
      className: "col-span-1 row-span-1" 
    },
    { 
      src: "/lovable-uploads/b911427e-f3ec-4d6a-98fa-7bdc4b8de91f.png", 
      alt: "Sales strategy session", 
      className: "col-span-1 row-span-2" 
    },
    { 
      src: "/lovable-uploads/c2897f46-1493-4b80-b7fe-f24038db9475.png", 
      alt: "Team building", 
      className: "col-span-2 row-span-1" 
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 rounded-full bg-brand-green/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 rounded-full bg-brand-yellow/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-block mb-3 md:mb-4 px-3 py-1 rounded-full bg-brand-teal/10">
            <span className="text-brand-teal font-semibold text-xs md:text-sm">Our Journey</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-darkGreen mb-4">
            Moments That Define <span className="text-gradient">Our Success</span>
          </h2>
          
          <p className="text-brand-darkGreen/80 max-w-2xl mx-auto">
            A glimpse into our process, our team, and the results we achieve for our clients.
          </p>
        </div>
        
        {/* Photo Grid */}
        <div className="grid grid-cols-4 gap-3 md:gap-5">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={cn(
                "relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                image.className
              )}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGreen/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-3 md:p-4 text-white text-xs md:text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCollageSection;
