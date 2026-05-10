import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const technologies = [
  { name: 'Python', color: '#3776AB', desc: 'Programming Foundation' },
  { name: 'Artificial Intelligence', color: '#0ea5e9', desc: 'Neural Networks & Deep Learning' },
  { name: 'Robotics', color: '#06b6d4', desc: 'Autonomous Systems' },
  { name: 'Internet of Things', color: '#10b981', desc: 'Connected Devices' },
  { name: 'Machine Learning', color: '#a855f7', desc: 'Predictive Models' },
  { name: 'AR/VR', color: '#f59e0b', desc: 'Immersive Experiences' },
  { name: 'Automation', color: '#0ea5e9', desc: 'Smart Workflows' },
  { name: 'Computer Vision', color: '#06b6d4', desc: 'Image Recognition' },
  { name: 'Drone Technology', color: '#10b981', desc: 'Aerial Systems' },
  { name: 'Embedded Systems', color: '#a855f7', desc: 'Hardware Programming' },
];

export default function Technologies() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-navy-950">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-electric-cyan/4 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-purple/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-5"
          >
            <span className="section-label">Technology Stack</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-white mb-5"
          >
            Technologies Students{' '}
            <span className="text-gradient">Master</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            From coding fundamentals to advanced AI — a comprehensive tech education
            aligned with global industry demands.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-card rounded-2xl p-5 text-center group cursor-default relative overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${tech.color}15, transparent 70%)` }}
              />

              {/* Top border glow */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)` }}
              />

              <div className="mb-3 flex items-center justify-center">
                <span className="w-10 h-10 rounded-full" style={{ background: tech.color }} />
              </div>
              <h3
                className="font-display font-semibold text-white text-sm mb-1.5 group-hover:text-white transition-colors"
                style={{ '--tech-color': tech.color } as React.CSSProperties}
              >
                {tech.name}
              </h3>
              <p className="text-white/35 text-[11px] leading-relaxed">{tech.desc}</p>

              {/* Corner accent */}
              <div
                className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ background: tech.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-blue rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="relative">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
              Industry-aligned curriculum, updated every semester
            </h3>
            <p className="text-white/50 max-w-lg mx-auto mb-6">
              Our technology partners include global tech companies ensuring students learn
              tools that are actually used in industry today.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Arduino', 'Raspberry Pi', 'TensorFlow', 'OpenCV', 'React', 'NVIDIA Jetson', 'Scratch', 'micro:bit'].map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-mono text-electric-blue/80 bg-electric-blue/8 border border-electric-blue/15 px-3 py-1.5 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
