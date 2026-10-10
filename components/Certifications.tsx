"use client";

import React from "react";
import { Award, Trophy, CheckCircle2, ShieldCheck, Flag } from "lucide-react";
import { CERTIFICATIONS_DATA, ACHIEVEMENTS_DATA } from "@/data/portfolioData";
import { TechIcon } from "./TechIcons";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 bg-[#07080b]">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Hackathons</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
            Certifications & Achievements
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Formal technical certifications and verified competitive hackathon participation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-heading">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS_DATA.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 rounded-3xl bg-[#0c0e17]/90 hover:bg-[#0f121e] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                      {cert.issuer === "MongoDB" ? (
                        <TechIcon name="mongodb" className="w-5 h-5" />
                      ) : (
                        <ShieldCheck className="w-5 h-5" />
                      )}
                    </div>
                    <h4 className="text-base font-bold text-white mb-1 font-heading">{cert.title}</h4>
                    <p className="text-xs text-slate-400 font-medium">{cert.issuer}</p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>Verified Credential</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-heading">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Hackathon Achievement</span>
            </h3>

            {ACHIEVEMENTS_DATA.map((item, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#121019] to-[#0c0e17] border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 shadow-2xl space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Flag className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white font-heading">{item.title}</h4>
                  <p className="text-xs font-semibold text-amber-400 mt-0.5">{item.role} • {item.organization}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Participant Recognition</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Selected
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
