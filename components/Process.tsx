"use client";

import React from "react";
import { Lightbulb, Compass, Code, CheckCircle, Sparkles } from "lucide-react";
import { PROCESS_STAGES } from "@/data/portfolioData";

interface StageTheme {
  icon: React.ElementType;
  numColor: string;
  iconBg: string;
  iconBorder: string;
  iconText: string;
  cardBorderHover: string;
  glowLine: string;
  pillText: string;
}

const STAGE_THEMES: StageTheme[] = [
  // 01: Lilac / Purple
  {
    icon: Lightbulb,
    numColor: "text-purple-400 group-hover:text-purple-300",
    iconBg: "bg-purple-500/15",
    iconBorder: "border-purple-500/30",
    iconText: "text-purple-400",
    cardBorderHover: "hover:border-purple-500/50 hover:shadow-[0_12px_45px_rgba(168,85,247,0.15)]",
    glowLine: "via-purple-400",
    pillText: "text-purple-300",
  },
  // 02: Sky Blue
  {
    icon: Compass,
    numColor: "text-blue-400 group-hover:text-blue-300",
    iconBg: "bg-blue-500/15",
    iconBorder: "border-blue-500/30",
    iconText: "text-blue-400",
    cardBorderHover: "hover:border-blue-500/50 hover:shadow-[0_12px_45px_rgba(59,130,246,0.15)]",
    glowLine: "via-blue-400",
    pillText: "text-blue-300",
  },
  // 03: Coral / Rose
  {
    icon: Code,
    numColor: "text-rose-400 group-hover:text-rose-300",
    iconBg: "bg-rose-500/15",
    iconBorder: "border-rose-500/30",
    iconText: "text-rose-400",
    cardBorderHover: "hover:border-rose-500/50 hover:shadow-[0_12px_45px_rgba(244,63,94,0.15)]",
    glowLine: "via-rose-400",
    pillText: "text-rose-300",
  },
  // 04: Mint / Emerald
  {
    icon: CheckCircle,
    numColor: "text-emerald-400 group-hover:text-emerald-300",
    iconBg: "bg-emerald-500/15",
    iconBorder: "border-emerald-500/30",
    iconText: "text-emerald-400",
    cardBorderHover: "hover:border-emerald-500/50 hover:shadow-[0_12px_45px_rgba(16,185,129,0.15)]",
    glowLine: "via-emerald-400",
    pillText: "text-emerald-300",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#08090d]/60 border-t border-white/[0.06]">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-emerald-500/15 border border-purple-500/30 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span>Engineering Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
            How I Approach Development
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            A disciplined four-stage workflow ensuring software is well-conceived, cleanly architected, and rigorously tested.
          </p>
        </div>

        {/* Process Stages Grid / Timeline */}
        <div className="relative">
          {/* Desktop Connecting Multi-Color Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-purple-500/40 via-blue-500/40 via-rose-500/40 to-emerald-500/40 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STAGES.map((stage, idx) => {
              const theme = STAGE_THEMES[idx] || STAGE_THEMES[0];
              const Icon = theme.icon;

              return (
                <div
                  key={stage.number}
                  className={`group relative p-6 sm:p-7 rounded-3xl bg-[#0c0e14]/90 hover:bg-[#10121a] border border-white/[0.08] ${theme.cardBorderHover} transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden`}
                >
                  {/* Subtle top edge glow matching stage color */}
                  <div
                    className={`absolute top-0 left-1/4 right-1/4 h-[1.5px] bg-gradient-to-r from-transparent ${theme.glowLine} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  />

                  <div>
                    {/* Step number badge & icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`font-mono text-3xl font-black ${theme.numColor} transition-colors tracking-tight`}>
                        {stage.number}
                      </span>
                      <div className={`w-11 h-11 rounded-2xl ${theme.iconBg} border ${theme.iconBorder} flex items-center justify-center ${theme.iconText} group-hover:scale-110 transition-transform shadow-sm`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 font-heading">
                      {stage.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-200 mb-3 leading-relaxed">
                      {stage.description}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {stage.details}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono">
                    <span className={theme.pillText}>Stage {stage.number} of 04</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
