"use client";
import { motion } from "framer-motion";
import DATA from "@/data";

export default function OpenSource() {
  return (
    <div className="py-10">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">Open Source</h2>
        <p className="text-neutral-500">Contributions and community programs.</p>
      </div>

      <div className="space-y-12">
        {DATA.OPEN_SOURCE.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group block pl-6 border-l-2 border-neutral-800 hover:border-white transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="text-2xl font-bold text-neutral-200 group-hover:text-white transition-colors">
                {item.program}
              </h3>
              <span className="text-xs font-mono text-neutral-600 border border-neutral-800 px-2 py-1 rounded">
                {item.date}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-black bg-white px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">
                {item.role}
              </span>
            </div>

            <p className="text-neutral-500 max-w-2xl leading-relaxed group-hover:text-neutral-400 transition-colors">
              {item.description}
            </p>

          </motion.a>
        ))}
      </div>
    </div>
  );
}