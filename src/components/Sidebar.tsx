"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaCode, FaLayerGroup, FaEnvelope ,FaCodeBranch ,FaAward} from "react-icons/fa";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "projects", label: "Projects", icon: <FaCode /> },
  { id: "opensource", label: "Open Source", icon: <FaCodeBranch /> },
  { id: "stack", label: "Stack", icon: <FaLayerGroup /> },
  { id: "certificates", label: "certificates", icon: <FaAward /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col justify-between w-64 h-screen border-r border-neutral-900 bg-black p-8 sticky top-0">
        <div>
          <h1 className="text-2xl font-bold tracking-tighter text-white mb-10">
            Saish<span className="text-neutral-600">.</span>
          </h1>
          <nav className="flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-4 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-black bg-white"
                    : "text-neutral-500 hover:text-white hover:bg-neutral-900"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="text-xs text-neutral-600 font-mono">
          © 2025 Saish Ghatol
        </div>
      </aside>

      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-t border-neutral-900 pb-safe">
        <div className="flex justify-around items-center p-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 transition-colors duration-300 ${
                activeTab === tab.id ? "text-white" : "text-neutral-600"
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="text-[10px] font-medium uppercase tracking-wider">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}