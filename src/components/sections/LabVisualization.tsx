import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const spaces = [
  {
    title: 'AI Learning Corner',
    description: 'Dedicated workstations with high-performance computers, AI frameworks, and real-world datasets.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'lg:col-span-2 lg:row-span-2',
    badge: 'AI',
  },
  {
    title: 'Robotics Station',
    description: 'Build and program autonomous robots with precision hardware tools.',
    image: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: '',
    badge: 'Robotics',
  },
  {
    title: 'VR Zone',
    description: 'Full-immersion VR headsets for science, exploration, and spatial design.',
    image: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: '',
    badge: 'AR/VR',
  },
  {
    title: 'Coding Hub',
    description: 'Collaborative coding spaces with pair programming setups and live mentoring.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: '',
    badge: 'Code',
  },
  {
    title: 'Innovation Space',
    description: 'Maker culture at its best — 3D printers, laser cutters, and rapid prototyping tools.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: '',
    badge: 'Innovation',
  },
];

const badgeColors: Record<string, string> = {
  AI: 'bg-electric-blue/20 text-electric-blue border-electric-blue/25',
  Robotics: 'bg-electric-cyan/20 text-electric-cyan border-electric-cyan/25',
  'AR/VR': 'bg-neon-purple/20 text-neon-purple border-neon-purple/25',
  Code: 'bg-neon-green/20 text-neon-green border-neon-green/25',
  Innovation: 'bg-neon-pink/20 text-neon-pink border-neon-pink/25',
};

export default function LabVisualization() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-navy-900">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-electric-blue/4 rounded-full blur-[150px]" />
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
            <span className="section-label">Lab Experience</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-white mb-5"
          >
            Step Inside the{' '}
            <span className="text-gradient">Innovation Campus</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            Premium-grade spaces designed to inspire, challenge, and ignite the
            creativity of every student who walks through the door.
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[280px]">
          {spaces.map((space, i) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className={`relative rounded-2xl overflow-hidden group cursor-default ${space.span}`}
            >
              {/* Image */}
              <img
                src={space.image}
                alt={space.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-electric-blue/20 transition-colors" />

              {/* Scan line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className={`text-[10px] font-mono font-medium px-2.5 py-1 rounded-full border mb-2 inline-block ${badgeColors[space.badge]}`}>
                  {space.badge}
                </span>
                <h3 className="font-display font-semibold text-white text-lg mb-1.5">{space.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {space.description}
                </p>
              </div>

              {/* Holographic corner */}
              <div className="absolute top-4 right-4 w-6 h-6">
                <div className="absolute inset-0 border-t border-r border-electric-blue/40 rounded-tr-sm" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
