import { MapPin, Mail, Phone, ExternalLink, GraduationCap, CheckCircle2, HeartHandshake, Compass, Rocket } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (7 cols): Background Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                ENGINEERING PERSPECTIVE
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
                About Narmatha M P
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                I am a third-year Computer Science Engineering student with an engineering mindset anchored in frontend excellence and connected systems. Rather than viewing the frontend as merely skin-deep styling, I treat the client as the primary orchestrator of user experience, data state, and system feedback.
              </p>
              <p>
                Through my internships at <strong className="text-white">Wikpolt Softwares</strong>, <strong className="text-white">Zetamind Technologies</strong>, and <strong className="text-white">Cognifyz Technologies</strong>, I learned how real products are built, iterated, and deployed. I bridged Figma design specifications directly into clean, performant React components without sacrificing fidelity or accessibility.
              </p>
              <p>
                Outside of classes and code repositories, I serve as the <strong className="text-white">IEEE Student Branch Secretary</strong> and actively represent tech communities as a Campus Ambassador for <strong className="text-white">E-Cell IIT Bombay</strong> and <strong className="text-white">GeeksforGeeks</strong>. I love environments where engineers take ownership, communicate clearly, and ship software that solves practical human problems.
              </p>
            </div>

            {/* Quick Badges in Glass Panels */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="glass-panel p-4 rounded-2xl border border-white/[0.08]">
                <div className="text-[11px] font-mono text-slate-400">Current Base</div>
                <div className="text-sm font-bold text-white mt-1">Nagercoil, Tamil Nadu</div>
                <div className="text-[11px] text-slate-400 mt-0.5">India · Pin 629901</div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-white/[0.08]">
                <div className="text-[11px] font-mono text-slate-400">Notice Period</div>
                <div className="text-sm font-bold text-emerald-400 mt-1">Immediate Joiner</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Full-Time / Intern</div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-white/[0.08] col-span-2 sm:col-span-1">
                <div className="text-[11px] font-mono text-slate-400">Preferred Work Model</div>
                <div className="text-sm font-bold text-blue-400 mt-1">Remote / Hybrid</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Open to Relocation</div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Recruiter FAQ / Fast Answers */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
              <Compass className="w-4 h-4 text-blue-400" />
              Frequently Asked by Technical Recruiters
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="glass-panel rounded-2xl p-5 space-y-2 border border-white/[0.08]">
                <div className="font-bold text-white font-display">What roles is Narmatha best suited for?</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Full Stack Developer, Frontend Software Engineer (React / TypeScript), and UI/UX Engineer roles where understanding both the interface layer and backend APIs is essential.
                </p>
              </div>

              <div className="glass-panel rounded-2xl p-5 space-y-2 border border-white/[0.08]">
                <div className="font-bold text-white font-display">What is her availability and notice timeline?</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Available immediately for remote and hybrid internships, as well as full-time graduate opportunities with college flexibility.
                </p>
              </div>

              <div className="glass-panel rounded-2xl p-5 space-y-2 border border-white/[0.08]">
                <div className="font-bold text-white font-display">How does she ramp up on unfamiliar technologies?</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Demonstrated fast uptake by architecting time-series pipelines in TimescaleDB and integrating Claude LLM APIs in NeoPulse alongside regular React web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
