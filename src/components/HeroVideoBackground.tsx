
import React, { useEffect, useRef, useState } from 'react';

interface HeroVideoBackgroundProps {
  videoUrl: string;
  fallbackImageUrl?: string;
}

const HeroVideoBackground = ({ 
  videoUrl, 
  fallbackImageUrl = "/placeholder.svg" 
}: HeroVideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = () => {
      console.error("Video failed to load");
      setVideoFailed(true);
    };

    // Check if the video is accessible
    fetch(videoUrl, { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          console.error("Error checking video URL:", response.statusText);
          setVideoFailed(true);
        }
      })
      .catch(error => {
        console.error("Error checking video URL:", error);
        setVideoFailed(true);
      });

    video.addEventListener('error', handleError);
    
    // Try to play the video automatically
    video.play().catch(error => {
      console.error("Autoplay failed:", error);
      // We don't set videoFailed here as the video might still be valid
      // just autoplay policy might be preventing it
    });

    return () => {
      video.removeEventListener('error', handleError);
    };
  }, [videoUrl]);

  if (videoFailed) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={fallbackImageUrl} 
          alt="Background" 
          className="object-cover w-full h-full opacity-20"
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video 
        ref={videoRef}
        className="absolute w-full h-full object-cover opacity-20"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroVideoBackground;
