"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal } from "lucide-react";
import { EXPERIENCE_DATA } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#08090d]/60 border-t border-white/[0.04]">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Work History</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
            Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Professional developer internship experience applying core engineering principles to real web applications.
          </p>
        </div>

        {/* Experience Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 pb-12 last:pb-0">
              {/* Vertical timeline line */}
              <div className="absolute left-0 top-3 bottom-0 w-px bg-gradient-to-b from-blue-500 via-violet-500/40 to-transparent" />

              {/* Timeline marker node */}
              <div className="absolute -left-[9px] top-2 w-[19px] h-[19px] rounded-full bg-[#0a0c14] border-2 border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>

              {/* Experience Card */}
              <div className="rounded-3xl p-6 sm:p-8 bg-[#0c0e17]/90 hover:bg-[#0f121e] border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 shadow-2xl">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-2">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>Internship</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">{exp.role}</h3>
                    <p className="text-base text-slate-300 font-medium mt-0.5">{exp.company}</p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.06] px-3 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Responsibilities and Contributions */}
                <div className="space-y-3 mb-8">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
                        <ChevronRight className="w-3 h-3" />
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>

                {/* Applied Technologies */}
                <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono mr-2 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    Stack:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.03] border border-white/[0.08] text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
