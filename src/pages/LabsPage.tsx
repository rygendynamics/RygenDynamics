import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Cpu, Lightbulb, Shield, Wrench, BookOpen } from 'lucide-react';
import CTA from '../components/sections/CTA';
import heroImage from '../assets/bcd2f326-709e-485d-8eb4-05d544cca7fb.png';
import imgApproach from '../assets/our_approach.png';
import imgSetupJourney from '../assets/setup_journey.png';

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
            <span className="inline-flex rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm font-bold tracking-wider text-white">Robotics Lab Setup</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-semibold text-4xl md:text-5xl xl:text-6xl text-white mb-6">
            Premium Robotics & AI Education for <span className="text-stem-blue">Schools</span>.
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
            <p className="text-2xl font-bold text-stem-navy tracking-widest uppercase mb-4">What we offer</p>
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
                    <p className="text-stem-gray text-sm leading-relaxed">Hands-on teacher coaching and dedicated expert tutoring support included in our package.</p>
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

          <div className="rounded-4xl overflow-hidden bg-white">
            <img src={heroImage} alt="Robotics lab setup" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-stem-blue text-white">
        <div className="mx-auto max-w-7xl px-6 text-center mb-16">
          <p className="inline-block text-sm font-bold uppercase tracking-widest text-white bg-stem-navy px-5 py-2 rounded-full mb-6">Facilities we provide</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Everything your robotics classroom needs</h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item) => (
            <div key={item.title} className="rounded-3xl bg-sky-50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-stem-blue shadow-md">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-stem-navy mb-3">{item.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="inline-block text-sm font-bold uppercase tracking-widest text-white bg-stem-navy px-5 py-2 rounded-full mb-6">Our approach</p>
              <h2 className="text-3xl md:text-5xl font-bold text-stem-navy mb-8 leading-tight">
                A calm, professional experience for schools and educators.
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                Our focus is on usability, quality, and long-term adoption. From lab layout and hardware to lesson flow, teacher coaching, and expert tutoring support, everything is built to be easy to use and effortless to maintain.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-sky-50 rounded-3xl blur-3xl" />
              <img 
                src={imgApproach} 
                alt="Our approach" 
                className="relative rounded-3xl shadow-2xl border border-sky-100"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stem-light-gray">
        <div className="mx-auto max-w-7xl px-6 text-center mb-12">
          <p className="inline-block text-sm font-bold uppercase tracking-widest text-white bg-stem-navy px-5 py-2 rounded-full mb-6">One Platform. Endless Possibilities.</p>
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

      <section className="py-24 bg-stem-blue text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="inline-block text-sm font-bold uppercase tracking-widest text-white bg-stem-navy px-5 py-2 rounded-full mb-6">Lab Setup Journey</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                From concept to <span className="text-white">classroom</span> in weeks.
              </h2>
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Consultation', desc: 'We assess your school requirements and space to design a custom lab layout.' },
                  { step: '02', title: 'Installation', desc: 'Full hardware setup, robotics equipment, and classroom furniture installation.' },
                  { step: '03', title: 'Training & Tutoring', desc: 'Intensive teacher training and dedicated expert tutoring support from our team to ensure seamless delivery.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20 font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-white/95 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-3xl" />
              <img 
                src={imgSetupJourney} 
                alt="Lab installation" 
                className="relative rounded-3xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
