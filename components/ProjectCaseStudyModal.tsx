"use client";

import React, { useEffect } from "react";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Cpu,
  Target,
  UserCheck,
  ShieldCheck,
  Code2,
  LayoutGrid,
} from "lucide-react";
import { ProjectData } from "@/data/portfolioData";
import { ProjectPreviewRouter } from "./ProjectPreviews";
import SpecularButton from "./SpecularButton";
import SpotlightCard from "./SpotlightCard";

interface ProjectCaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-xl bg-black/85 animate-in fade-in duration-200">
      {/* Click backdrop to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Content */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c0e14] border border-white/[0.1] p-6 sm:p-10 space-y-8 shadow-2xl scrollbar-thin scrollbar-thumb-white/10"
      >
          {/* Top Header Bar */}
          <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/[0.06] text-white border border-white/15">
                {project.category}
              </span>
              <span className="text-xs font-mono text-zinc-400">Case Study</span>
            </div>
            <h2 id="case-study-title" className="text-2xl sm:text-4xl font-bold text-white font-heading">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 mt-2 font-medium">
              {project.tagline}
            </p>
          </div>

          <SpecularButton
            size="sm"
            radius={9999}
            tint="#ffffff"
            tintOpacity={0.08}
            textColor="#e4e4e7"
            lineColor="#ffffff"
            intensity={1.2}
            onClick={onClose}
            className="!p-2.5 !rounded-full text-zinc-300 hover:text-white border border-white/15"
            style={{ padding: "10px", minWidth: "40px", minHeight: "40px" }}
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </SpecularButton>
        </div>

        {/* Live Application Preview in Modal */}
        <div className="rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] p-4 sm:p-6">
          <p className="text-xs font-mono text-zinc-400 mb-3 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-white" />
            <span>Interactive Application Simulation & Verified UI View</span>
          </p>
          <div className="aspect-[16/10] sm:aspect-[21/9] max-h-[380px] w-full">
            <ProjectPreviewRouter projectId={project.id} />
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <SpecularButton
              size="sm"
              radius={12}
              tint="#ffffff"
              tintOpacity={0.92}
              textColor="#000000"
              lineColor="#ffffff"
              baseColor="#e4e4e7"
              intensity={1.2}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold shadow-lg shadow-white/10"
            >
              <span>Visit Live Application</span>
              <ExternalLink className="w-4 h-4 ml-1.5 inline" />
            </SpecularButton>
          )}

          {project.githubUrl ? (
            <SpecularButton
              size="sm"
              radius={12}
              tint="#ffffff"
              tintOpacity={0.06}
              textColor="#e4e4e7"
              lineColor="#ffffff"
              baseColor="#525252"
              intensity={1}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold border border-white/15"
            >
              <Github className="w-4 h-4 mr-1.5 inline" />
              <span>Inspect Source Code</span>
            </SpecularButton>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono text-zinc-400 bg-white/[0.02] border border-white/[0.05]">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>Source repository verified in academic/local build</span>
            </span>
          )}
        </div>

        {/* Overview & Problem Addressed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpotlightCard
            spotlightColor="#c084fc"
            intensity={0.2}
            spotlightSize={220}
            borderGlow={0.6}
            className="p-6 rounded-2xl space-y-3"
          >
            <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-purple-400" />
              <span>Project Overview</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.longDescription}
            </p>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="#fb7185"
            intensity={0.2}
            spotlightSize={220}
            borderGlow={0.6}
            className="p-6 rounded-2xl space-y-3"
          >
            <div className="flex items-center gap-2 text-zinc-300 text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-rose-400" />
              <span>The Problem Being Addressed</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.problem}
            </p>
          </SpotlightCard>
        </div>

        {/* Goals & My Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpotlightCard
            spotlightColor="#34d399"
            intensity={0.2}
            spotlightSize={220}
            borderGlow={0.6}
            className="p-6 rounded-2xl space-y-4"
          >
            <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
              <Target className="w-4 h-4 text-emerald-400" />
              <span>Project Goals</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              {project.goals.map((g, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="#60a5fa"
            intensity={0.2}
            spotlightSize={220}
            borderGlow={0.6}
            className="p-6 rounded-2xl space-y-4"
          >
            <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-4 h-4 text-blue-400" />
              <span>My Role & Contribution</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.role}
            </p>
            <div className="pt-2">
              <p className="text-xs font-mono text-zinc-400 mb-2">Verified Technology Stack:</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.06] border border-white/10 text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Key Features */}
        <SpotlightCard
          spotlightColor="#a855f7"
          intensity={0.2}
          spotlightSize={280}
          borderGlow={0.6}
          className="p-6 rounded-2xl space-y-4"
        >
          <h3 className="text-base font-bold text-white flex items-center gap-2 font-heading">
            <Code2 className="w-4 h-4 text-purple-400" />
            <span>Key Features & Verified Capabilities</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300">
            {project.features.map((f, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 mt-2" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </SpotlightCard>

        {/* Real Application Screen Captures */}
        {project.screenshots && project.screenshots.length > 0 && (
          <SpotlightCard
            spotlightColor="#8b5cf6"
            intensity={0.2}
            spotlightSize={320}
            borderGlow={0.6}
            className="p-6 rounded-2xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2 font-heading">
                <LayoutGrid className="w-4 h-4 text-purple-400" />
                <span>Verified System Screen Captures</span>
              </h3>
              <span className="text-xs font-mono text-zinc-400">
                {project.screenshots.length} Screens Captured
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.screenshots.map((s, idx) => (
                <div
                  key={idx}
                  className="group/shot rounded-xl overflow-hidden bg-black/70 border border-white/10 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-black relative">
                    <img
                      src={s.src}
                      alt={s.title}
                      className="w-full h-full object-cover object-top group-hover/shot:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 border-t border-white/[0.06] bg-white/[0.01]">
                    <p className="text-xs font-semibold text-white font-sans">{s.title}</p>
                    {s.caption && (
                      <p className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">{s.caption}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        )}

        {/* Implementation Decisions & Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpotlightCard
            spotlightColor="#38bdf8"
            intensity={0.2}
            spotlightSize={220}
            borderGlow={0.6}
            className="p-6 rounded-2xl space-y-3"
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Architectural Decisions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              {project.decisions.map((d, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-400 font-mono">0{idx + 1}.</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="#fbbf24"
            intensity={0.2}
            spotlightSize={220}
            borderGlow={0.6}
            className="p-6 rounded-2xl space-y-3"
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Challenges & Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              {project.challenges.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono">▸</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </div>

        {/* Bottom Close Button */}
        <div className="flex justify-end pt-4 border-t border-white/[0.08]">
          <SpecularButton
            size="sm"
            radius={12}
            tint="#ffffff"
            tintOpacity={0.08}
            textColor="#d4d4d8"
            lineColor="#ffffff"
            intensity={1}
            onClick={onClose}
            className="font-semibold border border-white/15"
          >
            Close Case Study
          </SpecularButton>
        </div>
      </div>
    </div>
  );
}
