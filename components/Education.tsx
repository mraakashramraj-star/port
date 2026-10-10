"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from "lucide-react";
import { EDUCATION_DATA } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-[#08090d]/60 border-t border-white/[0.06]">
      {/* Background ambient glow (Monochrome) */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
            Education
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Current undergraduate degree program in Information Technology with consistent academic performance.
          </p>
        </div>

        {/* Education Timeline / Academic Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-6 sm:p-10 bg-[#0c0e14]/90 border border-white/[0.08] shadow-2xl relative overflow-hidden group hover:border-white/30 transition-all duration-300">
            {/* Top Row: Degree & Institution */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] text-white text-xs font-semibold mb-2 border border-white/10">
                  <GraduationCap className="w-4 h-4" />
                  <span>{EDUCATION_DATA.status}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="text-base sm:text-lg text-zinc-300 font-medium">
                  {EDUCATION_DATA.institution}
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 flex items-center gap-1.5 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{EDUCATION_DATA.location}</span>
                </p>
              </div>

              {/* Period & CGPA Badges */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-zinc-300">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{EDUCATION_DATA.period}</span>
                </div>
                <div className="px-5 py-2.5 rounded-2xl bg-white/[0.05] border border-white/15 text-right shadow-inner">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Cumulative CGPA</span>
                  <span className="text-xl sm:text-2xl font-bold text-white font-heading">{EDUCATION_DATA.cgpa}</span>
                </div>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="pt-6 space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-mono font-semibold flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-white" />
                <span>Academic Overview & Focus</span>
              </h4>
              <div className="space-y-2.5">
                {EDUCATION_DATA.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
