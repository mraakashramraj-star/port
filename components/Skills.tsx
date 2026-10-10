"use client";

import React, { useState } from "react";
import {
  Code2,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  Check,
  Search,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { TechIcon } from "./TechIcons";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Programming Languages": Code2,
  "Frontend Development": Layout,
  "Backend Development": Server,
  "Databases": Database,
  "Data and AI": BrainCircuit,
  "Tools and Core Concepts": Wrench,
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
    <section id="skills" className="relative py-24 sm:py-32 bg-[#07080b]">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
              Skills & Technologies
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Organized technical stack spanning languages, user interfaces, backend services, databases, and core engineering concepts.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Filter skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-blue-500/50 rounded-xl pl-9 pr-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/40 transition"
            />
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06] hover:border-white/[0.12]"
            }`}
          >
            All Categories ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.title;
            const Icon = CATEGORY_ICONS[cat.title] || Code2;
            return (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06] hover:border-white/[0.12]"
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
            const Icon = CATEGORY_ICONS[group.title] || Code2;
            const displayedSkills = searchQuery.trim()
              ? group.skills.filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
              : group.skills;

            if (displayedSkills.length === 0) return null;

            return (
              <div
                key={group.title}
                className="group p-6 rounded-3xl bg-[#0c0e17]/80 hover:bg-[#0f121d] border border-white/[0.06] hover:border-blue-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white font-heading">{group.title}</h3>
                        <p className="text-[11px] text-slate-400 font-mono">
                          {displayedSkills.length} competencies
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {displayedSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all duration-200 border ${
                          skill.highlight
                            ? "bg-white/[0.04] border-white/[0.1] hover:border-blue-500/40 hover:bg-blue-500/10"
                            : "bg-white/[0.02] border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.04]"
                        }`}
                      >
                        <TechIcon name={skill.icon} className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs font-medium text-slate-200 truncate">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-500">
                  <span>Verified academic & project usage</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
