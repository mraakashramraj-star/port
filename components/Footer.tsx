"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#050608] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/20 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">{PERSONAL_INFO.fullName}</h3>
            </div>
            <p className="text-xs text-zinc-400 font-medium tracking-wide">
              Full-Stack Developer | IT Undergraduate
            </p>
            <p className="text-[11px] text-zinc-500 font-mono pt-1">
              {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-300 hover:text-white transition"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-300 hover:text-white transition"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-300 hover:text-white transition"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition group"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-white" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono text-center sm:text-left">
          <p>© {currentYear} {PERSONAL_INFO.fullName}. Built with precision, React Bits, and clean engineering.</p>
          <p className="flex items-center gap-1">
            <span>PSNA College of Engineering and Technology</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
