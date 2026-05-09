import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Filter } from 'lucide-react';
import CTA from '../components/sections/CTA';

const categories = ['All', 'AI & ML', 'Robotics', 'IoT', 'AR/VR', 'Drones', 'Automation'];

const projects = [
  { title: 'Autonomous AI Robot', category: 'AI & ML', grade: 'Grade 11', school: 'Delhi International School', description: 'Robot with YOLO-based object detection, autonomous path planning, and voice command control.', tech: ['Python', 'OpenCV', 'ROS'], award: 'National Science Olympiad — 1st Place', img: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#1FA4E8' },
  { title: 'AI Health Wearable', category: 'AI & ML', grade: 'Grade 12', school: 'Bangalore Innovation High', description: 'Wearable that monitors vitals and uses LSTM models to predict anomalies in heart rate.', tech: ['TensorFlow', 'Arduino', 'BLE'], award: 'State Innovation Award', img: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#67C7F4' },
  { title: 'Smart Home IoT Hub', category: 'IoT', grade: 'Grade 9', school: 'Mumbai Tech Academy', description: 'Full home automation system with ESP32, custom PCB, and real-time cloud dashboard.', tech: ['ESP32', 'React', 'MQTT'], award: null, img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#0A1F36' },
  { title: 'Custom FPV Quad Drone', category: 'Drones', grade: 'Grade 10', school: 'Chennai Smart School', description: 'Built-from-scratch quadcopter with GPS navigation, FPV camera, and autonomous mission planning.', tech: ['Pixhawk', 'Python', 'GPS'], award: null, img: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#2F7BB4' },
  { title: 'AR Science Explorer', category: 'AR/VR', grade: 'Grade 8', school: 'Cochin Global Academy', description: 'Mobile AR app that overlays 3D science models on textbook pages using marker detection.', tech: ['Unity', 'ARCore', 'Blender'], award: 'EdTech Innovation Prize', img: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#143E6F' },
  { title: 'Smart Farming Station', category: 'IoT', grade: 'Grade 10', school: 'Pune Innovation School', description: 'IoT system with soil sensors, weather monitoring, and automated irrigation with app control.', tech: ['ESP8266', 'Node-RED', 'AWS'], award: 'Agriculture Innovation Award', img: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#4A8FC2' },
  { title: 'Robot Sorting Arm', category: 'Robotics', grade: 'Grade 7', school: 'Hyderabad STEM School', description: '6-DOF robotic arm with CV-powered color/shape sorting on a conveyor system.', tech: ['Raspberry Pi', 'OpenCV', 'Servo'], award: null, img: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#67C7F4' },
  { title: 'Gesture-Controlled Car', category: 'Robotics', grade: 'Grade 8', school: 'Delhi International School', description: 'RC car controlled by hand gestures using MediaPipe hand-tracking and wireless communication.', tech: ['Python', 'MediaPipe', 'Arduino'], award: null, img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#1FA4E8' },
  { title: 'Smart Traffic System', category: 'Automation', grade: 'Grade 11', school: 'Mumbai Tech Academy', description: 'AI-powered traffic light system that dynamically adjusts timing based on vehicle density.', tech: ['Python', 'YOLO', 'Raspberry Pi'], award: 'Smart City Hackathon — Winner', img: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800', color: '#1D5A99' },
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
        {project.award && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-stem-light-blue/20 border border-stem-light-blue/30 rounded-full px-2 py-1">
            <Star size={9} className="text-stem-light-blue fill-stem-light-blue" />
            <span className="text-[9px] text-stem-light-blue font-medium">Award Winner</span>
          </div>
        )}
        <div className="absolute bottom-3 left-3">
          <span className="text-xs text-white/40">{project.grade} · {project.school}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-white text-base mb-2">{project.title}</h3>
        <p className="text-white/45 text-sm leading-relaxed mb-4">{project.description}</p>
        {project.award && <div className="flex items-center gap-1.5 mb-3"><Star size={10} className="text-stem-light-blue fill-stem-light-blue" /><span className="text-[11px] text-stem-light-blue/80">{project.award}</span></div>}
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
