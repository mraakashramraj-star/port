"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ExternalLink,
  Github,
  BookOpen,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Layers,
  LayoutGrid,
  RotateCcw,
} from "lucide-react";
import { PROJECTS_DATA, ProjectData } from "@/data/portfolioData";
import { ProjectPreviewRouter } from "./ProjectPreviews";
import ProjectCaseStudyModal from "./ProjectCaseStudyModal";
import CardSwap, { Card, CardSwapHandle } from "./CardSwap";
import SpecularButton from "./SpecularButton";
import SpotlightCard from "./SpotlightCard";
import StrokeText from "./StrokeText";

interface ProjectThemeConfig {
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  cardBorderHover: string;
  glowLine: string;
  techBadgeBg: string;
  techBadgeBorder: string;
  techBadgeText: string;
  linkText: string;
  spotlightColor: string;
}

const PROJECT_THEMES: Record<string, ProjectThemeConfig> = {
  // Project 1: Lilac / Purple
  "econsult-ai": {
    badgeBg: "bg-purple-500/15",
    badgeBorder: "border-purple-500/30",
    badgeText: "text-purple-300",
    cardBorderHover: "hover:border-purple-500/50 hover:shadow-[0_12px_45px_rgba(168,85,247,0.15)]",
    glowLine: "via-purple-400",
    techBadgeBg: "bg-purple-500/[0.07]",
    techBadgeBorder: "border-purple-500/20",
    techBadgeText: "text-purple-200",
    linkText: "text-purple-300 hover:text-purple-200",
    spotlightColor: "#c084fc",
  },
  "ai-econsult-sentiment": {
    badgeBg: "bg-purple-500/15",
    badgeBorder: "border-purple-500/30",
    badgeText: "text-purple-300",
    cardBorderHover: "hover:border-purple-500/50 hover:shadow-[0_12px_45px_rgba(168,85,247,0.15)]",
    glowLine: "via-purple-400",
    techBadgeBg: "bg-purple-500/[0.07]",
    techBadgeBorder: "border-purple-500/20",
    techBadgeText: "text-purple-200",
    linkText: "text-purple-300 hover:text-purple-200",
    spotlightColor: "#c084fc",
  },
  // Project 2: Mint / Emerald
  "smart-op-hospital": {
    badgeBg: "bg-emerald-500/15",
    badgeBorder: "border-emerald-500/30",
    badgeText: "text-emerald-300",
    cardBorderHover: "hover:border-emerald-500/50 hover:shadow-[0_12px_45px_rgba(16,185,129,0.15)]",
    glowLine: "via-emerald-400",
    techBadgeBg: "bg-emerald-500/[0.07]",
    techBadgeBorder: "border-emerald-500/20",
    techBadgeText: "text-emerald-200",
    linkText: "text-emerald-300 hover:text-emerald-200",
    spotlightColor: "#34d399",
  },
  // Project 3: Coral / Rose
  "batron-fitness": {
    badgeBg: "bg-rose-500/15",
    badgeBorder: "border-rose-500/30",
    badgeText: "text-rose-300",
    cardBorderHover: "hover:border-rose-500/50 hover:shadow-[0_12px_45px_rgba(244,63,94,0.15)]",
    glowLine: "via-rose-400",
    techBadgeBg: "bg-rose-500/[0.07]",
    techBadgeBorder: "border-rose-500/20",
    techBadgeText: "text-rose-200",
    linkText: "text-rose-300 hover:text-rose-200",
    spotlightColor: "#fb7185",
  },
  // Project 4: Sky Blue
  "cureconnect": {
    badgeBg: "bg-blue-500/15",
    badgeBorder: "border-blue-500/30",
    badgeText: "text-blue-300",
    cardBorderHover: "hover:border-blue-500/50 hover:shadow-[0_12px_45px_rgba(59,130,246,0.15)]",
    glowLine: "via-blue-400",
    techBadgeBg: "bg-blue-500/[0.07]",
    techBadgeBorder: "border-blue-500/20",
    techBadgeText: "text-blue-200",
    linkText: "text-blue-300 hover:text-blue-200",
    spotlightColor: "#60a5fa",
  },
};

