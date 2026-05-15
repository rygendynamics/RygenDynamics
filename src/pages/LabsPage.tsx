import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Cpu, Lightbulb, Shield, Wrench, BookOpen } from 'lucide-react';
import CTA from '../components/sections/CTA';
import heroImage from '../assets/bcd2f326-709e-485d-8eb4-05d544cca7fb.png';

const facilities = [
  { icon: Cpu, title: 'Robotics kits', description: 'High-quality programmable robotics platforms with sensors, motors, and controllers.' },
  { icon: Lightbulb, title: 'AI integration', description: 'Tools and content that connect robotics with AI and machine learning experiences.' },
  { icon: Wrench, title: 'Classroom setup', description: 'Complete lab planning, equipment installation, and optimized learning spaces.' },
  { icon: Shield, title: 'Safety & support', description: 'Safety-first installation, maintenance guidance, and ongoing technical support.' },
];

const features = [
  { title: 'ENGAGE', description: 'Interactive learning that inspires curiosity.' },
  { title: 'LEARN', description: 'Build skills with structured and smart content.' },
  { title: 'INNOVATE', description: 'Encouraging creativity through real-world applications.' },
  { title: 'SUCCEED', description: 'Empowering learners to achieve and excel.' },
];

export default function LabsPage() {
  return (
    <div className="bg-transparent text-stem-navy">
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Robotics lab setup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stem-navy/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <span className="inline-flex rounded-full border border-stem-blue bg-stem-yellow px-4 py-2 text-xs uppercase tracking-[0.35em] text-stem-navy">Robotics Lab Setup</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-semibold text-4xl md:text-5xl xl:text-6xl text-white mb-6">
            Complete robotics lab setup for <span className="text-stem-blue">modern schools</span>.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-white/75 text-xl max-w-2xl mx-auto">
            We provide everything required to launch a professional robotics lab: equipment, curriculum, teacher training, and long-term support.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-stem-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-stem-blue/20 transition hover:bg-stem-teal">
              Contact Us
            </Link>
            <Link to="/projects" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white">
              View Projects
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-stem-blue mb-4">What we offer</p>
            <h2 className="text-3xl font-semibold text-stem-navy mb-6">
              A single, focused robotics lab solution for schools.
            </h2>
            <p className="text-stem-gray leading-relaxed mb-8">
              This page now highlights only robotics lab setup and facilities, with a cleaner presentation that matches the home page.
            </p>
            <div className="space-y-4">
              <div className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 size={20} className="text-stem-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-stem-navy">Turnkey robotics lab setup</h3>
                    <p className="text-stem-gray text-sm leading-relaxed">Complete equipment, furniture planning, and classroom-ready installation.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 size={20} className="text-stem-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-stem-navy">Curriculum & learning resources</h3>
                    <p className="text-stem-gray text-sm leading-relaxed">Lesson plans, projects, and assessments tailored for robotics learning.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 size={20} className="text-stem-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-stem-navy">Teacher training & support</h3>
                    <p className="text-stem-gray text-sm leading-relaxed">Hands-on coaching so instructors feel confident in the lab.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 size={20} className="text-stem-blue mt-1" />
                  <div>
                    <h3 className="font-semibold text-stem-navy">Ongoing maintenance</h3>
                    <p className="text-stem-gray text-sm leading-relaxed">Safety checks, parts replacement, and remote support for smooth lab operation.</p>
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

      <section className="py-20 bg-stem-light-gray">
        <div className="mx-auto max-w-7xl px-6 text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-stem-blue mb-3">Facilities we provide</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-stem-navy">Everything your robotics classroom needs</h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item) => (
            <div key={item.title} className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-stem-yellow text-stem-navy">
                <item.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-stem-navy mb-2">{item.title}</h3>
              <p className="text-stem-gray text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-stem-light-gray">
        <div className="mx-auto max-w-7xl px-6 text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-stem-blue mb-3">One Platform. Endless Possibilities.</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-stem-navy">ENGAGE</h2>
          <p className="text-stem-gray text-lg max-w-2xl mx-auto">Interactive learning that inspires curiosity.</p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-stem-navy mb-2">{feature.title}</h3>
              <p className="text-stem-gray text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
