"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import DATA from "@/data";
import { FiArrowUpRight } from "react-icons/fi";
import { RiGitBranchLine } from "react-icons/ri";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  initial: { opacity: 0, x: -12 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function OpenSource() {
  return (
    <div className="py-6 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="mb-8 md:mb-10"
      >
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Open Source</h2>
        <p className="text-xs font-mono text-neutral-500 mt-1">Contributions &amp; community programs</p>
      </motion.div>

      <motion.div variants={container} initial="initial" animate="animate" className="space-y-4">
        {DATA.OPEN_SOURCE.map((os, index) => {
          const isLinked = os.link && os.link !== "#";
          const Wrapper = isLinked ? motion.a : motion.div;
          const extraProps = isLinked
            ? { href: os.link, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <Wrapper
              key={index}
              {...extraProps}
              variants={item}
              className="group block p-4 md:p-5 rounded-xl border border-neutral-200 bg-white/80 hover:border-emerald-200 hover:shadow-sm transition-all duration-200"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-500 shrink-0">
                    <RiGitBranchLine size={13} />
                  </span>
                  <h3 className="text-[14px] font-semibold text-neutral-800 group-hover:text-neutral-900 transition-colors duration-150">
                    {os.program}
                  </h3>
                </div>

                <div className="flex items-center gap-2 pl-9 sm:pl-0">
                  <span className="text-[10px] font-mono text-neutral-600 border border-neutral-200 bg-neutral-50 px-2 py-0.5 rounded-md">
                    {os.date}
                  </span>
                  {isLinked && <FiArrowUpRight size={13} className="text-neutral-400" />}
                </div>
              </div>

              {/* Role badge */}
              <div className="mb-3 pl-9">
                <span className="inline-block text-[10px] font-mono font-semibold tracking-widest uppercase px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {os.role}
                </span>
              </div>

              <p className="text-[13px] text-neutral-600 leading-relaxed pl-5 md:pl-9">
                {os.description}
              </p>
            </Wrapper>
          );
        })}
      </motion.div>
    </div>
  );
}
