import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, BookOpen, Users, ShieldCheck } from 'lucide-react';
import CTA from '../components/sections/CTA';
import heroImage from '../assets/bcd2f326-709e-485d-8eb4-05d544cca7fb.png';
import imgFeature from '../assets/about_feature.png';
import imgCoreValues from '../assets/core_values.png';
import imgTeam from '../assets/team_graphic.png';

const team = [
  {
    name: 'Leadership Team',
    role: 'Strategy & Vision',
    expertise: 'Program direction and long-term planning',
  },
  {
    name: 'Curriculum Team',
    role: 'Learning Design',
    expertise: 'STEM curriculum and pedagogical frameworks',
  },
  {
    name: 'Technology Team',
    role: 'Platform & Tools',
    expertise: 'Product engineering and classroom technology',
  },
  {
    name: 'Program Team',
    role: 'Training & Support',
    expertise: 'Educator support and implementation readiness',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-transparent text-stem-navy">
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Robotics lab background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stem-navy/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm font-bold tracking-wider text-white"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Premium Robotics & AI Education for <span className="text-stem-blue">Schools</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-white/75"
          >
            We help schools create robust robotics lab environments with the right tools, curriculum, and educator support so every program runs smoothly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-stem-blue px-8 py-4 text-sm font-bold text-white shadow-lg shadow-stem-blue/20 transition hover:bg-stem-teal"
            >
              Contact Us
            </Link>
            <Link
              to="/labs"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-bold text-white/90 transition hover:border-white hover:text-white"
            >
              View Programs
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="inline-block text-sm font-bold uppercase tracking-widest text-white bg-stem-navy px-5 py-2 rounded-full mb-6">Our approach</p>
              <h2 className="text-4xl md:text-5xl font-bold text-stem-navy mb-8 leading-tight">
                A calm, professional experience for schools and educators.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Our focus is on usability, quality, and long-term adoption. From lab layout and hardware to lesson flow and teacher coaching, everything is built to be easy to use and easy to maintain.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-sky-50 bg-sky-50/30 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-stem-navy mb-2">Tailored Lab Design</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Solutions designed around your school's space and learning goals.</p>
                </div>
                <div className="rounded-3xl border border-sky-50 bg-sky-50/30 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-stem-navy mb-2">Curriculum Support</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Robotics and AI content built for classroom delivery and easy adoption.</p>
                </div>
                <div className="rounded-3xl border border-sky-50 bg-sky-50/30 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-stem-navy mb-2">Teacher Enablement</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Training and onboarding for teachers to feel confident in every session.</p>
                </div>
                <div className="rounded-3xl border border-sky-50 bg-sky-50/30 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-stem-navy mb-2">Reliable Support</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Guidance and maintenance so the lab stays classroom-ready.</p>
                </div>
              </div>
            </div>
            <div className="rounded-4xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-stem-blue/10 pointer-events-none" />
              <img
                src={imgFeature}
                alt="Robotics lab overview"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stem-blue text-white">
        <div className="mx-auto max-w-7xl px-6 text-center mb-16">
          <p className="inline-block text-sm font-bold uppercase tracking-widest text-white bg-stem-navy px-5 py-2 rounded-full mb-6">Why choose us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            A more polished school experience than the generic dark-blue template.
          </h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Teacher-friendly', desc: 'Structured resources and training to make every session easy.' },
            { title: 'Scalable', desc: 'Labs designed to grow with your school and student demand.' },
            { title: 'Hands-on', desc: 'Practical robotics learning that excites students.' },
            { title: 'Supportive', desc: 'Ongoing guidance from lab setup through classroom delivery.' },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <h3 className="text-xl font-bold text-stem-navy mb-3 group-hover:scale-105 transition-transform origin-left">{item.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-stem-light-gray">
        <div className="mx-auto max-w-7xl px-6 text-center mb-12">
          <p className="inline-block text-sm font-bold uppercase tracking-widest text-white bg-stem-navy px-5 py-2 rounded-full mb-6">Our team</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-stem-navy">The people building the Rygen experience</h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm group hover:shadow-md transition-all">
              <div className="mb-5 h-20 w-20 overflow-hidden rounded-3xl border border-stem-light-gray mx-auto">
                <img src={imgTeam} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-stem-navy mb-1">{member.name}</h3>
              <div className="text-stem-blue text-sm font-semibold mb-3">{member.role}</div>
              <p className="text-stem-gray text-sm leading-relaxed">{member.expertise}</p>
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
              <p className="inline-block text-sm font-bold uppercase tracking-widest text-white bg-stem-navy px-5 py-2 rounded-full mb-6">Our Core Values</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Empowering the next <span className="text-white">generation</span> of innovators.
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Innovation first', desc: 'Constantly evolving our curriculum to lead the technological curve.' },
                  { title: 'Practical learning', desc: 'Everything we do is focused on hands-on, real-world application.' },
                  { title: 'Global impact', desc: 'Aligning with UN SDGs to solve meaningful global challenges.' }
                ].map((value, i) => (
                  <div key={value.title} className="flex gap-6">
                    <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20 font-bold text-lg">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{value.title}</h3>
                      <p className="text-white/95 leading-relaxed text-sm">{value.desc}</p>
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
                src={imgCoreValues} 
                alt="Innovation and collaboration" 
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
