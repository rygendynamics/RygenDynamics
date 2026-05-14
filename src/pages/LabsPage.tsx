import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Cpu, Lightbulb, Shield, Wrench, BookOpen } from 'lucide-react';
import CTA from '../components/sections/CTA';
import heroImage from '../../bcd2f326-709e-485d-8eb4-05d544cca7fb.png';

const facilities = [
  { icon: Cpu, title: 'Robotics kits', description: 'High-quality programmable robotics platforms with sensors, motors, and controllers.' },
  { icon: Lightbulb, title: 'AI integration', description: 'Tools and content that connect robotics with AI and machine learning experiences.' },
  { icon: Wrench, title: 'Classroom setup', description: 'Complete lab planning, equipment installation, and optimized learning spaces.' },
  { icon: Shield, title: 'Safety & support', description: 'Safety-first installation, maintenance guidance, and ongoing technical support.' },
];

export default function LabsPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Robotics lab setup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-600"
          >
            Robotics Lab Setup
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-6"
          >
            Complete robotics lab setup for modern schools.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80"
          >
            We provide everything required to launch a professional robotics lab: equipment, curriculum, teacher training, and long-term support.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-500 mb-4">What we offer</p>
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">
              A single, focused robotics lab solution for schools.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              This page now highlights only robotics lab setup and facilities, with a cleaner presentation that matches the home page.
            </p>
            <div className="space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3 text-slate-900">
                  <CheckCircle2 size={20} className="text-sky-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Turnkey robotics lab setup</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Complete equipment, furniture planning, and classroom-ready installation.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3 text-slate-900">
                  <CheckCircle2 size={20} className="text-sky-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Curriculum & learning resources</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Lesson plans, projects, and assessments tailored for robotics learning.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3 text-slate-900">
                  <CheckCircle2 size={20} className="text-sky-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Teacher training & support</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Hands-on coaching so instructors feel confident in the lab.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3 text-slate-900">
                  <CheckCircle2 size={20} className="text-sky-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Ongoing maintenance</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Safety checks, parts replacement, and remote support for smooth lab operation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-4xl overflow-hidden shadow-xl">
            <img src={heroImage} alt="Robotics lab setup" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-500 mb-3">Facilities we provide</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Everything your robotics classroom needs</h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-100 text-sky-600">
                <item.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-500 mb-3">Ready for your school</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">Robotics lab setup that feels simple, sharp, and professional.</h2>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400">
            <BookOpen size={16} /> Contact Us
          </Link>
        </div>
      </section>

      <CTA />
    </div>
  );
}
