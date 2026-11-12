import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Education } from './components/Education.tsx';
import { Certifications } from './components/Certifications.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { PORTFOLIO_DATA } from './data/portfolio.ts';
import { FileText, X, FileDown, ExternalLink } from 'lucide-react';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] selection:bg-[#00D4C7]/20 selection:text-[#00D4C7] relative">
      {/* Top Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Education Timeline */}
        <Education />

        {/* Certifications Section */}
        <Certifications />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action: Instant Resume Preview Trigger */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2">
        <button
          onClick={() => setIsResumeModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#101722]/95 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:text-white hover:border-[#00D4C7] shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-105"
          title="Quick preview Sachin's Resume"
        >
          <FileText className="w-4 h-4 text-[#00D4C7]" />
          <span>Quick Resume Preview</span>
        </button>
      </div>

      {/* Resume Quick Viewer Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-4xl h-[88vh] bg-[#101722] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#080B12]">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#00D4C7]" />
                <span className="text-sm font-bold text-white">
                  K R Sachin — Curriculum Vitae
                </span>
                <span className="hidden sm:inline text-xs font-mono text-slate-500">
                  (Official Document)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  download="K_R_Sachin_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#080B12] bg-[#00D4C7] hover:bg-[#38BDF8] rounded-lg transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 text-slate-400 hover:text-white transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setIsResumeModalOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Close resume viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF iframe */}
            <div className="flex-1 w-full bg-slate-900 overflow-hidden">
              <iframe
                src={PORTFOLIO_DATA.personal.resumeUrl}
                title="K R Sachin Resume"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
