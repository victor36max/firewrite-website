"use client";

import { useEffect, useRef } from "react";

interface LoopVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {}

export const LoopVideo = (props: LoopVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!videoRef.current) return;
        const videoElement = videoRef.current;
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return <video ref={videoRef} preload="metadata" loop muted {...props} />;
};
