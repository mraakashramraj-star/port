"use client";

import React from "react";
import { Lightbulb, Compass, Code, CheckCircle, ArrowRight } from "lucide-react";
import { PROCESS_STAGES } from "@/data/portfolioData";

const STAGE_ICONS = [Lightbulb, Compass, Code, CheckCircle];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#08090d]/60 border-t border-white/[0.04]">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Engineering Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
            How I Approach Development
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A disciplined four-stage workflow ensuring software is well-conceived, cleanly architected, and rigorously tested.
          </p>
        </div>

        {/* Process Stages Grid / Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-blue-500/20 via-violet-500/30 to-blue-500/20 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STAGES.map((stage, idx) => {
              const Icon = STAGE_ICONS[idx];
              return (
                <div
                  key={stage.number}
                  className="p-6 sm:p-7 rounded-3xl bg-[#0c0e17]/90 hover:bg-[#0f121e] border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    {/* Step number badge & icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-2xl font-black text-blue-500/40 group-hover:text-blue-400 transition-colors">
                        {stage.number}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 font-heading">
                      {stage.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-300 mb-3 leading-relaxed">
                      {stage.description}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {stage.details}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/[0.04] flex items-center text-[11px] font-mono text-slate-400">
                    <span>Stage {stage.number} of 04</span>
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
