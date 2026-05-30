"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";
import OpenSource from "@/components/OpenSource";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

const TAB_ORDER = [
  "home", "projects", "experience", "opensource", "stack", "certificates", "contact",
] as const;

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const scrollRef    = useRef<HTMLDivElement>(null);
  const cooldownRef  = useRef(false); // prevent rapid double-fires

  /* Scroll to top whenever tab changes */
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  /* Mobile: auto-navigate when user scrolls past the bottom of a section */
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || cooldownRef.current) return;

    // Desktop sidebar handles navigation — skip on wide screens
    if (window.innerWidth >= 768) return;

    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;

    if (distanceFromBottom < 60) {
      const idx = TAB_ORDER.indexOf(activeTab as typeof TAB_ORDER[number]);
      if (idx < TAB_ORDER.length - 1) {
        cooldownRef.current = true;
        setActiveTab(TAB_ORDER[idx + 1]);
        setTimeout(() => { cooldownRef.current = false; }, 800);
      }
    }
  }, [activeTab]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const renderContent = () => {
    switch (activeTab) {
      case "home":         return <Hero onNavigate={setActiveTab} />;
      case "projects":     return <Projects />;
      case "experience":   return <Experience />;
      case "opensource":   return <OpenSource />;
      case "stack":        return <Technologies />;
      case "certificates": return <Certificates />;
      case "contact":      return <Contact />;
      default:             return <Hero onNavigate={setActiveTab} />;
    }
  };

  const currentIdx = TAB_ORDER.indexOf(activeTab as typeof TAB_ORDER[number]);
  const hasNext    = currentIdx < TAB_ORDER.length - 1;
  const nextLabel  = hasNext
    ? TAB_ORDER[currentIdx + 1].charAt(0).toUpperCase() + TAB_ORDER[currentIdx + 1].slice(1)
    : null;

  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900 font-sans flex flex-col md:flex-row overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div
        ref={scrollRef}
        className="flex-1 h-screen overflow-y-auto overflow-x-hidden relative scrollbar-hide"
        style={{
          backgroundImage: "radial-gradient(circle, #dedede 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          backgroundColor: "#fafafa",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="mx-3 md:mx-6 my-3 md:my-6 bg-white rounded-2xl shadow-sm border border-neutral-100 px-5 md:px-10 pt-7 md:pt-12 pb-24 md:pb-16 min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-3rem)] flex flex-col">
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile-only scroll hint at bottom of each non-last section */}
            {hasNext && nextLabel && (
              <div className="md:hidden flex flex-col items-center gap-1 pb-2 pt-6 select-none">
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
                    scroll for {nextLabel}
                  </span>
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className="text-neutral-300">
                    <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
