"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import DATA from "@/data";
import { FiArrowUpRight } from "react-icons/fi";
import { RiBriefcaseLine, RiGraduationCapLine } from "react-icons/ri";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const typeBadge: Record<string, string> = {
  Internship: "bg-violet-50 text-violet-700 border border-violet-200",
  Education:  "bg-amber-50  text-amber-700  border border-amber-200",
};

const typeIcon: Record<string, { icon: React.ElementType; bg: string; color: string }> = {
  Internship: { icon: RiBriefcaseLine,     bg: "bg-indigo-50", color: "text-indigo-500" },
  Education:  { icon: RiGraduationCapLine, bg: "bg-amber-50",  color: "text-amber-500"  },
};

const projectAccent: Record<string, { text: string; line: string }> = {
  Internship: { text: "text-indigo-500", line: "bg-indigo-100" },
  Education:  { text: "text-amber-500",  line: "bg-amber-100"  },
};

export default function Experience() {
  return (
    <div className="py-6 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="mb-8 md:mb-10"
      >
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Experience</h2>
        <p className="text-xs font-mono text-neutral-500 mt-1">Work history &amp; education</p>
      </motion.div>

      <motion.div variants={container} initial="initial" animate="animate" className="space-y-4">
        {DATA.EXPERIENCE.map((exp, index) => {
          const iconMeta = typeIcon[exp.type]  ?? typeIcon["Internship"];
          const badgeCls = typeBadge[exp.type] ?? typeBadge["Internship"];
          const accent   = projectAccent[exp.type] ?? projectAccent["Internship"];
          const IconComp = iconMeta.icon;
          const hasLink  = exp.link && exp.link !== "#";

          return (
            <motion.div
              key={index}
              variants={item}
              className="group p-4 md:p-6 rounded-xl border border-neutral-200 bg-white/80 hover:border-indigo-100 hover:shadow-md transition-all duration-200"
            >
              {/* Header — stacks on mobile */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 p-2 rounded-lg shrink-0 ${iconMeta.bg} ${iconMeta.color}`}>
                    <IconComp size={14} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-neutral-900 leading-snug">
                      {exp.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-[13px] text-neutral-600 font-medium">{exp.role}</span>
                      <span className={`text-[10px] font-mono font-semibold tracking-widest uppercase px-2 py-0.5 rounded-md ${badgeCls}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Duration + location — right on sm+, left on mobile */}
                <div className="pl-11 sm:pl-0 sm:text-right space-y-0.5 shrink-0">
                  <div className="text-[12px] font-mono text-neutral-600">{exp.duration}</div>
                  <div className="text-[11px] font-mono text-neutral-500">{exp.location}</div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-neutral-100 mb-4 ml-9" />

              {/* Project / Focus */}
              <div className="ml-6 md:ml-9 space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-semibold tracking-widest uppercase ${accent.text}`}>
                    {exp.type === "Education" ? "Focus" : "Project"}
                  </span>
                  <div className={`flex-1 h-px ${accent.line}`} />
                  {hasLink && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-[11px] font-mono transition-all duration-150 ${accent.text}`}
                    >
                      View <FiArrowUpRight size={11} />
                    </a>
                  )}
                </div>

                <h4 className="text-[13px] font-semibold text-neutral-700 group-hover:text-neutral-900 transition-colors duration-150">
                  {exp.project}
                </h4>

                <p className="text-[13px] text-neutral-600 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] font-mono text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
