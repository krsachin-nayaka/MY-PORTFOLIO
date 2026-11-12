import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Education } from './components/Education.tsx';
import { Certifications } from './components/Certifications.tsx';
import { ResumeSection } from './components/ResumeSection.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { PORTFOLIO_DATA } from './data/portfolio.ts';
import { FileText, FileDown, Maximize2 } from 'lucide-react';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] selection:bg-[#00D4C7]/20 selection:text-[#00D4C7] relative">
      {/* Top Navbar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

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

        {/* Dedicated Resume Section with Native Document View */}
        <ResumeSection onOpenFullModal={() => setIsResumeModalOpen(true)} />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action: Instant Resume Preview Trigger */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2">
        <button
          onClick={() => setIsResumeModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#101722]/95 border border-slate-700/80 text-xs font-semibold text-slate-200 hover:text-white hover:border-[#00D4C7] shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-105 cursor-pointer"
          title="Open Resume Document Modal"
        >
          <FileText className="w-4 h-4 text-[#00D4C7]" />
          <span>View Resume</span>
        </button>
      </div>

      {/* Full Resume Modal (Dual-Mode: Formatted Document View + PDF Embed) */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
