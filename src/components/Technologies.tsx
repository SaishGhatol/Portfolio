"use client"

import React, { useState,useEffect } from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiExpress, SiCplusplus, SiJavascript, SiMysql, SiTypescript, SiTailwindcss, SiFirebase } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNode, FaGitAlt, FaDocker } from 'react-icons/fa';
import { motion } from 'framer-motion';



const Technologies = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = {
    "technologies": [
      {
        icon: <RiReactjsLine className="text-5xl" />,
        name: "React.js",
        color: "from-cyan-400 to-blue-500",
        description: "Component-based UI library"
      },
      {
        icon: <TbBrandNextjs className="text-5xl" />,
        name: "Next.js",
        color: "from-white to-gray-300",
        description: "React framework with SSR & SSG"
      },
      {
        icon: <SiTypescript className="text-5xl" />,
        name: "TypeScript",
        color: "from-blue-500 to-blue-700",
        description: "Strongly typed JavaScript"
      },
      {
        icon: <SiTailwindcss className="text-5xl" />,
        name: "Tailwind CSS",
        color: "from-teal-400 to-cyan-500",
        description: "Utility-first CSS framework"
      },
      {
        icon: <SiJavascript className="text-5xl" />,
        name: "JavaScript",
        color: "from-yellow-400 to-yellow-600",
        description: "Web programming language"
      },
      {
        icon: <FaNode className="text-5xl" />,
        name: "Node.js",
        color: "from-green-500 to-green-700",
        description: "JavaScript runtime environment"
      },
      {
        icon: <SiExpress className="text-5xl" />,
        name: "Express",
        color: "from-gray-400 to-gray-600",
        description: "Minimal web framework"
      },
      {
        icon: <SiMongodb className="text-5xl" />,
        name: "MongoDB",
        color: "from-green-400 to-green-600",
        description: "NoSQL document database"
      },
      {
        icon: <SiMysql className="text-5xl" />,
        name: "MySQL",
        color: "from-orange-400 to-orange-600",
        description: "Relational database system"
      },
      {
        icon: <SiCplusplus className="text-5xl" />,
        name: "C++",
        color: "from-blue-400 to-blue-600",
        description: "Systems programming language"
      },
      {
        icon: <SiFirebase className="text-5xl" />,
        name: "Firebase",
        color: "from-yellow-500 to-orange-500",
        description: "App development platform"
      },
      {
        icon: <FaGitAlt className="text-5xl" />,
        name: "Git",
        color: "from-red-500 to-red-700",
        description: "Version control system"
      },
      {
        icon: <FaDocker className="text-5xl" />,
        name: "Docker",
        color: "from-blue-400 to-blue-600",
        description: "Container platform"
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 12,
        staggerChildren: 0.08,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="min-h-screen w-full  relative overflow-hidden">
      {/* Gradient orbs */}
    
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20"></div>
      
      {/* Content container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full py-24 px-4 sm:px-6 lg:px-8"
      >
        <section className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-lg font-medium text-cyan-400 mb-3">EXPERTISE</h2>
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2">
              My Tech Stack
            </h3>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              Technologies and tools I have mastered throughout my journey as a developer, 
              enabling me to build robust and scalable applications.
            </p>
          </motion.div>

          {/* Tech cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-16"
          >
            {Object.entries(categories).map(([category, techs]) => (
              <motion.div key={category} variants={sectionVariants} className="space-y-6">
                <motion.h4 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-semibold text-white border-l-4 border-cyan-400 pl-4"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.h4>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {techs.map((tech) => (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      whileHover={{ y: -10, scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className="group relative bg-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-800/50"
                    >
                      {/* Card content */}
                      <div className="p-6 z-20 relative h-full flex flex-col items-center justify-between">
                        {/* Icon container with gradient background */}
                        <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${tech.color} p-3 mb-4 shadow-lg`}>
                          <motion.div 
                            animate={{ 
                              rotate: hoveredTech === tech.name ? 360 : 0,
                            }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="text-neutral-900"
                          >
                            {tech.icon}
                          </motion.div>
                        </div>
                        
                        <div className="text-center">
                          <h5 className="font-bold text-white mb-1">{tech.name}</h5>
                          <p className="text-xs text-neutral-400">{tech.description}</p>
                        </div>
                      </div>
                      
                      {/* Background effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0"></div>
                      
                      {/* Glass reflection effect */}
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "200%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute -inset-full h-full w-1/2 z-10 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
};

export default Technologies;