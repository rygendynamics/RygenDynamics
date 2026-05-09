import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Cpu, Wifi, Glasses, Code2, BarChart3, Lightbulb, Monitor, ArrowRight } from 'lucide-react';

const labs = [
  {
    icon: Brain,
    title: 'AI Lab',
    description: 'Explore neural networks, computer vision, and natural language processing with industry-grade tools and datasets.',
    gradient: 'from-electric-blue to-electric-cyan',
    glow: 'rgba(14,165,233,0.3)',
    tag: 'Grade 6-12',
    features: ['Neural Networks', 'Computer Vision', 'NLP'],
  },
  {
    icon: Cpu,
    title: 'Robotics Lab',
    description: 'Design, build, and program robots — from simple automation arms to autonomous navigation systems.',
    gradient: 'from-electric-cyan to-neon-green',
    glow: 'rgba(6,182,212,0.3)',
    tag: 'Grade 4-12',
    features: ['Arduino', 'Raspberry Pi', 'Servo Systems'],
  },
  {
    icon: Wifi,
    title: 'IoT Lab',
    description: 'Connect the physical and digital worlds by building smart sensors, home automation, and connected devices.',
    gradient: 'from-neon-green to-electric-blue',
    glow: 'rgba(16,185,129,0.3)',
    tag: 'Grade 5-12',
    features: ['Smart Sensors', 'Home Automation', 'Cloud Dashboards'],
  },
  {
    icon: Glasses,
    title: 'AR/VR Lab',
    description: 'Immersive learning environments using augmented and virtual reality for science, history, and design.',
    gradient: 'from-neon-purple to-electric-blue',
    glow: 'rgba(168,85,247,0.3)',
    tag: 'Grade 3-12',
    features: ['Virtual Worlds', 'AR Simulations', '3D Design'],
  },
  {
    icon: Code2,
    title: 'Coding Lab',
    description: 'From Scratch to Python, JavaScript, and beyond — structured coding pathways for every skill level.',
    gradient: 'from-electric-blue to-neon-purple',
    glow: 'rgba(14,165,233,0.3)',
    tag: 'Grade 1-12',
    features: ['Python', 'Web Dev', 'App Building'],
  },
  {
    icon: BarChart3,
    title: 'ML Lab',
    description: 'Train models, analyze data, and build intelligent systems using real machine learning frameworks.',
    gradient: 'from-electric-cyan to-neon-purple',
    glow: 'rgba(6,182,212,0.3)',
    tag: 'Grade 8-12',
    features: ['TensorFlow', 'Data Analysis', 'Model Training'],
  },
  {
    icon: Lightbulb,
    title: 'Innovation Lab',
    description: 'A maker-first space for design thinking, rapid prototyping, and turning big ideas into real products.',
    gradient: 'from-neon-purple to-neon-pink',
    glow: 'rgba(168,85,247,0.3)',
    tag: 'All Grades',
    features: ['3D Printing', 'Design Thinking', 'Prototyping'],
  },
  {
    icon: Monitor,
    title: 'Smart Classroom',
    description: 'Fully digitized learning environments with AI-powered tools, interactive displays, and real-time analytics.',
    gradient: 'from-neon-pink to-electric-cyan',
    glow: 'rgba(236,72,153,0.2)',
    tag: 'All Grades',
    features: ['AI Analytics', 'Interactive Boards', 'LMS Integration'],
  },
];

export default function LabEcosystem() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="labs" className="relative py-32 overflow-hidden bg-navy-900">
      {/* Divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-electric-blue/4 rounded-full blur-[150px]" />
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
            <span className="section-label">Lab Ecosystem</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5"
          >
            8 Labs. Infinite{' '}
            <span className="text-gradient">Possibilities.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            A complete innovation ecosystem designed to take students from curious beginners
            to confident creators across every technology domain.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {labs.map((lab, i) => (
            <motion.div
              key={lab.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="glass-card rounded-2xl p-6 group relative overflow-hidden cursor-default"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${lab.glow} 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${lab.gradient} p-px mb-5 relative`}>
                <div className="w-full h-full rounded-xl bg-navy-900 flex items-center justify-center">
                  <lab.icon size={20} className="text-electric-blue group-hover:scale-110 transition-transform" />
                </div>
              </div>

              {/* Tag */}
              <span className="text-[10px] font-mono font-medium text-electric-cyan/70 bg-electric-cyan/8 px-2.5 py-1 rounded-full border border-electric-cyan/15 mb-3 inline-block">
                {lab.tag}
              </span>

              <h3 className="font-display font-semibold text-white text-lg mb-2">{lab.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4">{lab.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-1.5">
                {lab.features.map((f) => (
                  <span
                    key={f}
                    className="text-[11px] text-white/40 bg-white/4 border border-white/7 px-2 py-0.5 rounded-md"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/labs" className="btn-outline inline-flex items-center gap-2 text-sm">
            Explore Full Lab Programs
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
