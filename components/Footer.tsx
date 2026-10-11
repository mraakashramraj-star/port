"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import SpecularButton from "./SpecularButton";
import AnimatedContent from "./AnimatedContent";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#050608] border-t border-white/[0.08] pt-12 pb-12 overflow-hidden">
      {/* Top subtle glow accent */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 via-blue-500/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">{PERSONAL_INFO.fullName}</h3>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-400 font-medium">
                ● Open to Opportunities
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-medium tracking-wide">
              Full-Stack Developer | IT Undergraduate
            </p>
            <p className="text-[11px] text-zinc-500 font-mono">
              {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <SpecularButton
              size="sm"
              radius={9999}
              tint="#8b5cf6"
              tintOpacity={0.15}
              lineColor="#c084fc"
              baseColor="#7c3aed"
              intensity={1}
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="!p-3 !rounded-full text-purple-300 hover:text-white border border-purple-500/20"
              style={{ padding: "12px", minWidth: "42px", minHeight: "42px" }}
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </SpecularButton>

            <SpecularButton
              size="sm"
              radius={9999}
              tint="#3b82f6"
              tintOpacity={0.15}
              lineColor="#60a5fa"
              baseColor="#2563eb"
              intensity={1}
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="!p-3 !rounded-full text-blue-300 hover:text-white border border-blue-500/20"
              style={{ padding: "12px", minWidth: "42px", minHeight: "42px" }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </SpecularButton>

            <SpecularButton
              size="sm"
              radius={9999}
              tint="#10b981"
              tintOpacity={0.15}
              lineColor="#34d399"
              baseColor="#059669"
              intensity={1}
              href={`mailto:${PERSONAL_INFO.email}`}
              className="!p-3 !rounded-full text-emerald-300 hover:text-white border border-emerald-500/20"
              style={{ padding: "12px", minWidth: "42px", minHeight: "42px" }}
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </SpecularButton>
          </div>

          {/* Back to Top */}
          <SpecularButton
            size="sm"
            radius={9999}
            tint="#ffffff"
            tintOpacity={0.08}
            textColor="#d4d4d8"
            lineColor="#ffffff"
            intensity={1}
            onClick={scrollToTop}
            className="font-semibold border border-white/10 group shadow-sm"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 ml-1 transition-transform group-hover:-translate-y-0.5 text-white inline" />
          </SpecularButton>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono text-center sm:text-left">
          <p>© {currentYear} {PERSONAL_INFO.fullName}. Built with precision, React Bits, and clean engineering.</p>
          <p className="flex items-center gap-1">
            <span>PSNA College of Engineering and Technology</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
