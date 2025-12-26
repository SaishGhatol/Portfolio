"use client";
import React from 'react';
import { motion } from 'framer-motion';
import DATA from "@/data";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-10"
      >
        {/* Top Label */}
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-12 bg-neutral-600"></div>
          <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">
            Portfolio 2025
          </span>
        </div>

        {/* Main Typography */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter text-white">
            Saish Ghatol<span className="text-neutral-700">.</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-mono font-medium text-neutral-400">
            &gt; Full Stack Developer
          </h2>
        </div>

        {/* Bio Content */}
        <p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-3xl font-light">
          {DATA.HERO_CONTENT}
        </p>

        {/* Action Area - Responsive Layout */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
          
          {/* Resume Link */}
          <a 
            href="https://drive.google.com/file/d/1Pc41-rnvD_4dIOA5o2B8T-3PswRyDFCL/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-white text-lg font-medium w-fit"
          >
            <span className="border-b border-transparent group-hover:border-white transition-colors duration-300">
              View Resume
            </span>
            <span className="bg-white text-black rounded-full p-2 transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-110">
              <FaArrowRight size={14} />
            </span>
          </a>

          {/* Vertical Divider (Desktop) / Horizontal Divider (Mobile) */}
          <div className="hidden md:block w-[1px] h-12 bg-neutral-800"></div>
          <div className="block md:hidden w-full h-[1px] bg-neutral-800"></div>

          {/* Social Links Grid - Wraps on mobile */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-neutral-500">
            <SocialLink href="https://github.com/SaishGhatol" label="GitHub" icon={<FaGithub size={24} />} />
            <SocialLink href="https://www.linkedin.com/in/saish-ghatol/" label="LinkedIn" icon={<FaLinkedin size={24} />} />
            <SocialLink href="https://leetcode.com/u/saishghatol/" label="LeetCode" icon={<SiLeetcode size={24} />} />
            <SocialLink href="https://www.geeksforgeeks.org/user/saishghapvm7/" label="GFG" icon={<SiGeeksforgeeks size={24} />} />
            <SocialLink href="https://x.com/SaishGhato54378" label="X" icon={<FaSquareXTwitter size={24} />} />
            <SocialLink href="https://www.instagram.com/saish_ghatol/" label="Instagram" icon={<FaInstagram size={24} />} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Helper Component
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={label}
      className="hover:text-white hover:-translate-y-1 transition-all duration-300 p-1"
    >
      {icon}
    </a>
  );
}