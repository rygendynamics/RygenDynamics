import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CTA from '../components/sections/CTA';
import heroImage from '../assets/bcd2f326-709e-485d-8eb4-05d544cca7fb.png';

const team = [
  {
    name: 'Leadership Team',
    role: 'Strategy & Vision',
    expertise: 'Program direction and long-term planning',
    img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Curriculum Team',
    role: 'Learning Design',
    expertise: 'STEM curriculum and pedagogical frameworks',
    img: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Technology Team',
    role: 'Platform & Tools',
    expertise: 'Product engineering and classroom technology',
    img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Program Team',
    role: 'Training & Support',
    expertise: 'Educator support and implementation readiness',
    img: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
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
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex rounded-full border border-stem-blue bg-stem-yellow px-4 py-2 text-xs uppercase tracking-[0.35em] text-stem-navy"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight text-white mb-6"
          >
            Robotics labs and AI education designed for schools that feel premium and practical.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/75"
          >
            We help schools create robust robotics lab environments with the right tools, curriculum, and educator support so every program runs smoothly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-stem-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-stem-blue/20 transition hover:bg-stem-teal"
            >
              Contact Us
            </Link>
            <Link
              to="/labs"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white"
            >
              View Programs
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-stem-light-gray">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-stem-blue mb-4">Our approach</p>
              <h2 className="text-3xl font-semibold text-stem-navy mb-6">
                A calm, professional experience for schools and educators.
              </h2>
              <p className="text-stem-gray leading-relaxed mb-8">
                Our focus is on usability, quality, and long-term adoption. From lab layout and hardware to lesson flow and teacher coaching, everything is built to be easy to use and easy to maintain.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-stem-navy mb-2">Tailored Lab Design</h3>
                  <p className="text-stem-gray text-sm leading-relaxed">Solutions designed around your school's space and learning goals.</p>
                </div>
                <div className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-stem-navy mb-2">Curriculum Support</h3>
                  <p className="text-stem-gray text-sm leading-relaxed">Robotics and AI content built for classroom delivery and easy adoption.</p>
                </div>
                <div className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-stem-navy mb-2">Teacher Enablement</h3>
                  <p className="text-stem-gray text-sm leading-relaxed">Training and onboarding for teachers to feel confident in every session.</p>
                </div>
                <div className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-stem-navy mb-2">Reliable Support</h3>
                  <p className="text-stem-gray text-sm leading-relaxed">Guidance and maintenance so the lab stays classroom-ready.</p>
                </div>
              </div>
            </div>
            <div className="rounded-4xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Robotics lab overview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-stem-blue mb-3">Why choose us</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-stem-navy">
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
            <div key={item.title} className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-stem-navy mb-2">{item.title}</h3>
              <p className="text-stem-gray text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-stem-light-gray">
        <div className="mx-auto max-w-7xl px-6 text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-stem-blue mb-3">Our team</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-stem-navy">The people building the Rygen experience</h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm">
              <div className="mb-5 h-20 w-20 overflow-hidden rounded-3xl border border-stem-light-gray mx-auto">
                <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-stem-navy mb-1">{member.name}</h3>
              <div className="text-stem-blue text-sm font-semibold mb-3">{member.role}</div>
              <p className="text-stem-gray text-sm leading-relaxed">{member.expertise}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
