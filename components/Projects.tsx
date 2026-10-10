"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PROJECTS_DATA, ProjectData } from "@/data/portfolioData";
import { ProjectPreviewRouter } from "./ProjectPreviews";
import ProjectCaseStudyModal from "./ProjectCaseStudyModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "All Projects" },
    { id: "AI / NLP Solution", label: "AI & NLP" },
    { id: "Full-Stack System", label: "Full-Stack & Health" },
    { id: "Desktop Software", label: "Desktop & Management" },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "all") return true;
    return project.type === activeFilter;
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#07080b]">
      {/* Ambient background lighting (Monochrome) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Core Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Production-ready web applications, AI/NLP pipelines, and software systems built with verifiable architecture, working demonstrations, and clean source code.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterOptions.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeFilter === f.id
                    ? "bg-white text-black shadow-lg shadow-white/10"
                    : "bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.08] hover:border-white/20"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#0c0e14]/90 hover:bg-[#10121a] border border-white/[0.08] hover:border-white/30 transition-all duration-300 shadow-2xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Application Mockup Container */}
                <div className="p-4 sm:p-5 bg-black/50 border-b border-white/[0.06]">
                  <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
                    <ProjectPreviewRouter projectId={project.id} />
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Category and Type Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/[0.06] text-white border border-white/15">
                      {project.category}
                    </span>
                    {project.isLive && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-white bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Live Demo
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors font-heading">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem Addressed Pill */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-400 block mb-1">
                      Target Problem:
                    </span>
                    <p className="text-xs text-zinc-300 line-clamp-2">
                      {project.problem}
                    </p>
                  </div>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] text-zinc-200 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 sm:p-8 pt-0 border-t border-white/[0.04] flex flex-wrap items-center justify-between gap-3 mt-4">
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-white hover:bg-zinc-200 shadow-lg shadow-white/10 transition hover:-translate-y-0.5"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>

                {/* Case Study Trigger Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-300 py-2 transition group/btn"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
