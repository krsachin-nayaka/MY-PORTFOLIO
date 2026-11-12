import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';
import { Menu, X, ArrowUpRight, FileDown, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B12]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4C7]"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#101722] to-[#1e293b] border border-slate-700/80 flex items-center justify-center text-[#00D4C7] font-mono text-sm font-semibold group-hover:border-[#00D4C7]/60 transition-colors">
            KS
          </span>
          <span className="tracking-wider">{PORTFOLIO_DATA.personal.name}</span>
        </a>

        {/* Zone 2: 4-6 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#00D4C7] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-[#101722] border border-slate-700/80 rounded-lg hover:border-[#00D4C7]/60 hover:text-white transition-all whitespace-nowrap shrink-0 cursor-pointer"
            title="Open Resume Document"
          >
            <FileText className="w-3.5 h-3.5 text-[#00D4C7]" />
            <span>Resume</span>
          </button>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#080B12] bg-[#00D4C7] hover:bg-[#38BDF8] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-[#00D4C7]/20"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="p-2 text-xs text-slate-300 bg-[#101722] border border-slate-800 rounded-lg hover:text-[#00D4C7]"
            title="View Resume"
          >
            <FileText className="w-4 h-4 text-[#00D4C7]" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-[#101722] border border-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4C7]"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#080B12]/98 border-b border-slate-800 px-6 pt-4 pb-6 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 text-base font-medium text-slate-200 hover:text-[#00D4C7] border-b border-slate-900/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResumeModal?.();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-slate-200 bg-[#101722] border border-slate-700 rounded-lg"
              >
                <FileText className="w-4 h-4 text-[#00D4C7]" />
                <span>View Full Resume</span>
              </button>
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="K_R_Sachin_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 text-xs font-semibold text-slate-400 hover:text-white"
              >
                <FileDown className="w-3.5 h-3.5 text-[#00D4C7]" />
                <span>Direct PDF Download</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-[#080B12] bg-[#00D4C7] rounded-lg mt-1"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
