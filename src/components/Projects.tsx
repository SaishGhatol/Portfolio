"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/index.json"; // Assuming your data is in PROJECTS
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.5,
      },
    },
    hover: { scale: 1.05, y: -5 },
    tap: { scale: 0.95 },
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    hover: { scale: 1.1, y: -2 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="border-b border-neutral-800 pb-20"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-12 md:mb-16 text-center"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="flex flex-col items-center space-y-8"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full max-w-[70%] p-6 bg-neutral-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-800 relative"
          >
            {/* GitHub Icon */}
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 text-neutral-300 hover:text-violet-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>

            {/* Project Title */}
            <motion.h3
              className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4"
            >
              {project.title}
            </motion.h3>

            {/* Project Description */}
            <motion.p
              className="text-neutral-300 mb-4"
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
            >
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  variants={tagVariants}
                  whileHover="hover"
                  className="px-3 py-1 text-sm bg-neutral-800 rounded-full text-neutral-300 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}