"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import DATA from "@/data";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  animate: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const accentColors = [
  "text-indigo-500",
  "text-violet-500",
  "text-sky-500",
  "text-emerald-500",
  "text-amber-500",
];

export default function Projects() {
  return (
    <div className="py-6 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="mb-8 md:mb-10"
      >
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Selected Work</h2>
        <p className="text-xs font-mono text-neutral-500 mt-1">{DATA.PROJECTS.length} projects</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="space-y-3"
      >
        {DATA.PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group relative px-4 md:px-5 py-4 rounded-xl border border-neutral-200 bg-white/80 hover:border-indigo-200 hover:shadow-sm transition-all duration-200"
          >
            {/* Left accent bar on hover */}
            <div className="absolute left-0 top-3 bottom-3 w-0.5 rounded-r-full bg-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

            {/* Title row */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <span className={`text-[11px] font-mono font-bold tabular-nums shrink-0 ${accentColors[index % accentColors.length]}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[14px] font-semibold text-neutral-700 group-hover:text-neutral-900 transition-colors duration-150 truncate">
                  {project.title}
                </h3>
              </div>

              {/* Links — always visible on mobile, hover-only on desktop */}
              <div className="flex items-center gap-3 shrink-0 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-mono text-indigo-500 hover:text-indigo-700 transition-colors"
                  >
                    Live <FiArrowUpRight size={11} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-neutral-900 transition-colors"
                    title="Source"
                  >
                    <FaGithub size={14} />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-[13px] text-neutral-600 leading-relaxed mb-3 pl-5 md:pl-7">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pl-5 md:pl-7">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[10px] font-mono text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
