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

export function EConsultPreview() {
  return (
    <div className="w-full h-full bg-[#0c0d12] rounded-2xl p-4 sm:p-5 flex flex-col justify-between font-sans border border-white/10 shadow-2xl overflow-hidden relative group">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-400" />
          <span className="ml-2 text-[11px] font-mono text-zinc-400">econsult-ai-dashboard</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-white bg-white/[0.08] px-2.5 py-0.5 rounded-full border border-white/15">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          FastAPI Online
        </div>
      </div>

      {/* Main Preview Dashboard Body */}
      <div className="py-3 space-y-3">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-2.5">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Sentiment</span>
            <span className="text-sm sm:text-base font-bold text-white font-mono">88.4% Pos</span>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-2.5">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Analyzed</span>
            <span className="text-sm sm:text-base font-bold text-zinc-200 font-mono">1,420 logs</span>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-2.5">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Model</span>
            <span className="text-sm sm:text-base font-bold text-zinc-300 font-mono">HF RoBERTa</span>
          </div>
        </div>

        {/* Live consultation sentiment bar (Monochrome) */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-zinc-200 font-medium">Polarity Distribution</span>
            <span className="text-zinc-400 font-mono">Confidence: 0.96</span>
          </div>
          <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden flex">
            <div className="h-full bg-white w-[68%]" title="Positive 68%" />
            <div className="h-full bg-zinc-400 w-[22%]" title="Neutral 22%" />
            <div className="h-full bg-zinc-600 w-[10%]" title="Negative 10%" />
          </div>
          <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono pt-1">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-white" /> Positive (68%)</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-zinc-400" /> Neutral (22%)</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-zinc-600" /> Negative (10%)</span>
          </div>
        </div>

        {/* Sample text classification pill */}
        <div className="bg-white/[0.03] border border-white/[0.1] rounded-xl p-2.5 flex items-center justify-between">
          <div className="truncate pr-2">
            <span className="text-[11px] text-zinc-300 block truncate font-sans">
              "The doctor was extremely attentive and explained the prescription with immense clarity."
            </span>
          </div>
          <span className="text-[10px] font-semibold text-white bg-white/10 px-2 py-0.5 rounded border border-white/20 whitespace-nowrap">
            POS +0.94
          </span>
        </div>
      </div>

      {/* Word-Cloud Keywords Bar */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400">
        <span className="flex items-center gap-1 font-mono text-[10px] text-zinc-300">
          <Sparkles className="w-3 h-3 text-white" /> Keywords:
        </span>
        <div className="flex gap-1.5 overflow-hidden">
          <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[10px] text-zinc-300">prompt</span>
          <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[10px] text-zinc-300">caring</span>
          <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[10px] text-zinc-300">effective</span>
        </div>
      </div>
    </div>
  );
}

export function SmartOPPreview() {
  return (
    <div className="w-full h-full bg-[#0c0d12] rounded-2xl p-4 sm:p-5 flex flex-col justify-between font-sans border border-white/10 shadow-2xl overflow-hidden relative group">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-400" />
          <span className="ml-2 text-[11px] font-mono text-zinc-400">smart-op-hospital-system</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-white bg-white/[0.08] px-2.5 py-0.5 rounded-full border border-white/15">
          <HeartPulse className="w-3 h-3 text-white" /> Live Clinic
        </div>
      </div>

      {/* Main Preview Dashboard Body */}
      <div className="py-3 space-y-3">
        {/* Token Queue Status */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-white/[0.04] border border-white/15 rounded-xl p-3 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono">Current Token</span>
              <p className="text-xl sm:text-2xl font-black text-white font-mono">#OP-042</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-zinc-400 block">Room 3B</span>
              <span className="text-[11px] font-semibold text-zinc-200">Dr. K. Ramesh</span>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-3 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono">In Queue</span>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono">14 <span className="text-xs text-zinc-400 font-normal">waiting</span></p>
            </div>
            <Clock className="w-5 h-5 text-zinc-400" />
          </div>
        </div>

        {/* Patient Registration Flow Snippet */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-zinc-200 font-medium">Recent Outpatient Intake</span>
            <span className="text-zinc-400 font-mono text-[10px]">Auto-Synced</span>
          </div>

          <div className="space-y-1.5 font-mono text-[11px]">
            <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.03] border border-white/[0.06]">
              <span className="text-zinc-300 font-sans">#044 — V. Sundar (Age 45)</span>
              <span className="text-white text-[10px] bg-white/10 px-2 py-0.5 rounded border border-white/15">Triage Stage</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.03] border border-white/[0.06]">
              <span className="text-zinc-300 font-sans">#043 — M. Kavitha (Age 29)</span>
              <span className="text-zinc-300 text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10">Vitals Check</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400">
        <span className="text-[10px]">MySQL DB Engine • Sub-second response</span>
        <span className="text-white font-mono text-[10px]">Zero Paperwork</span>
      </div>
    </div>
  );
}

export function CureConnectPreview() {
  return (
    <div className="w-full h-full bg-[#0c0d12] rounded-2xl p-4 sm:p-5 flex flex-col justify-between font-sans border border-white/10 shadow-2xl overflow-hidden relative group">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-400" />
          <span className="ml-2 text-[11px] font-mono text-zinc-400">cureconnect-portal</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-white bg-white/[0.08] px-2.5 py-0.5 rounded-full border border-white/15">
          <Calendar className="w-3 h-3 text-white" /> Booking Engine
        </div>
      </div>

      {/* Main Preview Dashboard Body */}
      <div className="py-3 space-y-3">
        {/* Doctor Specialist Card */}
        <div className="bg-white/[0.04] border border-white/15 rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-xs">
              DR
            </div>
            <div>
              <p className="text-xs font-bold text-white">Dr. Sarah Alston, MD</p>
              <p className="text-[10px] text-zinc-400">Senior Neurologist & Consultant</p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-white bg-white/10 px-2 py-0.5 rounded border border-white/20">
            Available
          </span>
        </div>

        {/* Time Slot Picker Preview */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-zinc-200 font-medium">Select Consultation Slot</span>
            <span className="text-zinc-400 text-[10px]">Today, 14:00 - 18:00</span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-mono">
            <div className="p-1.5 rounded bg-white/[0.02] text-zinc-600 line-through border border-white/[0.04]">02:00 PM</div>
            <div className="p-1.5 rounded bg-white text-black font-bold shadow-md">02:30 PM</div>
            <div className="p-1.5 rounded bg-white/[0.04] text-zinc-200 border border-white/[0.08] hover:border-white/30">03:00 PM</div>
            <div className="p-1.5 rounded bg-white/[0.04] text-zinc-200 border border-white/[0.08] hover:border-white/30">03:30 PM</div>
          </div>
        </div>

        {/* Confirmation banner */}
        <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/15 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
          <span className="text-[11px] text-zinc-200 truncate">Instant SMS & Email appointment reminder activated</span>
        </div>
      </div>

      {/* Footer bar */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400">
        <span className="text-[10px]">React Component Hierarchy</span>
        <span className="text-white font-mono text-[10px]">REST Integration</span>
      </div>
    </div>
  );
}

export function BatronPreview() {
  return (
    <div className="w-full h-full bg-[#0c0d12] rounded-2xl p-4 sm:p-5 flex flex-col justify-between font-sans border border-white/10 shadow-2xl overflow-hidden relative group">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-400" />
          <span className="ml-2 text-[11px] font-mono text-zinc-400">BATRON-Desktop-Client.exe</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-white bg-white/[0.08] px-2.5 py-0.5 rounded-full border border-white/15">
          <Dumbbell className="w-3 h-3 text-white" /> Gym Station
        </div>
      </div>

      {/* Main Preview Dashboard Body */}
      <div className="py-3 space-y-3">
        {/* Active Member Status Overview */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-white/[0.04] border border-white/15 rounded-xl p-2.5">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Active</span>
            <span className="text-sm sm:text-base font-bold text-white font-mono">184</span>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-2.5">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Due Soon</span>
            <span className="text-sm sm:text-base font-bold text-zinc-200 font-mono">12 members</span>
          </div>
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-2.5">
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Expired</span>
            <span className="text-sm sm:text-base font-bold text-zinc-400 font-mono">8 flagged</span>
          </div>
        </div>

        {/* Member Table Snippet */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 space-y-1.5 font-mono text-[11px]">
          <div className="flex items-center justify-between text-zinc-400 text-[10px] uppercase pb-1 border-b border-white/[0.06]">
            <span>Member</span>
            <span>Plan</span>
            <span>Status</span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-white/[0.03]">
            <span className="text-zinc-200 font-sans">Alex Kumar (#092)</span>
            <span className="text-zinc-400 text-[10px]">Annual Pro</span>
            <span className="text-white text-[10px] bg-white/10 px-2 py-0.5 rounded border border-white/20">Active</span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-white/[0.03]">
            <span className="text-zinc-200 font-sans">Rajesh S. (#114)</span>
            <span className="text-zinc-400 text-[10px]">Quarterly</span>
            <span className="text-zinc-300 text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10">Expires in 2d</span>
          </div>

          <div className="flex items-center justify-between py-1">
            <span className="text-zinc-200 font-sans">M. Vignesh (#077)</span>
            <span className="text-zinc-400 text-[10px]">Monthly</span>
            <span className="text-zinc-500 text-[10px] bg-white/[0.02] px-2 py-0.5 rounded">Overdue</span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400">
        <span className="text-[10px]">Offline-First SQLite Storage</span>
        <span className="text-white font-mono text-[10px]">Instant Renewal Modal</span>
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
