"use client";

import React, { useState, useMemo } from "react";
import {
  Code2,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  Search,
  Sparkles,
} from "lucide-react";
import { SKILL_CATEGORIES, SkillCategory } from "@/data/portfolioData";
import { TechIcon } from "./TechIcons";
import AnimatedContent from "./AnimatedContent";
import SpotlightCard from "./SpotlightCard";
import StrokeText from "./StrokeText";
import "./Skills.css";

interface CategoryTheme {
  icon: React.ElementType;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  cardBorderHover: string;
  glowLine: string;
  indicatorDot: string;
  accentColor: string;
}

const CATEGORY_THEMES: Record<string, CategoryTheme> = {
  "Programming Languages": {
    icon: Code2,
    badgeBg: "bg-blue-500/15",
    badgeBorder: "border-blue-500/30",
    badgeText: "text-blue-400",
    cardBorderHover: "hover:border-blue-500/50 hover:shadow-[0_16px_45px_rgba(59,130,246,0.18)]",
    glowLine: "via-blue-400",
    indicatorDot: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]",
    accentColor: "#3b82f6",
  },
  "Frontend Development": {
    icon: Layout,
    badgeBg: "bg-cyan-500/15",
    badgeBorder: "border-cyan-500/30",
    badgeText: "text-cyan-400",
    cardBorderHover: "hover:border-cyan-500/50 hover:shadow-[0_16px_45px_rgba(6,182,212,0.18)]",
    glowLine: "via-cyan-400",
    indicatorDot: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]",
    accentColor: "#06b6d4",
  },
  "Backend Development": {
    icon: Server,
    badgeBg: "bg-emerald-500/15",
    badgeBorder: "border-emerald-500/30",
    badgeText: "text-emerald-400",
    cardBorderHover: "hover:border-emerald-500/50 hover:shadow-[0_16px_45px_rgba(16,185,129,0.18)]",
    glowLine: "via-emerald-400",
    indicatorDot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]",
    accentColor: "#10b981",
  },
  "Databases": {
    icon: Database,
    badgeBg: "bg-amber-500/15",
    badgeBorder: "border-amber-500/30",
    badgeText: "text-amber-400",
    cardBorderHover: "hover:border-amber-500/50 hover:shadow-[0_16px_45px_rgba(245,158,11,0.18)]",
    glowLine: "via-amber-400",
    indicatorDot: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]",
    accentColor: "#f59e0b",
  },
  "Data and AI": {
    icon: BrainCircuit,
    badgeBg: "bg-purple-500/15",
    badgeBorder: "border-purple-500/30",
    badgeText: "text-purple-400",
    cardBorderHover: "hover:border-purple-500/50 hover:shadow-[0_16px_45px_rgba(168,85,247,0.18)]",
    glowLine: "via-purple-400",
    indicatorDot: "bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]",
    accentColor: "#a855f7",
  },
  "Tools and Core Concepts": {
    icon: Wrench,
    badgeBg: "bg-rose-500/15",
    badgeBorder: "border-rose-500/30",
    badgeText: "text-rose-400",
    cardBorderHover: "hover:border-rose-500/50 hover:shadow-[0_16px_45px_rgba(244,63,94,0.18)]",
    glowLine: "via-rose-400",
    indicatorDot: "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]",
    accentColor: "#f43f5e",
  },
};

