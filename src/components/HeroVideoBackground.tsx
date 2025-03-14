
import React, { useState, useEffect, useRef } from 'react';

interface HeroVideoBackgroundProps {
  videoUrl: string;
  fallbackImageUrl?: string;
  overlayOpacity?: number;
}

const HeroVideoBackground: React.FC<HeroVideoBackgroundProps> = ({
  videoUrl,
  fallbackImageUrl,
  overlayOpacity = 30 // default 30%
}) => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Reset error state if video URL changes
    if (videoUrl) {
      setVideoError(false);
    }
  }, [videoUrl]);
  
  useEffect(() => {
    // Attempt to load the video directly using fetch to check its availability
    const checkVideoAvailability = async () => {
      try {
        const response = await fetch(videoUrl, { method: 'HEAD' });
        if (!response.ok) {
          console.error("Video URL not accessible:", response.status);
          setVideoError(true);
        }
      } catch (error) {
        console.error("Error checking video URL:", error);
        setVideoError(true);
      }
    };
    
    if (videoUrl) {
      checkVideoAvailability();
    }
    
    // Ensure video autoplays
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Autoplay failed:", error);
          // Don't set video error here, as it might be a temporary autoplay policy issue
        });
      }
    }
  }, [videoUrl]);
  
  const handleVideoError = () => {
    console.error("Video failed to load");
    setVideoError(true);
  };
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {!videoError && videoUrl ? (
        <video 
          ref={videoRef}
          className="absolute min-w-full min-h-full object-cover w-full h-full"
          autoPlay 
          muted 
          loop
          playsInline
          controls={false}
          onError={handleVideoError}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : fallbackImageUrl ? (
        <img 
          src={fallbackImageUrl} 
          alt="Background" 
          className="absolute min-w-full min-h-full object-cover"
        />
      ) : null}
      
      {/* Overlay for better text visibility */}
      <div 
        className="absolute inset-0 bg-black" 
        style={{ opacity: overlayOpacity / 100 }}
      ></div>
    </div>
  );
};

export default HeroVideoBackground;
