import { useState, useEffect } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
NARMATHA M P
Full Stack Developer · Frontend Engineer
Puravasery, Nagercoil – 629901 | +91-9385942895 | mpnarmatha18@gmail.com | github.com/NarmathaMP | linkedin.com/in/narmatha-m-p

PROFILE
Third-year Computer Science Engineering student with a frontend-first approach to full-stack development. Experienced in building responsive React interfaces and connecting them to API and database layers, with hands-on work across web development and UI/UX internships. Currently building multi-portal and AI-powered applications. Quick learner who enjoys shipping clean, usable products.

EDUCATION
Bachelor of Engineering, Computer Science Engineering (2024 – 2028)
DMI Engineering College, Aralvaimozhi

TECHNICAL SKILLS
Frontend: HTML5, CSS3, JavaScript, React, Responsive Design
Backend & APIs: FastAPI, REST APIs, Claude API integration
Database: TimescaleDB, shared database and API architecture
Languages: Python, C, JavaScript
Tools: Git, GitHub, VS Code
Design: Figma, Canva, Wireframing, Prototyping

PROJECTS
• Med NeXus — Full Stack Healthcare Platform (In progress)
  Building a connected platform with separate purpose-built portals for citizens and hospital admins, backed by one shared database and API layer.
• NeoPulse — AI-Powered ICU Early-Warning System (In progress)
  Built a missingness-aware time-series pipeline (Python, TimescaleDB) that raises explainable early-warning alerts from irregular ICU telemetry before critical events. Integrated an LLM narrative layer (Claude API) and developed a real-time React + FastAPI dashboard with counterfactual replay.
• Study Buddy — AI Learning Assistant (In progress)
  Developing an AI chatbot for students, working professionals and lifelong learners.
• Deepfake Detection Website — Frontend Development + UI/UX
  Designed and built a user-friendly web interface for analyzing images, video and audio to detect deepfakes.
• WhatsApp UI Redesign — UI/UX (Figma)
  Redesigned navigation, chat layout and visual hierarchy for a cleaner user experience.

INTERNSHIP EXPERIENCE
• Web Development Intern — Wikpolt Softwares
  Collaborated with a development team to build responsive React components, bridging design intent and working code.
• UI/UX Design Intern — Zetamind Technologies
  Designed wireframes and interactive prototypes in Figma, improving usability and interface clarity.
• UI/UX Design Intern — Cognifyz Technologies
  Delivered UI concepts for an e-commerce product page and poster designs, translating briefs into polished visuals.

CERTIFICATIONS
• Full-Stack Web Development
• Advanced Python
• UI/UX Designing

