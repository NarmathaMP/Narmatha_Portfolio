import { useState } from 'react';
import { ArrowDown, FileText, Mail, MapPin, Sparkles, CheckCircle2, Award, Terminal, Code2, Copy, Check, Briefcase, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onOpenResume, onOpenContact }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeAudience, setActiveAudience] = useState<'recruiter' | 'engineer' | 'design'>('recruiter');

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Dynamic Ambient Background Spotlights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/12 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-40 right-4 sm:right-20 w-[350px] h-[350px] bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-60 left-10 w-[300px] h-[300px] bg-emerald-500/8 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-inner text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-emerald-300 font-medium">Actively Seeking Full Stack & Frontend Roles</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 hidden sm:inline font-mono">Batch 2024–2028</span>
            </div>

            {/* Main Headline with High-End Gradient Mask */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] font-display text-white"
              style={{ textWrap: 'balance' }}
            >
              Crafting responsive web systems with{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                full-stack precision.
              </span>
            </h1>

            {/* Profile Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              {PORTFOLIO_DATA.personal.profileBio}
            </p>

            {/* Perspective Filter Tabs: Cater specifically to HR, Tech Leads, and Designers */}
            <div className="p-1 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-md inline-flex items-center gap-1 text-xs">
              <span className="text-slate-500 px-2 py-1 font-mono text-[11px] hidden sm:inline">Focus:</span>
              <button
                onClick={() => setActiveAudience('recruiter')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeAudience === 'recruiter'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                💼 HR & Recruiter View
              </button>
              <button
                onClick={() => setActiveAudience('engineer')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeAudience === 'engineer'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                ⚡ Tech Lead View
              </button>
              <button
                onClick={() => setActiveAudience('design')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeAudience === 'design'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                🎨 Product & UX View
              </button>
            </div>

            {/* Dynamic Perspective Callout */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300 leading-relaxed">
              {activeAudience === 'recruiter' && (
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Why Narmatha: </strong> 3 completed internships (Web Dev & UI/UX), proven executive leadership as IEEE Secretary & IIT Bombay Ambassador, 5+ symposium awards, ready for immediate impact.
                  </span>
                </div>
              )}
              {activeAudience === 'engineer' && (
                <div className="flex items-start gap-2.5">
                  <Code2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Architectural Rigor: </strong> Builds type-safe React interfaces, async FastAPI endpoints, TimescaleDB irregular time-series telemetry pipelines, and LLM narrative integration (Claude API).
                  </span>
                </div>
              )}
              {activeAudience === 'design' && (
                <div className="flex items-start gap-2.5">
                  <Eye className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Design & Usability: </strong> Experienced in Figma interactive wireframing, e-commerce conversion layouts, information hierarchy, and user research.
                  </span>
                </div>
              )}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Explore Interactive Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-3 bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 text-xs sm:text-sm font-semibold rounded-xl border border-white/[0.1] hover:border-slate-500 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View ATS Resume</span>
              </button>

              <button
                onClick={onOpenContact}
                className="px-4 py-3 bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-white text-xs sm:text-sm font-medium rounded-xl border border-white/[0.08] transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Quick Contact</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08] max-w-lg">
              <div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums tracking-tight">
                  3 Internships
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Web & UI/UX Product Work
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-blue-400 tabular-nums tracking-tight">
                  5+ Awards
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  National Symposia & Expos
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums tracking-tight">
                  TimescaleDB
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Time-Series & AI Systems
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Interactive Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-blue-500/30 via-indigo-500/20 to-transparent blur-xl opacity-80" />

              {/* Main Profile Card */}
              <div className="relative rounded-3xl glass-panel p-4 sm:p-5 shadow-2xl space-y-4">
                {/* Photo container */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 relative border border-white/[0.1] group">
                  {!imageError ? (
                    <img
                      src="/src/assets/images/avatar_narmatha_portrait_1791019687353.jpg"
                      alt="Narmatha M P — Full Stack Developer"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-950">
                      <div className="w-16 h-16 rounded-full bg-blue-900/40 border border-blue-700 flex items-center justify-center mb-3 text-blue-400 font-bold text-2xl">
                        NM
                      </div>
                      <div className="text-base font-bold text-white">Narmatha M P</div>
                      <div className="text-xs text-slate-400 mt-1">Full Stack Developer</div>
                    </div>
                  )}

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent pointer-events-none" />

                  {/* Floating status tag */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#07090e]/85 backdrop-blur-md border border-white/[0.1] text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available Immediately
                  </div>

                  {/* On-image Candidate Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#090d16]/90 backdrop-blur-md border border-white/[0.1] text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">Narmatha M P</span>
                      <span className="text-[11px] font-mono text-blue-400">Nagercoil, India</span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5">
                      B.E. Computer Science · DMI Engineering College
                    </div>
                  </div>
                </div>

                {/* Quick Info & Core Stack Chips */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>PRIMARY TECHNICAL ARSENAL</span>
                    <span className="text-blue-400">Verified</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {['React 19', 'FastAPI', 'TimescaleDB', 'Python', 'TypeScript', 'Claude API', 'Tailwind', 'Figma'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-200 font-mono text-[11px] hover:border-blue-500/40 transition-colors"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  {/* One-Click Direct Copy Actions for HR */}
                  <div className="pt-2 border-t border-white/[0.08] flex items-center gap-2">
                    <button
                      onClick={copyEmail}
                      className="flex-1 py-2 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                      <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                    </button>

                    <button
                      onClick={onOpenResume}
                      className="flex-1 py-2 px-3 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-xs font-medium text-blue-300 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-blue-400" />
                      <span>Instant Resume</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
