"use client";
import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiExpress, SiCplusplus, SiJavascript, SiMysql}  from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Technologies = () => {
  const techStack = [
    {
      icon: <RiReactjsLine className="text-5xl text-cyan-400" />,
      name: "React.js",
      color: "text-cyan-400",
    },
    {
      icon: <TbBrandNextjs className="text-5xl text-white" />,
      name: "Next.js",
      color: "text-white",
    },
    {
      icon: <SiMongodb className="text-5xl text-green-400" />,
      name: "MongoDB",
      color: "text-green-400",
    },
    {
      icon: <FaNode className="text-5xl text-green-600" />,
      name: "Node.js",
      color: "text-green-600",
    },
    {
      icon: <SiExpress className="text-5xl text-gray-400" />,
      name: "Express",
      color: "text-gray-400",
    },
    {
      icon: <SiJavascript className="text-5xl text-yellow-400" />,
      name: "JavaScript",
      color: "text-yellow-400",
    },
    {
      icon: <SiCplusplus className="text-5xl text-blue-400" />,
      name: "C++",
      color: "text-blue-400",
    },
    {
      icon: <SiMysql className="text-5xl text-orange-500" />,
      name: "MySQL",
      color: "text-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 },
    },
  };

  return (
    <div className="pb-20 px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
      >
        Tech Stack
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto"
      >
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="group relative bg-neutral-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <div className="flex flex-col items-center gap-3">
              <div className={`${tech.color} animate-float`}>
                {tech.icon}
              </div>
              <span className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;