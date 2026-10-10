"use client";

import React, { useState } from "react";
import { ArrowRight, FileDown, Github, Linkedin, MapPin, Terminal, Eye, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import GridMotion from "./GridMotion";
import { TechIcon } from "./TechIcons";

interface TechTileDef {
  name: string;
  category: string;
  icon: string;
  gradient: string;
  border: string;
  glow: string;
}

const COLORFUL_TECH_TILES: TechTileDef[] = [
  {
    name: "Python",
    category: "Backend & AI",
    icon: "python",
    gradient: "linear-gradient(135deg, rgba(55, 118, 171, 0.5) 0%, rgba(255, 212, 59, 0.3) 100%)",
    border: "rgba(55, 118, 171, 0.6)",
    glow: "rgba(55, 118, 171, 0.4)",
  },
  {
    name: "React",
    category: "Frontend UI",
    icon: "react",
    gradient: "linear-gradient(135deg, rgba(97, 218, 251, 0.5) 0%, rgba(14, 116, 144, 0.35) 100%)",
    border: "rgba(97, 218, 251, 0.6)",
    glow: "rgba(97, 218, 251, 0.4)",
  },
  {
    name: "JavaScript",
    category: "Interactive Logic",
    icon: "javascript",
    gradient: "linear-gradient(135deg, rgba(247, 223, 30, 0.5) 0%, rgba(202, 138, 4, 0.35) 100%)",
    border: "rgba(247, 223, 30, 0.55)",
    glow: "rgba(247, 223, 30, 0.35)",
  },
  {
    name: "FastAPI",
    category: "High-Speed API",
    icon: "fastapi",
    gradient: "linear-gradient(135deg, rgba(5, 150, 105, 0.55) 0%, rgba(4, 120, 87, 0.4) 100%)",
    border: "rgba(5, 150, 105, 0.6)",
    glow: "rgba(5, 150, 105, 0.4)",
  },
  {
    name: "Hugging Face",
    category: "NLP & Sentiment",
    icon: "huggingface",
    gradient: "linear-gradient(135deg, rgba(255, 210, 30, 0.5) 0%, rgba(245, 158, 11, 0.4) 100%)",
    border: "rgba(255, 210, 30, 0.6)",
    glow: "rgba(255, 210, 30, 0.4)",
  },
  {
    name: "Node.js",
    category: "Async Runtime",
    icon: "nodejs",
    gradient: "linear-gradient(135deg, rgba(51, 153, 51, 0.5) 0%, rgba(34, 197, 94, 0.3) 100%)",
    border: "rgba(51, 153, 51, 0.6)",
    glow: "rgba(51, 153, 51, 0.4)",
  },
  {
    name: "TypeScript",
    category: "Type Safety",
    icon: "typescript",
    gradient: "linear-gradient(135deg, rgba(49, 120, 198, 0.5) 0%, rgba(30, 64, 175, 0.35) 100%)",
    border: "rgba(49, 120, 198, 0.6)",
    glow: "rgba(49, 120, 198, 0.4)",
  },
  {
    name: "MongoDB",
    category: "NoSQL DB",
    icon: "mongodb",
    gradient: "linear-gradient(135deg, rgba(71, 162, 72, 0.5) 0%, rgba(16, 185, 129, 0.35) 100%)",
    border: "rgba(71, 162, 72, 0.6)",
    glow: "rgba(71, 162, 72, 0.4)",
  },
  {
    name: "Tailwind CSS",
    category: "Design System",
    icon: "tailwind",
    gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.5) 0%, rgba(14, 165, 233, 0.35) 100%)",
    border: "rgba(6, 182, 212, 0.6)",
    glow: "rgba(6, 182, 212, 0.4)",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: "git",
    gradient: "linear-gradient(135deg, rgba(240, 80, 50, 0.5) 0%, rgba(220, 38, 38, 0.35) 100%)",
    border: "rgba(240, 80, 50, 0.6)",
    glow: "rgba(240, 80, 50, 0.4)",
  },
  {
    name: "MySQL",
    category: "Relational DB",
    icon: "mysql",
    gradient: "linear-gradient(135deg, rgba(0, 117, 143, 0.5) 0%, rgba(242, 145, 17, 0.35) 100%)",
    border: "rgba(0, 117, 143, 0.6)",
    glow: "rgba(0, 117, 143, 0.4)",
  },
  {
    name: "Java",
    category: "Enterprise OOP",
    icon: "java",
    gradient: "linear-gradient(135deg, rgba(231, 111, 0, 0.5) 0%, rgba(83, 130, 161, 0.35) 100%)",
    border: "rgba(231, 111, 0, 0.6)",
    glow: "rgba(231, 111, 0, 0.4)",
  },
  {
    name: "HTML5",
    category: "Semantic Web",
    icon: "html5",
    gradient: "linear-gradient(135deg, rgba(227, 79, 38, 0.5) 0%, rgba(239, 101, 42, 0.35) 100%)",
    border: "rgba(227, 79, 38, 0.6)",
    glow: "rgba(227, 79, 38, 0.4)",
  },
  {
    name: "NumPy",
    category: "Scientific Data",
    icon: "numpy",
    gradient: "linear-gradient(135deg, rgba(77, 171, 207, 0.5) 0%, rgba(231, 4, 136, 0.35) 100%)",
    border: "rgba(77, 171, 207, 0.6)",
    glow: "rgba(77, 171, 207, 0.4)",
  },
];

