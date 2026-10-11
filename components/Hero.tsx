"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import GridMotion from "./GridMotion";
import ShinyText from "./ShinyText";
import SpecularButton from "./SpecularButton";
import AnimatedContent from "./AnimatedContent";

interface SolidTileDef {
  title: string;
  badge?: string;
  bg: string;
  textColor: string;
  iconColor: string;
  renderIcon: () => React.ReactNode;
}

const SOLID_REACT_BITS_TILES: SolidTileDef[] = [
  // --- ROW 1 ---
  {
    title: "GIT",
    bg: "#eab308", // Golden yellow
    textColor: "#000000",
    iconColor: "#000000",
    renderIcon: () => (
      <svg className="w-20 h-20 sm:w-24 sm:h-24 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.7 10.7L13.3 2.3c-.4-.4-1.1-.4-1.5 0L10.3 3.8l2.7 2.7c.4-.1.9 0 1.2.3.4.4.5 1 .3 1.5l2.6 2.6c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.3-1.5l-2.4-2.4v5.3c.2.1.4.3.5.5.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.4-.4.6-.5V8.5c-.2-.1-.4-.3-.6-.5-.4-.4-.5-1-.3-1.5L7.4 3.9 2.3 9c-.4.4-.4 1.1 0 1.5l8.4 8.4c.4.4 1.1.4 1.5 0l9.5-9.5c.4-.4.4-1.1 0-1.5z" />
      </svg>
    ),
  },
  {
    title: "DOCKER",
    bg: "#0284c7", // Sky blue
    textColor: "#ffffff",
    iconColor: "#ffffff",
    renderIcon: () => (
      <svg className="w-20 h-20 sm:w-24 sm:h-24 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185M23.99 11.23c-.115-.845-.88-1.545-1.745-1.595-.145-.008-.34.02-.49.07-.46.155-.83.475-1.07.9-.17.3-.27.65-.27 1.03 0 .15.02.29.05.43-.88 2.06-2.58 3.51-4.66 4.04-1.39.35-2.88.35-4.27 0-.58-.15-1.13-.37-1.65-.67-.78-.45-1.46-1.04-2-1.74-.29-.38-.76-.6-1.25-.56-.75.06-1.35.68-1.34 1.43.01.76.62 1.37 1.38 1.37h.17c1.39 1.83 3.52 3.01 5.92 3.19 1.62.12 3.25-.2 4.71-.92 2.37-1.16 4.14-3.32 4.86-5.88.36-.18.73-.39 1.05-.66.52-.44.82-1.08.79-1.76" />
      </svg>
    ),
  },
  {
    title: "CLOUD",
    bg: "#18181b", // Dark
    textColor: "#ffffff",
    iconColor: "#ffffff",
    renderIcon: () => (
      <svg className="w-20 h-20 sm:w-24 sm:h-24 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
  },
  {
    title: "TAILWIND",
    bg: "#06b6d4", // Cyan
    textColor: "#ffffff",
    iconColor: "#ffffff",
    renderIcon: () => (
      <svg className="w-20 h-20 sm:w-24 sm:h-24 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.6 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C16.3 7.4 14.9 6 12 6zM6 13.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.6 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.3 14.6 8.9 13.2 6 13.2z" />
      </svg>
    ),
  },

  // --- ROW 2 (Exact Center Upper in Image 1) ---
  {
    title: "REACT",
    bg: "#2563eb", // Royal blue
    textColor: "#ffffff",
    iconColor: "#ffffff",
    renderIcon: () => (
      <svg className="w-24 h-24 sm:w-28 sm:h-28 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "GITHUB",
    badge: "Creative Components",
    bg: "#f59e0b", // Saturated sunflower yellow
    textColor: "#000000",
    iconColor: "#000000",
    renderIcon: () => (
      <svg className="w-24 h-24 sm:w-28 sm:h-28 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    title: "AWS",
    bg: "#111215", // Jet black
    textColor: "#ffffff",
    iconColor: "#ffffff",
    renderIcon: () => (
      <svg className="w-24 h-24 sm:w-28 sm:h-28 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
  },
  {
    title: "POSTGRES",
    bg: "#1e3a8a", // Navy
    textColor: "#ffffff",
    iconColor: "#ffffff",
    renderIcon: () => (
      <svg className="w-20 h-20 sm:w-24 sm:h-24 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3zm0 16c-4.42 0-8-1.34-8-3v-2.17c1.78 1.11 4.73 1.84 8 1.84s6.22-.73 8-1.84V17c0 1.66-3.58 3-8 3zm0-5c-4.42 0-8-1.34-8-3v-2.17c1.78 1.11 4.73 1.84 8 1.84s6.22-.73 8-1.84V12c0 1.66-3.58 3-8 3z" />
      </svg>
    ),
  },

  // --- ROW 3 (Exact Center Lower in Image 1) ---
  {
    title: "NODE",
    bg: "#16a34a", // Saturated vibrant green
    textColor: "#000000",
    iconColor: "#000000",
    renderIcon: () => (
      <div className="flex flex-col items-center justify-center">
        <svg className="w-28 h-20 sm:w-32 sm:h-22 text-black" viewBox="0 0 100 50" fill="currentColor">
          <text x="2" y="36" fontFamily="sans-serif" fontSize="38" fontWeight="900" letterSpacing="-2">
            node
          </text>
          <g transform="translate(76, 8) scale(0.65)">
            <polygon points="20,0 40,11.5 40,34.5 20,46 0,34.5 0,11.5" fill="none" stroke="black" strokeWidth="4" />
            <text x="7" y="32" fontFamily="sans-serif" fontSize="22" fontWeight="bold">JS</text>
          </g>
        </svg>
      </div>
    ),
  },
  {
    title: "PYTHON",
    bg: "#ea580c", // Saturated orange-red
    textColor: "#ffffff",
    iconColor: "#ffffff",
    renderIcon: () => (
      <svg className="w-24 h-24 sm:w-28 sm:h-28 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.91 2C6.44 2 6.78 4.38 6.78 4.38l.01 2.47h5.21v.74H4.55S2 7.3 2 12.82c0 5.51 2.22 5.33 2.22 5.33h1.33v-1.87s-.07-2.22 2.18-2.22h5.18v-.74H7.72s-1.89.04-1.89-1.85c0-1.89 1.94-1.85 1.94-1.85h7.32s1.86-.07 1.86-1.85V4.22S17.48 2 11.91 2z" />
        <path d="M12.09 22c5.47 0 5.13-2.38 5.13-2.38l-.01-2.47h-5.21v-.74h7.45s2.55.29 2.55-5.23c0-5.51-2.22-5.33-2.22-5.33h-1.33v1.87s.07 2.22-2.18 2.22h-5.18v.74h5.21s1.89-.04 1.89 1.85c0 1.89-1.94 1.85-1.94 1.85h-7.32s-1.86.07-1.86 1.85v3.63S6.52 22 12.09 22z" />
        <circle cx="9.04" cy="4.08" r=".9" fill="#ea580c" />
        <circle cx="14.96" cy="19.92" r=".9" fill="#ea580c" />
      </svg>
    ),
  },
  {
    title: "DATA",
    bg: "#ffffff", // Pure white
    textColor: "#0f172a",
    iconColor: "#0f172a",
    renderIcon: () => (
      <svg className="w-24 h-24 sm:w-28 sm:h-28 text-[#0f172a]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.89 15.672L6.255.461A.54.54 0 017.27.273l3.543 6.643-6.923 8.756zm15.42 1.971l-1.94-12.09a.54.54 0 00-.936-.26L3.398 18.736l8.03 4.52a1.64 1.64 0 001.543 0l6.34-3.613zM13.62 8.484l2.163-4.144a.54.54 0 01.957-.014l4.636 12.35-7.756-8.192z" />
      </svg>
    ),
  },
  {
    title: "TYPESCRIPT",
    bg: "#1d4ed8", // Blue
    textColor: "#ffffff",
    iconColor: "#ffffff",
    renderIcon: () => (
      <svg className="w-20 h-20 sm:w-24 sm:h-24 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.5 10.5h-4v2h2.8v8h2.4v-8h2.8v-2h-4z" />
        <path d="M17.2 16.8c.8.6 1.8 1 2.8 1 1 0 1.6-.4 1.6-1.1 0-.7-.5-1-1.8-1.5l-.8-.3c-1.8-.7-3-1.7-3-3.6 0-2 1.6-3.5 3.9-3.5 1.5 0 2.7.5 3.5 1.3l-1.4 1.6c-.6-.5-1.4-.9-2.1-.9-.9 0-1.4.4-1.4 1 0 .6.4.9 1.6 1.3l.8.3c2.1.8 3.2 1.8 3.2 3.8 0 2.2-1.7 3.7-4.2 3.7-1.8 0-3.3-.6-4.3-1.7l1.5-1.6z" />
      </svg>
    ),
  },

  // --- ROW 4 ---
  {
    title: "DATABASE",
    bg: "#1e40af", // Solid electric blue
    textColor: "#ffffff",
    iconColor: "#ffffff",
    renderIcon: () => (
      <div className="flex flex-col items-center gap-1.5">
        <div className="w-16 h-5 rounded-full border-2 border-white bg-white/20" />
        <div className="w-16 h-5 rounded-full border-2 border-white bg-white/20" />
        <div className="w-16 h-5 rounded-full border-2 border-white bg-white/20" />
      </div>
    ),
  },
  {
    title: "COMPONENTS",
    bg: "#18181b", // Dark
    textColor: "#facc15",
    iconColor: "#facc15",
    renderIcon: () => (
      <svg className="w-20 h-20 sm:w-24 sm:h-24 text-amber-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
      </svg>
    ),
  },
  {
    title: "FASTAPI",
    bg: "#0d9488", // Teal
    textColor: "#ffffff",
    iconColor: "#ffffff",
    renderIcon: () => (
      <svg className="w-20 h-20 sm:w-24 sm:h-24 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 3L6 14h6l-1 7 8-11h-6l1-7z" />
      </svg>
    ),
  },
  {
    title: "JS",
    bg: "#facc15", // Saturated yellow
    textColor: "#000000",
    iconColor: "#000000",
    renderIcon: () => (
      <svg className="w-20 h-20 sm:w-24 sm:h-24 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.8 18.2l2.3-1.4c.5.9 1 1.5 1.9 1.5.9 0 1.5-.4 1.5-1.5v-6.9h2.8v7c0 2.6-1.5 3.8-4.1 3.8-2.2 0-3.6-1.1-4.4-2.5zm9 2.4l2.2-1.3c.6 1 1.4 1.7 2.6 1.7 1.1 0 1.8-.6 1.8-1.4 0-1-.8-1.4-2.2-2l-.8-.3c-2.3-.9-3.8-2.1-3.8-4.6 0-2.3 1.8-4.1 4.5-4.1 2 0 3.4.7 4.3 2.3l-2.1 1.4c-.5-.8-1.1-1.2-2.2-1.2-1 0-1.6.6-1.6 1.3 0 .8.6 1.2 1.8 1.7l.8.3c2.7 1.1 4.2 2.3 4.2 4.9 0 2.8-2.2 4.4-5 4.4-2.7 0-4.6-1.3-5.5-3.2z" />
      </svg>
    ),
  },
];

export default function Hero() {
  // Generate solid color React Bits tiles matching uploaded reference screenshot
  const gridMotionItems = SOLID_REACT_BITS_TILES.map((tile) => (
    <div
      key={tile.title}
      className="react-bits-tile cursor-pointer group"
      style={{ backgroundColor: tile.bg }}
    >
      {/* Center Iconic SVG matching reference image */}
      <div
        className="transition-transform duration-300 group-hover:scale-105 flex items-center justify-center"
        style={{ color: tile.iconColor }}
      >
        {tile.renderIcon()}
      </div>

      {/* Optional Top Pill Badge (Matches GITHUB tile in reference image) */}
      {tile.badge && (
        <div className="react-bits-tile-badge">
          <span className="px-2 py-0.5 rounded-full bg-white text-black font-extrabold text-[10px] uppercase">
            NEW
          </span>
          <span className="text-xs font-bold text-black/90 tracking-tight">
            {tile.badge}
          </span>
        </div>
      )}

      {/* Bottom Left Bold Uppercase Label */}
      <span
        className="react-bits-tile-title font-sans"
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
    <section id="home" className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden pt-16 pb-12">
      {/* 3D GridMotion Interactive Wall Background — Authentic React Bits Wall */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <GridMotion
          items={gridMotionItems}
          rows={4}
          aspectRatio={1.35}
          gap={20}
          radius={26}
          angle={-10}
          tilt={0}
          speed={22}
          direction="alternate"
          parallax={0.5}
          spotlight={0.8}
          dim={0.02}
          fade={0.08}
          grayscale={false}
          tileColor="#12131f"
          textColor="#ffffff"
          theme="dark"
          className="w-full h-full"
        />

        {/* Subtle perimeter vignette and bottom section fade so colorful tech tiles stay vivid and bright */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_65%,rgba(7,8,11,0.65)_100%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#07080b] to-transparent pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center pointer-events-none select-none">
        {/* Soft localized backdrop aura to keep text sharp without dimming the background wall */}
        <div className="absolute inset-0 -m-8 bg-black/40 rounded-3xl blur-2xl -z-10 pointer-events-none" />

        {/* Main Name Heading with ShinyText component from React Bits */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight sm:leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] mb-3 sm:mb-4 font-heading">
          <ShinyText
            text={PERSONAL_INFO.fullName}
            color="#b5b5b5"
            shineColor="#ffffff"
            speed={2}
            shineWidth={45}
            softness={0.8}
            glow={0.3}
            trigger="loop"
          />
        </h1>

        {/* Subtitle requested by user */}
        <p className="text-sm sm:text-lg md:text-xl font-medium text-zinc-200 max-w-xl mx-auto mb-6 sm:mb-8 drop-shadow-[0_2px_18px_rgba(0,0,0,0.95)] leading-relaxed">
          IT student and full-stack developer passionate about building intuitive web applications and practical software solutions.
        </p>

        {/* Action Buttons with SpecularButton from React Bits */}
        <AnimatedContent distance={30} delay={0.2} duration={0.8} ease="power3.out">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pointer-events-auto w-full max-w-xs sm:max-w-none mx-auto">
            <SpecularButton
              size="md"
              radius={16}
              tint="#ffffff"
              tintOpacity={0.95}
              textColor="#000000"
              lineColor="#ffffff"
              baseColor="#ffffff"
              intensity={1.2}
              idleIntensity={0.5}
              glow={1}
              shineSize={12}
              shineFade={30}
              thickness={1.5}
              onClick={() => scrollTo("projects")}
              id="hero-explore-btn"
              className="w-full sm:w-auto font-bold shadow-[0_8px_30px_rgba(255,255,255,0.25)] text-center justify-center py-2.5 sm:py-2.5"
            >
              Explore My Work
            </SpecularButton>

            <SpecularButton
              size="md"
              radius={16}
              tint="#121318"
              tintOpacity={0.85}
              textColor="#ffffff"
              lineColor="#ffffff"
              baseColor="#525252"
              intensity={1.2}
              idleIntensity={0.45}
              glow={1}
              shineSize={14}
              shineFade={32}
              thickness={1.4}
              href={PERSONAL_INFO.resumePath}
              download="Aakash-MR-Resume.pdf"
              target="_blank"
              id="hero-resume-btn"
              className="w-full sm:w-auto font-semibold border border-white/20 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.6)] text-center justify-center py-2.5 sm:py-2.5"
            >
              Download Resume
            </SpecularButton>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
