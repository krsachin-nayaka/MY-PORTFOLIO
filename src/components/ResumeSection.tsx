import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';
import {
  FileText,
  FileDown,
  ExternalLink,
  Printer,
  Sparkles,
  Award,
  CheckCircle2,
  GraduationCap,
  FolderGit2,
  Cpu,
  Layers,
  ShieldCheck,
  Maximize2,
} from 'lucide-react';

interface ResumeSectionProps {
  onOpenFullModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenFullModal }) => {
  return (
    <section id="resume" className="py-24 bg-[#080B12] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D4C7] mb-2 font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>Official Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Resume Document
            </h2>
            <div className="w-12 h-1 bg-[#00D4C7] rounded-full mt-3" />
            <p className="text-slate-400 mt-4 max-w-2xl text-base">
              Comprehensive overview of engineering coursework, technical skills, machine learning projects, and academic credentials.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenFullModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#101722] border border-slate-700 text-slate-200 hover:text-white hover:border-[#00D4C7] text-xs font-semibold transition-all"
            >
              <Maximize2 className="w-4 h-4 text-[#00D4C7]" />
              <span>Full Screen View</span>
            </button>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="K_R_Sachin_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00D4C7] text-[#080B12] hover:bg-[#38BDF8] text-xs font-bold transition-all shadow-lg shadow-[#00D4C7]/20"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Embedded High-Fidelity Paper Resume Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white text-[#0f172a] shadow-2xl p-6 sm:p-12 border border-slate-200 font-sans relative overflow-hidden">
          {/* Paper Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#00D4C7] via-[#38BDF8] to-slate-800" />

          {/* Document Header */}
          <div className="border-b-2 border-slate-900 pb-4 mb-6">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              K R SACHIN
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 font-medium">
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-blue-700 hover:underline">
                {PORTFOLIO_DATA.personal.email}
              </a>
              <span>|</span>
              <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="text-slate-800 hover:underline">
                {PORTFOLIO_DATA.personal.phone}
              </a>
              <span>|</span>
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                github.com/krsachin-nayaka
              </a>
              <span>|</span>
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                linkedin.com/in/krsachin01
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono flex items-center justify-between">
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              Computer Science Engineering student with a strong foundation in IT systems, SQL, DBMS, Operating Systems and Computer Networks. Experienced in data analysis, process monitoring, reporting and automation using Python, MySQL, Power BI and Flask, with exposure to IoT and SAP. Analytical, detail-oriented and quick to learn, seeking a Senior Analyst – Technology Risk role to support IT controls, risk analytics and client engagements.
            </p>
          </div>

          {/* Section: Education */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <span className="font-bold text-slate-900">New Horizon College of Engineering</span>
                  <span className="font-bold font-mono text-slate-900">CGPA: 8.33</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-slate-600">
                  <span>Bachelor of Engineering in Computer Science and Engineering</span>
                  <span className="font-mono">2023 – 2027 (Expected)</span>
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <span className="font-bold text-slate-900">DR TF Boys PU College, Davanagere</span>
                  <span className="font-bold font-mono text-slate-900">Score: 90%</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-slate-600">
                  <span>XII Standard (Department of Pre-University Education, Karnataka)</span>
                  <span className="font-mono">2023</span>
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <span className="font-bold text-slate-900">Sri Vinayaka Education Trust High School, Davanagere</span>
                  <span className="font-bold font-mono text-slate-900">Score: 74%</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-slate-600">
                  <span>X Standard (Karnataka Secondary Education Examination Board)</span>
                  <span className="font-mono">2021</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Projects */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Projects
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900">
                  Smart Waste Management System with Route Optimization
                </h3>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1 mt-1 leading-relaxed">
                  <li>
                    Developed a Machine Learning–based waste management system to predict waste bin fill levels and optimize collection routes, using data analysis to support operational decisions.
                  </li>
                  <li>
                    Built a Flask web application with SQL integration for real-time monitoring, automated exception alerts and route management.
                  </li>
                  <li>
                    Implemented route optimization logic to reduce unnecessary travel distance and improve operational efficiency.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900">
                  Automated Price Tracker and Notifier
                </h3>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1 mt-1 leading-relaxed">
                  <li>
                    Developed a Python-based automated price tracking system to monitor real-time product prices from e-commerce websites using web scraping.
                  </li>
                  <li>
                    Implemented scheduled monitoring and rule-based automated notifications to alert users when product prices dropped below a threshold.
                  </li>
                  <li>
                    Processed and stored historical price data in a database to analyze pricing trends and support informed, data-driven decisions.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Technical Skills */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Technical Skills
            </h2>
            <ul className="text-xs text-slate-700 space-y-1 leading-relaxed">
              <li>
                <strong className="text-slate-900">Programming:</strong> Python, C++
              </li>
              <li>
                <strong className="text-slate-900">Backend Development:</strong> Flask, FastAPI
              </li>
              <li>
                <strong className="text-slate-900">Data Analysis & Reporting:</strong> Pandas, NumPy, Matplotlib, Power BI, Machine Learning, Scikit-learn
              </li>
              <li>
                <strong className="text-slate-900">Database and Query Language:</strong> MySQL, SQL, DBMS
              </li>
              <li>
                <strong className="text-slate-900">Emerging Technologies:</strong> Internet of Things (IoT), SAP Generative AI
              </li>
              <li>
                <strong className="text-slate-900">Web Fundamentals:</strong> HTML, CSS
              </li>
              <li>
                <strong className="text-slate-900">Tools:</strong> Git, GitHub, VS Code, Web Scraping
              </li>
              <li>
                <strong className="text-slate-900">IT & CS Fundamentals:</strong> Operating Systems, Computer Networks, Data Structures and Algorithms, OOP
              </li>
            </ul>
          </div>

          {/* Section: Certifications */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Certifications
            </h2>
            <ul className="text-xs text-slate-700 space-y-1 leading-relaxed">
              <li>• Introduction to Internet of Things | NPTEL | Jan–Apr 2026</li>
              <li>• SAP Certified – SAP Generative AI Developer | SAP | Aug 2026</li>
              <li>• Python for Machine Learning | IIT Bombay Spoken Tutorial | May 2025</li>
              <li>• Git Training | IIT Bombay Spoken Tutorial | Nov 2025</li>
              <li>• Cisco Certified Network Associate (CCNA) | May 2026</li>
            </ul>
          </div>

          {/* Section: Interests */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Interests
            </h2>
            <p className="text-xs text-slate-700">
              Strength Training | Team Sports | Learning new technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
