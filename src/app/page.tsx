"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import OpenSource from "@/components/OpenSource";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";


export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home": return <Hero />;
      case "projects": return <Projects />;
      case "opensource": return <OpenSource />;
      case "stack": return <Technologies />;
      case "certificates" :return <Certificates/>;
      case "contact": return <Contact />; 
      default: return <Hero />;
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-neutral-700 selection:text-white flex flex-col md:flex-row overflow-hidden">
      {/* Navigation / Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 h-screen overflow-y-auto overflow-x-hidden relative scrollbar-hide">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}