"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { 
  SiMongodb, 
  SiExpress, 
  SiCplusplus, 
  SiJavascript, 
  SiMysql, 
  SiTypescript, 
  SiTailwindcss, 
  SiFirebase, 
  SiJenkins, 
  SiKubernetes 
} from 'react-icons/si';
import { FaNode, FaGitAlt, FaDocker } from 'react-icons/fa';

const techStack = [
  { icon: <RiReactjsLine />, name: "React.js" },
  { icon: <TbBrandNextjs />, name: "Next.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaNode />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <SiJenkins />, name: "Jenkins" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
];

const Technologies = () => {
  return (
    <div className="pb-20">
      <div className="border-b border-neutral-800 pb-4 mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">Technologies</h2>
        <p className="text-neutral-500 mt-2">Tools, frameworks, and DevOps.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col items-center justify-center p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-300 group cursor-default"
          >
            {/* Icon: Lighter gray (400) -> White on hover */}
            <div className="text-4xl text-neutral-400 group-hover:text-white transition-colors duration-300 mb-3 transform group-hover:scale-110">
              {tech.icon}
            </div>
            
            {/* Label */}
            <span className="text-xs font-mono text-neutral-400 group-hover:text-neutral-200 transition-colors">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;