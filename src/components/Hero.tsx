"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import  DATA   from "@/data";
const typingText = "Full Stack Developer";
import { IconCloud } from "@/registry/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

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

  return (
    <section className="w-full py-8 md:py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-0 lg:px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Mobile IconCloud with reduced spacing */}
          <div className="w-full lg:hidden flex justify-center">
            <div className="px-4">
              <IconCloud images={images} />
            </div>
          </div>

          {/* Desktop layout with adjusted gap and alignment */}
          <div className="hidden lg:flex lg:flex-row items-center w-full gap-8 pl-3">
            {/* Text Content */}
            <div className="w-1/2 flex flex-col items-start space-y-4">
              <h1 className="text-6xl font-bold tracking-tighter text-left text-gray-200 dark:text-white pt-2">
                Saish Ghatol
              </h1>

              <div className="h-12">
                <motion.span className="bg-gradient-to-r from-stone-300 to-slate-600 bg-clip-text text-3xl font-semibold text-transparent">
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

              <p className="text-lg max-w-md text-gray-500 dark:text-gray-300 text-left">
                {DATA.HERO_CONTENT}
              </p>

              <div className="w-full flex pt-4 sm:pt-6">
                <button
                  onClick={() => window.open('https://drive.google.com/file/d/1N3eQXqYFpsFetw5eK9iJSW_A5fQTGTpm/view?usp=sharing', '_blank')}
                  className="relative group inline-flex h-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br bg-neutral-800 px-3 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-3xl"
                  aria-label="View Resume on Google Drive"
                >
                  {/* Animated border gradient */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/30 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></span>

                  {/* Main content container */}
                  <span className="relative flex space-x-3">
                    {/* Document icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-cyan-300"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M10 9H8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>

                    {/* Gradient text */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200 font-semibold tracking-wide text-sm">
                      View Resume
                    </span>
                  </span>

                  {/* Hover glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

                  {/* Animated border elements */}
                  <div className="absolute inset-0 border-3 border-blue-300/20 rounded-2xl group-hover:border-blue-200/30 transition-all duration-500"></div>
                </button>
              </div>
            </div>

            {/* Desktop IconCloud shifted left */}
            <div className="flex justify-start items-center">
              <div className="max-w-md">
                <IconCloud images={images} />
              </div>
            </div>
          </div>

          {/* Mobile content below IconCloud */}
          <div className="w-full flex flex-col items-center lg:hidden px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-center text-gray-200 dark:text-white">
              Saish Ghatol
            </h1>

            <div className="h-8 sm:h-10 md:h-12">
              <motion.span className="bg-gradient-to-r from-stone-300 to-slate-600 bg-clip-text text-lg sm:text-xl md:text-2xl font-semibold text-transparent">
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

            <p className="text-sm sm:text-base md:text-lg max-w-md text-gray-500 dark:text-gray-300 text-center">
              {DATA.HERO_CONTENT}
            </p>

            <div className="w-full flex justify-center pt-4 sm:pt-6">
              <button   onClick={() => window.open('https://drive.google.com/file/d/1N3eQXqYFpsFetw5eK9iJSW_A5fQTGTpm/view?usp=sharing', '_blank')} className="relative group inline-flex h-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br bg-neutral-800 px-3 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-3xl ">
                {/* Animated border gradient */}
                <span className="absolute inset-0 bg-gradient-to-r opacity-20 group-hover:opacity-30 transition-opacity duration-500"></span>

                {/* Main content container */}
                <span className="relative flex items-center space-x-3">
                  {/* Document icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-cyan-300"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>

                  {/* Gradient text */}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200 font-semibold tracking-wide text-sm">
                    View Resume
                  </span>
                </span>

                {/* Hover glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

                {/* Animated border elements */}
                <div className="absolute inset-0 border-2 border-blue-300/20 rounded-2xl group-hover:border-blue-200/30 transition-all duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
