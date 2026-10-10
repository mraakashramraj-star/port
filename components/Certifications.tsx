"use client";

import React from "react";
import { Award, Trophy, CheckCircle2, ShieldCheck, Flag, Sparkles } from "lucide-react";
import { CERTIFICATIONS_DATA, ACHIEVEMENTS_DATA } from "@/data/portfolioData";
import { TechIcon } from "./TechIcons";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 bg-[#07080b]">
      {/* Ambient background lights */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/15 via-blue-500/15 to-purple-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>Credentials & Hackathons</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
            Certifications & Achievements
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
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
              {CERTIFICATIONS_DATA.map((cert, index) => {
                const isMongo = cert.issuer.toLowerCase().includes("mongo");
                const cardBorder = isMongo
                  ? "border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_12px_40px_rgba(16,185,129,0.12)]"
                  : "border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)]";
                const iconBox = isMongo
                  ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                  : "bg-blue-500/15 border-blue-500/30 text-blue-400";
                const pillClass = isMongo
                  ? "bg-emerald-500/[0.08] text-emerald-200 border-emerald-500/20"
                  : "bg-blue-500/[0.08] text-blue-200 border-blue-500/20";
                const dotClass = isMongo
                  ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                  : "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]";

                return (
                  <div
                    key={index}
                    className={`group p-6 rounded-3xl bg-[#0c0e14]/90 hover:bg-[#10121a] border ${cardBorder} transition-all duration-300 shadow-xl flex flex-col justify-between`}
                  >
                    <div>
                      <div className={`w-10 h-10 rounded-2xl ${iconBox} border flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                        {isMongo ? (
                          <TechIcon name="mongodb" className="w-5 h-5 flex-shrink-0" monochrome={false} />
                        ) : (
                          <ShieldCheck className="w-5 h-5" />
                        )}
                      </div>
                      <h4 className="text-base font-bold text-white mb-1 font-heading">{cert.title}</h4>
                      <p className="text-xs text-zinc-400 font-medium">{cert.issuer}</p>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {cert.skills.map((s) => (
                          <span
                            key={s}
                            className={`px-2 py-0.5 rounded text-[10px] font-mono border ${pillClass}`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                      <span>Verified Credential</span>
                      <span className={`w-2 h-2 rounded-full ${dotClass}`} />
                    </div>
                  </div>
                );
              })}
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
                className="group relative p-6 sm:p-7 rounded-3xl bg-[#0c0e14]/95 border border-amber-500/25 hover:border-amber-500/50 hover:shadow-[0_12px_45px_rgba(245,158,11,0.15)] transition-all duration-300 shadow-2xl space-y-4 overflow-hidden"
              >
                {/* Subtle top edge amber glow */}
                <div className="absolute top-0 left-1/4 right-1/4 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Flag className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white font-heading">{item.title}</h4>
                  <p className="text-xs font-semibold text-amber-200/90 mt-0.5">{item.role} • {item.organization}</p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                  <span>Participant Recognition</span>
                  <span className="text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5 font-semibold text-xs shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Selected
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
