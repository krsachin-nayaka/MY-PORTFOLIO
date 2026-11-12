import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';
import {
  FileText,
  FileDown,
  Printer,
  ExternalLink,
  X,
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Check,
  Eye,
  FileCode,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'formatted' | 'pdf'>('formatted');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumePlainText = `K R SACHIN
sachinnayaka2602@gmail.com | +91 9663089300 | https://github.com/krsachin-nayaka | https://www.linkedin.com/in/krsachin01

PROFESSIONAL SUMMARY
Computer Science Engineering student with a strong foundation in IT systems, SQL, DBMS, Operating Systems and Computer Networks. Experienced in data analysis, process monitoring, reporting and automation using Python, MySQL, Power BI and Flask, with exposure to IoT and SAP. Analytical, detail-oriented and quick to learn, seeking a Senior Analyst – Technology Risk role to support IT controls, risk analytics and client engagements.

EDUCATION
- New Horizon College of Engineering (2023 – 2027 Expected)
  Bachelor of Engineering in Computer Science and Engineering | CGPA: 8.33
- DR TF Boys PU College, Davanagere (2023)
  XII Standard (Department of Pre-University Education, Karnataka) | Score: 90%
- Sri Vinayaka Education Trust High School, Davanagere (2021)
  X Standard (Karnataka Secondary Education Examination Board) | Score: 74%

PROJECTS
1. Smart Waste Management System with Route Optimization
- Developed a Machine Learning–based waste management system to predict waste bin fill levels and optimize collection routes, using data analysis to support operational decisions.
- Built a Flask web application with SQL integration for real-time monitoring, automated exception alerts and route management.
- Implemented route optimization logic to reduce unnecessary travel distance and improve operational efficiency.

2. Automated Price Tracker and Notifier
- Developed a Python-based automated price tracking system to monitor real-time product prices from e-commerce websites using web scraping.
- Implemented scheduled monitoring and rule-based automated notifications to alert users when product prices dropped below a threshold.
- Processed and stored historical price data in a database to analyze pricing trends and support informed, data-driven decisions.

TECHNICAL SKILLS
- Programming: Python, C++
- Backend Development: Flask, FastAPI
- Data Analysis & Reporting: Pandas, NumPy, Matplotlib, Power BI, Machine Learning, Scikit-learn
- Database and Query Language: MySQL, SQL, DBMS
- Emerging Technologies: Internet of Things (IoT), SAP Generative AI
- Web Fundamentals: HTML, CSS
- Tools: Git, GitHub, VS Code, Web Scraping
- IT & CS Fundamentals: Operating Systems, Computer Networks, Data Structures and Algorithms, OOP

CERTIFICATIONS
- Introduction to Internet of Things | NPTEL | Jan–Apr 2026
- SAP Certified – SAP Generative AI Developer | SAP | Aug 2026
- Python for Machine Learning | IIT Bombay Spoken Tutorial | May 2025
- Git Training | IIT Bombay Spoken Tutorial | Nov 2025
- Cisco Certified Network Associate (CCNA) | May 2026

INTERESTS
Strength Training | Team Sports | Learning new technologies`;

    navigator.clipboard.writeText(resumePlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-[92vh] bg-[#101722] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-[#080B12]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#101722] border border-slate-800 text-[#00D4C7]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                K R SACHIN — Curriculum Vitae
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                Official Resume Document
              </p>
            </div>
          </div>

          {/* Mode Switch & Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center p-1 bg-[#101722] rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setViewMode('formatted')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  viewMode === 'formatted'
                    ? 'bg-[#00D4C7] text-[#080B12] font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Document View
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  viewMode === 'pdf'
                    ? 'bg-[#00D4C7] text-[#080B12] font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PDF Embed
              </button>
            </div>

            <button
              onClick={handleCopyText}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101722] border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <FileCode className="w-3.5 h-3.5 text-[#38BDF8]" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101722] border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5 text-[#00D4C7]" />
              <span>Print</span>
            </button>

            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="K_R_Sachin_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00D4C7] text-[#080B12] text-xs font-semibold hover:bg-[#38BDF8] transition-colors shadow-sm shadow-[#00D4C7]/20"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto bg-[#0a0e17] p-4 sm:p-8">
          {viewMode === 'formatted' ? (
            /* High-Fidelity Clean Document Viewer */
            <div className="max-w-3xl mx-auto bg-white text-[#1e293b] rounded-xl shadow-2xl p-6 sm:p-10 font-sans border border-slate-200 printable-resume">
              {/* Document Header */}
              <div className="border-b border-slate-300 pb-4 mb-5 text-center sm:text-left">
                <h1 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">
                  K R SACHIN
                </h1>
                <div className="mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-slate-600 font-medium">
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-blue-600 hover:underline">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                  <span>|</span>
                  <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="text-slate-700 hover:underline">
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                  <span>|</span>
                  <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                    github.com/krsachin-nayaka
                  </a>
                  <span>|</span>
                  <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                    linkedin.com/in/krsachin01
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Computer Science Engineering student with a strong foundation in IT systems, SQL, DBMS, Operating Systems and Computer Networks. Experienced in data analysis, process monitoring, reporting and automation using Python, MySQL, Power BI and Flask, with exposure to IoT and SAP. Analytical, detail-oriented and quick to learn, seeking a Senior Analyst – Technology Risk role to support IT controls, risk analytics and client engagements.
                </p>
              </div>

              {/* Education */}
              <div className="mb-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
                  Education
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-baseline text-xs sm:text-sm">
                      <span className="font-bold text-slate-900">New Horizon College of Engineering</span>
                      <span className="font-bold font-mono text-slate-800">CGPA: 8.33</span>
                    </div>
                    <div className="flex justify-between items-baseline text-xs text-slate-600">
                      <span>Bachelor of Engineering in Computer Science and Engineering</span>
                      <span className="font-mono">2023 – 2027 (Expected)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline text-xs sm:text-sm">
                      <span className="font-bold text-slate-900">DR TF Boys PU College, Davanagere</span>
                      <span className="font-bold font-mono text-slate-800">Score: 90%</span>
                    </div>
                    <div className="flex justify-between items-baseline text-xs text-slate-600">
                      <span>XII Standard (Department of Pre-University Education, Karnataka)</span>
                      <span className="font-mono">2023</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline text-xs sm:text-sm">
                      <span className="font-bold text-slate-900">Sri Vinayaka Education Trust High School, Davanagere</span>
                      <span className="font-bold font-mono text-slate-800">Score: 74%</span>
                    </div>
                    <div className="flex justify-between items-baseline text-xs text-slate-600">
                      <span>X Standard (Karnataka Secondary Education Examination Board)</span>
                      <span className="font-mono">2021</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-5">
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

              {/* Technical Skills */}
              <div className="mb-5">
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

              {/* Certifications */}
              <div className="mb-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
                  Certifications
                </h2>
                <ul className="text-xs text-slate-700 space-y-1 leading-relaxed">
                  <li>
                    Introduction to Internet of Things | NPTEL | Jan–Apr 2026
                  </li>
                  <li>
                    SAP Certified – SAP Generative AI Developer | SAP | Aug 2026
                  </li>
                  <li>
                    Python for Machine Learning | IIT Bombay Spoken Tutorial | May 2025
                  </li>
                  <li>
                    Git Training | IIT Bombay Spoken Tutorial | Nov 2025
                  </li>
                  <li>
                    Cisco Certified Network Associate (CCNA) | May 2026
                  </li>
                </ul>
              </div>

              {/* Interests */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
                  Interests
                </h2>
                <p className="text-xs text-slate-700">
                  Strength Training | Team Sports | Learning new technologies
                </p>
              </div>
            </div>
          ) : (
            /* PDF Object Embed with Fallback Link */
            <div className="w-full h-full flex flex-col items-center justify-center">
              <object
                data={PORTFOLIO_DATA.personal.resumeUrl}
                type="application/pdf"
                className="w-full h-full min-h-[500px] rounded-xl border border-slate-800"
              >
                <div className="p-8 text-center space-y-4 bg-[#101722] rounded-xl border border-slate-800 max-w-md">
                  <FileText className="w-12 h-12 text-[#00D4C7] mx-auto" />
                  <h4 className="text-lg font-bold text-white">Direct PDF Preview</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    If your browser or sandbox prevents embedding PDFs inside this window, switch to <strong>Document View</strong> or open the PDF directly:
                  </p>
                  <div className="flex flex-col gap-2 pt-2">
                    <button
                      onClick={() => setViewMode('formatted')}
                      className="px-4 py-2.5 rounded-lg bg-[#00D4C7] text-[#080B12] text-xs font-semibold"
                    >
                      Switch to Document View
                    </button>
                    <a
                      href={PORTFOLIO_DATA.personal.resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-lg bg-[#080B12] border border-slate-700 text-xs text-white"
                    >
                      Open PDF in New Tab
                    </a>
                  </div>
                </div>
              </object>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
