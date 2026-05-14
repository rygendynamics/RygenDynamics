import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', school: '', phone: '', message: '', interest: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-100" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-600">
              Get in Touch
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-semibold text-4xl md:text-5xl xl:text-6xl text-slate-900 mb-6">
            Let's build the future
            <br />
            <span className="text-sky-600">together</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-slate-600 text-xl max-w-xl mx-auto">
            Ready to transform your school? Our team will guide you through every step of the journey.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info cards */}
            {[
              { icon: Mail, label: 'Email Us', value: 'rygendynamics@gmail.com', sub: 'We reply within 24 hours', color: '#0ea5e9' },
              { icon: Phone, label: 'Call Us', value: '+91 8980005452', sub: 'Mon-Fri, 9am-6pm IST', color: '#06b6d4' },
              { icon: MapPin, label: 'Visit Us', value: 'India (by appointment)', sub: 'Online and onsite meetings available', color: '#10b981' },
              { icon: Calendar, label: 'Book a Demo', value: 'Schedule a call', sub: 'Free 45-min consultation', color: '#a855f7' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${item.color}15` }}>
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-0.5">{item.label}</div>
                  <div className="text-slate-900 font-medium text-sm">{item.value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{item.sub}</div>
                </div>
              </motion.div>
            ))}

            {/* What happens next */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-3xl border border-sky-200 bg-sky-50 p-6"
            >
              <h3 className="font-semibold text-slate-900 mb-4">What happens next?</h3>
              <div className="space-y-3">
                {[
                  'Our team contacts you within 24 hours',
                  'Program discovery consultation call',
                  'Custom roadmap and proposal shared',
                  'Implementation planning and next steps',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center text-[10px] font-bold text-sky-700 shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-slate-600 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-lg">
              {!submitted ? (
                <>
                  <h2 className="font-semibold text-2xl text-slate-900 mb-2">Book a Free Demo</h2>
                  <p className="text-slate-600 text-sm mb-8">Fill in your details and we'll get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-2 block">Your Name *</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-300 transition-colors"
                          placeholder="Dr. Priya Sharma"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-2 block">Email Address *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-300 transition-colors"
                          placeholder="principal@school.edu"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-2 block">School Name *</label>
                        <input
                          required
                          type="text"
                          value={form.school}
                          onChange={(e) => setForm({ ...form, school: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-300 transition-colors"
                          placeholder="Your school name"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-2 block">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-300 transition-colors"
                          placeholder="+91 9000000000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-2 block">Primary Interest</label>
                      <select
                        value={form.interest}
                        onChange={(e) => setForm({ ...form, interest: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-sky-300 transition-colors"
                      >
                        <option value="">Select an area...</option>
                        <option value="ai">AI & ML Program</option>
                        <option value="robotics">Robotics Program</option>
                        <option value="iot">IoT Program</option>
                        <option value="arvr">AR/VR Program</option>
                        <option value="coding">Coding Program</option>
                        <option value="integrated">Integrated STEM Pathway</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-2 block">Message</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-300 transition-colors resize-none"
                        placeholder="Tell us about your school, student count, and goals..."
                      />
                    </div>
                    <button type="submit" className="w-full rounded-full bg-slate-900 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 flex items-center justify-center gap-2">
                      <Send size={16} />
                      <span>Send Message & Book Demo</span>
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-semibold text-2xl text-slate-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-600 max-w-sm mx-auto mb-6">
                    Thank you! Our team will reach out within 24 hours to schedule your free consultation.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">Send Another Message</button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