const CATEGORY_NAMES = [
  "All Categories (27)",
  "Programming Languages",
  "Frontend Development",
  "Backend Development",
  "Databases",
  "Data and AI",
  "Tools and Core Concepts",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All Categories (27)");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Check if a category box matches the current filter or search
  const isBoxMatch = (cat: SkillCategory) => {
    const matchesCategory =
      activeCategory === "All Categories (27)" || cat.title === activeCategory;

    const q = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !q ||
      cat.title.toLowerCase().includes(q) ||
      cat.description.toLowerCase().includes(q) ||
      cat.skills.some((s) => s.name.toLowerCase().includes(q));

    return matchesCategory && matchesQuery;
  };

  const isFilteringActive =
    activeCategory !== "All Categories (27)" || searchQuery.trim().length > 0;

  // Duplicating the 6 category boxes creates an exact seamless 50% loop with 0 jumps or gaps
  const duplicatedBoxes = useMemo(
    () => [...SKILL_CATEGORIES, ...SKILL_CATEGORIES],
    []
  );

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#07080b] border-t border-white/[0.04] overflow-hidden">
      {/* Background illumination accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-10">
        <AnimatedContent distance={40} duration={0.8} ease="power3.out">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-purple-500/15 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Technical Competencies</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
                <StrokeText
                  text="Skills & Technologies"
                  strokeColor="#818cf8"
                  fillColor="#ffffff"
                  strokeWidth={1.5}
                  drawDuration={1.3}
                  fillDelay={0.15}
                  stagger={0.04}
                  trigger="scroll"
                  fillMode="wipe"
                  fontSize={48}
                  fontWeight={800}
                  align="left"
                />
              </h2>
              <p className="text-base sm:text-lg text-zinc-400">
                Organized technical stack spanning languages, user interfaces, backend services, databases, and core engineering concepts.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter skill or tool..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills & Pause Hint */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {CATEGORY_NAMES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all border ${
                      isActive
                        ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20"
                        : "bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 whitespace-nowrap self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Hover any card to inspect & pause</span>
            </div>
          </div>
        </AnimatedContent>
      </div>

      {/* Single Horizontal Row Infinite Loop for the Six Category Boxes */}
      <div className="skills-single-row">
        {/* Left & Right Vignette Fade Masks */}
        <div className="skills-single-row__vignette-left" aria-hidden="true" />
        <div className="skills-single-row__vignette-right" aria-hidden="true" />

        {/* The Single Scrolling Track */}
        <div className="skills-single-row__track">
          {duplicatedBoxes.map((group, index) => {
            const theme =
              CATEGORY_THEMES[group.title] || CATEGORY_THEMES["Programming Languages"];
            const Icon = theme.icon;
            const isMatch = isBoxMatch(group);

            return (
              <SpotlightCard
                key={`${group.title}-${index}`}
                theme="dark"
                spotlightColor={theme.accentColor}
                intensity={0.25}
                spotlightSize={320}
                softness={0.7}
                shape="circle"
                borderGlow={0.65}
                proximity={80}
                smoothing={0.25}
                flare={true}
                className={`skill-category-card w-[340px] sm:w-[410px] min-h-[430px] p-6 sm:p-7 group ${theme.cardBorderHover} ${
                  isFilteringActive && !isMatch
                    ? "opacity-25 grayscale-[0.6] scale-95"
                    : "opacity-100"
                } ${
                  isFilteringActive && isMatch
                    ? "shadow-[0_0_35px_rgba(255,255,255,0.18)] ring-1 ring-white/20"
                    : ""
                }`}
              >
                {/* Subtle top edge glow matching category color */}
                <div
                  className={`absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent ${theme.glowLine} to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-2xl ${theme.badgeBg} ${theme.badgeBorder} border flex items-center justify-center ${theme.badgeText} group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white font-heading">
                          {group.title}
                        </h3>
                        <p className="text-[11px] text-zinc-400 font-mono">
                          {group.skills.length} competencies
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed min-h-[36px]">
                    {group.description}
                  </p>

                  {/* Skills List with Vibrant Brand Icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all duration-200 border ${
                          skill.highlight
                            ? "bg-white/[0.06] border-white/20 hover:border-white/40 hover:bg-white/[0.09]"
                            : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.18] hover:bg-white/[0.05]"
                        }`}
                      >
                        <TechIcon
                          name={skill.icon}
                          className="w-4 h-4 flex-shrink-0"
                          monochrome={false}
                        />
                        <span className="text-xs font-medium text-zinc-200 truncate">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Verified Footer */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                  <span>Verified academic & project usage</span>
                  <span className={`w-2 h-2 rounded-full ${theme.indicatorDot}`} />
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
