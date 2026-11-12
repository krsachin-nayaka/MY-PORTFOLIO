import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 bg-[#101722]/50 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D4C7] mb-2 font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education
          </h2>
          <div className="w-12 h-1 bg-[#00D4C7] rounded-full mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {education.map((item, index) => (
            <div key={item.degree} className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#080B12] border-2 border-[#00D4C7] group-hover:bg-[#00D4C7] transition-colors" />

              <div className="rounded-2xl bg-[#101722] border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.degree}
                    </h3>
                    <p className="text-base font-semibold text-[#00D4C7] mt-0.5">
                      {item.institution}
                    </p>
                  </div>

                  {/* Academic Score Badge */}
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#080B12] border border-slate-700/80 self-start sm:self-auto">
                    <Award className="w-4 h-4 text-[#00D4C7]" />
                    <span className="text-xs font-mono text-slate-400">{item.scoreLabel}:</span>
                    <span className="text-sm font-bold font-mono text-white tabular-nums">
                      {item.score}
                    </span>
                  </div>
                </div>

                {/* Meta details: period & location */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>{item.period}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                {/* Details / Coursework highlights */}
                {item.details && item.details.length > 0 && (
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-[#00D4C7] mt-1">›</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
