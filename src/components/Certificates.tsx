"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import DATA from "@/data";
import { FiArrowUpRight } from "react-icons/fi";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const row: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function Certificates() {
  return (
    <section className="py-6 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="mb-8 md:mb-10"
      >
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Achievements</h2>
        <p className="text-xs font-mono text-neutral-500 mt-1">Credentials, certifications &amp; milestones</p>
      </motion.div>

      <motion.div variants={container} initial="initial" animate="animate">
        {DATA.CERTIFICATES.map((cert, index) => {
          const hasLink = cert.link && cert.link !== "#";
          return (
            <motion.div
              key={index}
              variants={row}
              className="group py-5 border-b border-neutral-100 first:pt-0 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                {/* Left */}
                <div className="space-y-1.5 min-w-0 flex-1">
                  <p className="text-[10px] font-mono font-semibold text-indigo-500 tracking-widest uppercase">
                    {cert.issuer}
                  </p>
                  <h3 className="text-[14px] font-semibold text-neutral-800 group-hover:text-neutral-900 transition-colors duration-150 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-[12px] text-neutral-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Right — inline on mobile, stacked on sm+ */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:gap-2 shrink-0 min-w-[80px]">
                  <span className="text-[11px] font-mono text-neutral-500">{cert.date.trim()}</span>
                  {hasLink && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] font-mono text-indigo-500 hover:text-indigo-700 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-1 sm:group-hover:translate-y-0 transition-all duration-200"
                    >
                      View <FiArrowUpRight size={11} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
