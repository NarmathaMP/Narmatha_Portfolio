import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ArrowRight, Building, Award, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            CAREER TRAJECTORY & INDUSTRY IMPACT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Internship Experience & Education
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Hands-on software development and UI/UX design across three industry internships. Bridging product intent directly into production-grade React code and Figma design systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols): Interactive Timeline */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-400" />
              Verified Internship Track Record
            </h3>

            <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-slate-800">
              {PORTFOLIO_DATA.internships.map((internship, index) => (
                <div
                  key={internship.id}
                  className="relative group glass-panel rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  {/* Glowing Node on Timeline Spine */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-[#07090e] border-2 border-blue-500 flex items-center justify-center group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300 shadow-md shadow-blue-500/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/[0.08]">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-bold text-white tracking-tight font-display">
                          {internship.role}
                        </h4>
                        <span className="text-[11px] font-mono text-blue-300 bg-blue-950/60 border border-blue-800/60 px-2 py-0.5 rounded-md">
                          {internship.type}
                        </span>
                      </div>
                      <div className="text-sm text-blue-400 font-semibold mt-1 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5" />
                        {internship.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <span>{internship.period}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span>{internship.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                    {internship.summary}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs text-slate-400">
                    {internship.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills used */}
                  <div className="mt-5 pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-500 font-mono">Core Stack:</span>
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (4 cols): Education & Mindset */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              Academic Credential
            </h3>

            {/* Education Card */}
            <div className="glass-panel rounded-2xl p-6 space-y-4 border border-white/[0.08]">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-md">
                  Undergraduate Degree
                </span>
                <span className="text-xs font-mono text-slate-400">2024 – 2028</span>
              </div>

              <div>
                <h4 className="text-base font-bold text-white font-display">
                  Bachelor of Engineering (B.E.)
                </h4>
                <div className="text-xs sm:text-sm text-blue-400 font-medium mt-0.5">
                  Computer Science and Engineering
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  DMI Engineering College, Aralvaimozhi
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.08] space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>3rd Year Undergraduate Standing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Focus: Full-Stack Architecture, Distributed Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Executive Secretary, IEEE Student Branch</span>
                </div>
              </div>
            </div>

            {/* Recruiter Quote Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/40 space-y-3 text-xs">
              <div className="text-blue-400 font-mono text-[11px] uppercase tracking-wider font-semibold">
                What Team Leads Say
              </div>
              <p className="text-slate-300 italic leading-relaxed text-xs">
                "Narmatha delivers with the independence of a mid-level engineer: she understands both how users interact with screens and how backend databases store telemetry under load."
              </p>
              <div className="pt-2 border-t border-blue-900/40 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Fast Onboarding</span>
                <span className="text-emerald-400">Immediate ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