const PROJECT_TILES = [
  {
    title: "AI E-Consultation",
    tag: "NLP Sentiment Radar",
    highlight: "94.2% Accuracy",
    gradient: "linear-gradient(135deg, rgba(147, 51, 234, 0.65), rgba(79, 70, 229, 0.45))",
    border: "rgba(168, 85, 247, 0.6)",
    glow: "rgba(147, 51, 234, 0.45)",
    badgeBg: "rgba(168, 85, 247, 0.3)",
  },
  {
    title: "Smart OP System",
    tag: "Hospital Queue Tech",
    highlight: "Live Queue #42",
    gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.65), rgba(6, 182, 212, 0.45))",
    border: "rgba(16, 185, 129, 0.6)",
    glow: "rgba(16, 185, 129, 0.45)",
    badgeBg: "rgba(16, 185, 129, 0.3)",
  },
  {
    title: "BATRON Fitness",
    tag: "Member Analytics",
    highlight: "Active Workout Sync",
    gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.65), rgba(239, 68, 68, 0.45))",
    border: "rgba(245, 158, 11, 0.6)",
    glow: "rgba(245, 158, 11, 0.45)",
    badgeBg: "rgba(245, 158, 11, 0.3)",
  },
  {
    title: "CureConnect",
    tag: "Telehealth Booking",
    highlight: "Instant Scheduling",
    gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.65), rgba(225, 29, 72, 0.45))",
    border: "rgba(236, 72, 153, 0.6)",
    glow: "rgba(236, 72, 153, 0.45)",
    badgeBg: "rgba(236, 72, 153, 0.3)",
  },
];

// Curated high-resolution colorful images matching React Bits demo & user's reference image
const CURATED_IMAGES = [
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=640&q=80&auto=format&fit=crop", // Sunlit daisies (matches user image)
  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=640&q=80&auto=format&fit=crop", // Lush vibrant green leaves
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=640&q=80&auto=format&fit=crop", // Colorful wildflowers
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=640&q=80&auto=format&fit=crop", // Twilight mountain glow
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=640&q=80&auto=format&fit=crop", // 3D vivid abstract fluid
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&q=80&auto=format&fit=crop", // Colorful IDE code screen
  "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=640&q=80&auto=format&fit=crop", // Cosmic nebula
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=640&q=80&auto=format&fit=crop", // Retro cyber arcade
];

