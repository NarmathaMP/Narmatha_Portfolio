import { useState, useEffect } from 'react';
import { 
  Download, 
  ArrowRight, 
  Code2, 
  Folder, 
  Mail, 
  Send, 
  ArrowUp, 
  Github, 
  Linkedin, 
  ExternalLink,
  Sparkles,
  Check,
  Menu,
  X,
  Sun,
  Moon,
  Briefcase,
  GraduationCap,
  Award,
  Zap,
  CheckCircle2,
  FileText,
  Copy,
  Layers,
  Phone,
  MapPin,
  Play,
  Settings,
  Terminal,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { sendDirectEmail } from './utils/emailService';

function PortfolioApp() {
  const { theme, toggleTheme } = useTheme();
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeNav, setActiveNav] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [roleType, setRoleType] = useState('Full Stack Developer');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  // Recruiter copy states
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedBlurb, setCopiedBlurb] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      if (scrollPos < 600) {
        setActiveNav('home');
      } else if (scrollPos < 1200) {
        setActiveNav('about');
      } else if (scrollPos < 2300) {
        setActiveNav('projects');
      } else if (scrollPos < 3200) {
        setActiveNav('experience');
      } else if (scrollPos < 3900) {
        setActiveNav('skills');
      } else if (scrollPos < 4600) {
        setActiveNav('achievements');
      } else {
        setActiveNav('contact');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
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

  const copyBlurb = () => {
    const blurb = `Candidate Profile: Narmatha M P — Full Stack Developer & UI/UX Designer. 3rd year B.E. CSE at DMI Engineering College. Core stack: React, FastAPI, TimescaleDB, Python. Completed 3 internships (Wikpolt, Zetamind, Cognifyz). IEEE Student Branch Secretary, 5+ national symposium awards. Immediate joiner. Portfolio: ${window.location.origin}`;
    navigator.clipboard.writeText(blurb);
    setCopiedBlurb(true);
    setTimeout(() => setCopiedBlurb(false), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setSubmissionFeedback(null);

    try {
      const fullMessage = subject ? `[Subject: ${subject}]\n\n${message}` : message;
      const res = await sendDirectEmail({
        name,
        email,
        roleType,
        subject,
        message: fullMessage,
        targetEmail: PORTFOLIO_DATA.personal.email,
      });

      setSubmissionFeedback({
        type: 'success',
        text: res.message,
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch {
      setSubmissionFeedback({
        type: 'error',
        text: 'Unable to send message directly. Please contact mpnarmatha18@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = ['All', 'Full Stack', 'AI & Systems', 'UI/UX Design'];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white relative overflow-x-hidden font-sans">
      {/* Subtle Ambient Glow Highlights */}
      <div className="fixed top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/[0.04] blur-[160px] pointer-events-none rounded-full" />
      <div className="fixed bottom-1/4 left-10 w-[500px] h-[500px] bg-indigo-600/[0.03] blur-[150px] pointer-events-none rounded-full" />

      {/* ====================================================
          EXECUTIVE NAVIGATION BAR
          ==================================================== */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#090b11]/85 border-b border-white/[0.08] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between">
          {/* Professional Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-mono font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              NM
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white tracking-tight text-base group-hover:text-blue-400 transition-colors">
                Narmatha M P
              </span>
              <span className="text-[10px] font-mono text-slate-400">Full Stack Engineer</span>
            </div>
          </a>

          {/* Clean Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <button
              onClick={() => scrollToSection('home')}
              className={`hover:text-white transition-colors py-1 ${activeNav === 'home' ? 'text-blue-400 font-bold' : ''}`}
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-white transition-colors py-1 ${activeNav === 'about' ? 'text-blue-400 font-bold' : ''}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`hover:text-white transition-colors py-1 ${activeNav === 'projects' ? 'text-blue-400 font-bold' : ''}`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`hover:text-white transition-colors py-1 ${activeNav === 'experience' ? 'text-blue-400 font-bold' : ''}`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`hover:text-white transition-colors py-1 ${activeNav === 'skills' ? 'text-blue-400 font-bold' : ''}`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('achievements')}
              className={`hover:text-white transition-colors py-1 ${activeNav === 'achievements' ? 'text-blue-400 font-bold' : ''}`}
            >
              Honors
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:text-white transition-colors py-1 ${activeNav === 'contact' ? 'text-blue-400 font-bold' : ''}`}
            >
              Contact
            </button>
          </nav>

          {/* Action Hub */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-white/[0.08] hover:border-slate-500 bg-white/[0.03] text-slate-300 hover:text-white transition-all"
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-500" />}
            </button>

            <button
              onClick={() => setResumeOpen(true)}
              className="px-3.5 py-1.5 rounded-lg border border-white/[0.1] hover:border-slate-400 bg-white/[0.03] text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1.5 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-md shadow-blue-600/25 transition-all flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg border border-white/[0.08] text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-500" />}
            </button>
            <button
              onClick={() => setResumeOpen(true)}
              className="px-3 py-1 rounded-lg border border-white/[0.1] text-xs font-medium text-white"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-400 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d1017] border-b border-white/[0.08] px-6 py-4 space-y-3">
            {['home', 'about', 'projects', 'experience', 'skills', 'achievements', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-1 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-blue-400"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ====================================================
          EXECUTIVE HERO SECTION
          ==================================================== */}
      <section id="home" className="pt-12 sm:pt-20 pb-16 sm:pb-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Columns: Pitch & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              {/* Bold Executive Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                  Full-stack engineering with a frontend-first standard.
                </h1>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  Hi, I'm <strong className="text-white font-semibold">Narmatha M P</strong>. Third-year Computer Science student at DMI Engineering College with 3 completed internships. I build responsive React applications, scalable FastAPI services, and irregular time-series telemetry pipelines.
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white flex items-center gap-2 shadow-md shadow-blue-600/30 transition-all"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setResumeOpen(true)}
                  className="px-4 py-2.5 rounded-lg border border-white/[0.12] hover:border-slate-400 bg-white/[0.03] text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-2 transition-all"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-400" />
                  <span>View ATS Resume</span>
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-4 py-2.5 rounded-lg border border-white/[0.08] hover:border-slate-500 bg-white/[0.02] text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Direct Message</span>
                </button>
              </div>

              {/* Verified Metrics Strip */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/[0.08] max-w-lg text-xs">
                <div>
                  <div className="font-mono text-lg font-bold text-white">3 Internships</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Wikpolt, Zetamind, Cognifyz</div>
                </div>
                <div>
                  <div className="font-mono text-lg font-bold text-blue-400">5+ Awards</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">1st Prize Symposia & Expos</div>
                </div>
                <div>
                  <div className="font-mono text-lg font-bold text-emerald-400">IEEE Branch</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Student Branch Secretary</div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Production Architecture Card */}
            <div className="lg:col-span-5">
              <div className="pro-card rounded-2xl p-5 border border-white/[0.1] space-y-4">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-1.5">candidate_profile.ts</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>VERIFIED READY</span>
                  </div>
                </div>

                {/* Tech Blueprint & Logistics */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] space-y-1">
                    <div className="text-slate-500">// Primary Engineering Stack</div>
                    <div className="text-slate-300">
                      <span className="text-blue-400">const</span> stack = [
                      <span className="text-emerald-400">'React'</span>,{' '}
                      <span className="text-emerald-400">'FastAPI'</span>,{' '}
                      <span className="text-emerald-400">'TimescaleDB'</span>,{' '}
                      <span className="text-emerald-400">'Python'</span>,{' '}
                      <span className="text-emerald-400">'TypeScript'</span>];
                    </div>
                  </div>

                  <div className="space-y-1.5 text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Education:</span>
                      <span className="text-slate-200">B.E. Computer Science (2024–2028)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Institution:</span>
                      <span className="text-slate-200">DMI Engineering College</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Location:</span>
                      <span className="text-slate-200">Nagercoil, Tamil Nadu, India</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Notice Period:</span>
                      <span className="text-emerald-400 font-semibold">Immediate Joiner</span>
                    </div>
                  </div>
                </div>

                {/* 1-Click Copy Buttons */}
                <div className="pt-2 border-t border-white/[0.08] flex items-center gap-2">
                  <button
                    onClick={copyEmail}
                    className="flex-1 py-1.5 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[11px] font-mono text-slate-200 flex items-center justify-center gap-1.5 transition-all"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-blue-400" />}
                    <span>{copiedEmail ? 'Email Copied' : 'Copy Email'}</span>
                  </button>

                  <button
                    onClick={copyPhone}
                    className="flex-1 py-1.5 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-[11px] font-mono text-slate-200 flex items-center justify-center gap-1.5 transition-all"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Phone className="w-3.5 h-3.5 text-blue-400" />}
                    <span>{copiedPhone ? 'Phone Copied' : 'Copy Phone'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          RECRUITER & HIRING MANAGER FAST-TRACK DOSSIER
          ==================================================== */}
      <section className="py-6 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="pro-card rounded-2xl p-6 sm:p-8 border border-white/[0.1] shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-white/[0.08] gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Recruiter Fast-Track Dossier</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                  Candidate Factsheet & Role Competencies
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={copyBlurb}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 hover:text-white transition-all flex items-center gap-1.5"
                  title="Copy 1-paragraph summary to forward directly to your Engineering Manager"
                >
                  {copiedBlurb ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-blue-400" />}
                  <span>{copiedBlurb ? 'Summary Copied to Clipboard!' : 'Forward to Hiring Manager'}</span>
                </button>

                <button
                  onClick={() => setResumeOpen(true)}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/25 flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download ATS Resume</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-xs">
              {/* Pillar 1 */}
              <div className="space-y-3">
                <div className="font-mono uppercase tracking-wider text-slate-400 font-bold text-[11px]">
                  Why Hire Narmatha?
                </div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Proven ability to connect responsive React frontends with FastAPI microservices and database schemas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Completed 3 industry internships (Wikpolt Softwares, Zetamind Technologies, Cognifyz Technologies).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Executive leadership experience as IEEE Student Branch Secretary and E-Cell IIT Bombay Ambassador.</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 2 */}
              <div className="space-y-3">
                <div className="font-mono uppercase tracking-wider text-slate-400 font-bold text-[11px]">
                  Technical Match Scores
                </div>
                <div className="space-y-2.5">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Full Stack Engineering</span>
                      <span className="font-mono text-emerald-400 font-bold">96%</span>
                    </div>
                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[96%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Frontend Architecture (React/TS)</span>
                      <span className="font-mono text-blue-400 font-bold">98%</span>
                    </div>
                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[98%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>UI/UX Product Design (Figma)</span>
                      <span className="font-mono text-indigo-400 font-bold">94%</span>
                    </div>
                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-[94%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="space-y-3 pro-card-sub p-4 rounded-xl">
                <div className="font-mono uppercase tracking-wider text-slate-400 font-bold text-[11px]">
                  Hiring Logistics
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Target Role:</span>
                    <span className="text-white font-medium">Full Stack / Frontend Engineer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Availability:</span>
                    <span className="text-emerald-400 font-mono font-medium">Immediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Location:</span>
                    <span className="text-slate-200">Open to Remote / Hybrid / Onsite</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact:</span>
                    <span className="text-blue-400 font-mono">mpnarmatha18@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          ABOUT ME SECTION
          ==================================================== */}
      <section id="about" className="py-12 sm:py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="pro-card rounded-2xl p-6 sm:p-10 border border-white/[0.1]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  About & Engineering Principles
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Educational background, architectural focus, and engineering mindset.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  I'm a third-year Computer Science Engineering student at <strong className="text-white">DMI Engineering College</strong> (Batch 2024–2028). My work is centered on a frontend-first approach to full-stack development — creating responsive, high-craft user interfaces and seamlessly connecting them to reliable backend APIs and database layers.
                </p>
                <p>
                  Instead of merely studying theoretical concepts, I actively build complete end-to-end applications: healthcare platforms with role-based access control, AI-powered ICU telemetry systems with TimescaleDB continuous aggregates, and forensic web applications.
                </p>
                <p>
                  As an executive leader, I serve as the <strong className="text-white">IEEE Student Branch Secretary</strong> and campus ambassador for <strong className="text-white">E-Cell IIT Bombay</strong> and <strong className="text-white">GeeksforGeeks</strong>, organizing technical symposiums and mentoring peers in computational thinking.
                </p>
              </div>

              {/* Right Column: 3 Core Pillars */}
              <div className="lg:col-span-5 space-y-3">
                <div className="pro-card-sub rounded-xl p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <span>Frontend Engineering Standard</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Modular React architectures, accessible semantic DOM, strict type-safety, and seamless responsiveness across devices.
                  </p>
                </div>

                <div className="pro-card-sub rounded-xl p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <span>Backend & Database Integration</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    RESTful APIs with FastAPI, TimescaleDB irregular time-series aggregates, and explainable AI narrative layers.
                  </p>
                </div>

                <div className="pro-card-sub rounded-xl p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>Execution & Competitive Record</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Multiple 1st Prize wins in National-level Technical Symposia, proving technical depth, clarity, and project delivery under jury review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          FEATURED PROJECTS SECTION (ALL 5 PROJECTS)
          ==================================================== */}
      <section id="projects" className="py-12 sm:py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Folder className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Featured Engineering Projects ({PORTFOLIO_DATA.projects.length})
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Each project includes an interactive live sandbox and individual GitHub repository access.
                </p>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-black/40 border border-white/[0.08] overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 5 Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="pro-card rounded-2xl overflow-hidden flex flex-col justify-between border border-white/[0.08] group"
              >
                <div>
                  {/* Preview Container */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative aspect-video w-full bg-[#0d1017] overflow-hidden cursor-pointer"
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-900">
                        <Code2 className="w-8 h-8 text-slate-600" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e121b] via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-blue-600/90 backdrop-blur-md text-[11px] font-semibold text-white flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3" />
                      <span>Live Sandbox</span>
                    </div>

                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                      {project.status}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {project.role}
                      </span>
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-base font-bold text-white hover:text-blue-400 cursor-pointer transition-colors"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>

                    {/* Tech Tags */}
                    <div className="pt-2 flex flex-wrap gap-1">
                      {project.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-slate-300 border border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions: Sandbox and GitHub */}
                <div className="px-5 pb-5 pt-3 border-t border-white/[0.06] flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2 px-3 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/25 text-xs font-semibold text-blue-300 hover:text-white flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Run Demo</span>
                  </button>

                  {project.figmaUrl ? (
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/25 text-xs font-semibold text-purple-300 hover:text-white flex items-center justify-center gap-1.5 transition-all"
                      title="Open interactive Figma prototype"
                    >
                      <span>Figma Demo</span>
                      <ExternalLink className="w-3 h-3 text-purple-400" />
                    </a>
                  ) : (
                    <a
                      href={project.githubUrl || PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-all"
                      title="View repository on GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repo</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          INTERNSHIP EXPERIENCE & EDUCATION
          ==================================================== */}
      <section id="experience" className="py-12 sm:py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Work Experience & Academic Grounding
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Practical industry internships delivering responsive React features and interactive prototypes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Internships List */}
            <div className="lg:col-span-8 space-y-4">
              {PORTFOLIO_DATA.internships.map((internship) => (
                <div
                  key={internship.id}
                  className="pro-card rounded-2xl p-6 border border-white/[0.08] space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-white/[0.06]">
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {internship.role}
                      </h3>
                      <div className="text-xs text-blue-400 font-semibold mt-0.5">
                        {internship.company}
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      {internship.period} · {internship.location}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {internship.summary}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {internship.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] text-slate-500 font-mono">Skills applied:</span>
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-white/[0.03] text-[11px] font-mono text-slate-300 border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education & Leadership Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="pro-card rounded-2xl p-6 border border-white/[0.1] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>DEGREE FOUNDATION</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  Bachelor of Engineering (B.E.)
                </h3>
                <div className="text-xs text-blue-300 font-semibold">
                  Computer Science and Engineering
                </div>
                <div className="text-xs text-slate-400">
                  DMI Engineering College, Aralvaimozhi
                </div>
                <div className="text-xs font-mono text-slate-400 pt-1">
                  Academic Timeline: 2024 – 2028 (Third-Year Student)
                </div>
                <div className="pt-2 border-t border-white/[0.08] text-xs text-slate-300 leading-relaxed">
                  Focus on computational theory, distributed databases, software engineering patterns, and user experience.
                </div>
              </div>

              {/* Leadership Fast Card */}
              <div className="pro-card-sub rounded-2xl p-5 border border-white/[0.08] space-y-2">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider font-mono">
                  Branch Leadership
                </div>
                <div className="text-sm font-bold text-white">
                  IEEE Student Branch Secretary
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Managing branch operations, leading technical symposiums, code sprints, and student technical initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          TECHNICAL SKILLS MATRIX SECTION
          ==================================================== */}
      <section id="skills" className="py-12 sm:py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Technical Skills & Frameworks
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Structured toolsets, programming languages, and verified certifications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
              <div
                key={cat.title}
                className="pro-card rounded-2xl p-6 border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <h3 className="text-sm font-bold text-white">
                      {cat.title}
                    </h3>
                    <span className="text-[10px] font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mt-2 mb-4 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                          <span className="text-[10px] font-mono text-blue-400">{skill.level}</span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {skill.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Verified Certifications */}
          <div className="mt-8 pro-card rounded-2xl p-6 border border-white/[0.08]">
            <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider mb-1">
              Verified Professional Certifications
            </div>
            <h3 className="text-base font-bold text-white mb-4">
              Industry Certifications & Technical Credentials
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="pro-card-sub p-4 rounded-xl space-y-1.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white">{cert.title}</div>
                  <div className="text-[11px] text-slate-400 font-mono">{cert.issuer}</div>
                  <div className="text-[11px] text-blue-300 font-mono pt-1">{cert.skills}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          HONORS, AWARDS & LEADERSHIP SECTION
          ==================================================== */}
      <section id="achievements" className="py-12 sm:py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Honors, Awards & Campus Leadership
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Demonstrated competitive excellence in National Symposia, Project Expos, and Regional Outreach.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="pro-card-sub rounded-xl p-5 space-y-2 border border-white/[0.08]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded font-bold">
                  1st Prize / Gold
                </span>
                <span className="text-[10px] font-mono text-slate-400">National Symposium</span>
              </div>
              <h3 className="text-sm font-bold text-white">
                Paper Presentation Winner
              </h3>
              <div className="text-xs text-blue-400">
                PET Engineering College, Valliyoor
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Evaluated and awarded first place by faculty jury for architecture, problem formulation, and defense.
              </p>
            </div>

            <div className="pro-card-sub rounded-xl p-5 space-y-2 border border-white/[0.08]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded font-bold">
                  1st Prize / Gold
                </span>
                <span className="text-[10px] font-mono text-slate-400">National Symposium</span>
              </div>
              <h3 className="text-sm font-bold text-white">
                Paper Presentation Winner
              </h3>
              <div className="text-xs text-blue-400">
                V.V College of Engineering, Thisayanvilai
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                National-level symposium victory demonstrating technical clarity, system design, and presentation.
              </p>
            </div>

            <div className="pro-card-sub rounded-xl p-5 space-y-2 border border-white/[0.08]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-200 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded font-bold">
                  2nd Prize / Silver
                </span>
                <span className="text-[10px] font-mono text-slate-400">Project Expo</span>
              </div>
              <h3 className="text-sm font-bold text-white">
                IEEE Project Expo Runner-Up
              </h3>
              <div className="text-xs text-blue-400">
                St. Xavier's Catholic College, Chunkankadai
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Working prototype exhibition reviewed by IEEE delegates and academic researchers.
              </p>
            </div>

            <div className="pro-card-sub rounded-xl p-5 space-y-2 border border-white/[0.08]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 px-2 py-0.5 rounded font-bold">
                  2nd Prize / Pitch
                </span>
                <span className="text-[10px] font-mono text-slate-400">Venture Pitch</span>
              </div>
              <h3 className="text-sm font-bold text-white">
                "SHATTER: The Limitless Launch"
              </h3>
              <div className="text-xs text-blue-400">
                Arunachala College of Engineering
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Pitch contest defending technical roadmap, product-market fit, and interface architecture.
              </p>
            </div>

            <div className="pro-card-sub rounded-xl p-5 space-y-2 border border-white/[0.08] sm:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded font-bold">
                  Campus Leadership
                </span>
                <span className="text-[10px] font-mono text-slate-400">Active</span>
              </div>
              <h3 className="text-sm font-bold text-white">
                E-Cell IIT Bombay Ambassador & GeeksforGeeks Campus Mantri
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Driving student developer outreach, algorithm study groups, and coordinating premier tech ecosystem initiatives across college networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          DIRECT MESSAGE CONTACT SECTION WITH EMAILJS
          ==================================================== */}
      <section id="contact" className="py-12 sm:py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="pro-card rounded-2xl p-6 sm:p-10 border border-white/[0.1]">
            <div className="flex items-center gap-3 pb-6 border-b border-white/[0.08]">
              <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Get in Touch / Direct Message
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Send a message directly to Narmatha's inbox (mpnarmatha18@gmail.com).
                </p>
              </div>
            </div>

            {/* Direct Message Form */}
            <form onSubmit={handleFormSubmit} className="pt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#0d1017] border border-white/[0.08] focus:border-blue-500 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-[#0d1017] border border-white/[0.08] focus:border-blue-500 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Interview Invitation / Technical Discussion"
                  className="w-full bg-[#0d1017] border border-white/[0.08] focus:border-blue-500 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe the role, timeline, or project scope..."
                  className="w-full bg-[#0d1017] border border-white/[0.08] focus:border-blue-500 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors leading-relaxed"
                />
              </div>

              {/* Submit Row with Live Feedback */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>mpnarmatha18@gmail.com</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>+91-9385942895</span>
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-xs font-semibold text-white flex items-center gap-2 shadow-md shadow-blue-600/30 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              {submissionFeedback && (
                <div
                  className={`p-3 rounded-lg border text-xs flex items-center gap-2 ${
                    submissionFeedback.type === 'success'
                      ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                      : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{submissionFeedback.text}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ====================================================
          EXECUTIVE FOOTER
          ==================================================== */}
      <footer className="py-10 border-t border-white/[0.08] relative text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold text-white">
            <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-white text-[10px] font-mono">
              NM
            </div>
            <span>Narmatha M P</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400 font-normal">Full Stack Engineer</span>
          </div>

          <div>
            © 2026 Narmatha M P. Built with React & TypeScript.
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="w-8 h-8 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Scroll-To-Top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-9 h-9 rounded-lg bg-[#0e121b] border border-white/[0.12] hover:border-blue-500 text-slate-300 hover:text-white flex items-center justify-center shadow-lg transition-all z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </footer>

      {/* ATS-Compliant Printable Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Live Sandbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