ACHIEVEMENTS & LEADERSHIP
• IEEE Student Branch Secretary, DMI Engineering College
• Campus Ambassador, E-Cell IIT Bombay | Campus Mantri, GeeksforGeeks (current)
• 1st Prize, Paper Presentation: PET Engineering College, Valliyoor (National-level Technical Symposium)
• 1st Prize, Paper Presentation: V.V College of Engineering, Thisayanvilai (National-level Technical Symposium)
• 2nd Prize, IEEE Project Expo: St. Xavier's Catholic College, Chunkankadai
• 2nd Prize, "SHATTER: The Limitless Launch" pitch contest: Arunachala College of Engineering for Women
• 3rd Prize, Paper Presentation: St. Xavier's Catholic College, Chunkankadai
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top action bar */}
        <div className="no-print flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-blue-400">ATS-COMPLIANT RESUME FORMAT</span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="text-xs text-slate-400 hidden sm:inline">Updated for 2026 Hiring Cycles</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied Text!' : 'Copy Plain Text'}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content (Styled to look pristine both on-screen and printed) */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans print:p-0 print:m-0 selection:bg-slate-200">
          {/* Header */}
          <div className="text-center pb-4 border-b border-slate-300">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase font-display">
              NARMATHA M P
            </h1>
            <p className="text-sm font-semibold text-slate-700 mt-1">
              Full Stack Developer · Frontend Engineer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-600 mt-2">
              <span>Puravasery, Nagercoil – 629901</span>
              <span>·</span>
              <a href="tel:+919385942895" className="hover:underline font-mono">
                +91-9385942895
              </a>
              <span>·</span>
              <a href="mailto:mpnarmatha18@gmail.com" className="hover:underline font-mono">
                mpnarmatha18@gmail.com
              </a>
              <span>·</span>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-800 hover:underline"
              >
                github.com/NarmathaMP
              </a>
              <span>·</span>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-800 hover:underline"
              >
                linkedin.com/in/narmatha-m-p
              </a>
            </div>
          </div>

          {/* Section: Profile */}
          <section className="mt-4 pt-2">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
              PROFILE
            </h2>
            <p className="text-xs leading-relaxed text-slate-800 text-justify">
              Third-year Computer Science Engineering student with a frontend-first approach to full-stack development. Experienced in building responsive React interfaces and connecting them to API and database layers, with hands-on work across web development and UI/UX internships. Currently building multi-portal and AI-powered applications. Quick learner who enjoys shipping clean, usable products.
            </p>
          </section>

          {/* Section: Education */}
          <section className="mt-4">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
              EDUCATION
            </h2>
            <div className="flex justify-between items-baseline text-xs">
              <div>
                <span className="font-bold text-slate-950">Bachelor of Engineering, Computer Science Engineering</span>
                <div className="text-slate-700">DMI Engineering College, Aralvaimozhi</div>
              </div>
              <span className="font-semibold text-slate-700 font-mono text-[11px]">2024 – 2028</span>
            </div>
          </section>

          {/* Section: Technical Skills */}
          <section className="mt-4">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 gap-1 text-xs text-slate-800">
              <div>
                <span className="font-semibold text-slate-950">Frontend: </span>
                HTML5, CSS3, JavaScript, React, Responsive Design
              </div>
              <div>
                <span className="font-semibold text-slate-950">Backend & APIs: </span>
                FastAPI, REST APIs, Claude API integration
              </div>
              <div>
                <span className="font-semibold text-slate-950">Database: </span>
                TimescaleDB, shared database and API architecture
              </div>
              <div>
                <span className="font-semibold text-slate-950">Languages: </span>
                Python, C, JavaScript
              </div>
              <div>
                <span className="font-semibold text-slate-950">Tools: </span>
                Git, GitHub, VS Code
              </div>
              <div>
                <span className="font-semibold text-slate-950">Design: </span>
                Figma, Canva, Wireframing, Prototyping
              </div>
            </div>
          </section>

          {/* Section: Projects */}
          <section className="mt-4">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
              PROJECTS
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-950">Med NeXus — Full Stack Healthcare Platform</span>
                  <span className="text-[11px] italic text-slate-600">In progress</span>
                </div>
                <ul className="list-disc pl-4 mt-1 text-slate-800 space-y-0.5">
                  <li>Building a connected platform with separate purpose-built portals for citizens and hospital admins, backed by one shared database and API layer.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-950">NeoPulse — AI-Powered ICU Early-Warning System</span>
                  <span className="text-[11px] italic text-slate-600">In progress</span>
                </div>
                <ul className="list-disc pl-4 mt-1 text-slate-800 space-y-0.5">
                  <li>Built a missingness-aware time-series pipeline (Python, TimescaleDB) that raises explainable early-warning alerts from irregular ICU telemetry before critical events.</li>
                  <li>Integrated an LLM narrative layer (Claude API) and developed a real-time React + FastAPI dashboard with counterfactual replay.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-950">Study Buddy — AI Learning Assistant</span>
                  <span className="text-[11px] italic text-slate-600">In progress</span>
                </div>
                <ul className="list-disc pl-4 mt-1 text-slate-800 space-y-0.5">
                  <li>Developing an AI chatbot for students, working professionals and lifelong learners.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-950">Deepfake Detection Website — Frontend Development + UI/UX</span>
                </div>
                <ul className="list-disc pl-4 mt-1 text-slate-800 space-y-0.5">
                  <li>Designed and built a user-friendly web interface for analyzing images, video and audio to detect deepfakes.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-950">WhatsApp UI Redesign — UI/UX (Figma)</span>
                </div>
                <ul className="list-disc pl-4 mt-1 text-slate-800 space-y-0.5">
                  <li>Redesigned navigation, chat layout and visual hierarchy for a cleaner user experience.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Internships */}
          <section className="mt-4">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
              INTERNSHIP EXPERIENCE
            </h2>
            <div className="space-y-2.5 text-xs">
              <div>
                <div className="font-bold text-slate-950">Web Development Intern — Wikpolt Softwares</div>
                <ul className="list-disc pl-4 mt-1 text-slate-800">
                  <li>Collaborated with a development team to build responsive React components, bridging design intent and working code.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-slate-950">UI/UX Design Intern — Zetamind Technologies</div>
                <ul className="list-disc pl-4 mt-1 text-slate-800">
                  <li>Designed wireframes and interactive prototypes in Figma, improving usability and interface clarity.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-slate-950">UI/UX Design Intern — Cognifyz Technologies</div>
                <ul className="list-disc pl-4 mt-1 text-slate-800">
                  <li>Delivered UI concepts for an e-commerce product page and poster designs, translating briefs into polished visuals.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Certifications */}
          <section className="mt-4">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc pl-4 text-xs text-slate-800 space-y-0.5">
              <li>Full-Stack Web Development</li>
              <li>Advanced Python</li>
              <li>UI/UX Designing</li>
            </ul>
          </section>

          {/* Section: Achievements & Leadership */}
          <section className="mt-4">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
              ACHIEVEMENTS & LEADERSHIP
            </h2>
            <ul className="list-disc pl-4 text-xs text-slate-800 space-y-0.5">
              <li>IEEE Student Branch Secretary, DMI Engineering College</li>
              <li>Campus Ambassador, E-Cell IIT Bombay | Campus Mantri, GeeksforGeeks (current)</li>
              <li>1st Prize, Paper Presentation: PET Engineering College, Valliyoor (National-level Technical Symposium)</li>
              <li>1st Prize, Paper Presentation: V.V College of Engineering, Thisayanvilai (National-level Technical Symposium)</li>
              <li>2nd Prize, IEEE Project Expo: St. Xavier's Catholic College, Chunkankadai</li>
              <li>2nd Prize, "SHATTER: The Limitless Launch" pitch contest: Arunachala College of Engineering for Women</li>
              <li>3rd Prize, Paper Presentation: St. Xavier's Catholic College, Chunkankadai</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
