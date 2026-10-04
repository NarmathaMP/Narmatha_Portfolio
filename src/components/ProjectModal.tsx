import { useEffect } from 'react';
import { X, CheckCircle2, Layers, Cpu, Database, Wrench, Sparkles, ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/portfolioData';
import MedNexusDemo from './demos/MedNexusDemo';
import NeoPulseDemo from './demos/NeoPulseDemo';
import DeepfakeDemo from './demos/DeepfakeDemo';
import StudyBuddyDemo from './demos/StudyBuddyDemo';
import WhatsAppDemo from './demos/WhatsAppDemo';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderSandbox = () => {
    switch (project.demoType) {
      case 'healthcare':
        return <MedNexusDemo />;
      case 'icu':
        return <NeoPulseDemo />;
      case 'deepfake':
        return <DeepfakeDemo />;
      case 'studybuddy':
        return <StudyBuddyDemo />;
      case 'whatsapp':
        return <WhatsAppDemo />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl shadow-2xl border border-white/[0.12] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top window bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-blue-400 font-semibold bg-blue-950/60 border border-blue-800/60 px-2.5 py-0.5 rounded-md">
              {project.category}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-300 font-mono">{project.role}</span>
          </div>

          <div className="flex items-center gap-2">
            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-xs font-semibold text-purple-300 hover:text-white flex items-center gap-1.5 transition-all"
              >
                <span>Figma Prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1.5 transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200">
          {/* Header Title & Subtitle */}
          <div>
            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-1.5">
              <span>Status: <strong className="text-emerald-400 font-semibold">{project.status}</strong></span>
              <span>·</span>
              <span>Architecture Case Study</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-1 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Interactive Live Demo Container */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                Live Interactive Sandbox
              </span>
              <span className="text-[11px] text-emerald-400 font-mono">Simulated State Machine</span>
            </div>
            {renderSandbox()}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 font-mono">
                The Engineering Problem
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                The Architectural Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Architectural Principles */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              Technical Implementation Details
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Complete Tech Stack Matrix */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Technologies & Frameworks
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <div className="text-slate-400 mb-2 flex items-center gap-1.5 font-medium">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" /> Frontend
                </div>
                <div className="space-y-1 font-mono text-slate-200">
                  {project.techStack.frontend.map((t) => (
                    <div key={t}>{t}</div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-slate-400 mb-2 flex items-center gap-1.5 font-medium">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" /> Backend
                </div>
                <div className="space-y-1 font-mono text-slate-200">
                  {project.techStack.backend.map((t) => (
                    <div key={t}>{t}</div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-slate-400 mb-2 flex items-center gap-1.5 font-medium">
                  <Database className="w-3.5 h-3.5 text-purple-400" /> Database
                </div>
                <div className="space-y-1 font-mono text-slate-200">
                  {project.techStack.database.map((t) => (
                    <div key={t}>{t}</div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-slate-400 mb-2 flex items-center gap-1.5 font-medium">
                  <Wrench className="w-3.5 h-3.5 text-amber-400" /> Tools
                </div>
                <div className="space-y-1 font-mono text-slate-200">
                  {project.techStack.tools.map((t) => (
                    <div key={t}>{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
