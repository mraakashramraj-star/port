"use client";

import React, { useState } from "react";
import { ArrowRight, FileDown, Github, Linkedin, MapPin, Terminal, Eye } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import GridMotion from "./GridMotion";
import { TechIcon } from "./TechIcons";

interface TechItemMeta {
  name: string;
  category: string;
  icon: string;
}

const TECH_WALL_ITEMS: TechItemMeta[] = [
  { name: "Python", category: "Language", icon: "python" },
  { name: "React", category: "Frontend", icon: "react" },
  { name: "JavaScript", category: "Language", icon: "javascript" },
  { name: "FastAPI", category: "Backend API", icon: "fastapi" },
  { name: "Java", category: "Core OOP", icon: "java" },
  { name: "Node.js", category: "Runtime", icon: "nodejs" },
  { name: "MongoDB", category: "NoSQL DB", icon: "mongodb" },
  { name: "MySQL", category: "Relational DB", icon: "mysql" },
  { name: "Hugging Face", category: "NLP & AI", icon: "huggingface" },
  { name: "TypeScript", category: "Language", icon: "typescript" },
  { name: "Tailwind CSS", category: "Styling", icon: "tailwind" },
  { name: "Git", category: "Version Control", icon: "git" },
  { name: "SQLite", category: "Database", icon: "sqlite" },
  { name: "NumPy", category: "Data & ML", icon: "numpy" },
  { name: "REST APIs", category: "Architecture", icon: "api" },
  { name: "HTML5", category: "Semantic Web", icon: "html5" },
];

export default function Hero() {
  const [wallMode, setWallMode] = useState<boolean>(false);

  // Generate monochrome JSX nodes for each tech item
  const gridMotionTiles = TECH_WALL_ITEMS.map((item, idx) => (
    <div key={`${item.name}-${idx}`} className="tech-tile-node group cursor-pointer">
      <div className="tech-tile-icon-wrap transition-transform duration-300 group-hover:scale-110">
        <TechIcon name={item.icon} className="w-6 h-6 text-white" monochrome={true} />
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
      {/* 3D GridMotion Interactive Wall Background (Black & White Monochrome) */}
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
          dim={wallMode ? 0.15 : 0.45}
          fade={0.6}
          grayscale={true}
          tileColor="#101115"
          textColor="#ffffff"
          theme="dark"
          className="w-full h-full"
        />

        {/* Deep Charcoal / Obsidian Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-500 ${
          wallMode ? "opacity-20 pointer-events-none scale-95" : "opacity-100 scale-100"
        }`}
      >
        {/* Top Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.06)]">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider text-white uppercase">
              FULL-STACK DEVELOPER
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-zinc-300 text-[11px] font-medium">
            <MapPin className="w-3 h-3 text-zinc-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Small introduction */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-3 font-mono">
          HELLO, I'M
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 font-heading">
          <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            {PERSONAL_INFO.fullName}
          </span>
        </h1>

        {/* Professional Headline */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-zinc-200 max-w-3xl mx-auto mb-6 leading-relaxed">
          Building Digital Experiences That Solve Real Problems.
        </p>

        {/* Supporting Description */}
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          I’m an Information Technology undergraduate passionate about full-stack development, intuitive user interfaces, and practical software solutions. I enjoy transforming ideas into functional web applications through thoughtful design, clean implementation, and continuous learning.
        </p>

        {/* Primary & Secondary Call to Actions (Monochrome Black & White) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-black bg-white hover:bg-zinc-200 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white"
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
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/40 rounded-full backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/40"
            id="hero-resume-btn"
          >
            <FileDown className="w-4 h-4 text-zinc-300" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Social Links & Terminal Indicator */}
        <div className="flex items-center justify-center gap-4 text-zinc-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-white/30 hover:text-white hover:bg-white/[0.1] transition duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-white/30 hover:text-white hover:bg-white/[0.1] transition duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-zinc-200" />
          </a>

          <div className="h-4 w-px bg-white/10" />

          <button
            onClick={() => scrollTo("about")}
            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition"
          >
            <Terminal className="w-3.5 h-3.5 text-zinc-300" />
            <span>status: available for roles</span>
          </button>
        </div>
      </div>

      {/* Floating Demo Content / Focus Mode Toggle */}
      <div className="absolute bottom-6 right-6 z-20">
        <button
          onClick={() => setWallMode(!wallMode)}
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#111218]/90 hover:bg-[#181922] border border-white/15 text-xs font-medium text-zinc-300 hover:text-white backdrop-blur-md shadow-xl transition-all"
          title="Toggle between hero text and interactive 3D tech wall view"
        >
          <Eye className="w-3.5 h-3.5 text-zinc-300" />
          <span className="hidden sm:inline">{wallMode ? "Show Hero Text" : "Interactive Wall View"}</span>
          <div
            className={`w-7 h-4 rounded-full p-0.5 transition-colors ${
              wallMode ? "bg-white" : "bg-zinc-700"
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full transition-transform ${
                wallMode ? "translate-x-3 bg-black" : "translate-x-0 bg-white"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Bottom Scroll Cue */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[11px] uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition"
        aria-label="Scroll to About section"
      >
        <span className="w-1 h-5 rounded-full bg-gradient-to-b from-white to-transparent animate-bounce" />
      </button>
    </section>
  );
}
