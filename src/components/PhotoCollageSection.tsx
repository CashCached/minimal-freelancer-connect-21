
import React, { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

type CollageImage = {
  id: string;
  src: string;
  alt: string;
  className?: string;
  transformStyle?: CSSProperties;
}

const PhotoCollageSection = () => {
  // Rearranged image collection with better layout
  const placeholders = [
    { 
      id: "image-1", 
      src: "/lovable-uploads/d28bee97-019f-478d-b9db-bf2df2a60889.png", 
      alt: "Team skiing in the snow", 
      hasImage: true,
      className: "col-span-2 row-span-2 md:col-span-2 md:row-span-3",
      transformStyle: {
        transform: 'scale(1.05) translateY(-2px)',
      }
    },
    { 
      id: "image-2", 
      src: "/lovable-uploads/856aa277-9b4b-45e5-9cf1-87ed121740b5.png", 
      alt: "Beautiful snowy mountain landscape with skiers", 
      hasImage: true,
      className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
      transformStyle: {
        transform: 'scale(1.02) rotate(1.5deg)',
      }
    },
    { 
      id: "image-3", 
      src: "/lovable-uploads/c1862175-8040-4609-92dd-1a14f01e13f6.png", 
      alt: "Beach view with team members", 
      hasImage: true,
      className: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
      transformStyle: {
        transform: 'scale(1.03) rotate(-1deg)',
      }
    },
    { 
      id: "image-4", 
      src: "/lovable-uploads/5099b7d6-06c0-4300-97e6-dc9b35467b81.png", 
      alt: "Two team members in black attire", 
      hasImage: true,
      className: "col-span-2 row-span-1 md:col-span-1 md:row-span-2",
      transformStyle: {
        transform: 'scale(1.01) rotate(0.5deg)',
      }
    },
    { id: "placeholder-5", hasImage: false, className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1" },
  ];

  return (
    <section className="py-0 relative overflow-hidden bg-gradient-to-b from-white to-brand-teal/5">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-10 w-40 h-40 rounded-full bg-brand-green/5 blur-2xl"></div>
      <div className="absolute bottom-1/4 -left-10 w-40 h-40 rounded-full bg-brand-yellow/5 blur-2xl"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center my-4">
          <div className="inline-block mb-1 px-3 py-1 rounded-full bg-brand-teal/10">
            <span className="text-brand-teal font-semibold text-xs">Our Journey</span>
          </div>
        </div>
        
        {/* Photo Grid with Images and Empty Placeholders */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3 h-[220px] sm:h-[250px] md:h-[300px]">
          {placeholders.map((item) => (
            <div 
              key={item.id} 
              className={cn(
                "relative overflow-hidden rounded-lg transition-all duration-300 h-full",
                item.hasImage ? "hover:shadow-md hover:-translate-y-1" : "bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center",
                item.className
              )}
            >
              {item.hasImage ? (
                <>
                  <div className="w-full h-full overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="w-full h-full object-cover"
                      style={item.transformStyle}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGreen/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="p-1 text-white text-xs font-medium">{item.alt}</p>
                  </div>
                </>
              ) : (
                <div className="text-center p-2">
                  <svg className="w-4 h-4 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="mt-1 text-[10px] text-gray-500">Image</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCollageSection;
