"use client";

import React from "react";
import {
  HeartPulse,
  Calendar,
  Clock,
  Sparkles,
  Dumbbell,
  CheckCircle2,
} from "lucide-react";

const ECONSULT_SCREENSHOTS = {
  dashboard: {
    src: "/projects/econsult-ai/dashboard.png",
    name: "Dashboard",
    tagline: "Public Feedback Overview",
    badge: "Live View",
  },
  comments: {
    src: "/projects/econsult-ai/comments.png",
    name: "Comments",
    tagline: "CSV / Excel Ingestion",
    badge: "Upload",
  },
  analytics: {
    src: "/projects/econsult-ai/analytics.png",
    name: "Analytics",
    tagline: "Sentiment & RoBERTa Confidence",
    badge: "NLP Pipeline",
  },
  reports: {
    src: "/projects/econsult-ai/reports.png",
    name: "Reports",
    tagline: "Multi-Format Report Export",
    badge: "Export",
  },
} as const;

type EConsultTab = keyof typeof ECONSULT_SCREENSHOTS;

export function EConsultPreview() {
  const [activeTab, setActiveTab] = React.useState<EConsultTab>("dashboard");
  const current = ECONSULT_SCREENSHOTS[activeTab];

  return (
    <div className="w-full h-full bg-[#0a0c12] rounded-2xl flex flex-col font-sans border border-white/10 shadow-2xl overflow-hidden relative group select-none">
      {/* Top Browser / Window Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-white/[0.08] bg-[#0d0f18]/95 backdrop-blur-md shrink-0 z-20">
        <div className="flex items-center gap-2 min-w-0">
          {/* macOS window dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 hover:bg-[#ff5f56] transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 hover:bg-[#ffbd2e] transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 hover:bg-[#27c93f] transition-colors" />
          </div>
          <span className="ml-1 text-[11px] font-mono text-zinc-300 truncate font-medium">
            eConsult AI • MCA21
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1 bg-black/50 p-0.5 rounded-lg border border-white/[0.08] shrink-0">
          {(Object.keys(ECONSULT_SCREENSHOTS) as EConsultTab[]).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTab(tab);
                }}
                className={`px-2 py-0.5 rounded-md text-[10px] font-medium transition-all ${
                  isActive
                    ? "bg-purple-600/40 text-purple-200 border border-purple-500/50 shadow-sm font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
                aria-label={`View ${ECONSULT_SCREENSHOTS[tab].name}`}
              >
                {ECONSULT_SCREENSHOTS[tab].name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Image Display Area */}
      <div className="relative flex-1 w-full min-h-0 overflow-hidden bg-[#07080b]">
        <img
          key={current.src}
          src={current.src}
          alt={current.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          loading="eager"
        />

        {/* Subtle gradient overlay at bottom for readability */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

        {/* Bottom Floating Metadata Pills */}
        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
          <span className="text-[10px] font-mono text-zinc-200 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 shadow-lg truncate max-w-[70%]">
            {current.tagline}
          </span>
          <span className="text-[10px] font-mono font-semibold text-emerald-300 bg-emerald-950/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-emerald-500/30 shadow-lg shrink-0">
            {current.badge}
          </span>
        </div>
      </div>
    </div>
  );
}

const SMART_OP_SCREENSHOTS = {
  dashboard: {
    src: "/projects/smart-op/dashboard.png",
    name: "Dashboard",
    tagline: "Outpatient Quick Actions & Stats",
    badge: "Active Counter",
  },
  appointments: {
    src: "/projects/smart-op/appointments.png",
    name: "Appointments",
    tagline: "Scheduled & Cancelled Visits",
    badge: "Booking",
  },
  doctors: {
    src: "/projects/smart-op/doctors.png",
    name: "Doctors",
    tagline: "Specialist Directory & Availability",
    badge: "11 Specialists",
  },
  profile: {
    src: "/projects/smart-op/profile.png",
    name: "Profile",
    tagline: "Patient Information Management",
    badge: "Records",
  },
} as const;

type SmartOPTab = keyof typeof SMART_OP_SCREENSHOTS;

export function SmartOPPreview() {
  const [activeTab, setActiveTab] = React.useState<SmartOPTab>("dashboard");
  const current = SMART_OP_SCREENSHOTS[activeTab];

  return (
    <div className="w-full h-full bg-[#0a0c12] rounded-2xl flex flex-col font-sans border border-white/10 shadow-2xl overflow-hidden relative group select-none">
      {/* Top Browser / Window Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-white/[0.08] bg-[#0d0f18]/95 backdrop-blur-md shrink-0 z-20">
        <div className="flex items-center gap-2 min-w-0">
          {/* macOS window dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 hover:bg-[#ff5f56] transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 hover:bg-[#ffbd2e] transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 hover:bg-[#27c93f] transition-colors" />
          </div>
          <span className="ml-1 text-[11px] font-mono text-zinc-300 truncate font-medium">
            Smart OP • Hospital Management
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1 bg-black/50 p-0.5 rounded-lg border border-white/[0.08] shrink-0">
          {(Object.keys(SMART_OP_SCREENSHOTS) as SmartOPTab[]).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTab(tab);
                }}
                className={`px-2 py-0.5 rounded-md text-[10px] font-medium transition-all ${
                  isActive
                    ? "bg-emerald-600/40 text-emerald-200 border border-emerald-500/50 shadow-sm font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
                aria-label={`View ${SMART_OP_SCREENSHOTS[tab].name}`}
              >
                {SMART_OP_SCREENSHOTS[tab].name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Image Display Area */}
      <div className="relative flex-1 w-full min-h-0 overflow-hidden bg-[#07080b]">
        <img
          key={current.src}
          src={current.src}
          alt={current.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          loading="eager"
        />

        {/* Subtle gradient overlay at bottom for readability */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

        {/* Bottom Floating Metadata Pills */}
        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
          <span className="text-[10px] font-mono text-zinc-200 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 shadow-lg truncate max-w-[70%]">
            {current.tagline}
          </span>
          <span className="text-[10px] font-mono font-semibold text-emerald-300 bg-emerald-950/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-emerald-500/30 shadow-lg shrink-0">
            {current.badge}
          </span>
        </div>
      </div>
    </div>
  );
}

export function CureConnectPreview() {
  return (
    <div className="w-full h-full bg-[#0a0c12] rounded-2xl flex flex-col font-sans border border-white/10 shadow-2xl overflow-hidden relative group select-none">
      {/* Top Browser / Window Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-white/[0.08] bg-[#0d0f18]/95 backdrop-blur-md shrink-0 z-20">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
          </div>
          <span className="ml-1 text-[11px] font-mono text-zinc-300 truncate font-medium">
            CureConnect • Appointment Booking
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-purple-300 bg-purple-950/70 px-2 py-0.5 rounded-md border border-purple-500/30">
          <span>Doctor Directory</span>
        </div>
      </div>

      {/* Main Image Display Area */}
      <div className="relative flex-1 w-full min-h-0 overflow-hidden bg-[#07080b]">
        <img
          src="/projects/cureconnect/dashboard.jpg"
          alt="CureConnect Healthcare Appointment System"
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          loading="eager"
        />

        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
          <span className="text-[10px] font-mono text-zinc-200 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 shadow-lg truncate max-w-[70%]">
            Specialist Discovery & Live Slots
          </span>
          <span className="text-[10px] font-mono font-semibold text-purple-300 bg-purple-950/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-purple-500/30 shadow-lg shrink-0">
            React App
          </span>
        </div>
      </div>
    </div>
  );
}

export function BatronPreview() {
  return (
    <div className="w-full h-full bg-[#0a0c12] rounded-2xl flex flex-col font-sans border border-white/10 shadow-2xl overflow-hidden relative group select-none">
      {/* Top Desktop Window Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-white/[0.08] bg-[#0d0f18]/95 backdrop-blur-md shrink-0 z-20">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
          </div>
          <span className="ml-1 text-[11px] font-mono text-zinc-300 truncate font-medium">
            BATRON Gym Client • v2.4.0 (Desktop)
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded-md border border-amber-500/30">
          <span>Membership Station</span>
        </div>
      </div>

      {/* Main Image Display Area */}
      <div className="relative flex-1 w-full min-h-0 overflow-hidden bg-[#07080b]">
        <img
          src="/projects/batron-gym/dashboard.jpg"
          alt="BATRON Gym Management System"
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          loading="eager"
        />

        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
          <span className="text-[10px] font-mono text-zinc-200 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 shadow-lg truncate max-w-[70%]">
            Active Members & Expiration Tracking
          </span>
          <span className="text-[10px] font-mono font-semibold text-amber-300 bg-amber-950/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-amber-500/30 shadow-lg shrink-0">
            Offline SQLite
          </span>
        </div>
      </div>
    </div>
  );
}

export function ProjectPreviewRouter({ projectId }: { projectId: string }) {
  switch (projectId) {
    case "econsult-ai":
      return <EConsultPreview />;
    case "smart-op-hospital":
      return <SmartOPPreview />;
    case "cureconnect":
      return <CureConnectPreview />;
    case "batron-gym":
      return <BatronPreview />;
    default:
      return <EConsultPreview />;
  }
}
