import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';
import {
  ArrowDown,
  FileDown,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
  Code,
  Sparkles,
  User,
  ShieldCheck,
} from 'lucide-react';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [showPhoto, setShowPhoto] = useState(true);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-[#080B12] bg-grid-pattern overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#00D4C7]/15 to-[#38BDF8]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#38BDF8]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Configurable Status Banner */}
            {PORTFOLIO_DATA.personal.isOpenToWork && (
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#101722] border border-slate-700/60 text-xs font-medium text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#00D4C7] shadow-sm shadow-[#00D4C7]" />
                <span>{PORTFOLIO_DATA.personal.statusText}</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#38BDF8]" />
                  {PORTFOLIO_DATA.personal.location}
                </span>
              </div>
            )}

            {/* Main Greeting & Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono tracking-widest text-[#00D4C7] uppercase font-semibold">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#00D4C7] to-[#38BDF8] bg-clip-text text-transparent">
                {PORTFOLIO_DATA.personal.subtitle}
              </p>
            </div>

            {/* Core Value Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {PORTFOLIO_DATA.personal.tagline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#00D4C7] text-[#080B12] hover:bg-[#38BDF8] shadow-lg shadow-[#00D4C7]/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4C7]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#101722] text-slate-200 border border-slate-700 hover:border-[#00D4C7]/60 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4C7] cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#00D4C7]" />
                <span>View Full Resume</span>
              </button>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="K_R_Sachin_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-xs text-slate-400 hover:text-slate-200 bg-[#080B12] border border-slate-800 hover:border-slate-700 transition-all"
                title="Direct PDF download"
              >
                <FileDown className="w-4 h-4 text-[#38BDF8]" />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Secondary Social / Contact Links */}
            <div className="pt-4 flex items-center gap-6 text-sm text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">
                Connect:
              </span>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#00D4C7] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-[#00D4C7]" />
                <span className="hidden sm:inline">{PORTFOLIO_DATA.personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Developer Card & Geometric Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4C7]/30 to-[#38BDF8]/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

              <div className="relative rounded-2xl bg-[#101722] border border-slate-800 p-6 shadow-2xl backdrop-blur-xl">
                {/* Visual Header with View Toggle */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">developer.profile</span>
                  </div>

                  <button
                    onClick={() => setShowPhoto(!showPhoto)}
                    className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-[#00D4C7] bg-[#080B12] px-2.5 py-1 rounded-md border border-slate-800 transition-colors cursor-pointer"
                    title="Toggle Photo or Abstract Avatar"
                  >
                    {showPhoto ? (
                      <>
                        <Terminal className="w-3 h-3 text-[#00D4C7]" />
                        <span>Abstract</span>
                      </>
                    ) : (
                      <>
                        <User className="w-3 h-3 text-[#38BDF8]" />
                        <span>Photo</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Card Media: Photo or Abstract Developer Terminal Visual */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/4] bg-[#080B12] border border-slate-800/90 flex items-center justify-center">
                  {showPhoto ? (
                    <div className="relative w-full h-full">
                      <img
                        src={PORTFOLIO_DATA.personal.photoUrl}
                        alt="K R Sachin - Computer Science Engineer"
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          // Resilient fallback to abstract avatar if photo missing
                          e.currentTarget.style.display = 'none';
                          setShowPhoto(false);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-300 bg-[#101722]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60">
                        <span className="text-[#00D4C7]">K R SACHIN</span>
                        <span className="text-slate-400">NHCE · CSE</span>
                      </div>
                    </div>
                  ) : (
                    /* Abstract Geometric Developer Visual */
                    <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#0c121e] to-[#080B12] text-slate-300 font-mono text-xs">
                      <div className="flex justify-between items-start">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D4C7]/20 to-[#38BDF8]/20 border border-[#00D4C7]/40 flex items-center justify-center text-xl font-bold text-[#00D4C7]">
                          KS
                        </div>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                          Python 3.12
                        </span>
                      </div>

                      <div className="space-y-1.5 bg-[#080B12]/80 p-3.5 rounded-lg border border-slate-800/80 text-[11px] leading-relaxed">
                        <p className="text-slate-500"># Engineering Profile</p>
                        <p>
                          <span className="text-[#38BDF8]">specialization</span> = [
                        </p>
                        <p className="pl-4 text-[#00D4C7]">"Backend Systems",</p>
                        <p className="pl-4 text-[#00D4C7]">"Machine Learning",</p>
                        <p className="pl-4 text-[#00D4C7]">"Data Analytics",</p>
                        <p>]</p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                        <span className="flex items-center gap-1.5">
                          <Code className="w-3.5 h-3.5 text-[#00D4C7]" />
                          Clean Architecture
                        </span>
                        <span className="text-[#38BDF8]">Active</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sub-card Quick Attributes */}
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#080B12] border border-slate-800/80 flex flex-col">
                    <span className="text-slate-500 text-[11px]">Institution</span>
                    <span className="font-semibold text-slate-200 truncate">New Horizon CE</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#080B12] border border-slate-800/80 flex flex-col">
                    <span className="text-slate-500 text-[11px]">Academic CGPA</span>
                    <span className="font-semibold text-[#00D4C7] font-mono">8.33 / 10.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
