import { useState } from 'react';
import { ArrowUpRight, Cpu, Layers, ExternalLink, Sparkles, Terminal, Activity, ShieldAlert, BookOpen, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'AI & Systems', 'UI/UX Design'];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header with Segmented Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              PRODUCTION ARCHITECTURES & LABS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              Featured Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Real-world systems, dual-portal platforms, and AI telemetry pipelines. Every card features a working interactive sandbox.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented control) */}
          <div className="flex items-center gap-1 p-1.5 bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-2xl self-start md:self-auto overflow-x-auto shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7">
          {filteredProjects.map((project, index) => {
            // First 2 projects get prominent spotlight sizing
            const isFeatured = index === 0 || index === 1;
            const colSpan = isFeatured ? 'md:col-span-12 lg:col-span-6' : 'md:col-span-6 lg:col-span-4';

            return (
              <div
                key={project.id}
                className={`${colSpan} group flex flex-col justify-between glass-panel rounded-3xl overflow-hidden transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1`}
              >
                {/* Window Chrome Header Bar */}
                <div className="px-4 py-2.5 bg-slate-950/80 border-b border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400">{project.id}.app</span>
                  </div>

                  <span className="font-mono text-[11px] text-blue-400">{project.category}</span>
                </div>

                {/* Visual Media Header */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative aspect-video w-full bg-slate-950 overflow-hidden cursor-pointer"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                        {project.demoType === 'studybuddy' ? (
                          <BookOpen className="w-6 h-6" />
                        ) : (
                          <MessageSquare className="w-6 h-6 text-emerald-400" />
                        )}
                      </div>
                      <span className="text-base font-bold text-white font-display">{project.title}</span>
                      <span className="text-xs text-slate-400 mt-1 font-mono">{project.subtitle}</span>
                    </div>
                  )}

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/30 to-transparent pointer-events-none" />

                  {/* Clean unboxed metadata on image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                    <span className="bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono border border-white/[0.1] text-slate-300">
                      {project.status}
                    </span>
                  </div>

                  {/* Live Interactive Sandbox button */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1.5 rounded-xl text-xs font-semibold text-white shadow-lg shadow-blue-600/40 group-hover:scale-105 transition-transform">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Try Live Sandbox</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Unboxed Metadata Line */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-2">
                      <span className="text-slate-300">{project.role}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-emerald-400 font-medium">
                        {project.tags.slice(0, 2).join(' + ')}
                      </span>
                    </div>

                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer flex items-center justify-between font-display tracking-tight"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Resume Bullet Highlights straight from PDF */}
                    <div className="mt-4 pt-3 border-t border-white/[0.06] space-y-2 text-xs text-slate-400">
                      {project.bullets.slice(0, 2).map((b, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 font-bold">›</span>
                          <span className="line-clamp-2 text-slate-300">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Metrics / Tech Tags & Action */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 font-mono">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={tag} className="flex items-center gap-1.5">
                          <span className="text-slate-300">{tag}</span>
                          {idx < 2 && <span className="text-slate-600">/</span>}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-semibold text-blue-300 hover:text-white transition-all flex items-center gap-1 whitespace-nowrap"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
