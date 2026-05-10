import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-navy-950">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-electric-blue/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-neon-purple/6 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-electric-cyan/5 rounded-full blur-[80px]" />
      </div>

      {/* Orbiting rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
        <div className="absolute inset-0 rounded-full border border-electric-blue/30 animate-spin-slow" />
        <div className="absolute inset-[60px] rounded-full border border-electric-cyan/20" style={{ animation: 'spin 18s linear infinite reverse' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            Ready to Transform?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
          Bring the Future
          <br />
          to{' '}
          <span className="text-gradient">Your School</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Start your STEM journey with structured programs, educator enablement, and practical learning pathways.
          We support your rollout planning from discovery to implementation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link to="/contact" className="btn-primary flex items-center gap-2 text-base px-8 py-4 animate-glow-pulse">
            <Calendar size={18} />
            <span>Schedule a Demo</span>
          </Link>
          <Link to="/contact" className="btn-outline flex items-center gap-2 text-base px-8 py-4">
            Contact Our Team
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 text-white/30 text-sm"
        >
          {[
            '✓ Free consultation',
            '✓ Program planning support',
            '✓ Ongoing educator support',
            '✓ Custom learning pathways',
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
