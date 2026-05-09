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
    <div className="bg-navy-950 pt-16">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-electric-blue/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
              Get in Touch
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Let's build the future
            <br />
            <span className="text-gradient">together</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-white/50 text-xl max-w-xl mx-auto">
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
              { icon: Mail, label: 'Email Us', value: 'hello@rygendynamics.com', sub: 'We reply within 24 hours', color: '#0ea5e9' },
              { icon: Phone, label: 'Call Us', value: '+91 800 000 0000', sub: 'Mon–Fri, 9am–6pm IST', color: '#06b6d4' },
              { icon: MapPin, label: 'Visit Us', value: 'Bangalore, India', sub: 'By appointment only', color: '#10b981' },
              { icon: Calendar, label: 'Book a Demo', value: 'Schedule a call', sub: 'Free 45-min consultation', color: '#a855f7' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass-card rounded-2xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${item.color}15` }}>
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <div>
                  <div className="text-white/40 text-xs font-mono uppercase tracking-widest mb-0.5">{item.label}</div>
                  <div className="text-white font-medium text-sm">{item.value}</div>
                  <div className="text-white/35 text-xs mt-0.5">{item.sub}</div>
                </div>
              </motion.div>
            ))}

            {/* What happens next */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-blue rounded-2xl p-6"
            >
              <h3 className="font-display font-semibold text-white mb-4">What happens next?</h3>
              <div className="space-y-3">
                {[
                  'Our team contacts you within 24 hours',
                  'Free lab design consultation call',
                  'Custom proposal and pricing shared',
                  'Lab setup begins within 60 days',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-electric-blue/20 flex items-center justify-center text-[10px] font-bold text-electric-blue shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-white/60 text-sm">{step}</span>
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
            <div className="glass-card rounded-3xl p-8 md:p-10">
              {!submitted ? (
                <>
                  <h2 className="font-display font-bold text-2xl text-white mb-2">Book a Free Demo</h2>
                  <p className="text-white/40 text-sm mb-8">Fill in your details and we'll get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-white/40 font-mono uppercase tracking-widest mb-2 block">Your Name *</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-electric-blue/50 transition-colors"
                          placeholder="Dr. Priya Sharma"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-white/40 font-mono uppercase tracking-widest mb-2 block">Email Address *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-electric-blue/50 transition-colors"
                          placeholder="principal@school.edu"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-white/40 font-mono uppercase tracking-widest mb-2 block">School Name *</label>
                        <input
                          required
                          type="text"
                          value={form.school}
                          onChange={(e) => setForm({ ...form, school: e.target.value })}
                          className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-electric-blue/50 transition-colors"
                          placeholder="Your school name"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-white/40 font-mono uppercase tracking-widest mb-2 block">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-electric-blue/50 transition-colors"
                          placeholder="+91 9000000000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-white/40 font-mono uppercase tracking-widest mb-2 block">Primary Interest</label>
                      <select
                        value={form.interest}
                        onChange={(e) => setForm({ ...form, interest: e.target.value })}
                        className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-blue/50 transition-colors"
                      >
                        <option value="" className="bg-navy-900">Select a lab...</option>
                        <option value="ai" className="bg-navy-900">AI Lab</option>
                        <option value="robotics" className="bg-navy-900">Robotics Lab</option>
                        <option value="iot" className="bg-navy-900">IoT Lab</option>
                        <option value="arvr" className="bg-navy-900">AR/VR Lab</option>
                        <option value="coding" className="bg-navy-900">Coding Lab</option>
                        <option value="full" className="bg-navy-900">Full Innovation Campus</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-white/40 font-mono uppercase tracking-widest mb-2 block">Message</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-electric-blue/50 transition-colors resize-none"
                        placeholder="Tell us about your school, student count, and goals..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
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
                  <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-neon-green" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h3>
                  <p className="text-white/50 max-w-sm mx-auto mb-6">
                    Thank you! Our team will reach out within 24 hours to schedule your free consultation.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline text-sm">
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
