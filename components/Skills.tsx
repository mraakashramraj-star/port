"use client";

import React, { useState } from "react";
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
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { TechIcon } from "./TechIcons";

interface CategoryTheme {
  icon: React.ElementType;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  cardBorderHover: string;
  glowLine: string;
  indicatorDot: string;
  tagActive: string;
}

const CATEGORY_THEMES: Record<string, CategoryTheme> = {
  "Programming Languages": {
    icon: Code2,
    badgeBg: "bg-blue-500/15",
    badgeBorder: "border-blue-500/30",
    badgeText: "text-blue-400",
    cardBorderHover: "hover:border-blue-500/50 hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)]",
    glowLine: "via-blue-400",
    indicatorDot: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]",
    tagActive: "bg-blue-600 text-white shadow-lg shadow-blue-500/25 border-transparent",
  },
  "Frontend Development": {
    icon: Layout,
    badgeBg: "bg-cyan-500/15",
    badgeBorder: "border-cyan-500/30",
    badgeText: "text-cyan-400",
    cardBorderHover: "hover:border-cyan-500/50 hover:shadow-[0_12px_40px_rgba(6,182,212,0.12)]",
    glowLine: "via-cyan-400",
    indicatorDot: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]",
    tagActive: "bg-cyan-600 text-white shadow-lg shadow-cyan-500/25 border-transparent",
  },
  "Backend Development": {
    icon: Server,
    badgeBg: "bg-emerald-500/15",
    badgeBorder: "border-emerald-500/30",
    badgeText: "text-emerald-400",
    cardBorderHover: "hover:border-emerald-500/50 hover:shadow-[0_12px_40px_rgba(16,185,129,0.12)]",
    glowLine: "via-emerald-400",
    indicatorDot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]",
    tagActive: "bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 border-transparent",
  },
  "Databases": {
    icon: Database,
    badgeBg: "bg-amber-500/15",
    badgeBorder: "border-amber-500/30",
    badgeText: "text-amber-400",
    cardBorderHover: "hover:border-amber-500/50 hover:shadow-[0_12px_40px_rgba(245,158,11,0.12)]",
    glowLine: "via-amber-400",
    indicatorDot: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]",
    tagActive: "bg-amber-600 text-white shadow-lg shadow-amber-500/25 border-transparent",
  },
  "Data and AI": {
    icon: BrainCircuit,
    badgeBg: "bg-purple-500/15",
    badgeBorder: "border-purple-500/30",
    badgeText: "text-purple-400",
    cardBorderHover: "hover:border-purple-500/50 hover:shadow-[0_12px_40px_rgba(168,85,247,0.12)]",
    glowLine: "via-purple-400",
    indicatorDot: "bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]",
    tagActive: "bg-purple-600 text-white shadow-lg shadow-purple-500/25 border-transparent",
  },
  "Tools and Core Concepts": {
    icon: Wrench,
    badgeBg: "bg-rose-500/15",
    badgeBorder: "border-rose-500/30",
    badgeText: "text-rose-400",
    cardBorderHover: "hover:border-rose-500/50 hover:shadow-[0_12px_40px_rgba(244,63,94,0.12)]",
    glowLine: "via-rose-400",
    indicatorDot: "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]",
    tagActive: "bg-rose-600 text-white shadow-lg shadow-rose-500/25 border-transparent",
  },
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    if (selectedCategory !== "all" && category.title !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchesCategory = category.title.toLowerCase().includes(query);
    const matchesSkills = category.skills.some((s) => s.name.toLowerCase().includes(query));
    return matchesCategory || matchesSkills;
  });

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#07080b]/30 backdrop-blur-[1px] border-t border-white/[0.04]">
      {/* Background Ambient Lighting Blobs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-purple-500/15 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
              Skills & Technologies
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Organized technical stack spanning languages, user interfaces, backend services, databases, and core engineering concepts.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Filter skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.12] focus:border-blue-400/60 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-400/40 transition shadow-inner"
            />
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.08] hover:border-white/20"
            }`}
          >
            All Categories ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.title;
            const theme = CATEGORY_THEMES[cat.title] || CATEGORY_THEMES["Programming Languages"];
            const Icon = theme.icon;
            return (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? theme.tagActive
                    : "bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.08] hover:border-white/20"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const theme = CATEGORY_THEMES[group.title] || CATEGORY_THEMES["Programming Languages"];
            const Icon = theme.icon;
            const displayedSkills = searchQuery.trim()
              ? group.skills.filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
              : group.skills;

            if (displayedSkills.length === 0) return null;

            return (
              <div
                key={group.title}
                className={`group relative p-6 sm:p-7 rounded-3xl bg-[#0c0e14]/90 hover:bg-[#10121a] border border-white/[0.08] ${theme.cardBorderHover} transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden`}
              >
                {/* Subtle top edge glow matching category color */}
                <div
                  className={`absolute top-0 left-1/4 right-1/4 h-[1.5px] bg-gradient-to-r from-transparent ${theme.glowLine} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-2xl ${theme.badgeBg} ${theme.badgeBorder} border flex items-center justify-center ${theme.badgeText} group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white font-heading">{group.title}</h3>
                        <p className="text-[11px] text-zinc-400 font-mono">
                          {displayedSkills.length} competencies
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills List with Vibrant Brand Icons (monochrome=false) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {displayedSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all duration-200 border ${
                          skill.highlight
                            ? "bg-white/[0.06] border-white/20 hover:border-white/40 hover:bg-white/[0.09]"
                            : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.18] hover:bg-white/[0.05]"
                        }`}
                      >
                        {/* Authentic Brand Color SVG */}
                        <TechIcon name={skill.icon} className="w-4 h-4 flex-shrink-0" monochrome={false} />
                        <span className="text-xs font-medium text-zinc-200 truncate">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                  <span>Verified academic & project usage</span>
                  <span className={`w-2 h-2 rounded-full ${theme.indicatorDot}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
