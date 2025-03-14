
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
    // Ensure video autoplays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
        setVideoError(true);
      });
    }
  }, [videoUrl, videoRef]);
  
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
