import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/bcd2f326-709e-485d-8eb4-05d544cca7fb.png';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-stem-navy mb-4">Get in Touch</h2>
              <p className="text-slate-600 leading-relaxed">
                Have questions about setting up a robotics lab at your school? We're here to help you navigate the entire process.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid gap-6">
              {[
                { icon: Mail, label: 'Email Us', value: 'rygendynamics@gmail.com', sub: 'We reply within 24 hours' },
                { icon: Phone, label: 'Call Us', value: '+91 8980005452', sub: 'Mon-Fri, 9am-6pm IST' },
                { icon: MapPin, label: 'Visit Us', value: 'India (by appointment)', sub: 'Online and onsite meetings available' },
                { icon: Calendar, label: 'Book a Demo', value: 'Schedule a call', sub: 'Free 45-min consultation' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="group flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-stem-blue shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <div className="text-stem-navy font-bold text-lg mb-0.5">{item.label}</div>
                    <div className="text-slate-700 font-medium text-sm">{item.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* What happens next */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 rounded-4xl bg-stem-navy text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-stem-blue/20 rounded-full blur-3xl -mr-16 -mt-16" />
              <h3 className="text-xl font-bold mb-6 relative z-10">What happens next?</h3>
              <div className="space-y-4 relative z-10">
                {[
                  'Our team contacts you within 24 hours',
                  'Program discovery consultation call',
                  'Custom roadmap and proposal shared',
                  'Implementation planning and next steps',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-stem-blue/20 flex items-center justify-center text-xs font-bold text-stem-blue shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-white/80 text-sm leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-4xl border border-sky-100 bg-white p-8 md:p-12 shadow-2xl relative">
              {!submitted ? (
                <>
                  <div className="mb-10">
                    <h2 className="font-bold text-3xl text-stem-navy mb-3">Book a Free Demo</h2>
                    <p className="text-slate-600">Fill in your details and we'll get back to you within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-bold text-stem-navy mb-2 block ml-1">Your Name *</label>
                        <input
                          required
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-stem-navy placeholder-slate-400 focus:outline-none focus:border-stem-blue focus:bg-white transition-all shadow-sm"
                          placeholder="Dr. Priya Sharma"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-bold text-stem-navy mb-2 block ml-1">Email Address *</label>
                        <input
                          required
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-stem-navy placeholder-slate-400 focus:outline-none focus:border-stem-blue focus:bg-white transition-all shadow-sm"
                          placeholder="principal@school.edu"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-bold text-stem-navy mb-2 block ml-1">School Name *</label>
                        <input
                          required
                          name="school"
                          type="text"
                          value={form.school}
                          onChange={(e) => setForm({ ...form, school: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-stem-navy placeholder-slate-400 focus:outline-none focus:border-stem-blue focus:bg-white transition-all shadow-sm"
                          placeholder="Your school name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-bold text-stem-navy mb-2 block ml-1">Phone Number</label>
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-stem-navy placeholder-slate-400 focus:outline-none focus:border-stem-blue focus:bg-white transition-all shadow-sm"
                          placeholder="+91 9000000000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-bold text-stem-navy mb-2 block ml-1">Message</label>
                      <textarea
                        required
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-stem-navy placeholder-slate-400 focus:outline-none focus:border-stem-blue focus:bg-white transition-all shadow-sm resize-none"
                        placeholder="Tell us about your school and goals..."
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
                          <span>Send Message & Book Demo</span>
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
                  <h3 className="font-bold text-3xl text-stem-navy mb-4">Message Sent!</h3>
                  <p className="text-slate-600 max-w-sm mx-auto mb-8 text-lg">
                    Thank you! Our team will reach out within 24 hours to schedule your free consultation.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="inline-flex items-center gap-2 rounded-full bg-stem-navy px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-stem-teal">Send Another Message</button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
