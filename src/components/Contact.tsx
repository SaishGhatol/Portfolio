"use client";
import { motion } from "framer-motion";
import DATA from "@/data";
import { FaArrowRight } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="flex flex-col justify-center min-h-[70vh] max-w-5xl mx-auto px-6">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20 space-y-6"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
          Get in touch<span className="text-neutral-600">.</span>
        </h2>
        <p className="text-lg text-neutral-500 max-w-xl leading-relaxed">
          I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </motion.div>

      {/* Contact Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Column 1: Primary Email (The Main Action) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <label className="text-xs font-mono text-neutral-500 tracking-widest uppercase border-b border-neutral-800 pb-2 block w-fit">
              Write to me
            </label>
            
            <a 
              href={`mailto:${DATA.CONTACT.email}`}
              className="group flex items-center gap-4 text-2xl md:text-3xl font-medium text-white hover:text-neutral-300 transition-colors"
            >
              {DATA.CONTACT.email}
              <FaArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sm" />
            </a>
            
            <a 
              href={`mailto:${DATA.CONTACT.email2}`}
              className="block text-xl text-neutral-500 hover:text-white transition-colors"
            >
              {DATA.CONTACT.email2}
            </a>
          </div>
        </motion.div>

        {/* Column 2: Phone & Location */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <label className="text-xs font-mono text-neutral-500 tracking-widest uppercase border-b border-neutral-800 pb-2 block w-fit">
              Call Me
            </label>
            <p className="text-xl text-neutral-200 font-light tracking-wide">
              {DATA.CONTACT.phoneNo}
            </p>
          </div>

          <div className="space-y-4">
            <label className="text-xs font-mono text-neutral-500 tracking-widest uppercase border-b border-neutral-800 pb-2 block w-fit">
              Based In
            </label>
            <p className="text-xl text-neutral-200 font-light tracking-wide">
              {DATA.CONTACT.address}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer / Copyright */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-auto pt-24 border-t border-neutral-900"
      >
        <p className="text-neutral-600 text-sm font-mono">
          © {new Date().getFullYear()} Saish Ghatol. All Rights Reserved.
        </p>
      </motion.div>

    </section>
  );
}