import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/bcd2f326-709e-485d-8eb4-05d544cca7fb.png';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', school: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-transparent text-stem-navy">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Robotics lab background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stem-navy/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <span className="inline-flex rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm font-bold tracking-wider text-white">
              Contact Us
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-semibold text-4xl md:text-5xl xl:text-6xl text-white mb-6">
            Contact <span className="text-stem-blue">Our Team</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-white/75 text-xl max-w-xl mx-auto">
            Ready to transform your school? Our team will guide you through every step of the journey.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/about" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white">
              Learn More
            </Link>
            <a href="mailto:rygendynamics@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-stem-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-stem-blue/20 transition hover:bg-stem-teal">
              Send Email
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="pt-24 pb-32 max-w-7xl mx-auto px-6">
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
                className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${item.color}15` }}>
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <div>
                  <div className="text-stem-gray text-xs font-mono uppercase tracking-widest mb-0.5">{item.label}</div>
                  <div className="text-stem-navy font-medium text-sm">{item.value}</div>
                  <div className="text-stem-gray text-xs mt-0.5">{item.sub}</div>
                </div>
              </motion.div>
            ))}

            {/* What happens next */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-3xl border border-stem-blue bg-stem-light-gray p-6"
            >
              <h3 className="font-semibold text-stem-navy mb-4">What happens next?</h3>
              <div className="space-y-3">
                {[
                  'Our team contacts you within 24 hours',
                  'Program discovery consultation call',
                  'Custom roadmap and proposal shared',
                  'Implementation planning and next steps',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-stem-yellow flex items-center justify-center text-[10px] font-bold text-stem-navy shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-stem-gray text-sm">{step}</span>
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
            <div className="rounded-3xl border border-stem-light-gray bg-white p-8 md:p-10 shadow-lg">
              {!submitted ? (
                <>
                  <h2 className="font-semibold text-2xl text-stem-navy mb-2">Book a Free Demo</h2>
                  <p className="text-stem-gray text-sm mb-8">Fill in your details and we'll get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-stem-gray font-mono uppercase tracking-widest mb-2 block">Your Name *</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white border border-stem-light-gray rounded-xl px-4 py-3 text-sm text-stem-navy placeholder-stem-gray focus:outline-none focus:border-stem-blue transition-colors"
                          placeholder="Dr. Priya Sharma"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-stem-gray font-mono uppercase tracking-widest mb-2 block">Email Address *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white border border-stem-light-gray rounded-xl px-4 py-3 text-sm text-stem-navy placeholder-stem-gray focus:outline-none focus:border-stem-blue transition-colors"
                          placeholder="principal@school.edu"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-stem-gray font-mono uppercase tracking-widest mb-2 block">School Name *</label>
                        <input
                          required
                          type="text"
                          value={form.school}
                          onChange={(e) => setForm({ ...form, school: e.target.value })}
                          className="w-full bg-white border border-stem-light-gray rounded-xl px-4 py-3 text-sm text-stem-navy placeholder-stem-gray focus:outline-none focus:border-stem-blue transition-colors"
                          placeholder="Your school name"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-stem-gray font-mono uppercase tracking-widest mb-2 block">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-white border border-stem-light-gray rounded-xl px-4 py-3 text-sm text-stem-navy placeholder-stem-gray focus:outline-none focus:border-stem-blue transition-colors"
                          placeholder="+91 9000000000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-stem-gray font-mono uppercase tracking-widest mb-2 block">Message</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white border border-stem-light-gray rounded-xl px-4 py-3 text-sm text-stem-navy placeholder-stem-gray focus:outline-none focus:border-stem-blue transition-colors resize-none"
                        placeholder="Tell us about your school, student count, and goals..."
                      />
                    </div>
                    <button type="submit" className="w-full rounded-full bg-stem-navy px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-stem-navy/10 transition hover:bg-stem-teal flex items-center justify-center gap-2">
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
                  <h3 className="font-semibold text-2xl text-stem-navy mb-3">Message Sent!</h3>
                  <p className="text-stem-gray max-w-sm mx-auto mb-6">
                    Thank you! Our team will reach out within 24 hours to schedule your free consultation.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="inline-flex items-center gap-2 rounded-full bg-stem-navy px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-stem-navy/10 transition hover:bg-stem-teal">Send Another Message</button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
