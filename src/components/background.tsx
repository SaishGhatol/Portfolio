"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <StarsBackground />
      <ShootingStars />
      
      {/* Content container */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
        <h2 className="flex flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white items-center gap-2 md:gap-8">
        </h2>
        {children}
      </div>
    </div>
  );
};

export default Background;