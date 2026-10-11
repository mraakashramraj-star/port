"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import ShinyText from "./ShinyText";
import SpecularButton from "./SpecularButton";

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

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    sections.forEach((sec) => observer.observe(sec));
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
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
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-2xl transition-all duration-300">
      {/* Floating Pill Container matching React Bits design exactly */}
      <div className="relative backdrop-blur-2xl bg-[#0c0e14]/90 border border-white/10 rounded-2xl px-3.5 py-2 sm:px-6 sm:py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-between gap-2">
        {/* Brand Logo with React Bits emblem */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 sm:gap-2.5 focus:outline-none group shrink-0 min-w-0"
          aria-label="Scroll to top"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-500 group-hover:rotate-45 shrink-0"
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
          <span className="font-bold tracking-tight text-xs min-[380px]:text-sm sm:text-base font-heading truncate max-w-[130px] min-[400px]:max-w-[180px] sm:max-w-none">
            <ShinyText
              text={PERSONAL_INFO.fullName}
              color="#d4d4d8"
              shineColor="#ffffff"
              speed={2.2}
              shineWidth={45}
              softness={0.8}
              trigger="loop"
            />
          </span>
        </button>

        {/* Center / Right Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-5 sm:gap-7 text-sm font-medium text-zinc-400 ml-auto mr-3 sm:mr-5">
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
            className="hover:text-white transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Far-Right Action Button & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 ml-auto sm:ml-0 shrink-0">
          <SpecularButton
            size="sm"
            radius={12}
            tint="#ffffff"
            tintOpacity={0.95}
            textColor="#000000"
            lineColor="#ffffff"
            baseColor="#e4e4e7"
            intensity={1.2}
            idleIntensity={0.5}
            glow={0.8}
            shineSize={14}
            shineFade={28}
            thickness={1.3}
            href={PERSONAL_INFO.resumePath}
            download="Aakash-MR-Resume.pdf"
            target="_blank"
            id="nav-resume-btn"
            className="hidden md:inline-flex font-bold shadow-[0_4px_16px_rgba(255,255,255,0.2)] text-xs sm:text-sm px-3 sm:px-4 py-1.5"
          >
            <span>Resume</span>
          </SpecularButton>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/[0.08] active:scale-95 transition-all focus:outline-none flex items-center justify-center min-w-[36px] min-h-[36px]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
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
            <SpecularButton
              size="sm"
              radius={12}
              tint="#ffffff"
              tintOpacity={0.95}
              textColor="#000000"
              lineColor="#ffffff"
              baseColor="#e4e4e7"
              intensity={1.2}
              idleIntensity={0.5}
              glow={0.8}
              href={PERSONAL_INFO.resumePath}
              download="Aakash-MR-Resume.pdf"
              className="w-full font-bold shadow-md justify-center"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </SpecularButton>
          </div>
        </div>
      )}
    </header>
  );
}
