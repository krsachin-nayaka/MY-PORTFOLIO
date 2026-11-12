import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B12] border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand & Motto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-extrabold tracking-wider text-white">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <p className="text-xs font-mono text-[#00D4C7] mt-1 tracking-wide">
              Building. Learning. Improving.
            </p>
          </div>

          {/* Social Links (§10: GitHub | LinkedIn | Email) */}
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#00D4C7] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-[#00D4C7]" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#101722] border border-slate-800 text-xs font-mono text-slate-400 hover:text-white hover:border-[#00D4C7]/50 transition-all"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00D4C7]" />
          </button>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 K R Sachin. All rights reserved.</p>
          <p className="font-mono text-slate-600">
            Crafted with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
