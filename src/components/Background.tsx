"use client";
import React, { useEffect, useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "framer-motion";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Gradient orbs */}
      <div 
        className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] transform-gpu"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      
      <div 
        className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] transform-gpu"
        style={{
          transform: `translateY(${-scrollY * 0.05}px)`,
        }}
      />

      {/* Background elements */}
      <StarsBackground />
      <ShootingStars />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20"></div>
      
      {/* Content container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 h-full w-full flex flex-col items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Background;