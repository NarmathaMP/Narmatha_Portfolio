import { FileText, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-[#05070a] border-t border-white/[0.08] text-slate-400 text-xs relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div className="space-y-1">
            <div className="text-lg font-bold text-white tracking-tight flex items-center gap-2 font-display">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-mono font-bold">
                NM
              </div>
              <span>Narmatha M P</span>
            </div>
            <p className="text-xs text-slate-400">
              Full Stack Developer · Frontend Engineer · B.E. Computer Science (2024–2028)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#achievements" className="hover:text-blue-400 transition-colors">
              Achievements
            </a>
            <button
              onClick={onOpenResume}
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Resume (PDF)
            </button>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-all flex items-center justify-center shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Narmatha M P. Built with React 19, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center gap-3 font-mono">
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-slate-300 hover:text-blue-400 transition-colors">
              {PORTFOLIO_DATA.personal.email}
            </a>
            <span className="text-slate-700">·</span>
            <span className="text-slate-400">Puravasery, Nagercoil – 629901</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
