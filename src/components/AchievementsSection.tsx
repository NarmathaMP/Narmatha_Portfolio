import { Award, Trophy, Users, Shield, Sparkles, CheckCircle2, Star, Medal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            COMPETITIVE TRACK RECORD & LEADERSHIP
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Honors, Awards & Executive Roles
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Proven ability to lead technical communities, defend innovative architectures before expert juries, and win top honors in national collegiate symposia.
          </p>
        </div>

        {/* 2-Part Grid: Executive Leadership & Symposium Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Executive Leadership (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              Executive Campus Leadership
            </h3>

            <div className="space-y-4">
              {/* IEEE Secretary */}
              <div className="glass-panel rounded-2xl p-6 space-y-3 border border-white/[0.08] hover:border-blue-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 font-semibold bg-blue-950/60 border border-blue-800/60 px-2 py-0.5 rounded">
                    Executive Secretary
                  </span>
                  <span className="text-xs font-mono text-slate-400">2025 – Present</span>
                </div>
                <h4 className="text-lg font-bold text-white font-display">
                  IEEE Student Branch Secretary
                </h4>
                <div className="text-xs text-blue-300 font-medium">
                  DMI Engineering College
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  Spearheading technical symposiums, hackathons, and software engineering workshops for collegiate peers. Fostering a culture of shipping usable code.
                </p>
              </div>

              {/* Campus Ambassador Dual Roles */}
              <div className="glass-panel rounded-2xl p-6 space-y-4 border border-white/[0.08] hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                    National Outreach
                  </span>
                  <span className="text-xs font-mono text-slate-400">Active</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">
                      Campus Ambassador — E-Cell IIT Bombay
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Representing the premier Entrepreneurship Cell of IIT Bombay, coordinating technical challenges and national innovation initiatives.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08]">
                    <h4 className="text-sm font-bold text-white font-display">
                      Campus Mantri — GeeksforGeeks
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Organizing algorithmic problem-solving cohorts, DSA study sprints, and mock technical interview preparation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Symposium Awards & Competitions (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              National Technical Symposium Prizes
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* PET Engineering College */}
              <div className="glass-panel rounded-2xl p-5 space-y-2.5 border border-white/[0.08] hover:border-amber-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-300 bg-amber-950/70 border border-amber-800/60 px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <Medal className="w-3 h-3 text-amber-400" />
                    1st Prize / Gold
                  </span>
                  <span className="text-xs font-mono text-slate-400">Symposium</span>
                </div>
                <h4 className="text-sm font-bold text-white font-display">
                  Paper Presentation Winner
                </h4>
                <div className="text-xs text-slate-300 font-medium">
                  PET Engineering College, Valliyoor
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  National-level Technical Symposium. Rigorous jury defense on computational and engineering innovation.
                </p>
              </div>

              {/* V.V College of Engineering */}
              <div className="glass-panel rounded-2xl p-5 space-y-2.5 border border-white/[0.08] hover:border-amber-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-300 bg-amber-950/70 border border-amber-800/60 px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <Medal className="w-3 h-3 text-amber-400" />
                    1st Prize / Gold
                  </span>
                  <span className="text-xs font-mono text-slate-400">Symposium</span>
                </div>
                <h4 className="text-sm font-bold text-white font-display">
                  Paper Presentation Winner
                </h4>
                <div className="text-xs text-slate-300 font-medium">
                  V.V College of Engineering, Thisayanvilai
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  National-level Technical Symposium award for computational rigor and technical problem-solving.
                </p>
              </div>

              {/* St. Xavier's Project Expo */}
              <div className="glass-panel rounded-2xl p-5 space-y-2.5 border border-white/[0.08] hover:border-blue-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700 px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <Medal className="w-3 h-3 text-slate-300" />
                    2nd Prize / Silver
                  </span>
                  <span className="text-xs font-mono text-slate-400">Project Expo</span>
                </div>
                <h4 className="text-sm font-bold text-white font-display">
                  IEEE Project Expo Runner-Up
                </h4>
                <div className="text-xs text-slate-300 font-medium">
                  St. Xavier's Catholic College, Chunkankadai
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Live working project demo evaluated by IEEE senior delegates and academics.
                </p>
              </div>

              {/* SHATTER Pitch Contest */}
              <div className="glass-panel rounded-2xl p-5 space-y-2.5 border border-white/[0.08] hover:border-purple-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-300 bg-purple-950/70 border border-purple-800/60 px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <Medal className="w-3 h-3 text-purple-400" />
                    2nd Prize / Pitch
                  </span>
                  <span className="text-xs font-mono text-slate-400">Venture Pitch</span>
                </div>
                <h4 className="text-sm font-bold text-white font-display">
                  "SHATTER: The Limitless Launch"
                </h4>
                <div className="text-xs text-slate-300 font-medium">
                  Arunachala College of Engineering
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  High-stakes venture pitch contest evaluating technology product viability, economics, and prototype.
                </p>
              </div>

              {/* St. Xavier's Paper Presentation */}
              <div className="sm:col-span-2 glass-panel rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-amber-500 bg-amber-950/50 border border-amber-800/50 px-2.5 py-0.5 rounded-full font-bold">
                      3rd Prize / Bronze
                    </span>
                    <span className="text-sm font-bold text-white font-display">
                      Paper Presentation — St. Xavier's Catholic College, Chunkankadai
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Inter-collegiate symposium research defense addressing computational architecture models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
