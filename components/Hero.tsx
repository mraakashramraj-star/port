"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import GridMotion from "./GridMotion";
import { TechIcon } from "./TechIcons";

interface SolidTileDef {
  title: string;
  badge?: string;
  bg: string;
  textColor: string;
  iconColor: string;
  icon: string;
}

const SOLID_REACT_BITS_TILES: SolidTileDef[] = [
  {
    title: "REACT",
    bg: "#1d4ed8", // Royal blue
    textColor: "#ffffff",
    iconColor: "#ffffff",
    icon: "react",
  },
  {
    title: "GITHUB",
    badge: "Creative Components",
    bg: "#eab308", // Saturated sunflower yellow
    textColor: "#000000",
    iconColor: "#000000",
    icon: "github",
  },
  {
    title: "AWS",
    bg: "#18181b", // Solid black
    textColor: "#ffffff",
    iconColor: "#ffffff",
    icon: "aws",
  },
  {
    title: "NODE",
    bg: "#16a34a", // Saturated green
    textColor: "#000000",
    iconColor: "#000000",
    icon: "nodejs",
  },
  {
    title: "PYTHON",
    bg: "#ea580c", // Saturated orange-red
    textColor: "#ffffff",
    iconColor: "#ffffff",
    icon: "python",
  },
  {
    title: "DATA",
    bg: "#f8fafc", // Solid white
    textColor: "#0f172a",
    iconColor: "#0f172a",
    icon: "data",
  },
  {
    title: "GIT",
    bg: "#ca8a04", // Solid golden amber
    textColor: "#000000",
    iconColor: "#000000",
    icon: "git",
  },
  {
    title: "FASTAPI",
    bg: "#0d9488", // Solid emerald teal
    textColor: "#ffffff",
    iconColor: "#ffffff",
    icon: "fastapi",
  },
  {
    title: "TYPESCRIPT",
    bg: "#2563eb", // Solid cobalt blue
    textColor: "#ffffff",
    iconColor: "#ffffff",
    icon: "typescript",
  },
  {
    title: "JS",
    bg: "#facc15", // Solid bright yellow
    textColor: "#000000",
    iconColor: "#000000",
    icon: "javascript",
  },
  {
    title: "TAILWIND",
    bg: "#0284c7", // Solid sky cyan
    textColor: "#ffffff",
    iconColor: "#ffffff",
    icon: "tailwind",
  },
  {
    title: "AI / NLP",
    bg: "#7c3aed", // Solid violet
    textColor: "#ffffff",
    iconColor: "#ffffff",
    icon: "huggingface",
  },
  {
    title: "POSTGRES",
    bg: "#1e3a8a", // Solid deep navy
    textColor: "#ffffff",
    iconColor: "#ffffff",
    icon: "postgres",
  },
  {
    title: "DOCKER",
    bg: "#0284c7", // Solid ocean blue
    textColor: "#ffffff",
    iconColor: "#ffffff",
    icon: "docker",
  },
  {
    title: "NEXT.JS",
    bg: "#09090b", // Solid obsidian
    textColor: "#ffffff",
    iconColor: "#ffffff",
    icon: "nextjs",
  },
  {
    title: "MONGODB",
    bg: "#059669", // Solid forest green
    textColor: "#ffffff",
    iconColor: "#ffffff",
    icon: "mongodb",
  },
  {
    title: "JAVA",
    bg: "#dc2626", // Solid scarlet
    textColor: "#ffffff",
    iconColor: "#ffffff",
    icon: "java",
  },
  {
    title: "MYSQL",
    bg: "#0369a1", // Solid sapphire blue
    textColor: "#ffffff",
    iconColor: "#ffffff",
    icon: "mysql",
  },
];