const DEFAULT_THEME: ProjectThemeConfig = {
  badgeBg: "bg-purple-500/15",
  badgeBorder: "border-purple-500/30",
  badgeText: "text-purple-300",
  cardBorderHover: "hover:border-purple-500/50 hover:shadow-[0_12px_45px_rgba(168,85,247,0.15)]",
  glowLine: "via-purple-400",
  techBadgeBg: "bg-purple-500/[0.07]",
  techBadgeBorder: "border-purple-500/20",
  techBadgeText: "text-purple-200",
  linkText: "text-purple-300 hover:text-purple-200",
  spotlightColor: "#c084fc",
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"deck" | "grid">("deck");
  const [frontIndex, setFrontIndex] = useState<number>(0);
  const cardSwapRef = useRef<CardSwapHandle>(null);

  const [cardDims, setCardDims] = useState<{
    width: number;
    height: number;
    cardDistance: number;
    verticalDistance: number;
  }>({
    width: 560,
    height: 680,
    cardDistance: 55,
    verticalDistance: 48,
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 400) {
        setCardDims({
          width: Math.min(320, w - 24),
          height: 600,
          cardDistance: 24,
          verticalDistance: 22,
        });
      } else if (w < 640) {
        setCardDims({
          width: Math.min(360, w - 32),
          height: 630,
          cardDistance: 34,
          verticalDistance: 30,
        });
      } else if (w < 1024) {
        setCardDims({
          width: 480,
          height: 660,
          cardDistance: 44,
          verticalDistance: 38,
        });
      } else {
        setCardDims({
          width: 560,
          height: 680,
          cardDistance: 55,
          verticalDistance: 48,
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <section id="projects" className="relative py-24 sm:py-32 bg-[#07080b] border-t border-white/[0.04] overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div>
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-emerald-500/15 border border-purple-500/30 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                <span>Core Engineering Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
                <StrokeText
                  text="Featured Projects"
                  strokeColor="#c084fc"
                  fillColor="#ffffff"
                  strokeWidth={1.5}
                  drawDuration={1.3}
                  fillDelay={0.15}
                  stagger={0.04}
                  trigger="scroll"
                  fillMode="wipe"
                  fontSize={48}
                  fontWeight={800}
                  align="left"
                />
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-2">
                Production-ready web applications, AI/NLP pipelines, and software systems built with verifiable architecture, working demonstrations, and clean source code.
              </p>
            </div>

            {/* Filter Pills & View Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0">
              {/* Filter Pills with SpecularButton */}
              <div className="flex items-center gap-2 overflow-x-auto py-2.5 px-1 scrollbar-none">
                {filterOptions.map((f) => {
                  const isActive = activeFilter === f.id;
                  return (
                    <SpecularButton
                      key={f.id}
                      size="sm"
                      radius={20}
                      tint={isActive ? "#8b5cf6" : "#ffffff"}
                      tintOpacity={isActive ? 0.35 : 0.04}
                      textColor={isActive ? "#ffffff" : "#a1a1aa"}
                      lineColor={isActive ? "#c084fc" : "#ffffff"}
                      baseColor="#3f3f46"
                      intensity={isActive ? 1.2 : 0.8}
                      idleIntensity={isActive ? 0.6 : 0.25}
                      glow={0.8}
                      onClick={() => {
                        setActiveFilter(f.id);
                        setFrontIndex(0);
                      }}
                      className={`whitespace-nowrap font-semibold ${
                        isActive ? "shadow-lg shadow-purple-500/20" : ""
                      }`}
                    >
                      {f.label}
                    </SpecularButton>
                  );
                })}
              </div>

              {/* View Switcher: 3D Deck vs Grid */}
              <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-white/[0.08] self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setViewMode("deck")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition ${
                    viewMode === "deck"
                      ? "bg-purple-600/30 text-purple-200 border border-purple-500/40 shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  title="3D Card Deck View"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">3D Stack</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition ${
                    viewMode === "grid"
                      ? "bg-purple-600/30 text-purple-200 border border-purple-500/40 shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* VIEW 1: 3D CARD SWAP SHOWCASE (Default) */}
        {viewMode === "deck" && (
          <div className="relative flex flex-col items-center">
              {/* Deck Navigation Controls Header */}
              <div className="w-full max-w-4xl lg:max-w-5xl flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400">
                    Project <span className="text-white font-bold">{frontIndex + 1}</span> of{" "}
                    <span className="text-white font-bold">{filteredProjects.length}</span>
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs font-medium text-purple-300 truncate max-w-[200px] sm:max-w-xs">
                    {filteredProjects[frontIndex]?.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <SpecularButton
                    size="sm"
                    radius={10}
                    tint="#ffffff"
                    tintOpacity={0.06}
                    textColor="#ffffff"
                    lineColor="#a1a1aa"
                    baseColor="#27272a"
                    intensity={1}
                    idleIntensity={0.3}
                    glow={0.5}
                    onClick={() => cardSwapRef.current?.prev()}
                    aria-label="Previous Project"
                    className="!p-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </SpecularButton>

                  <SpecularButton
                    size="sm"
                    radius={10}
                    tint="#ffffff"
                    tintOpacity={0.06}
                    textColor="#ffffff"
                    lineColor="#a1a1aa"
                    baseColor="#27272a"
                    intensity={1}
                    idleIntensity={0.3}
                    glow={0.5}
                    onClick={() => cardSwapRef.current?.next()}
                    aria-label="Next Project"
                    className="!p-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </SpecularButton>
                </div>
              </div>

              {/* 3D Stack Container with CardSwap - Responsive sizing */}
              <div className="w-full max-w-5xl lg:max-w-6xl h-[680px] sm:h-[780px] lg:h-[880px] relative flex items-center justify-center my-2">
                <CardSwap
                  ref={cardSwapRef}
                  width={cardDims.width}
                  height={cardDims.height}
                  cardDistance={cardDims.cardDistance}
                  verticalDistance={cardDims.verticalDistance}
                  depth={85}
                  skewAmount={4}
                  visibleCards={Math.min(4, filteredProjects.length)}
                  delay={4800}
                  speed={1.1}
                  bounce={0.35}
                  parallax={0.5}
                  hoverSpread={0.14}
                  dim={0.52}
                  cardRadius={24}
                  intro={true}
                  theme="dark"
                  onChange={(idx) => setFrontIndex(idx)}
                  className="w-full h-full"
                >
                  {filteredProjects.map((project, pIdx) => {
                    const theme = PROJECT_THEMES[project.id] || DEFAULT_THEME;

                    return (
                      <Card
                        key={project.id}
                        className="group relative flex flex-col justify-between h-full w-full bg-[#0c0e14] border border-white/10 shadow-2xl rounded-[24px] overflow-hidden text-left"
                      >
                        {/* Subtle top edge glow matching signature project color */}
                        <div
                          className={`absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent ${theme.glowLine} to-transparent opacity-90 pointer-events-none z-10`}
                        />

                        {/* Top Meta Bar */}
                        <div className="p-4 sm:p-5 pb-3 flex items-center justify-between border-b border-white/[0.06] bg-black/40 relative z-10 shrink-0">
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder}`}
                            >
                              {project.type}
                            </span>
                            {project.isLive && (
                              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Live Demo
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-mono text-zinc-400 font-semibold">
                            0{pIdx + 1} / 0{filteredProjects.length}
                          </span>
                        </div>

                        {/* Visual Application Mockup View */}
                        <div className="p-3.5 sm:p-4 bg-black/60 border-b border-white/[0.06] relative z-10 shrink-0">
                          <div className="aspect-[16/9] w-full max-h-[210px] rounded-xl overflow-hidden shadow-inner">
                            <ProjectPreviewRouter projectId={project.id} />
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="p-5 sm:p-6 space-y-3.5 flex-1 flex flex-col justify-between min-h-0 relative z-10">
                          <div className="space-y-1.5">
                            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading leading-tight group-hover:text-zinc-100 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-2">
                              {project.description}
                            </p>
                          </div>

                          {/* Problem Addressed Pill */}
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                            <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-400 block mb-1">
                              Target Problem:
                            </span>
                            <p className="text-xs sm:text-[13px] text-zinc-300 line-clamp-2 leading-relaxed">
                              {project.problem}
                            </p>
                          </div>

                          {/* Technologies Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-0.5">
                            {project.technologies.slice(0, 5).map((tech) => (
                              <span
                                key={tech}
                                className={`px-2.5 py-1 rounded-md text-[11px] font-mono ${theme.techBadgeBg} ${theme.techBadgeText} border ${theme.techBadgeBorder}`}
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 5 && (
                              <span className="px-2 py-1 text-[11px] font-mono text-zinc-400">
                                +{project.technologies.length - 5}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons Footer with SpecularButton */}
                        <div className="p-4 sm:p-5 pt-3.5 border-t border-white/[0.08] bg-black/60 flex items-center justify-between gap-3 relative z-10 shrink-0">
                          <div className="flex items-center gap-2.5">
                            {project.liveUrl && (
                              <SpecularButton
                                size="sm"
                                radius={10}
                                tint="#ffffff"
                                tintOpacity={0.95}
                                textColor="#000000"
                                lineColor="#ffffff"
                                baseColor="#e4e4e7"
                                intensity={1.2}
                                idleIntensity={0.5}
                                glow={0.8}
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-xs shadow-md px-3.5 py-1.5"
                              >
                                <span>Live App</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </SpecularButton>
                            )}

                            {project.githubUrl && (
                              <SpecularButton
                                size="sm"
                                radius={10}
                                tint="#ffffff"
                                tintOpacity={0.06}
                                textColor="#e4e4e7"
                                lineColor="#a1a1aa"
                                baseColor="#3f3f46"
                                intensity={1}
                                idleIntensity={0.3}
                                glow={0.6}
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white/[0.1] font-semibold text-xs px-3.5 py-1.5"
                              >
                                <Github className="w-3.5 h-3.5" />
                                <span>Code</span>
                              </SpecularButton>
                            )}
                          </div>

                          <SpecularButton
                            size="sm"
                            radius={10}
                            tint="#8b5cf6"
                            tintOpacity={0.15}
                            textColor="#c084fc"
                            lineColor="#c084fc"
                            baseColor="#581c87"
                            intensity={1.1}
                            idleIntensity={0.4}
                            glow={0.7}
                            onClick={() => setSelectedProject(project)}
                            className="font-semibold text-xs group/btn border border-purple-500/25 px-3.5 py-1.5"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                          </SpecularButton>
                        </div>
                      </Card>
                    );
                  })}
                </CardSwap>
              </div>

              {/* Bottom Deck Controls & Gesture Hint */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 text-xs text-zinc-400">
                {/* Dots indicator */}
                <div className="flex items-center gap-2">
                  {filteredProjects.map((p, idx) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        // Cycle until this project is active
                        const diff = (idx - frontIndex + filteredProjects.length) % filteredProjects.length;
                        for (let step = 0; step < diff; step++) {
                          setTimeout(() => cardSwapRef.current?.next(), step * 120);
                        }
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        frontIndex === idx
                          ? "w-8 bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Jump to project ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.06] text-zinc-400 text-[11px] font-mono">
                  <RotateCcw className="w-3 h-3 text-purple-400" />
                  <span>Drag or fling front card • Click cards behind to bring forward</span>
                </div>
              </div>
            </div>
        )}

        {/* VIEW 2: ALL PROJECTS GRID (Clean cards without BorderGlow) */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {filteredProjects.map((project, pIdx) => {
              const theme = PROJECT_THEMES[project.id] || DEFAULT_THEME;

              return (
                <div
                  key={project.id}
                  className="h-full"
                >
                  <SpotlightCard
                    spotlightColor={theme.spotlightColor}
                    intensity={0.22}
                    spotlightSize={340}
                    borderGlow={0.7}
                    proximity={100}
                    className={`group relative rounded-3xl ${theme.cardBorderHover} transition-all duration-300 flex flex-col justify-between h-full overflow-hidden`}
                  >
                    {/* Subtle top edge glow matching signature project color */}
                    <div
                      className={`absolute top-0 left-1/4 right-1/4 h-[1.5px] bg-gradient-to-r from-transparent ${theme.glowLine} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                    />

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
                          <span
                            className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder}`}
                          >
                            {project.category}
                          </span>
                          {project.isLive && (
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30 shadow-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Live Demo
                            </span>
                          )}
                        </div>

                        {/* Title & Tagline */}
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-100 transition-colors font-heading">
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
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono ${theme.techBadgeBg} ${theme.techBadgeText} border ${theme.techBadgeBorder}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons Footer with SpecularButton */}
                    <div className="p-6 sm:p-8 pt-0 border-t border-white/[0.04] flex flex-wrap items-center justify-between gap-3 mt-4">
                      <div className="flex items-center gap-2">
                        {project.liveUrl && (
                          <SpecularButton
                            size="sm"
                            radius={12}
                            tint="#ffffff"
                            tintOpacity={0.95}
                            textColor="#000000"
                            lineColor="#ffffff"
                            baseColor="#e4e4e7"
                            intensity={1.2}
                            idleIntensity={0.5}
                            glow={0.8}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold shadow-lg shadow-white/10"
                          >
                            <span>Live App</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </SpecularButton>
                        )}

                        {project.githubUrl && (
                          <SpecularButton
                            size="sm"
                            radius={12}
                            tint="#ffffff"
                            tintOpacity={0.06}
                            textColor="#e4e4e7"
                            lineColor="#a1a1aa"
                            baseColor="#3f3f46"
                            intensity={1}
                            idleIntensity={0.3}
                            glow={0.6}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/[0.1] font-semibold"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </SpecularButton>
                        )}
                      </div>

                      {/* Case Study Trigger Button with SpecularButton */}
                      <SpecularButton
                        size="sm"
                        radius={12}
                        tint="#8b5cf6"
                        tintOpacity={0.12}
                        textColor="#c084fc"
                        lineColor="#c084fc"
                        baseColor="#581c87"
                        intensity={1.1}
                        idleIntensity={0.4}
                        glow={0.7}
                        onClick={() => setSelectedProject(project)}
                        className="font-semibold group/btn border border-purple-500/25"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Read Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </SpecularButton>
                    </div>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
