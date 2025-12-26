"use client";
import { motion } from "framer-motion";
import DATA from "@/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Imported External Link icon

export default function Projects() {
  return (
    <div className="py-10">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">Selected Work</h2>
        <p className="text-neutral-500">A collection of projects and experiments.</p>
      </div>

      <div className="flex flex-col gap-8">
        {DATA.PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative border-l-2 border-neutral-800 hover:border-white pl-6 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
              <h3 className="text-2xl font-semibold text-neutral-300 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              
              {/* Links Section */}
              <div className="flex items-center gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors"
                    title="Live Demo"
                  >
                    <span>Live</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}
                
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors"
                    title="View Code"
                  >
                    <span>Code</span>
                    <FaGithub size={16} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-neutral-500 max-w-2xl mb-4 group-hover:text-neutral-400 transition-colors leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 text-xs font-mono bg-neutral-900 text-neutral-500 border border-neutral-800 rounded group-hover:border-neutral-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}