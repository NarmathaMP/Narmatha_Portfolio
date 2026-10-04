import { useState } from 'react';
import { Check, Copy, Mail, Phone, MapPin, Briefcase, Award, Zap, FileText, CheckCircle2, Share2, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface RecruiterDigestProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function RecruiterDigest({ onOpenResume, onOpenContact }: RecruiterDigestProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedBlurb, setCopiedBlurb] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const copyBlurb = () => {
    const blurb = `Candidate Forward: Narmatha M P (Full Stack / Frontend Developer). 3rd year B.E. CSE at DMI Engineering College. Core stack: React, FastAPI, TimescaleDB, Python. Has completed 3 internships (Wikpolt Softwares, Zetamind, Cognifyz) with hands-on work in responsive React apps and Figma design systems. Serves as IEEE Student Branch Secretary and E-Cell IIT Bombay Ambassador with 5+ national symposium awards. Immediate joiner. Portfolio & Resume: ${window.location.origin}`;
    navigator.clipboard.writeText(blurb);
    setCopiedBlurb(true);
    setTimeout(() => setCopiedBlurb(false), 2500);
  };

  return (
    <section className="py-12 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl glass-panel p-6 sm:p-8 md:p-10 shadow-2xl border border-white/[0.08] overflow-hidden">
          {/* Subtle accent gradient inside */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 blur-3xl pointer-events-none rounded-full" />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold tracking-wider">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                EXECUTIVE CANDIDATE DOSSIER
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 font-display">
                Fast-Track Hiring Factsheet
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                30-second structured brief for Technical Recruiters and Engineering Hiring Managers.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={copyBlurb}
                className="px-3.5 py-2 text-xs font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
                title="Copy ready-to-send Slack/Email summary to forward to your hiring manager"
              >
                {copiedBlurb ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-blue-400" />}
                <span>{copiedBlurb ? 'Forwarding Blurb Copied!' : 'Copy Summary for Hiring Manager'}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Full ATS Resume</span>
              </button>
            </div>
          </div>

          {/* 3-Column Dossier Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {/* Column 1: Core Value Pillars */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                High-ROI Candidate Pillars
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Frontend-First Full Stack
                  </div>
                  <p className="text-slate-400 leading-relaxed pl-5 text-[11px]">
                    Builds responsive React SPAs with strict TypeScript interfaces, seamlessly connecting to FastAPI and SQL/TimescaleDB data tiers.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    3 Completed Internships
                  </div>
                  <p className="text-slate-400 leading-relaxed pl-5 text-[11px]">
                    Proven team player across Wikpolt Softwares (React components), Zetamind (Figma wireframes), and Cognifyz (E-commerce UI).
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Leadership & Technical Rigor
                  </div>
                  <p className="text-slate-400 leading-relaxed pl-5 text-[11px]">
                    IEEE Student Branch Secretary, IIT Bombay Ambassador, and 5+ national technical symposium prize winner.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Competency Fit Matrix */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Role Competency Alignment
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">Full Stack Web Developer</span>
                    <span className="font-mono text-emerald-400 font-bold">96%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 w-[96%]" />
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    React 19, FastAPI, TimescaleDB, REST APIs
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">Frontend Software Engineer</span>
                    <span className="font-mono text-blue-400 font-bold">98%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 w-[98%]" />
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Component architectures, responsive CSS, WCAG AA
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">UI/UX Product Engineer</span>
                    <span className="font-mono text-purple-400 font-bold">94%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[94%]" />
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Figma design systems, wireframing, UX research
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Logistics & One-Click Contact */}
            <div className="space-y-3 bg-white/[0.02] p-4 sm:p-5 rounded-2xl border border-white/[0.06] flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Candidate Logistics
                </h3>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.05]">
                    <span className="text-slate-400">Notice Period:</span>
                    <span className="text-emerald-400 font-mono font-medium">Immediate Joiner</span>
                  </div>
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.05]">
                    <span className="text-slate-400">Location:</span>
                    <span className="text-slate-200">Nagercoil, Tamil Nadu</span>
                  </div>
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.05]">
                    <span className="text-slate-400">Relocation / Remote:</span>
                    <span className="text-white font-medium">Open to Remote & Hybrid</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Education:</span>
                    <span className="text-slate-200 font-mono text-[11px]">B.E. CSE (2024–2028)</span>
                  </div>
                </div>
              </div>

              {/* Quick Copy Contact Details */}
              <div className="pt-3 border-t border-white/[0.08] space-y-2">
                <div className="flex items-center justify-between text-xs bg-slate-950/80 p-2.5 rounded-xl border border-white/[0.08]">
                  <span className="font-mono text-slate-300 truncate max-w-[180px]">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                  <button
                    onClick={copyEmail}
                    className="p-1 text-slate-400 hover:text-white rounded"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs bg-slate-950/80 p-2.5 rounded-xl border border-white/[0.08]">
                  <span className="font-mono text-slate-300">
                    {PORTFOLIO_DATA.personal.phone}
                  </span>
                  <button
                    onClick={copyPhone}
                    className="p-1 text-slate-400 hover:text-white rounded"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
