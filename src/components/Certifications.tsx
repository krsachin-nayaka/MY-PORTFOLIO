import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';
import { Award, Calendar, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-24 bg-[#080B12] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D4C7] mb-2 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Credentials & Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-[#00D4C7] rounded-full mt-3" />
          <p className="text-slate-400 mt-4 max-w-2xl text-base">
            Formal technical certifications across AI/ML development, computer networking, IoT architectures, and engineering toolchains.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-[#101722] border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 hover:shadow-xl hover:shadow-[#38BDF8]/5 transition-all duration-200"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-[#080B12] border border-slate-800 text-[#00D4C7]">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#080B12] border border-slate-800 text-slate-400">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{cert.date}</span>
                </div>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#00D4C7] hover:text-[#38BDF8] font-medium transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-500">
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
