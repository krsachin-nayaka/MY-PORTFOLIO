import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';
import {
  GraduationCap,
  Building2,
  Award,
  Calendar,
  Code2,
  Cpu,
  Target,
  Sparkles,
} from 'lucide-react';

export const About: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

  const keyFactsIcons: Record<string, React.ReactNode> = {
    Education: <GraduationCap className="w-4 h-4 text-[#00D4C7]" />,
    College: <Building2 className="w-4 h-4 text-[#38BDF8]" />,
    CGPA: <Award className="w-4 h-4 text-[#00D4C7]" />,
    Graduation: <Calendar className="w-4 h-4 text-[#38BDF8]" />,
    'Primary Language': <Code2 className="w-4 h-4 text-[#00D4C7]" />,
    Focus: <Cpu className="w-4 h-4 text-[#38BDF8]" />,
  };

  return (
    <section id="about" className="py-24 bg-[#080B12] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D4C7] mb-2 font-semibold">
            <Target className="w-3.5 h-3.5" />
            <span>Profile & Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {about.heading}
          </h2>
          <div className="w-12 h-1 bg-[#00D4C7] rounded-full mt-3" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Prose */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Core Drive & Philosophy */}
            <div className="mt-8 p-5 rounded-xl bg-[#101722] border border-slate-800">
              <div className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                <Sparkles className="w-4 h-4 text-[#00D4C7]" />
                <span>Areas of Technical Curiosity</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {about.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#080B12] border border-slate-800 text-slate-300 font-medium hover:border-[#00D4C7]/40 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Information Cards */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#101722] border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#00D4C7]/5 rounded-bl-full pointer-events-none" />

              <h3 className="text-lg font-bold text-white mb-6 pb-3 border-b border-slate-800/80 flex items-center justify-between">
                <span>Key Information</span>
                <span className="text-xs font-mono text-slate-500">ENGINEERING OVERVIEW</span>
              </h3>

              <div className="space-y-4">
                {about.keyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="p-3.5 rounded-xl bg-[#080B12] border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-[#101722] border border-slate-800 shrink-0 mt-0.5">
                      {keyFactsIcons[fact.label] || <Award className="w-4 h-4 text-[#00D4C7]" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-slate-400">{fact.label}</p>
                      <p className="text-sm sm:text-base font-semibold text-white mt-0.5 break-words">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified academic context snippet */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Bangalore VTU Affiliated</span>
                <span className="text-[#00D4C7]">Full-Time Student</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
