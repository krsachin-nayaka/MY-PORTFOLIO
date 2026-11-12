import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolio.ts';
import {
  Github,
  ExternalLink,
  Layers,
  CheckCircle2,
  FolderGit2,
  Info,
  X,
  Workflow,
  Sparkles,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  return (
    <section id="projects" className="py-24 bg-[#080B12] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D4C7] mb-2 font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-[#00D4C7] rounded-full mt-3" />
          <p className="text-slate-400 mt-4 max-w-2xl text-base">
            End-to-end practical implementations built with Python, SQL databases, analytical algorithms, and intelligent systems logic.
          </p>
        </div>

        {/* Project Showcase List (Large Editorial Cards) */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-[#101722] border border-slate-800 overflow-hidden shadow-2xl hover:border-slate-700 transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual Preview Container */}
                  <div
                    className={`lg:col-span-6 relative overflow-hidden bg-[#080B12] min-h-[320px] lg:min-h-[440px] flex items-center justify-center p-6 sm:p-8 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101722] via-transparent to-transparent opacity-80 z-10" />

                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="relative z-0 w-full h-full object-cover rounded-2xl border border-slate-800 shadow-xl group-hover:scale-[1.02] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Category Label overlay */}
                    <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-md bg-[#080B12]/80 backdrop-blur-md border border-slate-700/80 text-xs font-mono font-medium text-[#00D4C7]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Details Content */}
                  <div
                    className={`lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                        <span>PROJECT 0{index + 1}</span>
                        <span>·</span>
                        <span className="text-[#38BDF8]">SYSTEM IMPLEMENTATION</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                        {project.title}
                      </h3>

                      <p className="mt-4 text-slate-300 text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Features Bullet Points */}
                      <div className="mt-6 space-y-2.5">
                        <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 font-semibold">
                          Core Functional Highlights:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {project.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4C7] shrink-0 mt-0.5" />
                              <span className="leading-tight">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-800">
                      {/* Technology Stack Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-md bg-[#080B12] border border-slate-800 text-slate-300 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links & Deep Dive Modal Trigger */}
                      <div className="flex flex-wrap items-center gap-3">
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#080B12] text-slate-200 border border-slate-700 hover:border-[#00D4C7] hover:text-[#00D4C7] transition-all"
                          >
                            <Github className="w-4 h-4" />
                            <span>View GitHub</span>
                          </a>
                        ) : null}

                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#00D4C7] text-[#080B12] hover:bg-[#38BDF8] transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        ) : (
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-[#101722] text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200 transition-all"
                            title="Inspect Architecture Breakdown"
                          >
                            <Workflow className="w-3.5 h-3.5 text-[#38BDF8]" />
                            <span>Architecture & Specs</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Architecture & Specs Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#101722] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#080B12] border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#00D4C7] mb-2 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Specification & Config</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#080B12] border border-slate-800">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  Technical Architecture
                </h4>
                <p className="text-sm text-slate-300">
                  {selectedProject.architectureNote || 'Built with modular Python backend and relational database structures.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#080B12] border border-slate-800">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  Custom URL Configuration
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Project repository links and live URLs can be updated anytime in{' '}
                  <code className="text-[#00D4C7] font-mono bg-slate-900 px-1.5 py-0.5 rounded">
                    src/data/portfolio.ts
                  </code>{' '}
                  under <code className="text-[#38BDF8] font-mono">projects[{selectedProject.id}].githubUrl</code> and <code className="text-[#38BDF8] font-mono">demoUrl</code>.
                </p>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#00D4C7] text-[#080B12] text-xs font-semibold hover:bg-[#38BDF8] transition-colors"
                  >
                    Open GitHub Profile
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg bg-[#080B12] border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
