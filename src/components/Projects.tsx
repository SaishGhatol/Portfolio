"use client";
import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import DATA from "@/data/index.json";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import aarogyaImage from "@/assets/images/aarogya.png";
import chatAppImage from "@/assets/images/ChatApp.png";
import quizPortalImage from "@/assets/images/QuizPortal.png";

// Fallback placeholder image data URL
const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD4KPC9zdmc+";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  // Enhanced image mapping with fallbacks
  const getProjectImage = (projectTitle: string, index: number) => {
    // First try exact title match
    const imageMap = {
      "Aarogya": aarogyaImage,
      "ChatApp": chatAppImage,
      "Quiz_Portal": quizPortalImage,
    };
    
    let image = imageMap[projectTitle as keyof typeof imageMap];
    
    // If no exact match, try case-insensitive and partial matches
    if (!image) {
      const titleLower = projectTitle.toLowerCase();
      const keys = Object.keys(imageMap);
      
      for (const key of keys) {
        if (key.toLowerCase().includes(titleLower) || titleLower.includes(key.toLowerCase())) {
          image = imageMap[key as keyof typeof imageMap];
          break;
        }
      }
    }
    
    // Return image or fallback
    return image || placeholderImage;
  };

  // Handle image load errors
  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  return (
    <motion.section
      ref={projectsRef}
      style={{ opacity, y }}
      className="w-full py-24 border-b border-neutral-800/40 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with animated elements */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block mb-2 font-mono text-sm text-purple-400 tracking-wider"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            &lt;section&gt;
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 mb-4"
          >
            Featured Projects
          </motion.h2>
          
          <motion.div
            className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          
          <motion.p 
            className="text-neutral-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            A collection of my recent work showcasing my skills and passion for building exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 md:gap-8"
        >
          {DATA.PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredProject(index as any)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700"
                animate={{
                  scale: hoveredProject === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.div
                className="relative backdrop-blur-md bg-neutral-900/80 rounded-xl overflow-hidden border border-neutral-800/80 shadow-xl shadow-purple-500/10 h-full z-10"
                animate={{
                  scale: hoveredProject === index ? 1.02 : 1,
                  y: hoveredProject === index ? -5 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {/* Project header with gradient */}
                <div className="h-2 w-full bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-400"></div>
                
                {/* Project Image with enhanced error handling */}
                <div className="relative w-full h-48 overflow-hidden bg-neutral-800">
                  {imageErrors[index as keyof typeof imageErrors] ? (
                    // Fallback content when image fails to load
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-purple-500/20 flex items-center justify-center">
                          <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-neutral-400 text-sm font-medium">{project.title}</p>
                        <p className="text-neutral-500 text-xs">Image Preview</p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={getProjectImage(project.title, index)}
                      alt={`${project.title} project screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      onError={() => handleImageError(index)}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Wds="
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-80"></div>
                </div>
                
                <div className="p-7">
                  {/* Project title with animated underline */}
                  <div className="relative mb-4 inline-block">
                    <motion.h3
                      className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.div 
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400"
                      initial={{ width: "0%" }}
                      animate={hoveredProject === index ? { width: "100%" } : { width: "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Project Description */}
                  <motion.p
                    className="text-neutral-300 mb-6 text-sm leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {project.tags?.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        variants={tagVariants}
                        className="px-3 py-1 text-xs font-medium bg-neutral-800/80 rounded-full text-purple-300 border border-purple-500/20 cursor-default transition-all duration-300"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(139, 92, 246, 0.2)",
                        }}
                      >
                        {tag}
                      </motion.span>
                    )) || null}
                  </motion.div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3 mt-6">
                    <motion.a
                      href={project.github || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm text-white transition-colors duration-300"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(64, 64, 64, 0.8)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-lg" />
                      <span>Code</span>
                    </motion.a>
                    
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30 text-sm text-white border border-purple-500/30 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16 font-mono text-sm text-purple-400 tracking-wider"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          &lt;/section&gt;
        </motion.div>
      </div>
    </motion.section>
  );
}