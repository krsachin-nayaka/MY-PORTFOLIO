import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';
import {
  Code2,
  Server,
  Cpu,
  Database,
  Sparkles,
  Globe,
  Wrench,
  Layers,
  Terminal,
  CheckCircle2,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    programming: <Code2 className="w-5 h-5 text-[#00D4C7]" />,
    backend: <Server className="w-5 h-5 text-[#38BDF8]" />,
    data_ml: <Cpu className="w-5 h-5 text-[#00D4C7]" />,
    database: <Database className="w-5 h-5 text-[#38BDF8]" />,
    emerging: <Sparkles className="w-5 h-5 text-[#00D4C7]" />,
    web: <Globe className="w-5 h-5 text-[#38BDF8]" />,
    tools: <Wrench className="w-5 h-5 text-[#00D4C7]" />,
    cs_fundamentals: <Layers className="w-5 h-5 text-[#38BDF8]" />,
  };

  const filterTabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'programming', label: 'Programming & Backend' },
    { id: 'data_ml', label: 'Data & Machine Learning' },
    { id: 'cs_fundamentals', label: 'Computer Science Core' },
    { id: 'tools', label: 'Tools & Database' },
  ];

  const filteredCategories = skills.filter((cat) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'programming') {
      return cat.categoryKey === 'programming' || cat.categoryKey === 'backend';
    }
    if (activeFilter === 'data_ml') {
      return cat.categoryKey === 'data_ml' || cat.categoryKey === 'emerging';
    }
    if (activeFilter === 'cs_fundamentals') {
      return cat.categoryKey === 'cs_fundamentals' || cat.categoryKey === 'web';
    }
    if (activeFilter === 'tools') {
      return cat.categoryKey === 'tools' || cat.categoryKey === 'database';
    }
    return true;
  });

  return (
    <section id="skills" className="py-24 bg-[#101722]/50 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D4C7] mb-2 font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Skills & Engineering Stack
            </h2>
            <div className="w-12 h-1 bg-[#00D4C7] rounded-full mt-3" />
          </div>

          {/* Interactive Category Filter Controls (§1.A allowed functional buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#080B12] rounded-xl border border-slate-800">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-[#101722] text-[#00D4C7] border border-slate-700 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.categoryKey}
              className="rounded-2xl bg-[#101722] border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 hover:shadow-xl hover:shadow-[#00D4C7]/5 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#080B12] border border-slate-800 group-hover:border-[#00D4C7]/40 transition-colors">
                    {categoryIcons[category.categoryKey] || <Code2 className="w-5 h-5 text-[#00D4C7]" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {category.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Skill Items List */}
                <div className="space-y-2 mt-4 pt-3 border-t border-slate-800/80">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-sm text-slate-300 py-1 px-2 rounded-lg hover:bg-[#080B12] transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4C7] shrink-0" />
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Coursework & Labs</span>
                <span className="text-slate-400">CS Core</span>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Note Banner */}
        <div className="mt-12 p-5 rounded-xl bg-[#080B12] border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00D4C7]" />
            <p className="text-xs sm:text-sm text-slate-400">
              <strong className="text-slate-200 font-semibold">Honest Engineering Standards:</strong>{' '}
              Skill sets reflect verified coursework at New Horizon College of Engineering, practical project implementations, and industry certifications.
            </p>
          </div>
          <span className="text-xs font-mono text-[#38BDF8] shrink-0">
            No Arbitrary % Bars
          </span>
        </div>
      </div>
    </section>
  );
};
