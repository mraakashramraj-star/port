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

    // Form fallback: generate mailto URI to launch client mail compose with entered fields
    try {
      const mailtoSubject = encodeURIComponent(`[Portfolio] ${formData.subject}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Open user's default email client
      window.location.href = mailtoUrl;

      setStatusMessage({
        type: "success",
        text: "Opening your default email application with this message drafted. You can also email me directly at " + PERSONAL_INFO.email,
      });

      // Reset form after short delay
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
    <section id="contact" className="relative py-24 sm:py-32 bg-[#07080b]">
      {/* Background illumination */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-white" />
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
            <div className="p-8 rounded-3xl bg-[#0c0e14]/90 border border-white/[0.08] shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Contact Information
              </h3>

              {/* Email row with quick copy button */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-zinc-300 transition truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/[0.08] transition flex items-center gap-1 text-xs"
                    aria-label="Copy Email"
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] font-mono text-white pt-1">
                    ✓ Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location row */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Location
                </span>
                <p className="text-sm font-semibold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zinc-300" />
                  <span>{PERSONAL_INFO.location}</span>
                </p>
              </div>

              {/* Verified Profiles */}
              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Profiles & Repositories
                </span>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/[0.12] text-xs font-medium text-zinc-300 hover:text-white transition group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4" />
                      <span>github.com/mraakashramraj-star</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition" />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/[0.12] text-xs font-medium text-zinc-300 hover:text-white transition group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-zinc-300" />
                      <span>linkedin.com/in/aakash-m-r-4080942a2</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0e14]/90 border border-white/[0.08] shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 font-heading flex items-center gap-2">
                <Send className="w-4 h-4 text-white" />
                <span>Send a Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-zinc-300 mb-2">
                      Your Name <span className="text-white">*</span>
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
                      className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30 transition ${
                        errors.name ? "border-zinc-400" : "border-white/[0.1] focus:border-white/60"
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-zinc-300 mt-1.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-zinc-300 mb-2">
                      Email Address <span className="text-white">*</span>
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
                      className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30 transition ${
                        errors.email ? "border-zinc-400" : "border-white/[0.1] focus:border-white/60"
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-zinc-300 mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-zinc-300 mb-2">
                    Subject <span className="text-white">*</span>
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
                    className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30 transition ${
                      errors.subject ? "border-zinc-400" : "border-white/[0.1] focus:border-white/60"
                    }`}
                  />
                  {errors.subject && <p className="text-[11px] text-zinc-300 mt-1.5">{errors.subject}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-zinc-300 mb-2">
                    Message <span className="text-white">*</span>
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
                    className={`w-full bg-white/[0.03] border rounded-xl p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none transition ${
                      errors.message ? "border-zinc-400" : "border-white/[0.1] focus:border-white/60"
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-zinc-300 mt-1.5">{errors.message}</p>}
                </div>

                {/* Status Message Feedback */}
                {statusMessage && (
                  <div
                    className={`p-4 rounded-xl text-xs flex items-start gap-2.5 ${
                      statusMessage.type === "success"
                        ? "bg-white/[0.08] border border-white/20 text-white"
                        : "bg-white/[0.05] border border-white/10 text-zinc-300"
                    }`}
                  >
                    {statusMessage.type === "success" ? (
                      <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-zinc-300 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="leading-relaxed">{statusMessage.text}</p>
                  </div>
                )}

                {/* Submit Button (Solid White with Black Text) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-black bg-white hover:bg-zinc-200 rounded-xl shadow-lg shadow-white/10 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-white"
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
