import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Send,
  Check,
  Copy,
  AlertCircle,
  HelpCircle,
  Code,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: 'idle' | 'success_mail' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Honest handling: trigger mailto link with pre-filled content, and show deployment integration guide
    const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const encodedBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personal.email}?subject=${encodedSubject}&body=${encodedBody}`;

    // Open native client
    window.location.href = mailtoUrl;

    setSubmissionStatus({
      type: 'success_mail',
      message: `Your default email client has been opened with your message addressed to ${personal.email}.`,
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#101722]/50 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D4C7] mb-2 font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let's Build Something Together.
          </h2>
          <div className="w-12 h-1 bg-[#00D4C7] rounded-full mt-3" />
          <p className="text-slate-400 mt-4 max-w-2xl text-base">
            Have an opportunity, collaboration idea, or interesting technical challenge? Feel free to connect with me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#101722] border border-slate-800 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white pb-3 border-b border-slate-800/80">
                Contact Channels
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#080B12] border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-[#101722] border border-slate-800 text-[#00D4C7] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-mono text-slate-500">Email Address</span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="block text-sm sm:text-base font-semibold text-white hover:text-[#00D4C7] transition-colors truncate"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="p-2 rounded-lg bg-[#101722] border border-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-[#080B12] border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-[#101722] border border-slate-800 text-[#38BDF8] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-mono text-slate-500">Phone & WhatsApp</span>
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      className="block text-sm sm:text-base font-semibold text-white hover:text-[#38BDF8] transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className="p-2 rounded-lg bg-[#101722] border border-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#080B12] border border-slate-800/80 flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-[#101722] border border-slate-800 text-[#00D4C7] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500">Current Base</span>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {personal.location}
                  </p>
                </div>
              </div>

              {/* Profiles Row */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#080B12] border border-slate-800 text-slate-300 hover:border-[#00D4C7] hover:text-[#00D4C7] transition-all text-xs font-semibold"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#080B12] border border-slate-800 text-slate-300 hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all text-xs font-semibold"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation & Real Handlers */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#101722] border border-slate-800 p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your details below. Clicking "Send Message" prepares a verified dispatch to Sachin's inbox.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 transition-colors ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-[#00D4C7] focus:ring-[#00D4C7]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-[#00D4C7] focus:ring-[#00D4C7]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 transition-colors ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-[#00D4C7] focus:ring-[#00D4C7]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your technical challenge, internship role, or collaboration scope..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 transition-colors resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-[#00D4C7] focus:ring-[#00D4C7]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-[#00D4C7] text-[#080B12] hover:bg-[#38BDF8] shadow-lg shadow-[#00D4C7]/20 transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Status Message / Honest Backend Explanation */}
              {submissionStatus.type === 'success_mail' && (
                <div className="mt-6 p-4 rounded-xl bg-[#080B12] border border-[#00D4C7]/40 space-y-2">
                  <div className="flex items-start gap-2.5 text-xs text-[#00D4C7] font-medium">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{submissionStatus.message}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-6 leading-relaxed">
                    Note: To enable direct API form handling without opening a client, simply wire this form to a backend endpoint or services like Formspree, Resend, or EmailJS.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
