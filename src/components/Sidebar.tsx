"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  RiHome4Line,
  RiCodeSSlashLine,
  RiGitBranchLine,
  RiBriefcaseLine,
  RiStackLine,
  RiMedalLine,
  RiMailLine,
} from "react-icons/ri";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: "home",         label: "Home",         icon: RiHome4Line },
  { id: "projects",     label: "Projects",     icon: RiCodeSSlashLine },
  { id: "experience",   label: "Experience",   icon: RiBriefcaseLine },
  { id: "opensource",   label: "Open Source",  icon: RiGitBranchLine },
  { id: "stack",        label: "Stack",        icon: RiStackLine },
  { id: "certificates", label: "Certificates", icon: RiMedalLine },
  { id: "contact",      label: "Contact",      icon: RiMailLine },
];

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <>
      {/* ── Desktop Sidebar ─────────────────────────────── */}
      <aside className="hidden md:flex flex-col justify-between w-52 h-screen shrink-0 sticky top-0 bg-white border-r border-neutral-200 shadow-[2px_0_12px_rgba(0,0,0,0.04)] px-5 py-8 z-10">
        <div className="space-y-8">
          {/* Brand */}
          <div className="space-y-1.5 px-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
                <span className="text-white text-[10px] font-bold tracking-tight">SG</span>
              </div>
              <span className="text-[14px] font-semibold tracking-tight text-neutral-900">
                Saish<span className="text-indigo-400">.</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-mono text-neutral-500 tracking-wide">Available for work</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="space-y-0.5">
            {tabs.map(({ id, label, icon: Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`
                    relative w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg
                    text-[13px] font-medium transition-all duration-150
                    ${isActive
                      ? "text-indigo-700 bg-indigo-50"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                    }
                  `}
                >
                  {isActive && (
                    <motion.span
                      layoutId="sidebar-indicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-5 rounded-r-full bg-indigo-500"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon size={15} className="shrink-0" />
                  <span>{label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="px-2 space-y-1">
          <p className="text-[10px] font-mono text-neutral-400">© 2025 Saish Ghatol</p>
          <p className="text-[10px] font-mono text-neutral-400">Full Stack Developer</p>
        </div>
      </aside>

      {/* ── Mobile Bottom Bar — icons only for 7 tabs ───── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe bg-white/96 backdrop-blur-xl border-t border-neutral-200 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-around h-16 px-2">
          {tabs.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                aria-label={label}
                title={label}
                className={`relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-150 ${
                  isActive ? "text-indigo-600" : "text-neutral-500"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-indicator"
                    className="absolute inset-0 rounded-xl bg-indigo-50"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon size={20} className="relative z-10" />
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
