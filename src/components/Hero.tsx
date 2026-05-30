"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stagger: Variants = {
  animate: { transition: { staggerChildren: 0.09 } },
};

const up: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const photoAnim: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.15 } },
};

const socialLinks = [
  { href: "https://github.com/SaishGhatol",                   label: "GitHub",        icon: FaGithub,        hover: "hover:text-neutral-900 hover:bg-neutral-100" },
  { href: "https://www.linkedin.com/in/saish-ghatol/",        label: "LinkedIn",      icon: FaLinkedin,      hover: "hover:text-blue-600 hover:bg-blue-50" },
  { href: "https://leetcode.com/u/saishghatol/",              label: "LeetCode",      icon: SiLeetcode,      hover: "hover:text-orange-500 hover:bg-orange-50" },
  { href: "https://www.geeksforgeeks.org/user/saishghapvm7/", label: "GeeksForGeeks", icon: SiGeeksforgeeks, hover: "hover:text-green-600 hover:bg-green-50" },
  { href: "https://x.com/SaishGhato54378",                    label: "X",             icon: FaXTwitter,      hover: "hover:text-neutral-900 hover:bg-neutral-100" },
  { href: "https://www.instagram.com/saish_ghatol/",          label: "Instagram",     icon: FaInstagram,     hover: "hover:text-pink-500 hover:bg-pink-50" },
];

const stats = [
  { value: "500+", label: "DSA solved",       color: "text-indigo-600" },
  { value: "5",    label: "Projects shipped", color: "text-violet-600" },
  { value: "2",    label: "Open source",      color: "text-emerald-600" },
];

interface HeroProps {
  onNavigate?: (tab: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="flex flex-col justify-center py-8 md:py-14 min-h-[80vh]">

      {/* ── Two-column layout: text left, photo right ─── */}
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-10">

        {/* ── Left: all text content ─────────────────── */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex-1 space-y-6 md:space-y-7"
        >
          {/* Status badge */}
          <motion.div variants={up}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 w-fit">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono text-emerald-700 tracking-wide">
                Open to new opportunities
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={up} className="space-y-2">
            <h1
              className="font-bold text-neutral-900 leading-[1.04]"
              style={{ fontSize: "clamp(1.9rem, 7vw, 3.5rem)", letterSpacing: "-0.04em" }}
            >
              Saish Ghatol
            </h1>
            <div className="flex items-center gap-2">
              <span className="w-5 h-px bg-indigo-300 shrink-0" />
              <h2 className="text-sm font-mono text-neutral-600 tracking-wide">
                Full Stack Developer
              </h2>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={up}
            className="text-[14px] md:text-[15px] text-neutral-600 leading-[1.8]"
          >
            Building performant web products with the MERN stack. Strong in
            DSA, real-time systems, and AI-driven features. Currently finishing
            B.Tech at SGGSIE&T, Nanded.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={up} className="flex flex-wrap items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1KxrPJYfkqFWHuUgYTRTGDVK2Mb_uqFWY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-4 py-2.5 bg-indigo-600 text-white text-[13px] font-semibold rounded-lg hover:bg-indigo-700 active:scale-[0.98] transition-all duration-150 shadow-sm shadow-indigo-200"
            >
              View Resume
              <FiArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={() => onNavigate?.("contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white text-neutral-700 text-[13px] font-medium rounded-lg border border-neutral-200 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 active:scale-[0.98] transition-all duration-150 shadow-sm"
            >
              <FiMail size={14} />
              Say Hello
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={up} className="flex flex-wrap items-center gap-1">
            {socialLinks.map(({ href, label, icon: Icon, hover }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className={`w-10 h-10 flex items-center justify-center rounded-lg text-neutral-500 transition-all duration-150 ${hover}`}
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={up}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-5 border-t border-neutral-200"
          >
            {stats.map(({ value, label, color }, i) => (
              <React.Fragment key={label}>
                {i > 0 && <div className="hidden sm:block w-px h-8 bg-neutral-200" />}
                <div>
                  <p className={`text-[16px] font-bold tabular-nums ${color}`}>{value}</p>
                  <p className="text-[11px] font-mono text-neutral-500 mt-0.5">{label}</p>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: profile photo ────────────────────── */}
        <motion.div
          variants={photoAnim}
          initial="initial"
          animate="animate"
          className="flex justify-center md:justify-end shrink-0"
        >
          <div className="relative">
            {/* Photo frame */}
            <div className="w-36 h-44 sm:w-44 sm:h-52 md:w-52 md:h-64 rounded-2xl overflow-hidden border border-neutral-200 shadow-lg ring-1 ring-neutral-100">
              <Image
                src="/profile.jpg"
                alt="Saish Ghatol — Full Stack Developer"
                width={220}
                height={280}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>

            {/* Floating available badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white border border-neutral-200 rounded-full px-3 py-1.5 shadow-md whitespace-nowrap">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-mono text-neutral-600 font-medium">Available for work</span>
            </div>

            {/* Decorative indigo corner accent */}
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-indigo-100 border-2 border-white" />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-violet-100 border-2 border-white" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
