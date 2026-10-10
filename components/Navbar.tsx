"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl transition-all duration-300">
      {/* Floating Pill Container matching React Bits design exactly */}
      <div className="relative backdrop-blur-xl bg-[#0f1118]/75 border border-white/10 rounded-2xl px-5 py-2.5 sm:px-6 sm:py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center justify-between">
        {/* Brand Logo with React Bits emblem */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2.5 focus:outline-none group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5 text-white transition-transform duration-500 group-hover:rotate-45"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="2.5" />
            <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(-30 12 12)" />
            <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(90 12 12)" />
          </svg>
          <span className="text-white font-bold tracking-tight text-sm sm:text-base font-heading">
            {PERSONAL_INFO.fullName}
          </span>
        </button>

        {/* Center / Right Navigation Links */}
        <nav className="flex items-center gap-5 sm:gap-7 text-sm font-medium text-zinc-400 ml-auto mr-3 sm:mr-5">
          <button
            onClick={() => scrollTo("projects")}
            className="hover:text-white transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hidden sm:inline hover:text-white transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Far-Right White Pill Action Button */}
        <div className="flex items-center gap-2">
          <a
            href={PERSONAL_INFO.resumePath}
            download="Aakash-MR-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-black bg-white hover:bg-zinc-100 rounded-xl shadow-[0_4px_16px_rgba(255,255,255,0.2)] transition-all duration-200 hover:scale-[1.02] active:scale-95"
            id="nav-resume-btn"
          >
            <span>Resume</span>
          </a>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="mt-2.5 backdrop-blur-2xl bg-[#121319]/95 border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                activeSection === item.id
                  ? "bg-white/10 text-white font-bold"
                  : "text-zinc-300 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10 mt-1">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Aakash-MR-Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-black bg-white rounded-xl shadow-md"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
