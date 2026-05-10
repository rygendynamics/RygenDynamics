import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Award, TrendingUp } from 'lucide-react';
import CTA from '../components/sections/CTA';

const team = [
  { name: 'Leadership Team', role: 'Strategy & Vision', expertise: 'Program direction and long-term planning', img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Curriculum Team', role: 'Learning Design', expertise: 'STEM curriculum and pedagogical frameworks', img: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Technology Team', role: 'Platform & Tools', expertise: 'Product engineering and classroom technology', img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Program Team', role: 'Training & Support', expertise: 'Educator support and implementation readiness', img: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const milestones = [
  { id: 1, title: 'Formed the Team', desc: 'Core team assembly and curriculum research.' },
  { id: 2, title: 'Curriculum Development', desc: 'Designing hands-on STEM modules and educator resources.' },
  { id: 3, title: 'Pilot Programs', desc: 'Planning pilot programs with educators and institutions.' },
  { id: 4, title: 'Platform Build', desc: 'Developing our digital platform for classroom learning.' },
  { id: 5, title: 'Partnerships', desc: 'Establishing partnerships with schools and education stakeholders.' },
];

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-navy-950 pt-16">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-electric-blue/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <span className="section-label">About Us</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            We're reimagining
            <br />
            <span className="text-gradient">education for tomorrow</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Rygen Dynamics was built on the conviction that access to world-class technology education shouldn't be a privilege — it should be a right for every student, in every school.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-900">
        <div className="section-divider absolute" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: 'Early Stage', label: 'Startup Phase', color: '#0ea5e9' },
              { icon: Globe, value: 'Curriculum', label: 'STEM Modules', color: '#06b6d4' },
              { icon: Award, value: 'Pilots', label: 'Pilot Programs', color: '#10b981' },
              { icon: TrendingUp, value: 'Focus', label: 'Educator Support', color: '#a855f7' },
            ].map((stat) => (
              <Section key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${stat.color}15` }}>
                  <stat.icon size={22} style={{ color: stat.color }} />
                </div>
                <div className="font-display font-bold text-4xl text-gradient mb-1">{stat.value}</div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Section>
            <span className="section-label mb-6 inline-flex">Our Mission</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              Building an ecosystem for technology-driven education
            </h2>
            <p className="text-white/50 leading-relaxed mb-5">
              Our mission is to build an ecosystem focused on leveraging technology in education where Robotics, Coding, Artificial Intelligence and AR/VR are utilized as powerful tools to help students think smarter, learn better and solve real-world problems with confidence.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              Through practical modules, educator support, and project-based experiences, we help schools build future-ready learning environments for K-12 students.
            </p>
            <Link to="/programs" className="btn-primary inline-flex items-center gap-2">
              <span>Explore Our Programs</span>
              <ArrowRight size={16} />
            </Link>
          </Section>
          <Section>
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Innovation Lab" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/60 to-transparent" />
              <div className="absolute inset-0 border border-electric-blue/15 rounded-2xl" />
            </div>
          </Section>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy-900">
        <div className="section-divider absolute" />
        <div className="max-w-7xl mx-auto px-6">
          <Section className="text-center mb-16">
            <span className="section-label mb-5 inline-flex">Our Journey</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Building step by step toward <span className="text-gradient">future-ready learning</span>
            </h2>
          </Section>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue/30 via-electric-cyan/20 to-transparent" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <Section key={m.id} className={`flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} pl-12 md:pl-0`}>
                    <div className="glass-card rounded-2xl p-5 inline-block text-left">
                      <div className="text-xs font-mono text-electric-blue mb-1">STEP {m.id}</div>
                      <h3 className="font-display font-semibold text-white text-base mb-1">{m.title}</h3>
                      <p className="text-white/40 text-sm">{m.desc}</p>
                    </div>
                  </div>
                  <div className="absolute md:relative left-0 md:left-auto flex items-start justify-center md:w-8 md:shrink-0 pt-4 md:pt-0 md:items-center">
                    <div className="w-4 h-4 rounded-full bg-electric-blue border-2 border-navy-900 shadow-glow-blue shrink-0" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </Section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <Section className="text-center mb-16">
          <span className="section-label mb-5 inline-flex">Our Team</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            The people behind <span className="text-gradient">Rygen</span>
          </h2>
        </Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <Section key={member.name}>
              <div className="glass-card rounded-2xl overflow-hidden text-center p-6 group cursor-default">
                <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-4 border-2 border-electric-blue/20 group-hover:border-electric-blue/50 transition-colors">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-0.5">{member.name}</h3>
                <div className="text-electric-blue text-sm font-medium mb-1.5">{member.role}</div>
                <div className="text-white/35 text-xs">{member.expertise}</div>
              </div>
            </Section>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
