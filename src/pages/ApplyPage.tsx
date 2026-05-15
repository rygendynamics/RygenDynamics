import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Send, CheckCircle2, ArrowLeft, Upload, User, Briefcase, Mail, Phone, MessageSquare } from 'lucide-react';
import heroImage from '../assets/bcd2f326-709e-485d-8eb4-05d544cca7fb.png';

export default function ApplyPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialRole = queryParams.get('role') || 'General Application';

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resume, setResume] = useState<File | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: initialRole,
    linkedin: '',
    portfolio: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-transparent text-stem-navy min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Apply at Rygen" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stem-navy/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm font-semibold group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Careers
          </button>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Apply for <span className="text-stem-blue">{form.role}</span>
          </motion.h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Join Rygen Dynamics and help us shape the future of STEM education worldwide.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="rounded-4xl border border-sky-100 bg-white p-8 md:p-12 shadow-2xl relative -mt-32 z-20">
          {!submitted ? (
            <>
              <div className="mb-10">
                <h2 className="font-bold text-2xl text-stem-navy mb-2">Application Form</h2>
                <p className="text-slate-600">Please fill in your details and we'll be in touch soon.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-stem-navy mb-3 ml-1">
                      <User size={16} className="text-stem-blue" />
                      Full Name *
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-stem-navy placeholder-slate-400 focus:outline-none focus:border-stem-blue focus:bg-white transition-all shadow-sm"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-stem-navy mb-3 ml-1">
                      <Mail size={16} className="text-stem-blue" />
                      Email Address *
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-stem-navy placeholder-slate-400 focus:outline-none focus:border-stem-blue focus:bg-white transition-all shadow-sm"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-stem-navy mb-3 ml-1">
                      <Phone size={16} className="text-stem-blue" />
                      Phone Number *
                    </label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-stem-navy placeholder-slate-400 focus:outline-none focus:border-stem-blue focus:bg-white transition-all shadow-sm"
                      placeholder="+91 0000000000"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-stem-navy mb-3 ml-1">
                      <Briefcase size={16} className="text-stem-blue" />
                      Applying for Role
                    </label>
                    <input
                      readOnly
                      name="role"
                      type="text"
                      value={form.role}
                      className="w-full bg-slate-100 border border-slate-200 rounded-2xl px-5 py-4 text-sm text-stem-navy focus:outline-none opacity-70 cursor-not-allowed shadow-sm"
                    />
                  </div>
                </div>

                {/* Professional Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-stem-navy mb-3 ml-1">
                      LinkedIn Profile
                    </label>
                    <input
                      name="linkedin"
                      type="url"
                      value={form.linkedin}
                      onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-stem-navy placeholder-slate-400 focus:outline-none focus:border-stem-blue focus:bg-white transition-all shadow-sm"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-stem-navy mb-3 ml-1">
                      Portfolio / GitHub
                    </label>
                    <input
                      name="portfolio"
                      type="url"
                      value={form.portfolio}
                      onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-stem-navy placeholder-slate-400 focus:outline-none focus:border-stem-blue focus:bg-white transition-all shadow-sm"
                      placeholder="https://github.com/username"
                    />
                  </div>
                </div>

                {/* Resume Upload Simulation */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-stem-navy mb-3 ml-1">
                    <Upload size={16} className="text-stem-blue" />
                    Upload Resume (PDF) *
                  </label>
                  <div className="w-full border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group relative">
                    <input 
                      type="file" 
                      name="resume"
                      className="absolute inset-0 opacity-0 cursor-pointer" 
                      id="resume-upload" 
                      accept=".pdf" 
                      onChange={(e) => setResume(e.target.files ? e.target.files[0] : null)}
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform">
                        <Upload size={20} className="text-stem-blue" />
                      </div>
                      <p className="text-sm font-bold text-stem-navy">
                        {resume ? resume.name : "Click to upload or drag and drop"}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">PDF format (Max 5MB)</p>
                    </label>
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-stem-navy mb-3 ml-1">
                    <MessageSquare size={16} className="text-stem-blue" />
                    Cover Letter / Notes
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-stem-navy placeholder-slate-400 focus:outline-none focus:border-stem-blue focus:bg-white transition-all shadow-sm resize-none"
                    placeholder="Tell us why you're a great fit for Rygen..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full rounded-full bg-stem-navy px-8 py-5 text-sm font-bold text-white shadow-xl shadow-stem-navy/20 transition hover:bg-stem-teal flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  {loading ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-green-500" />
              </div>
              <h3 className="font-bold text-3xl text-stem-navy mb-4">Application Sent!</h3>
              <p className="text-slate-600 max-w-sm mx-auto mb-8 text-lg">
                Thank you for applying to Rygen Dynamics. Our talent acquisition team will review your application and get back to you within 3-5 business days.
              </p>
              <button 
                onClick={() => navigate('/careers')} 
                className="inline-flex items-center gap-2 rounded-full bg-stem-navy px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-stem-teal"
              >
                Return to Careers
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
