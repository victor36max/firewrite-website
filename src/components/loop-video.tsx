"use client";

import { useEffect, useRef } from "react";

export const LoopVideo = (
  props: React.VideoHTMLAttributes<HTMLVideoElement>
) => {
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
