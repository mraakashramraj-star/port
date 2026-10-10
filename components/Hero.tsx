"use client";

import React, { useState } from "react";
import { ArrowRight, FileDown, Github, Linkedin, MapPin, Sparkles, Terminal, Eye } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import GridMotion from "./GridMotion";
import { TechIcon } from "./TechIcons";

interface TechItemMeta {
  name: string;
  category: string;
  icon: string;
  color: string;
}

const TECH_WALL_ITEMS: TechItemMeta[] = [
  { name: "Python", category: "Language", icon: "python", color: "#387EB8" },
  { name: "React", category: "Frontend", icon: "react", color: "#61DAFB" },
  { name: "JavaScript", category: "Language", icon: "javascript", color: "#F7DF1E" },
  { name: "FastAPI", category: "Backend API", icon: "fastapi", color: "#059669" },
  { name: "Java", category: "Core OOP", icon: "java", color: "#E76F00" },
  { name: "Node.js", category: "Runtime", icon: "nodejs", color: "#68A063" },
  { name: "MongoDB", category: "NoSQL DB", icon: "mongodb", color: "#47A248" },
  { name: "MySQL", category: "Relational DB", icon: "mysql", color: "#00758F" },
  { name: "Hugging Face", category: "NLP & AI", icon: "huggingface", color: "#FFD21E" },
  { name: "TypeScript", category: "Language", icon: "typescript", color: "#3178C6" },
  { name: "Tailwind CSS", category: "Styling", icon: "tailwind", color: "#06B6D4" },
  { name: "Git", category: "Version Control", icon: "git", color: "#F05032" },
  { name: "SQLite", category: "Database", icon: "sqlite", color: "#003B57" },
  { name: "NumPy", category: "Data & ML", icon: "numpy", color: "#4DABCF" },
  { name: "REST APIs", category: "Architecture", icon: "api", color: "#8B5CF6" },
  { name: "HTML5", category: "Semantic Web", icon: "html5", color: "#E34F26" },
];

export default function Hero() {
  const [wallMode, setWallMode] = useState<boolean>(false);

  // Generate JSX nodes for each tech item to feed into GridMotion
  const gridMotionTiles = TECH_WALL_ITEMS.map((item, idx) => (
    <div key={`${item.name}-${idx}`} className="tech-tile-node group cursor-pointer">
      <div
        className="tech-tile-icon-wrap transition-transform duration-300 group-hover:scale-110"
        style={{ borderColor: `${item.color}33`, boxShadow: `0 0 16px ${item.color}15` }}
      >
        <TechIcon name={item.icon} className="w-6 h-6" />
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="tech-tile-name font-mono">{item.name}</span>
        <span className="tech-tile-category">{item.category}</span>
      </div>
    </div>
  ));

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* 3D GridMotion Interactive Wall Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <GridMotion
          items={gridMotionTiles}
          rows={4}
          aspectRatio={1.25}
          gap={18}
          radius={16}
          angle={-10}
          tilt={14}
          speed={18}
          direction="alternate"
          parallax={0.65}
          spotlight={0.7}
          dim={wallMode ? 0.15 : 0.42}
          fade={0.6}
          grayscale={false}
          className="w-full h-full"
        />

        {/* Ambient Radial Gradient Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-500 ${
          wallMode ? "opacity-20 pointer-events-none scale-95" : "opacity-100 scale-100"
        }`}
      >
        {/* Top Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider text-blue-300 uppercase">
              FULL-STACK DEVELOPER
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-slate-300 text-[11px] font-medium">
            <MapPin className="w-3 h-3 text-slate-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Small introduction */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3">
          HELLO, I'M
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 font-heading">
          <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            {PERSONAL_INFO.fullName}
          </span>
        </h1>

        {/* Professional Headline */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-slate-200 max-w-3xl mx-auto mb-6 leading-relaxed">
          Building Digital Experiences That Solve Real Problems.
        </p>

        {/* Supporting Description */}
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          I’m an Information Technology undergraduate passionate about full-stack development, intuitive user interfaces, and practical software solutions. I enjoy transforming ideas into functional web applications through thoughtful design, clean implementation, and continuous learning.
        </p>

        {/* Primary & Secondary Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="hero-explore-btn"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={PERSONAL_INFO.resumePath}
            download="Aakash-MR-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] hover:border-white/[0.25] rounded-full backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            id="hero-resume-btn"
          >
            <FileDown className="w-4 h-4 text-blue-400" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Social Links & Terminal Indicator */}
        <div className="flex items-center justify-center gap-4 text-slate-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.2] hover:text-white hover:bg-white/[0.08] transition duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.2] hover:text-white hover:bg-white/[0.08] transition duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
          </a>

          <div className="h-4 w-px bg-white/10" />

          <button
            onClick={() => scrollTo("about")}
            className="text-xs font-mono text-slate-400 hover:text-slate-200 flex items-center gap-1.5 transition"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>status: available for roles</span>
          </button>
        </div>
      </div>

      {/* Floating Demo Content / Focus Mode Toggle (Inspired by React Bits UI in user screenshot) */}
      <div className="absolute bottom-6 right-6 z-20">
        <button
          onClick={() => setWallMode(!wallMode)}
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#11131c]/80 hover:bg-[#151824] border border-white/10 text-xs font-medium text-slate-300 hover:text-white backdrop-blur-md shadow-xl transition-all"
          title="Toggle between hero text and interactive 3D tech wall view"
        >
          <Eye className="w-3.5 h-3.5 text-blue-400" />
          <span className="hidden sm:inline">{wallMode ? "Show Hero Text" : "Interactive Wall View"}</span>
          <div
            className={`w-7 h-4 rounded-full p-0.5 transition-colors ${
              wallMode ? "bg-blue-600" : "bg-slate-700"
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full bg-white transition-transform ${
                wallMode ? "translate-x-3" : "translate-x-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Bottom Scroll Cue */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[11px] uppercase tracking-widest text-slate-500 hover:text-slate-300 transition"
        aria-label="Scroll to About section"
      >
        <span className="w-1 h-5 rounded-full bg-gradient-to-b from-blue-400 to-transparent animate-bounce" />
      </button>
    </section>
  );
}
