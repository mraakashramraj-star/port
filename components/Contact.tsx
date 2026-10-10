"use client";

import React, { useState } from "react";
import {
  MapPin,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email format";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject";
    if (!formData.message.trim()) {
      errs.message = "Please write your message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const mailtoSubject = encodeURIComponent(`[Portfolio] ${formData.subject}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

      window.location.href = mailtoUrl;

      setStatusMessage({
        type: "success",
        text: "Opening your default email application with this message drafted. You can also email me directly at " + PERSONAL_INFO.email,
      });

      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
      }, 1500);
    } catch (err) {
      setStatusMessage({
        type: "error",
        text: "Could not open mail client automatically. Please copy the email address below to write directly.",
      });
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#07080b]/30 backdrop-blur-[1px] border-t border-white/[0.04]">
      {/* Background illumination */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-purple-500/15 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
            Have a Project or Opportunity in Mind?
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            I’m interested in connecting with recruiters, developers, and teams working on meaningful technology projects. Feel free to reach out for professional opportunities, collaboration, or a conversation about software development.
          </p>
        </div>

        {/* Contact Layout: Info Column + Form Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0c0e14]/90 border border-blue-500/20 hover:border-blue-500/40 shadow-2xl hover:shadow-[0_12px_45px_rgba(59,130,246,0.12)] transition-all duration-300 space-y-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Contact Information
              </h3>

              {/* Email row with quick copy button */}
              <div className="p-4 rounded-2xl bg-blue-500/[0.05] border border-blue-500/20 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-300 block font-semibold">
                  Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-blue-300 transition truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 hover:text-white border border-blue-500/30 transition flex items-center gap-1 text-xs"
                    aria-label="Copy Email"
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] font-mono text-emerald-400 pt-1">
                    ✓ Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location row */}
              <div className="p-4 rounded-2xl bg-emerald-500/[0.05] border border-emerald-500/20 space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 block font-semibold">
                  Location
                </span>
                <p className="text-sm font-semibold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </p>
              </div>

              {/* Verified Profiles */}
              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300 block font-semibold">
                  Profiles & Repositories
                </span>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-purple-500/[0.05] hover:bg-purple-500/[0.12] border border-purple-500/20 hover:border-purple-500/40 text-xs font-medium text-purple-200 hover:text-white transition group shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-purple-400" />
                      <span>github.com/mraakashramraj-star</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-purple-400 group-hover:text-white transition" />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-blue-500/[0.05] hover:bg-blue-500/[0.12] border border-blue-500/20 hover:border-blue-500/40 text-xs font-medium text-blue-200 hover:text-white transition group shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                      <span>linkedin.com/in/aakash-m-r-4080942a2</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0e14]/90 border border-purple-500/20 hover:border-purple-500/40 shadow-2xl hover:shadow-[0_12px_45px_rgba(168,85,247,0.12)] transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6 font-heading flex items-center gap-2">
                <Send className="w-4 h-4 text-purple-400" />
                <span>Send a Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-zinc-300 mb-2">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      disabled={isSubmitting}
                      className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition ${
                        errors.name ? "border-rose-500" : "border-white/[0.1]"
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-400 mt-1.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-zinc-300 mb-2">
                      Email Address <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      disabled={isSubmitting}
                      className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition ${
                        errors.email ? "border-rose-500" : "border-white/[0.1]"
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-400 mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-zinc-300 mb-2">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Engineering Opportunity / Project Discussion"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: "" });
                    }}
                    disabled={isSubmitting}
                    className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition ${
                      errors.subject ? "border-rose-500" : "border-white/[0.1]"
                    }`}
                  />
                  {errors.subject && <p className="text-[11px] text-rose-400 mt-1.5">{errors.subject}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-zinc-300 mb-2">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Provide details about your inquiry, position requirements, or collaboration goals..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    disabled={isSubmitting}
                    className={`w-full bg-white/[0.03] border rounded-xl p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 resize-none transition ${
                      errors.message ? "border-rose-500" : "border-white/[0.1]"
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-400 mt-1.5">{errors.message}</p>}
                </div>

                {/* Status Message Feedback */}
                {statusMessage && (
                  <div
                    className={`p-4 rounded-xl text-xs flex items-start gap-2.5 ${
                      statusMessage.type === "success"
                        ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-200"
                        : "bg-rose-500/15 border border-rose-500/30 text-rose-200"
                    }`}
                  >
                    {statusMessage.type === "success" ? (
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="leading-relaxed">{statusMessage.text}</p>
                  </div>
                )}

                {/* Submit Button (Vibrant Gradient CTA) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-95 disabled:opacity-60 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Drafting Message..." : "Submit Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
