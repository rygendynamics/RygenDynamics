import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Lightbulb, Cpu } from 'lucide-react';

const stats = [
  { value: 500, suffix: '+', label: 'Schools Partnered' },
  { value: 50, suffix: 'K+', label: 'Students Trained' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { value: 15, suffix: '+', label: 'Countries' },
];

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To democratize access to cutting-edge technology education, empowering every student to become a builder, thinker, and innovator in the digital age.',
    color: 'from-electric-blue to-electric-cyan',
    glow: 'rgba(14,165,233,0.15)',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'A world where every school is a fully-equipped innovation campus — where students design robots, train AI, and build solutions for real-world challenges.',
    color: 'from-neon-purple to-electric-blue',
    glow: 'rgba(168,85,247,0.15)',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    text: 'We believe learning happens best when students create. Our approach centers on hands-on projects, maker culture, and experiential discovery.',
    color: 'from-electric-cyan to-neon-green',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    icon: Cpu,
    title: 'Future-Ready',
    text: 'Our curriculum stays ahead of industry trends — covering AI, robotics, IoT, and emerging technologies that will define the next decade.',
    color: 'from-neon-purple to-neon-pink',
    glow: 'rgba(168,85,247,0.15)',
  },
];

function AnimatedStat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-display font-bold text-4xl md:text-5xl text-gradient mb-2">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
        >
          {inView ? value : 0}{suffix}
        </motion.span>
      </div>
      <div className="text-white/40 text-sm">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="about" className="relative py-32 overflow-hidden bg-navy-950">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-purple/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-5"
          >
            <span className="section-label">About Rygen Dynamics</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            We're building the{' '}
            <span className="text-gradient">operating system</span>
            <br />
            for future education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Rygen Dynamics partners with schools to deploy world-class technology labs,
            train educators, and deliver a curriculum that prepares students for the AI-powered world.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="glass-card rounded-2xl p-6 group cursor-default"
              style={{ '--glow-color': p.glow } as React.CSSProperties}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} p-0.5 mb-5`}>
                <div className="w-full h-full rounded-xl bg-navy-950 flex items-center justify-center">
                  <p.icon size={22} className="text-electric-blue group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="font-display font-semibold text-white text-lg mb-3">{p.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-blue rounded-3xl p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimatedStat key={s.label} {...s} delay={0.6 + i * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Story section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="section-label mb-6 inline-flex">Our Story</span>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
              Born from the belief that{' '}
              <span className="text-gradient">every student</span>{' '}
              deserves access to the future
            </h3>
            <p className="text-white/50 leading-relaxed mb-5">
              Rygen Dynamics was founded with one bold conviction: the gap between what students learn
              and what the world needs is too large and too dangerous to ignore. We set out to close it.
            </p>
            <p className="text-white/50 leading-relaxed">
              By combining world-class hardware, AI-driven curriculum, and expert educator training,
              we've helped hundreds of schools transform into true innovation campuses — places where
              the next generation of engineers, inventors, and entrepreneurs are being shaped.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Students in AI lab"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/60 to-transparent" />
              {/* Holographic overlay */}
              <div className="absolute inset-0 border border-electric-blue/20 rounded-2xl" />
              <div className="absolute top-4 left-4 section-label text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                Live Innovation Campus
              </div>
            </div>
            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass-blue rounded-2xl p-4 shadow-glow-blue"
            >
              <div className="font-display font-bold text-3xl text-gradient">98%</div>
              <div className="text-white/50 text-xs mt-0.5">Student Engagement</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
