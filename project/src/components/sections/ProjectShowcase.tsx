import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const projects = [
  {
    title: 'Autonomous AI Robot',
    category: 'AI + Robotics',
    grade: 'Grade 11',
    description: 'A robot that navigates obstacles using computer vision and real-time object detection.',
    image: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Python', 'OpenCV', 'TensorFlow'],
    award: 'National Science Olympiad Winner',
    color: '#0ea5e9',
  },
  {
    title: 'Smart Home IoT Hub',
    category: 'IoT',
    grade: 'Grade 9',
    description: 'Fully automated home control system using ESP32, sensors, and a custom dashboard app.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['ESP32', 'React', 'MQTT'],
    award: null,
    color: '#10b981',
  },
  {
    title: 'AI Health Monitor',
    category: 'Machine Learning',
    grade: 'Grade 12',
    description: 'Wearable device with ML algorithms to detect anomalies in heart rate and predict health events.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['TensorFlow', 'Arduino', 'BLE'],
    award: 'State Innovation Award',
    color: '#a855f7',
  },
  {
    title: 'Custom Quad Drone',
    category: 'Drone Tech',
    grade: 'Grade 10',
    description: 'Built from scratch with GPS waypoint navigation, live video feed, and autonomous landing.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Pixhawk', 'Python', 'GPS'],
    award: null,
    color: '#06b6d4',
  },
  {
    title: 'AR Science Explorer',
    category: 'AR/VR',
    grade: 'Grade 8',
    description: 'Augmented reality app that brings science textbook diagrams to life in 3D.',
    image: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Unity', 'ARCore', 'Blender'],
    award: 'EdTech Innovation Prize',
    color: '#f59e0b',
  },
  {
    title: 'Robotic Sorting Arm',
    category: 'Robotics',
    grade: 'Grade 7',
    description: 'Servo-driven arm with computer vision to sort objects by color and shape on a conveyor.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Raspberry Pi', 'OpenCV', 'Servo'],
    award: null,
    color: '#0ea5e9',
  },
];

export default function ProjectShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-navy-950">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <span className="section-label">Student Showcase</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl text-white"
            >
              Real projects by{' '}
              <span className="text-gradient">real students</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/projects" className="btn-outline flex items-center gap-2 text-sm">
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.07 * i }}
              className="glass-card rounded-2xl overflow-hidden group cursor-default"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />

                {/* Category badge */}
                <span
                  className="absolute top-4 left-4 text-[10px] font-mono font-medium px-2.5 py-1 rounded-full border"
                  style={{ color: project.color, background: `${project.color}20`, borderColor: `${project.color}30` }}
                >
                  {project.category}
                </span>

                {/* Award badge */}
                {project.award && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-2.5 py-1">
                    <Star size={10} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-[9px] text-yellow-400 font-medium">Award</span>
                  </div>
                )}

                {/* Grade */}
                <span className="absolute bottom-4 right-4 text-[10px] text-white/50 bg-navy-950/60 px-2.5 py-1 rounded-full">
                  {project.grade}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-white text-base mb-2">{project.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">{project.description}</p>

                {project.award && (
                  <div className="flex items-center gap-1.5 mb-4">
                    <Star size={11} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-[11px] text-yellow-400/80">{project.award}</span>
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] text-white/40 bg-white/4 border border-white/7 px-2 py-0.5 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
