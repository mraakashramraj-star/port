"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen, Sparkles } from "lucide-react";
import { EDUCATION_DATA } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-[#08090d]/30 border-t border-white/[0.06] backdrop-blur-[1px]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-purple-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-purple-500/15 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
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
          <div className="group relative rounded-3xl p-6 sm:p-10 bg-[#0c0e14]/90 hover:bg-[#10121a] border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shadow-2xl hover:shadow-[0_12px_45px_rgba(59,130,246,0.15)] overflow-hidden">
            {/* Top Glowing Accent Line */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Top Row: Degree & Institution */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-semibold mb-2 border border-emerald-500/30 shadow-sm">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>{EDUCATION_DATA.status}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="text-base sm:text-lg text-zinc-200 font-medium">
                  {EDUCATION_DATA.institution}
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 flex items-center gap-1.5 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{EDUCATION_DATA.location}</span>
                </p>
              </div>

              {/* Period & CGPA Badges */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-200">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{EDUCATION_DATA.period}</span>
                </div>
                <div className="px-5 py-3 rounded-2xl bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-purple-600/20 border border-blue-400/30 text-right shadow-inner shadow-blue-500/10">
                  <span className="text-[10px] text-blue-300 uppercase tracking-wider block font-mono font-medium">Cumulative CGPA</span>
                  <span className="text-xl sm:text-2xl font-black text-white font-heading">{EDUCATION_DATA.cgpa}</span>
                </div>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="pt-6 space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-purple-300 font-mono font-semibold flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                <span>Academic Overview & Focus</span>
              </h4>
              <div className="space-y-3">
                {EDUCATION_DATA.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
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
