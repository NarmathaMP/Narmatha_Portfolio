import { useState } from 'react';
import { Cpu, Database, Wrench, Palette, Award, CheckCircle, Code, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function SkillsSection() {
  const categories = PORTFOLIO_DATA.skillCategories;

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            CORE ARSENAL & VERIFIED SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Technical Competencies & Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            A balanced full-stack skill tree combining high-velocity frontend UI engineering with reliable asynchronous backend endpoints and time-series database design.
          </p>
        </div>

        {/* 6-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              className="group glass-panel rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <h3 className="text-lg font-bold text-white tracking-tight font-display flex items-center gap-2">
                    {cat.title}
                  </h3>
                  <span className="text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-800/60 px-2 py-0.5 rounded-md">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mt-3 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Items with Level Badges & Notes */}
                <div className="space-y-3.5">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="text-[11px] font-mono text-blue-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                          {skill.level}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 leading-normal pl-0.5">
                        {skill.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Certifications Spotlight */}
        <div className="mt-14 relative glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border border-white/[0.08] overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                VERIFIED CONTINUOUS UPSKILLING
              </div>
              <h3 className="text-2xl font-bold text-white mt-1 font-display">Professional Certifications</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">Foundations & Advanced Competencies</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6">
            {PORTFOLIO_DATA.certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-white/[0.02] hover:bg-white/[0.04] p-5 rounded-2xl border border-white/[0.06] hover:border-blue-500/30 transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white font-display">{cert.title}</h4>
                <div className="text-xs text-slate-400 font-mono">{cert.issuer}</div>
                <div className="text-xs text-slate-300 font-mono pt-2 border-t border-white/[0.06] text-[11px]">
                  {cert.skills}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
