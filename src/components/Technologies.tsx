"use client";
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb, SiExpress, SiCplusplus, SiJavascript,
  SiMysql, SiTypescript, SiTailwindcss, SiFirebase,
  SiJenkins, SiKubernetes,
} from "react-icons/si";
import { FaNode, FaGitAlt, FaDocker } from "react-icons/fa";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Tech { icon: React.ReactNode; name: string }

/* Each category carries its own accent that applies uniformly on hover */
const categories: {
  label: string;
  labelColor: string;
  dividerColor: string;
  cardHover: string;        /* Tailwind group-hover classes for the card */
  iconHover: string;        /* Tailwind group-hover classes for the icon span */
  items: Tech[];
}[] = [
  {
    label: "Frontend",
    labelColor: "text-sky-600",
    dividerColor: "bg-sky-100",
    cardHover: "hover:border-sky-200 hover:bg-sky-50 hover:shadow-sm",
    iconHover: "group-hover:text-sky-500",
    items: [
      { icon: <RiReactjsLine />, name: "React" },
      { icon: <TbBrandNextjs />, name: "Next.js" },
      { icon: <SiTypescript />,  name: "TypeScript" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiJavascript />,  name: "JavaScript" },
    ],
  },
  {
    label: "Backend",
    labelColor: "text-emerald-600",
    dividerColor: "bg-emerald-100",
    cardHover: "hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-sm",
    iconHover: "group-hover:text-emerald-500",
    items: [
      { icon: <FaNode />,       name: "Node.js" },
      { icon: <SiExpress />,    name: "Express" },
      { icon: <SiMongodb />,    name: "MongoDB" },
      { icon: <SiMysql />,      name: "MySQL" },
      { icon: <SiFirebase />,   name: "Firebase" },
    ],
  },
  {
    label: "DevOps & Tools",
    labelColor: "text-amber-600",
    dividerColor: "bg-amber-100",
    cardHover: "hover:border-amber-200 hover:bg-amber-50 hover:shadow-sm",
    iconHover: "group-hover:text-amber-500",
    items: [
      { icon: <FaGitAlt />,     name: "Git" },
      { icon: <FaDocker />,     name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <SiJenkins />,    name: "Jenkins" },
      { icon: <SiCplusplus />,  name: "C++" },
    ],
  },
];

const containerVariants: Variants = {
  animate: { transition: { staggerChildren: 0.04 } },
};

const cardVariants: Variants = {
  initial: { opacity: 0, scale: 0.94 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: EASE } },
};

export default function Technologies() {
  return (
    <div className="py-10 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">Stack</h2>
        <p className="text-xs font-mono text-neutral-500 mt-1">Tools I use day-to-day</p>
      </motion.div>

      <div className="space-y-9">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: catIdx * 0.08, ease: EASE }}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-[11px] font-mono font-semibold tracking-widest uppercase ${cat.labelColor}`}>
                {cat.label}
              </span>
              <div className={`flex-1 h-px ${cat.dividerColor}`} />
            </div>

            {/* Cards */}
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2"
            >
              {cat.items.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={cardVariants}
                  className={`group flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-neutral-200 bg-white transition-all duration-150 cursor-default ${cat.cardHover}`}
                >
                  <span className={`text-2xl text-neutral-400 transition-colors duration-150 ${cat.iconHover}`}>
                    {tech.icon}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500 group-hover:text-neutral-700 transition-colors duration-150 text-center leading-tight">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
