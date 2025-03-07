"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { GoClock } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
  { href: "https://www.linkedin.com/in/saish-ghatol-108402254/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://github.com/SaishGhatol", icon: <FaGithub />, label: "GitHub" },
  { href: "https://leetcode.com/saishghatol/", icon: <SiLeetcode />, label: "LeetCode" },
  { href: "https://www.geeksforgeeks.org/user/saishghapvm7/", icon: <SiGeeksforgeeks />, label: "GeeksForGeeks" },
  { href: "https://www.instagram.com/saish_ghatol/", icon: <FaInstagram />, label: "Instagram" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 bg-opacity-90 backdrop-blur-sm flex items-center justify-between py-3 px-4 sm:py-4 sm:px-6 lg:px-8 shadow-md">
      {/* Left Side - Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="group" aria-label="Home">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-300 transition-all duration-300 group-hover:text-purple-400">
            <span className="md:hidden">saish</span>
            <span className="hidden md:inline">SaishGhatol</span>
            <span className="text-orange-400 opacity-70 group-hover:opacity-100">.js</span>
          </h3>
        </Link>
      </div>

      {/* Right Side - Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <div className="rotating-border relative">
          <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-md shadow-white/5 relative z-10">
            <GoClock className="text-slate-200 text-sm" />
            <p className="text-xs text-slate-200 font-mono whitespace-nowrap">
              Last Updated: 28th Feb 2025
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-slate-300 transition-all duration-500 transform text-xl hover:scale-125 hover:-rotate-12 hover:text-orange-400"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile - Right Side */}
      <div className="md:hidden flex items-center justify-end sm:gap-3 xs:gap-1 w-full">
        {/* Rotating Border Wrapper */}
    
        {/* Menu Button */}
        <button
          className="text-slate-300 hover:text-orange-400 transition-colors duration-300 border border-white/10 p-2 rounded-lg relative z-50 h-10 w-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes className="h-5 w-5 sm:h-6 sm:w-6" /> : <FaBars className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-16 right-4 bg-neutral-900/95 backdrop-blur-sm rounded-lg p-4 border border-white/10 z-50"
          >
            <motion.div
              className="flex flex-row items-center gap-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.2, // Delay each icon appearing
                  },
                },
              }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-slate-300 transition-all duration-500 transform text-2xl hover:scale-125 hover:-rotate-12 hover:text-orange-400 active:scale-110"
                  onClick={() => setIsMenuOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}