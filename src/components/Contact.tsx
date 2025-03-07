"use client";
import { motion } from "framer-motion";
import  DATA  from "@/data";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    hover: { scale: 1.05, x: 5 },
    tap: { scale: 0.95 },
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
        Get In Touch
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="text-center tracking-tighter max-w-2xl mx-auto space-y-6"
      >
        <motion.p
          variants={itemVariants}
          className="my-4 text-neutral-300 hover:text-neutral-100 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {DATA.CONTACT.address}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="my-4 text-neutral-300 hover:text-neutral-100 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {DATA.CONTACT.phoneNo}
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 items-center"
          variants={containerVariants}
        >
          <motion.a
            href={`mailto:${DATA.CONTACT.email}`}
            className="text-violet-300 hover:text-violet-200 transition-all duration-300 relative group"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ type: "spring", stiffness: 300 }}
          >
            {DATA.CONTACT.email}
            <span className="absolute left-0 bottom-0 w-0 h-px bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>

          <motion.a
            href={`mailto:${DATA.CONTACT.email2}`}
            className="text-violet-300 hover:text-violet-200 transition-all duration-300 relative group"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            {DATA.CONTACT.email2}
            <span className="absolute left-0 bottom-0 w-0 h-px bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}