export default function Hero() {
  const [wallMode, setWallMode] = useState<boolean>(false);

  // Build the colorful items array for GridMotion
  const gridMotionItems: React.ReactNode[] = [];

  // Generate colorful JSX nodes for tech items
  const techNodes = COLORFUL_TECH_TILES.map((tech) => (
    <div
      key={tech.name}
      className="tech-tile-colorful cursor-pointer group"
      style={{
        background: tech.gradient,
        border: `1px solid ${tech.border}`,
        boxShadow: `0 8px 24px -4px ${tech.glow}`,
      }}
    >
      <div className="tech-tile-icon-wrap-colorful">
        <TechIcon name={tech.icon} className="w-7 h-7" monochrome={false} />
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="tech-tile-name font-mono">{tech.name}</span>
        <span className="tech-tile-category">{tech.category}</span>
      </div>
    </div>
  ));

  // Generate colorful project showcase nodes
  const projectNodes = PROJECT_TILES.map((proj) => (
    <div
      key={proj.title}
      className="project-motion-tile cursor-pointer group"
      style={{
        background: proj.gradient,
        border: `1px solid ${proj.border}`,
        boxShadow: `0 8px 28px -4px ${proj.glow}`,
      }}
    >
      <div className="flex items-center justify-between w-full">
        <span
          className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-white"
          style={{ background: proj.badgeBg }}
        >
          {proj.tag}
        </span>
        <Sparkles className="w-3.5 h-3.5 text-white/90" />
      </div>
      <div className="mt-2 text-left">
        <h4 className="text-sm font-bold text-white tracking-tight leading-snug">{proj.title}</h4>
        <p className="text-[11px] font-semibold text-white/90 font-mono mt-0.5">{proj.highlight}</p>
      </div>
    </div>
  ));

  // Interleave colorful images, tech cards, and project cards for maximum visual vibrancy
  let imgIdx = 0;
  let projIdx = 0;
  techNodes.forEach((node, i) => {
    gridMotionItems.push(node);

    // Insert a curated colorful photo every 2 tiles
    if (i % 2 === 0 && imgIdx < CURATED_IMAGES.length) {
      gridMotionItems.push(CURATED_IMAGES[imgIdx++]);
    }

    // Insert a colorful project showcase card every 3 tiles
    if (i % 3 === 1 && projIdx < projectNodes.length) {
      gridMotionItems.push(projectNodes[projIdx++]);
    }
  });

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
    <section id="home" className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden pt-24 pb-14">
      {/* 3D GridMotion Interactive Wall Background — Full Vivid Colors matching React Bits demo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <GridMotion
          items={gridMotionItems}
          rows={4}
          aspectRatio={1.25}
          gap={18}
          radius={16}
          angle={-10}
          tilt={12}
          speed={20}
          direction="alternate"
          parallax={0.6}
          spotlight={0.8}
          dim={wallMode ? 0.05 : 0.22}
          fade={0.35}
          grayscale={false}
          tileColor="#12131f"
          textColor="#ffffff"
          theme="dark"
          className="w-full h-full"
        />

        {/* Ambient Overlay to let colorful animation shine through beneath the floating navbar */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(7,8,11,0.65),transparent_80%)] pointer-events-none" />
      </div>

      {/* Hero Foreground Content — Strictly Monochrome Black & White Typography */}
      <div
        className={`relative z-10 max-w-4xl mx-auto px-6 py-10 sm:py-14 text-center transition-all duration-500 rounded-3xl backdrop-blur-md bg-black/55 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.75)] ${
          wallMode ? "opacity-20 pointer-events-none scale-95" : "opacity-100 scale-100"
        }`}
      >
        {/* Top Badges (Black & White) */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/20 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider text-white uppercase font-mono">
              FULL-STACK DEVELOPER
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-zinc-300 text-[11px] font-medium font-mono">
            <MapPin className="w-3 h-3 text-zinc-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Small introduction kicker (Pure Black & White) */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-3 font-mono">
          HELLO, I'M
        </p>

        {/* Main Heading (Pure Black & White Gradient) */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 font-heading">
          <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            {PERSONAL_INFO.fullName}
          </span>
        </h1>

        {/* Professional Headline (Clean White) */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-zinc-200 max-w-3xl mx-auto mb-6 leading-relaxed">
          Building Digital Experiences That Solve Real Problems.
        </p>

        {/* Supporting Description (Crisp Muted White / Zinc) */}
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          I’m an Information Technology undergraduate passionate about full-stack development, intuitive user interfaces, and practical software solutions. I enjoy transforming ideas into functional web applications through thoughtful design, clean implementation, and continuous learning.
        </p>

        {/* Primary & Secondary Call to Actions (Monochrome Black & White) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-black bg-white hover:bg-zinc-200 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white"
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

        {/* Social Links & Terminal Indicator (Black & White) */}
        <div className="flex items-center justify-center gap-4 text-zinc-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/[0.1] transition duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/[0.1] transition duration-200"
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

      {/* Focus Mode / Interactive Wall View Toggle */}
      <div className="absolute bottom-6 right-6 z-20">
        <button
          onClick={() => setWallMode(!wallMode)}
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#111218]/90 hover:bg-[#181922] border border-white/15 text-xs font-medium text-zinc-300 hover:text-white backdrop-blur-md shadow-xl transition-all"
          title="Toggle between hero text and interactive 3D colorful wall view"
        >
          <Eye className="w-3.5 h-3.5 text-zinc-300" />
          <span className="hidden sm:inline">{wallMode ? "Show Hero Text" : "Explore Colorful Wall"}</span>
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
        onClick={() => scrollTo("projects")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[11px] uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition"
        aria-label="Scroll to Projects section"
      >
        <span className="w-1 h-5 rounded-full bg-gradient-to-b from-white to-transparent animate-bounce" />
      </button>
    </section>
  );
}
