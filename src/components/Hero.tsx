"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DATA from "@/data/index.json";
import { Download, FileText } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const typingText = "Full Stack Developer";

  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingText[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1500);
    }
  }, [index]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20"></div>
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-cyan-900/20"></div>
      
      {/* Content container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto max-w-5xl px-4 py-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center min-h-[80vh]"
        >
          {/* Centered Content */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-3xl space-y-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Saish Ghatol
              </motion.h1>

              <div className="h-16 flex items-center justify-center">
                <motion.span 
                  className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {displayedText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block"
                  >
                    |
                  </motion.span>
                </motion.span>
              </div>

              <motion.p 
                className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {DATA.HERO_CONTENT}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://drive.google.com/file/d/114D6UxB_KJksNUrIhyAiPXP84KJUupU3/view?usp=sharing', '_blank')}
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 px-6 font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <span className="relative flex items-center gap-2">
                    <FileText 
                      className="transition-transform duration-300 group-hover:rotate-6" 
                      size={20} 
                    />
                    View Resume
                  </span>
                  <div className="absolute inset-0 flex justify-center [transform:translate3d(100%,0,0)] items-center bg-gradient-to-br from-cyan-500 to-purple-600 transition-transform duration-300 group-hover:[transform:translate3d(0,0,0)]">
                    <span className="flex items-center gap-2">
                      Download CV
                      <Download 
                        className={`${isHovered ? 'animate-bounce' : ''}`} 
                        size={20} 
                      />
                    </span>
                  </div>
                </motion.button>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-700 px-6 font-medium text-gray-300 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;