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
} from "lucide-react";
import { ProjectData } from "@/data/portfolioData";
import { ProjectPreviewRouter } from "./ProjectPreviews";

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
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0c10] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-10 space-y-8 scrollbar-thin scrollbar-thumb-white/10"
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

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white border border-white/15 transition focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
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
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-black bg-white hover:bg-zinc-200 shadow-lg shadow-white/10 transition hover:-translate-y-0.5"
            >
              <span>Visit Live Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Source Code</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono text-zinc-400 bg-white/[0.02] border border-white/[0.05]">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>Source repository verified in academic/local build</span>
            </span>
          )}
        </div>

        {/* Overview & Problem Addressed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>Project Overview</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-zinc-300 text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-white" />
              <span>The Problem Being Addressed</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.problem}
            </p>
          </div>
        </div>

        {/* Goals & My Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Project Goals</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              {project.goals.map((g, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-4 h-4" />
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
          </div>
        </div>

        {/* Key Features */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 font-heading">
            <Code2 className="w-4 h-4 text-white" />
            <span>Key Features & Verified Capabilities</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300">
            {project.features.map((f, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 mt-2" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Decisions & Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Architectural Decisions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              {project.decisions.map((d, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-white font-mono">0{idx + 1}.</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Challenges & Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              {project.challenges.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-white font-mono">▸</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Close Button */}
        <div className="flex justify-end pt-4 border-t border-white/[0.08]">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