export default function Hero() {
  const [wallMode, setWallMode] = useState<boolean>(false);

  // Generate solid color React Bits tiles matching uploaded reference screenshot
  const gridMotionItems = SOLID_REACT_BITS_TILES.map((tile) => (
    <div
      key={tile.title}
      className="react-bits-tile cursor-pointer group"
      style={{ backgroundColor: tile.bg }}
    >
      {/* Center Iconic SVG */}
      <div
        className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center"
        style={{ color: tile.iconColor }}
      >
        <TechIcon name={tile.icon} className="w-14 h-14 sm:w-16 sm:h-16" monochrome={false} />
      </div>

      {/* Optional Top Pill Badge (Matches GITHUB tile in reference image) */}
      {tile.badge && (
        <div className="react-bits-tile-badge">
          <span className="px-1.5 py-0.5 rounded-full bg-white text-black font-extrabold text-[9px] uppercase">
            NEW
          </span>
          <span className="text-[11px] font-bold text-black/90 tracking-tight">
            {tile.badge}
          </span>
        </div>
      )}

      {/* Bottom Left Bold Uppercase Label */}
      <span
        className="react-bits-tile-title font-mono"
        style={{ color: tile.textColor }}
      >
        {tile.title}
      </span>
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
      {/* 3D GridMotion Interactive Wall Background — Authentic Solid Tech Tiles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <GridMotion
          items={gridMotionItems}
          rows={4}
          aspectRatio={1.28}
          gap={18}
          radius={26}
          angle={-10}
          tilt={12}
          speed={22}
          direction="alternate"
          parallax={0.6}
          spotlight={0.85}
          dim={wallMode ? 0.04 : 0.12}
          fade={0.25}
          grayscale={false}
          tileColor="#12131f"
          textColor="#ffffff"
          theme="dark"
          className="w-full h-full"
        />

        {/* Soft edge perimeter vignette leaving the entire center wall bright & unobstructed */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_55%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07080b] to-transparent pointer-events-none" />
      </div>

      {/* Hero Foreground Content — NO LAYER BOX, ONLY PURE TEXT FLOATING DIRECTLY ON WALL */}
      <div
        className={`relative z-10 max-w-4xl mx-auto px-4 text-center transition-all duration-500 pointer-events-none ${
          wallMode ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {/* Top Capsule Pill Badge (Matches reference image) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white text-xs font-semibold mb-3 sm:mb-4 shadow-xl pointer-events-auto">
          <span className="px-2 py-0.5 rounded-full bg-white text-black font-extrabold text-[10px] tracking-wider uppercase">
            NEW
          </span>
          <span>Full-Stack Developer</span>
        </div>

        {/* Main Name Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-2 font-heading drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
          {PERSONAL_INFO.fullName}
        </h1>

        {/* Headline Subtitle Matching Reference: "A wall of work that moves with you" */}
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto mb-8 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-tight font-heading">
          A wall of work that moves with you
        </p>

        {/* Action Buttons (Matches Get started & Learn more in reference image) */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-8 pointer-events-auto">
          <button
            onClick={() => scrollTo("projects")}
            className="px-8 py-3.5 text-sm sm:text-base font-bold text-black bg-white hover:bg-zinc-200 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.8)] hover:scale-105 active:scale-95 transition-all duration-200"
            id="hero-explore-btn"
          >
            Get started
          </button>

          <a
            href={PERSONAL_INFO.resumePath}
            download="Aakash-MR-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 text-sm sm:text-base font-semibold text-white hover:text-white bg-black/45 hover:bg-black/70 border border-white/25 rounded-full backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.8)] hover:scale-105 active:scale-95 transition-all duration-200"
            id="hero-resume-btn"
          >
            Learn more
          </a>
        </div>

        {/* Subtle status tag */}
        <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>status: available for full-stack engineering roles</span>
        </div>
      </div>

      {/* Demo Content / Focus Mode Switch (Matches reference image bottom right) */}
      <div className="fixed bottom-6 right-6 z-30 pointer-events-auto">
        <button
          onClick={() => setWallMode(!wallMode)}
          className="flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 hover:bg-black/85 border border-white/20 text-xs font-semibold text-zinc-200 backdrop-blur-xl shadow-2xl transition-all"
          title="Toggle foreground text to explore 3D wall"
        >
          <span>Demo Content</span>
          <div
            className={`w-8 h-4.5 rounded-full p-0.5 transition-colors ${
              wallMode ? "bg-white" : "bg-zinc-700"
            }`}
          >
            <div
              className={`w-3.5 h-3.5 rounded-full transition-transform ${
                wallMode ? "translate-x-3.5 bg-black" : "translate-x-0 bg-white"
              }`}
            />
          </div>
        </button>
      </div>
    </section>
  );
}
