"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import DATA from "@/data";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stagger: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const up: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard unavailable */ }
  };
  return (
    <button
      onClick={handleCopy}
      title={copied ? "Copied!" : "Copy"}
      className="p-2 rounded-lg text-neutral-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-150 touch-manipulation"
    >
      {copied ? <FiCheck size={14} className="text-emerald-500" /> : <FiCopy size={14} />}
    </button>
  );
}

export default function Contact() {
  return (
    <section className="py-8 md:py-16">
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="space-y-10 md:space-y-12"
      >
        {/* Heading */}
        <motion.div variants={up} className="space-y-3">
          <h2
            className="font-bold text-neutral-900 leading-[1.04]"
            style={{ fontSize: "clamp(1.8rem, 7vw, 3.25rem)", letterSpacing: "-0.04em" }}
          >
            Get in touch<span className="text-indigo-300">.</span>
          </h2>
          <p className="text-[14px] md:text-[15px] text-neutral-600 max-w-sm leading-relaxed">
            Open to discussing new projects, interesting ideas, or opportunities
            to work together.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div variants={up} className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Email */}
          <div className="space-y-3">
            <label className="block text-[10px] font-mono font-semibold text-indigo-500 tracking-widest uppercase">
              Write to me
            </label>
            <div className="space-y-3">
              {/* Primary */}
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${DATA.CONTACT.email}`}
                  className="text-[14px] md:text-[15px] font-medium text-neutral-800 hover:text-indigo-600 transition-colors duration-150 flex items-center gap-1 group min-w-0 flex-1 truncate"
                >
                  {DATA.CONTACT.email}
                  <FiArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
                <CopyButton text={DATA.CONTACT.email} />
              </div>
              {/* Secondary */}
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${DATA.CONTACT.email2}`}
                  className="text-[13px] text-neutral-600 hover:text-indigo-600 transition-colors duration-150 flex-1 truncate"
                >
                  {DATA.CONTACT.email2}
                </a>
                <CopyButton text={DATA.CONTACT.email2} />
              </div>
            </div>
          </div>

          {/* Phone + location */}
          <div className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono font-semibold text-amber-500 tracking-widest uppercase">
                Call me
              </label>
              <a
                href={`tel:${DATA.CONTACT.phoneNo}`}
                className="text-[14px] text-neutral-700 hover:text-indigo-600 transition-colors duration-150 block"
              >
                {DATA.CONTACT.phoneNo}
              </a>
            </div>
            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono font-semibold text-emerald-600 tracking-widest uppercase">
                Based in
              </label>
              <p className="text-[14px] text-neutral-700">{DATA.CONTACT.address}</p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={up} className="pt-8 border-t border-neutral-200">
          <p className="text-[11px] font-mono text-neutral-500">
            © {new Date().getFullYear()} Saish Ghatol — All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
