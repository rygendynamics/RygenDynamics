import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
import CTA from '../components/sections/CTA';

const categories = ['All', 'AI & ML', 'Robotics', 'IoT', 'AR/VR', 'Drones', 'Automation'];

const projects = [
  { title: 'Autonomous AI Robot', category: 'AI & ML', grade: 'Grade 11', description: 'Project idea: Robot with object detection, autonomous path planning, and voice command control.', tech: ['Python', 'OpenCV', 'ROS'], img: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#1FA4E8' },
  { title: 'AI Health Wearable', category: 'AI & ML', grade: 'Grade 12', description: 'Project idea: Wearable that monitors vitals and uses models to predict anomalies.', tech: ['TensorFlow', 'Arduino', 'BLE'], img: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#67C7F4' },
  { title: 'Smart Home IoT Hub', category: 'IoT', grade: 'Grade 9', description: 'Project idea: Home automation with ESP32, custom PCB, and cloud dashboard.', tech: ['ESP32', 'React', 'MQTT'], img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#0A1F36' },
  { title: 'Custom FPV Quad Drone', category: 'Drones', grade: 'Grade 10', description: 'Project idea: Quadrotor with GPS navigation, FPV camera, and autonomous missions.', tech: ['Pixhawk', 'Python', 'GPS'], img: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#2F7BB4' },
  { title: 'AR Science Explorer', category: 'AR/VR', grade: 'Grade 8', description: 'Project idea: Mobile AR app that overlays 3D science models on textbook pages.', tech: ['Unity', 'ARCore', 'Blender'], img: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#143E6F' },
  { title: 'Smart Farming Station', category: 'IoT', grade: 'Grade 10', description: 'Project idea: IoT system with soil sensors, weather monitoring, and automated irrigation.', tech: ['ESP8266', 'Node-RED', 'AWS'], img: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#4A8FC2' },
  { title: 'Robot Sorting Arm', category: 'Robotics', grade: 'Grade 7', description: 'Project idea: 6-DOF arm with CV-powered color/shape sorting on a conveyor.', tech: ['Raspberry Pi', 'OpenCV', 'Servo'], img: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#67C7F4' },
  { title: 'Gesture-Controlled Car', category: 'Robotics', grade: 'Grade 8', description: 'Project idea: RC car controlled by hand gestures using hand-tracking.', tech: ['Python', 'MediaPipe', 'Arduino'], img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#1FA4E8' },
  { title: 'Smart Traffic System', category: 'Automation', grade: 'Grade 11', description: 'Project idea: AI-powered traffic system that adjusts timings based on density.', tech: ['Python', 'YOLO', 'Raspberry Pi'], img: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#1D5A99' },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl overflow-hidden group cursor-default"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 to-transparent" />
        <span className="absolute top-3 left-3 text-[10px] font-mono px-2 py-1 rounded-full border" style={{ color: project.color, background: `${project.color}20`, borderColor: `${project.color}30` }}>
          {project.category}
        </span>
        <div className="absolute bottom-3 left-3">
          <span className="text-xs text-white/40">{project.grade}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-white text-base mb-2">{project.title}</h3>
        <p className="text-white/45 text-sm leading-relaxed mb-4">{project.description}</p>
        {/* Awards and school names removed: projects shown as example ideas */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => <span key={t} className="text-[11px] text-white/40 bg-white/4 border border-white/7 px-2 py-0.5 rounded-md">{t}</span>)}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-navy-950 pt-16">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-electric-blue/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <span className="section-label">Student Projects</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Real projects by <span className="text-gradient">real students</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-white/50 text-xl max-w-2xl mx-auto">
            From Grade 7 to Grade 12 — these aren't school exercises. These are real innovations that solve real problems.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-6">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10 items-center">
          <Filter size={14} className="text-white/30 mr-1" />
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === c
                  ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/30'
                  : 'text-white/50 hover:text-white border border-white/8 hover:border-white/20'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <CTA />
    </div>
  );
}
