"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, ChevronRight, Terminal, Sparkles } from "lucide-react";
import { EXPERIENCE_DATA } from "@/data/portfolioData";
import AnimatedContent from "./AnimatedContent";
import SpotlightCard from "./SpotlightCard";
import StrokeText from "./StrokeText";

const TECH_BADGE_STYLES: Record<string, string> = {
  Java: "bg-amber-500/10 border-amber-500/30 text-amber-200",
  HTML: "bg-orange-500/10 border-orange-500/30 text-orange-200",
  CSS: "bg-blue-500/10 border-blue-500/30 text-blue-200",
  JavaScript: "bg-yellow-500/10 border-yellow-500/30 text-yellow-200",
  SQL: "bg-purple-500/10 border-purple-500/30 text-purple-200",
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#07080b] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedContent distance={40} duration={0.8} ease="power3.out">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-blue-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Work History</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
              <StrokeText
                text="Professional Experience"
                strokeColor="#34d399"
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
              Professional developer internship experience applying core engineering principles to real web applications.
            </p>
          </div>
        </AnimatedContent>

        {/* Experience Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 pb-12 last:pb-0">
              {/* Vertical timeline line with emerald-to-blue gradient */}
              <div className="absolute left-0 top-3 bottom-0 w-px bg-gradient-to-b from-emerald-500/60 via-blue-500/30 to-transparent" />

              {/* Timeline marker node with emerald glowing ring */}
              <div className="absolute -left-[9px] top-2 w-[19px] h-[19px] rounded-full bg-[#0a0c10] border-2 border-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.7)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Experience Card with SpotlightCard */}
              <AnimatedContent distance={45} delay={0.15 * index} duration={0.85} ease="power3.out">
                <SpotlightCard
                  theme="dark"
                  spotlightColor="#34d399"
                  intensity={0.25}
                  spotlightSize={320}
                  borderGlow={0.7}
                  className="group relative !rounded-3xl p-6 sm:p-8 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 shadow-2xl overflow-hidden"
                >
                  {/* Subtle top edge glow line */}
                  <div className="absolute top-0 left-1/4 right-1/4 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full mb-2 shadow-sm">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>Internship</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">{exp.role}</h3>
                      <p className="text-base text-zinc-300 font-medium mt-0.5">{exp.company}</p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs text-zinc-400 font-mono">
                      <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.08] px-3 py-1 rounded-lg text-zinc-200">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-400 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Responsibilities and Contributions */}
                  <div className="space-y-3 mb-8">
                    {exp.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                          <ChevronRight className="w-3 h-3" />
                        </div>
                        <p className="text-sm text-zinc-300 leading-relaxed">{bullet}</p>
                      </div>
                    ))}
                  </div>

                  {/* Applied Technologies with specific color tags */}
                  <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                    <span className="text-xs text-zinc-400 font-mono mr-2 flex items-center gap-1">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      Stack:
                    </span>
                    {exp.technologies.map((tech) => {
                      const badgeClass =
                        TECH_BADGE_STYLES[tech] || "bg-white/[0.04] border-white/[0.08] text-zinc-200";
                      return (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-lg text-xs font-medium border ${badgeClass}`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
