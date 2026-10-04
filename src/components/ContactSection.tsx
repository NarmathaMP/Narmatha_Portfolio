import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, Linkedin, Github, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ContactSection() {
  const [roleType, setRoleType] = useState('Full Stack Developer');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const applyTemplate = (templateMsg: string) => {
    setMessage(templateMsg);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Job Opportunity: ${roleType} at ${company || 'Our Team'}`);
      const body = encodeURIComponent(
        `Hi Narmatha,\n\nMy name is ${name} from ${company}.\n\n${message}\n\nBest regards,\n${name}\n${email}`
      );
      window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            DIRECT HIRING CHANNEL
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Let's Discuss an Opportunity
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Whether you are a technical recruiter with a full-stack opening, an engineering lead assembling a team, or scheduling an initial screen, I respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Direct Channels
            </h3>

            {/* Email Card */}
            <div className="glass-panel rounded-2xl p-5 flex items-center justify-between border border-white/[0.08] hover:border-blue-500/40 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Primary Email</div>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 font-mono transition-colors"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel rounded-2xl p-5 flex items-center justify-between border border-white/[0.08] hover:border-emerald-500/40 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Direct Phone / WhatsApp</div>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 font-mono transition-colors"
                  >
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel rounded-2xl p-5 flex items-center gap-3.5 border border-white/[0.08]">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400">Current Base</div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  Puravasery, Nagercoil – 629901, Tamil Nadu, India
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3.5 glass-panel hover:bg-white/[0.08] rounded-xl text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition-all border border-white/[0.08]"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3.5 glass-panel hover:bg-white/[0.08] rounded-xl text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition-all border border-white/[0.08]"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Interactive Hiring Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border border-white/[0.08] shadow-2xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-4">
              Send an Interview Inquiry or Screening Request
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Type Selection */}
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                  Opportunity Type
                </label>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['Full Stack Developer', 'Frontend Engineer', 'Web Intern', 'Other'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setRoleType(t)}
                      className={`px-3.5 py-1.5 rounded-xl border transition-all ${
                        roleType === t
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-500 text-white font-medium shadow-md shadow-blue-600/30'
                          : 'bg-white/[0.02] border-white/[0.08] text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Miller"
                    className="w-full bg-slate-950/80 border border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Stripe, Razorpay, Tech Studio"
                    className="w-full bg-slate-950/80 border border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Your Work Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@acmecorp.com"
                  className="w-full bg-slate-950/80 border border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 font-mono transition-colors"
                />
              </div>

              {/* Quick message templates */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs text-slate-400 font-medium">Message *</label>
                  <div className="text-[11px] text-blue-400 font-mono">1-Click Presets:</div>
                </div>
                <div className="flex flex-wrap gap-2 mb-2.5">
                  <button
                    type="button"
                    onClick={() =>
                      applyTemplate(
                        'Hi Narmatha, we reviewed your Med NeXus and NeoPulse projects and would love to schedule a 20-minute introductory screening call for our Full Stack opening.'
                      )
                    }
                    className="px-2.5 py-1 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] rounded-lg text-[11px] text-slate-300 hover:text-white transition-colors"
                  >
                    + Schedule 20-min Screening Call
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      applyTemplate(
                        'Hi Narmatha, impressed by your React frontend and time-series telemetry work. Are you available for a remote internship starting next month?'
                      )
                    }
                    className="px-2.5 py-1 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] rounded-lg text-[11px] text-slate-300 hover:text-white transition-colors"
                  >
                    + Check Internship Availability
                  </button>
                </div>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details regarding your team, role scope, or interview timing..."
                  className="w-full bg-slate-950/80 border border-white/[0.1] rounded-xl p-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 leading-relaxed transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500 font-mono">
                  Direct dispatch to mpnarmatha18@gmail.com
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-600/40 hover:-translate-y-0.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Message</span>
                </button>
              </div>

              {submitted && (
                <div className="p-3.5 bg-emerald-950/80 border border-emerald-800 rounded-xl text-xs text-emerald-300 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    Thank you! Your email client has been prepared, and a direct notification was triggered. Narmatha will respond promptly.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
