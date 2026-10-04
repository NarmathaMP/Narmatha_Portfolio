import { useState } from 'react';
import { Printer, Copy, Check, ExternalLink, Mail, Phone, MapPin, Sparkles, Github, Linkedin, Play, ChevronDown, ChevronUp, FileDown, Layers, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import MedNexusDemo from './demos/MedNexusDemo';
import NeoPulseDemo from './demos/NeoPulseDemo';
import DeepfakeDemo from './demos/DeepfakeDemo';
import StudyBuddyDemo from './demos/StudyBuddyDemo';
import WhatsAppDemo from './demos/WhatsAppDemo';

interface ResumeModelViewProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

export default function ResumeModelView({ onSelectProject, onOpenContact }: ResumeModelViewProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const toggleDemo = (projectId: string) => {
    setActiveDemo((prev) => (prev === projectId ? null : projectId));
  };

  const handlePrint = () => {
    window.print();
  };

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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      {/* Quick Action Top Ribbon */}
      <div className="no-print flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-white/[0.08] gap-3">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>RESUME MODEL VIEW · ATS COMPLIANT FORMAT</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-500/20"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Main Resume Sheet Container */}
      <article className="glass-panel rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/[0.1] space-y-8">
        {/* Header Lockup (Exact match to resume screenshot) */}
        <header className="text-center pb-6 border-b border-white/[0.1]">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white uppercase">
            NARMATHA M P
          </h1>
          <p className="text-base sm:text-lg font-semibold text-blue-400 mt-1.5 font-display tracking-tight">
            Full Stack Developer · Frontend Engineer
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-400 mt-3 font-mono">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              Puravasery, Nagercoil – 629901
            </span>
            <span aria-hidden="true" className="text-slate-600">|</span>
            <a
              href="tel:+919385942895"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              +91-9385942895
            </a>
            <span aria-hidden="true" className="text-slate-600">|</span>
            <a
              href="mailto:mpnarmatha18@gmail.com"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              mpnarmatha18@gmail.com
            </a>
            <span aria-hidden="true" className="text-slate-600">|</span>
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline font-semibold"
            >
              GitHub
            </a>
            <span aria-hidden="true" className="text-slate-600">|</span>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* Section 1: PROFILE */}
        <section>
          <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-white/[0.1] pb-1.5 mb-3 font-mono flex items-center justify-between">
            <span>PROFILE</span>
            <span className="text-[11px] font-normal text-emerald-400">Open to Full Stack & Frontend Roles</span>
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300 text-justify">
            {PORTFOLIO_DATA.personal.profileBio}
          </p>
        </section>

        {/* Section 2: EDUCATION */}
        <section>
          <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-white/[0.1] pb-1.5 mb-3 font-mono">
            EDUCATION
          </h2>
          <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1 text-xs sm:text-sm">
            <div>
              <span className="font-bold text-white">Bachelor of Engineering, Computer Science Engineering</span>
              <div className="text-slate-400 mt-0.5">DMI Engineering College, Aralvaimozhi</div>
            </div>
            <span className="font-mono text-blue-400 font-semibold text-xs sm:text-sm whitespace-nowrap">
              2024 – 2028
            </span>
          </div>
        </section>

        {/* Section 3: TECHNICAL SKILLS */}
        <section>
          <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-white/[0.1] pb-1.5 mb-3 font-mono">
            TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-slate-300">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-white min-w-[130px]">Frontend:</span>
              <span className="text-slate-300">HTML5, CSS3, JavaScript, React, Responsive Design, Tailwind CSS</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-white min-w-[130px]">Backend & APIs:</span>
              <span className="text-slate-300">FastAPI, REST APIs, Claude API integration, Express/Node.js</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-white min-w-[130px]">Database:</span>
              <span className="text-slate-300">TimescaleDB, shared database and API architecture, PostgreSQL</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-white min-w-[130px]">Languages:</span>
              <span className="text-slate-300">Python, C, JavaScript, TypeScript</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-white min-w-[130px]">Tools:</span>
              <span className="text-slate-300">Git, GitHub, VS Code, Postman, Vite</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-white min-w-[130px]">Design:</span>
              <span className="text-slate-300">Figma, Canva, Wireframing, Prototyping</span>
            </div>
          </div>
        </section>

        {/* Section 4: PROJECTS */}
        <section>
          <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-white/[0.1] pb-1.5 mb-4 font-mono flex items-center justify-between">
            <span>PROJECTS</span>
            <span className="text-[11px] font-normal text-slate-400 hidden sm:inline">Click demo button to test live sandboxes</span>
          </h2>

          <div className="space-y-6">
            {/* Project 1: Med NeXus */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm sm:text-base">
                    Med NeXus — Full Stack Healthcare Platform
                  </span>
                  <span className="text-xs italic text-blue-400 font-mono">In progress</span>
                </div>
                <button
                  onClick={() => toggleDemo('med-nexus')}
                  className="no-print text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 self-start sm:self-auto py-1 px-2.5 rounded bg-blue-600/10 border border-blue-500/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeDemo === 'med-nexus' ? 'Close Sandbox' : 'Try Live Sandbox'}</span>
                </button>
              </div>

              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-300 space-y-1">
                <li>
                  Building a connected platform with separate purpose-built portals for citizens and hospital admins, backed by one shared database and API layer.
                </li>
                <li>
                  Engineered role-based access control (RBAC) ensuring patient medical records remain confidential while emergency triage teams have rapid lookup access.
                </li>
              </ul>

              {/* In-Line Live Sandbox Accordion */}
              {activeDemo === 'med-nexus' && (
                <div className="no-print pt-3">
                  <MedNexusDemo />
                </div>
              )}
            </div>

            {/* Project 2: NeoPulse */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm sm:text-base">
                    NeoPulse — AI-Powered ICU Early-Warning System
                  </span>
                  <span className="text-xs italic text-emerald-400 font-mono">In progress</span>
                </div>
                <button
                  onClick={() => toggleDemo('neopulse')}
                  className="no-print text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 self-start sm:self-auto py-1 px-2.5 rounded bg-emerald-600/10 border border-emerald-500/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeDemo === 'neopulse' ? 'Close Sandbox' : 'Try Live Sandbox'}</span>
                </button>
              </div>

              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-300 space-y-1">
                <li>
                  Built a missingness-aware time-series pipeline (Python, TimescaleDB) that raises explainable early-warning alerts from irregular ICU telemetry before critical events.
                </li>
                <li>
                  Integrated an LLM narrative layer (Claude API) and developed a real-time React + FastAPI dashboard with counterfactual replay.
                </li>
              </ul>

              {/* In-Line Live Sandbox Accordion */}
              {activeDemo === 'neopulse' && (
                <div className="no-print pt-3">
                  <NeoPulseDemo />
                </div>
              )}
            </div>

            {/* Project 3: Study Buddy */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm sm:text-base">
                    Study Buddy — AI Learning Assistant
                  </span>
                  <span className="text-xs italic text-purple-400 font-mono">In progress</span>
                </div>
                <button
                  onClick={() => toggleDemo('study-buddy')}
                  className="no-print text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 self-start sm:self-auto py-1 px-2.5 rounded bg-purple-600/10 border border-purple-500/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeDemo === 'study-buddy' ? 'Close Sandbox' : 'Try Live Sandbox'}</span>
                </button>
              </div>

              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-300 space-y-1">
                <li>
                  Developing an AI chatbot for students, working professionals and lifelong learners with adaptive concept breakdown and knowledge verification roadmaps.
                </li>
              </ul>

              {activeDemo === 'study-buddy' && (
                <div className="no-print pt-3">
                  <StudyBuddyDemo />
                </div>
              )}
            </div>

            {/* Project 4: Deepfake Detection Website */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm sm:text-base">
                    Deepfake Detection Website — Frontend Development + UI/UX
                  </span>
                </div>
                <button
                  onClick={() => toggleDemo('deepfake')}
                  className="no-print text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 self-start sm:self-auto py-1 px-2.5 rounded bg-cyan-600/10 border border-cyan-500/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeDemo === 'deepfake' ? 'Close Sandbox' : 'Try Live Sandbox'}</span>
                </button>
              </div>

              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-300 space-y-1">
                <li>
                  Designed and built a user-friendly web interface for analyzing images, video and audio to detect deepfakes.
                </li>
              </ul>

              {activeDemo === 'deepfake' && (
                <div className="no-print pt-3">
                  <DeepfakeDemo />
                </div>
              )}
            </div>

            {/* Project 5: WhatsApp UI Redesign */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm sm:text-base">
                    WhatsApp UI Redesign — UI/UX (Figma)
                  </span>
                </div>
                <button
                  onClick={() => toggleDemo('whatsapp')}
                  className="no-print text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 self-start sm:self-auto py-1 px-2.5 rounded bg-emerald-600/10 border border-emerald-500/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeDemo === 'whatsapp' ? 'Close Sandbox' : 'Try Live Sandbox'}</span>
                </button>
              </div>

              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-300 space-y-1">
                <li>
                  Redesigned navigation, chat layout and visual hierarchy for a cleaner user experience.
                </li>
              </ul>

              {activeDemo === 'whatsapp' && (
                <div className="no-print pt-3">
                  <WhatsAppDemo />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 5: INTERNSHIP EXPERIENCE */}
        <section>
          <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-white/[0.1] pb-1.5 mb-3 font-mono">
            INTERNSHIP EXPERIENCE
          </h2>

          <div className="space-y-4 text-xs sm:text-sm">
            <div>
              <div className="font-bold text-white">Web Development Intern — Wikpolt Softwares</div>
              <ul className="list-disc pl-5 mt-1 text-slate-300 space-y-0.5">
                <li>Collaborated with a development team to build responsive React components, bridging design intent and working code.</li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-white">UI/UX Design Intern — Zetamind Technologies</div>
              <ul className="list-disc pl-5 mt-1 text-slate-300 space-y-0.5">
                <li>Designed wireframes and interactive prototypes in Figma, improving usability and interface clarity.</li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-white">UI/UX Design Intern — Cognifyz Technologies</div>
              <ul className="list-disc pl-5 mt-1 text-slate-300 space-y-0.5">
                <li>Delivered UI concepts for an e-commerce product page and poster designs, translating briefs into polished visuals.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: CERTIFICATIONS */}
        <section>
          <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-white/[0.1] pb-1.5 mb-3 font-mono">
            CERTIFICATIONS
          </h2>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-300 space-y-1">
            <li>Full-Stack Web Development</li>
            <li>Advanced Python</li>
            <li>UI/UX Designing</li>
          </ul>
        </section>

        {/* Section 7: ACHIEVEMENTS & LEADERSHIP */}
        <section>
          <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-white/[0.1] pb-1.5 mb-3 font-mono">
            ACHIEVEMENTS & LEADERSHIP
          </h2>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-300 space-y-1.5">
            <li>IEEE Student Branch Secretary, DMI Engineering College</li>
            <li>Campus Ambassador, E-Cell IIT Bombay | Campus Mantri, GeeksforGeeks (current)</li>
            <li>1st Prize, Paper Presentation: PET Engineering College, Valliyoor (National-level Technical Symposium)</li>
            <li>1st Prize, Paper Presentation: V.V College of Engineering, Thisayanvilai (National-level Technical Symposium)</li>
            <li>2nd Prize, IEEE Project Expo: St. Xavier's Catholic College, Chunkankadai</li>
            <li>2nd Prize, "SHATTER: The Limitless Launch" pitch contest: Arunachala College of Engineering for Women</li>
            <li>3rd Prize, Paper Presentation: St. Xavier's Catholic College, Chunkankadai</li>
          </ul>
        </section>

        {/* Bottom CTA for Recruiters */}
        <div className="no-print pt-6 border-t border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Looking for a motivated full stack or frontend engineer? Let's connect.
          </div>
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/25 transition-all"
          >
            Contact / Schedule Interview
          </button>
        </div>
      </article>
    </div>
  );
}
