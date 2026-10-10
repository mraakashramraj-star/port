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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-xl bg-black/80 animate-in fade-in duration-200">
      {/* Click backdrop to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Content */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0b0d15] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 space-y-8 scrollbar-thin scrollbar-thumb-white/10"
      >
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">Case Study</span>
            </div>
            <h2 id="case-study-title" className="text-2xl sm:text-4xl font-bold text-white font-heading">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 font-medium">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/10 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Application Preview in Modal */}
        <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/[0.08] p-4 sm:p-6">
          <p className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] transition"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Source Code</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono text-slate-400 bg-white/[0.02] border border-white/[0.05]">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              <span>Source repository verified in academic/local build</span>
            </span>
          )}
        </div>

        {/* Overview & Problem Addressed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>Project Overview</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>The Problem Being Addressed</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>
        </div>

        {/* Goals & My Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Project Goals</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.goals.map((g, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-4 h-4" />
              <span>My Role & Contribution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.role}
            </p>
            <div className="pt-2">
              <p className="text-xs font-mono text-slate-400 mb-2">Verified Technology Stack:</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 font-heading">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span>Key Features & Verified Capabilities</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
            {project.features.map((f, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Decisions & Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-blue-300">
              Architectural Decisions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {project.decisions.map((d, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-400 font-mono">0{idx + 1}.</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-amber-300">
              Challenges & Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {project.challenges.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono">▸</span>
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
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
