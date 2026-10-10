"use client";

import React from "react";
import Image from "next/image";
import {
  GraduationCap,
  MapPin,
  FileDown,
  Github,
  Linkedin,
  Layers,
  Server,
  Sparkles,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const CORE_FOCUS_AREAS = [
  {
    icon: Layers,
    title: "Full-Stack Web Engineering",
    description: "Developing modern end-to-end applications with modular frontend components and clean RESTful endpoints.",
    iconBg: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    hoverBorder: "hover:border-blue-500/40",
  },
  {
    icon: Server,
    title: "Database-Driven Systems",
    description: "Structuring reliable schemas and relational workflows with MySQL, SQLite, and MongoDB document stores.",
    iconBg: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    hoverBorder: "hover:border-emerald-500/40",
  },
  {
    icon: Sparkles,
    title: "AI & Practical NLP",
    description: "Integrating machine learning pipelines and transformer models from Hugging Face into usable web interfaces.",
    iconBg: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    hoverBorder: "hover:border-purple-500/40",
  },
  {
    icon: Cpu,
    title: "Intuitive UI/UX Development",
    description: "Translating functional requirements into ergonomic, accessible, and responsive user experiences.",
    iconBg: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    hoverBorder: "hover:border-rose-500/40",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#08090d]/60 border-t border-white/[0.06]">
      {/* Elegant ambient glow blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-emerald-500/15 border border-purple-500/30 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
            More About Me
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 font-medium">
            Curious by nature. Building with purpose.
          </p>
        </div>

        {/* Grid Layout: Profile Card + Professional Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Visual Profile Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-purple-500/30 via-blue-500/20 to-emerald-500/10 shadow-2xl">
              <div className="bg-[#0c0e14] rounded-[22px] p-6 border border-white/[0.08] overflow-hidden relative">
                {/* Real Developer Portrait */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-zinc-950 border border-white/[0.08] shadow-inner">
                  <Image
                    src="/avatar.jpg"
                    alt="M.R. Aakash"
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-transparent opacity-80" />

                  {/* Status Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0c0e14]/90 backdrop-blur-md border border-emerald-500/30 text-xs font-medium text-white shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Open to Opportunities
                    </span>
                    <span className="text-[11px] font-mono text-purple-200 bg-purple-950/70 backdrop-blur-sm px-2.5 py-1 rounded-md border border-purple-500/30">
                      B.Tech IT
                    </span>
                  </div>
                </div>

                {/* Identity Summary */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">{PERSONAL_INFO.fullName}</h3>
                    <p className="text-sm text-zinc-400 font-medium mt-0.5">
                      Information Technology Undergraduate
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/[0.06] text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>PSNA College of Engineering and Technology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{PERSONAL_INFO.location}</span>
                    </div>
                  </div>

                  {/* Quick Action Links */}
                  <div className="pt-4 flex flex-wrap gap-2.5">
                    <a
                      href={PERSONAL_INFO.resumePath}
                      download="Aakash-MR-Resume.pdf"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-xl transition shadow-lg shadow-white/10"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>Download Resume</span>
                    </a>
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-300 hover:text-white transition"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-300 hover:text-white transition"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Snapshot Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-500/[0.08] via-blue-500/[0.05] to-transparent border border-purple-500/20 flex items-center justify-between shadow-lg">
              <div>
                <p className="text-xs uppercase tracking-wider text-purple-300 font-semibold font-mono">Undergraduate CGPA</p>
                <p className="text-2xl font-bold text-white mt-1 font-heading">{PERSONAL_INFO.currentEducation.cgpa}</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-wider text-blue-300 font-semibold font-mono">Batch / Term</p>
                <p className="text-sm font-semibold text-zinc-200 mt-1 font-mono">2023 – 2027</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography & Focus Areas (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Professional Introduction */}
            <div className="p-8 rounded-3xl bg-[#0c0e14]/90 border border-white/[0.08] shadow-xl relative overflow-hidden">
              <div className="space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                <p>{PERSONAL_INFO.bioParagraph1}</p>
                <p>{PERSONAL_INFO.bioParagraph2}</p>
                <p>{PERSONAL_INFO.bioParagraph3}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-wrap gap-4 text-xs font-medium text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span className="text-zinc-300">Practical Problem Solving</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-zinc-300">Continuous Technical Learning</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span className="text-zinc-300">Verified Project Demonstrations</span>
                </div>
              </div>
            </div>

            {/* Primary Areas of Interest */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 font-heading flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Primary Areas of Interest</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CORE_FOCUS_AREAS.map((focus, index) => {
                  const Icon = focus.icon;
                  return (
                    <div
                      key={index}
                      className={`p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] ${focus.hoverBorder} transition-all duration-300 group`}
                    >
                      <div className={`w-9 h-9 rounded-xl ${focus.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform mb-3`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-1.5">{focus.title}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">{focus.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
