import { useState, useEffect } from 'react';
import { FileText, Mail, Menu, X, ArrowUpRight, Sparkles, CheckCircle, Sun, Moon } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ onOpenResume, onOpenContact }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl py-3.5 shadow-2xl shadow-black/10 border-b'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-mono font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            NM
          </div>
          <div className="flex flex-col">
            <span className="font-display leading-tight text-white">Narmatha M P</span>
            <span className="text-[10px] font-mono text-blue-500 font-medium">Full Stack Engineer</span>
          </div>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#projects"
            className="hover:text-blue-500 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-blue-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-blue-500 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-blue-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="hover:text-blue-500 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-blue-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Skills
          </a>
          <a
            href="#achievements"
            className="hover:text-blue-500 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-blue-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Achievements
          </a>
          <a
            href="#about"
            className="hover:text-blue-500 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-blue-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            About
          </a>
        </nav>

        {/* Zone 3: Actions + Theme Switcher */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all flex items-center justify-center shadow-sm"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-blue-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-xl transition-all hover:border-slate-500 whitespace-nowrap shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span>Resume</span>
          </button>

          <button
            onClick={onOpenContact}
            className="relative group overflow-hidden flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl transition-all duration-300 shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Hire Narmatha</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg text-slate-300 bg-white/[0.04] border border-white/10"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-blue-600" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 text-xs font-medium text-slate-200 bg-white/[0.05] border border-white/10 rounded-lg"
          >
            Resume
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-white/[0.04] border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border border-white/[0.1] px-6 py-5 space-y-3 mt-3 mx-4 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <span className="text-xs font-mono text-slate-400">Appearance Theme:</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.06] border border-white/[0.08]"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-blue-600" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-blue-400 py-1"
          >
            Projects & Case Studies
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-blue-400 py-1"
          >
            Internships & Education
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-blue-400 py-1"
          >
            Technical Skills & Tools
          </a>
          <a
            href="#achievements"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-blue-400 py-1"
          >
            Leadership & Awards
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-blue-400 py-1"
          >
            About & Mindset
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-xs font-semibold text-center text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md shadow-blue-500/20"
            >
              Get in Touch / Hire Narmatha
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
