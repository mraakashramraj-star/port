"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, FileDown, ArrowUpRight, Code2 } from "lucide-react";
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
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090d]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-2.5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg px-2 py-1 -ml-2 transition"
            aria-label="Go to top of page"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition">
              <div className="w-full h-full bg-[#0a0c14] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-tight text-base sm:text-lg flex items-center gap-1.5 font-heading">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase -mt-0.5">
                Full-Stack Dev
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-violet-600/30 border border-blue-500/40 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all" />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Aakash-MR-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_28px_rgba(59,130,246,0.55)] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="nav-resume-btn"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.08] hover:border-white/[0.15] rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Aakash-MR-Resume.pdf"
              className="p-2 text-white bg-blue-600/80 rounded-lg text-xs flex items-center justify-center"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-[460px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0b0d14]/95 backdrop-blur-xl border-y border-white/[0.08] px-5 py-4 space-y-1 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition ${
                activeSection === item.id
                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                  : "text-slate-300 hover:bg-white/[0.04]"
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
            </button>
          ))}
          <div className="pt-3 border-t border-white/[0.06] flex gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Aakash-MR-Resume.pdf"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="px-4 py-2.5 text-xs font-semibold text-slate-200 bg-white/[0.06] border border-white/[0.1] rounded-xl"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
