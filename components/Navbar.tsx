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
          ? "bg-[#07080b]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-2.5 text-left focus:outline-none focus:ring-2 focus:ring-white/40 rounded-lg px-2 py-1 -ml-2 transition"
            aria-label="Go to top of page"
          >
            <div className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/20 p-[1px] shadow-lg shadow-black/40 group-hover:border-white/40 transition">
              <div className="w-full h-full bg-[#0a0c10] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-tight text-base sm:text-lg flex items-center gap-1.5 font-heading">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="text-[10px] text-zinc-400 font-medium tracking-wider uppercase -mt-0.5">
                Full-Stack Dev
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-white/40 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-white/10 border border-white/25 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.1)] transition-all" />
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
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wide text-black bg-white hover:bg-zinc-200 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.18)] hover:shadow-[0_0_28px_rgba(255,255,255,0.3)] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white"
              id="nav-resume-btn"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/30 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Aakash-MR-Resume.pdf"
              className="p-2 text-black bg-white rounded-lg text-xs flex items-center justify-center font-bold"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white bg-white/[0.04] border border-white/[0.08] rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
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
                  ? "bg-white/10 text-white border border-white/20"
                  : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
          ))}
          <div className="pt-3 border-t border-white/[0.06] flex gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Aakash-MR-Resume.pdf"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-black bg-white rounded-xl shadow-lg"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="px-4 py-2.5 text-xs font-semibold text-zinc-200 bg-white/[0.06] border border-white/[0.1] rounded-xl"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
