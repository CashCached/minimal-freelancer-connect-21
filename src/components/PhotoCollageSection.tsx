
import React, { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

type CollageImage = {
  id: string;
  src: string;
  alt: string;
  className?: string;
  rotation?: number;
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
      className: "col-span-2 row-span-2" 
    },
    { 
      id: "image-2", 
      src: "/lovable-uploads/856aa277-9b4b-45e5-9cf1-87ed121740b5.png", 
      alt: "Beautiful snowy mountain landscape with skiers", 
      hasImage: true,
      className: "col-span-2 row-span-1",
      rotation: 90,
      transformStyle: {
        transform: 'rotate(90deg)',
        objectFit: 'cover' as const,
        objectPosition: 'center',
        width: '100%',
        height: '100%'
      }
    },
    { 
      id: "image-3", 
      src: "/lovable-uploads/c1862175-8040-4609-92dd-1a14f01e13f6.png", 
      alt: "Beach view with team members", 
      hasImage: true,
      className: "col-span-1 row-span-1" 
    },
    { id: "placeholder-4", hasImage: false, className: "col-span-1 row-span-2" },
    { id: "placeholder-5", hasImage: false, className: "col-span-1 row-span-1" },
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
        
        {/* Photo Grid with Images and Empty Placeholders */}
        <div className="grid grid-cols-4 gap-3 md:gap-5">
          {placeholders.map((item) => (
            <div 
              key={item.id} 
              className={cn(
                "relative overflow-hidden rounded-2xl shadow-md transition-all duration-300",
                item.hasImage ? "hover:shadow-xl hover:-translate-y-1" : "bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center",
                item.className
              )}
            >
              {item.hasImage ? (
                <>
                  {item.rotation ? (
                    <div className="w-full h-full overflow-hidden flex items-center justify-center">
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        style={item.transformStyle}
                        className="min-w-[150%] min-h-[150%]"
                      />
                    </div>
                  ) : (
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkGreen/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="p-3 md:p-4 text-white text-xs md:text-sm font-medium">{item.alt}</p>
                  </div>
                </>
              ) : (
                <div className="text-center p-4">
                  <svg className="w-10 h-10 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">Image placeholder</p>
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
