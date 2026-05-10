import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Layers, GraduationCap, Trophy, Users, Briefcase, Award, FlaskConical, Rocket
} from 'lucide-react';

const benefits = [
  {
    icon: Layers,
    title: 'Hands-On Learning',
    description: 'Every lesson is built around doing, not just watching. Students build real projects from day one.',
    color: '#0ea5e9',
  },
  {
    icon: GraduationCap,
    title: 'Future-Ready Curriculum',
    description: 'Updated every semester to reflect what top tech companies and universities actually require.',
    color: '#06b6d4',
  },
  {
    icon: Rocket,
    title: 'Innovation Ecosystem',
    description: 'A complete infrastructure — hardware, software, mentors, and maker culture — all in one place.',
    color: '#10b981',
  },
  {
    icon: Users,
    title: 'Teacher Training',
    description: 'Structured educator professional development for program readiness and confidence.',
    color: '#a855f7',
  },
  {
    icon: Briefcase,
    title: 'Industry-Relevant Skills',
    description: 'Curriculum co-designed with tech leaders to ensure students learn skills that matter.',
    color: '#0ea5e9',
  },
  {
    icon: Award,
    title: 'Certification Support',
    description: 'Students earn nationally and globally recognized certifications in AI, robotics, and coding.',
    color: '#06b6d4',
  },
  {
    icon: FlaskConical,
    title: 'Project-Based Learning',
    description: 'Deep problem-solving through semester-long capstone projects that solve real challenges.',
    color: '#10b981',
  },
  {
    icon: Trophy,
    title: 'Competitions & Showcases',
    description: 'Access to national robotics, AI, and innovation competitions to showcase student talent.',
    color: '#a855f7',
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-navy-950">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-blue/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-purple/4 rounded-full blur-[100px]" />
      </div>

      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span className="section-label">Why Schools Choose Us</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-white mb-5"
          >
            More than a lab.{' '}
            <span className="text-gradient">A complete</span>
            <br />
            transformation.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg leading-relaxed"
          >
            From day one, we're partners — not vendors. We handle setup, training, curriculum,
            and ongoing support so your school can focus on what matters: inspiring students.
          </motion.p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="glass-card rounded-2xl p-6 group cursor-default"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${b.color}15`, border: `1px solid ${b.color}25` }}
              >
                <b.icon size={18} style={{ color: b.color }} />
              </div>
              <h3 className="font-display font-semibold text-white text-base mb-2">{b.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-blue rounded-3xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
              Ready to transform your school?
            </h3>
            <p className="text-white/50">
              Build your school\'s STEM roadmap with Rygen Dynamics.
              Our team supports planning, educator enablement, and phased implementation.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex items-center gap-2 text-sm text-white/60">
              <div className="w-4 h-4 rounded-full bg-neon-green/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-green" />
              </div>
              Free program consultation
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <div className="w-4 h-4 rounded-full bg-neon-green/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-green" />
              </div>
              Implementation planning support
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <div className="w-4 h-4 rounded-full bg-neon-green/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-green" />
              </div>
              Ongoing curriculum updates
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
