"use client";
import { motion } from "framer-motion";
import DATA from "@/data";
import { FaArrowRight } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";

export default function Certificates() {
  return (
    <section className="py-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-16 space-y-4">
        <h2 className="text-4xl font-bold text-white tracking-tight">Achievements</h2>
        <p className="text-neutral-500 font-light text-lg">
          Credentials, certifications, and milestones.
        </p>
        <div className="h-[1px] w-full bg-neutral-900 mt-8" />
      </div>

      {/* List */}
      <div className="flex flex-col">
        {DATA.CERTIFICATES.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group py-10 border-b border-neutral-900 first:pt-0"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              
              {/* Left Side: Title & Info */}
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <PiCertificate className="text-neutral-600 text-xl" />
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                    {cert.issuer}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-medium text-white group-hover:text-neutral-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-neutral-500 leading-relaxed font-light">
                  {cert.description}
                </p>
              </div>

              {/* Right Side: Date & Link */}
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-4 min-w-fit">
                <span className="text-sm font-mono text-neutral-600">
                  {cert.date}
                </span>

                {cert.link && cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <span>View Credential</span>
                    <FaArrowRight className="-rotate-45" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}