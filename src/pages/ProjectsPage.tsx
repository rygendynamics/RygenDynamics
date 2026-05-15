import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTA from '../components/sections/CTA';
import heroImage from '../assets/bcd2f326-709e-485d-8eb4-05d544cca7fb.png';

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
      className="rounded-3xl border border-stem-light-gray bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-48 overflow-hidden rounded-2xl mb-4">
        <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono px-2 py-1 rounded-full border" style={{ color: project.color, background: `${project.color}10`, borderColor: `${project.color}20` }}>
          {project.category}
        </span>
        <span className="text-xs text-stem-gray">{project.grade}</span>
      </div>
      <h3 className="font-semibold text-stem-navy text-lg mb-2">{project.title}</h3>
      <p className="text-stem-gray text-sm leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => <span key={t} className="text-xs font-bold tracking-wider uppercase text-white bg-stem-navy px-3.5 py-1.5 rounded-full">{t}</span>)}
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {

  return (
    <div className="bg-transparent text-stem-navy">
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Robotics lab background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stem-navy/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <span className="inline-flex rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm font-bold tracking-wider text-white">Innovation Showcase</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-semibold text-4xl md:text-5xl xl:text-6xl text-white mb-6">
            Built by <span className="text-stem-blue">Tomorrow's Leaders</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-white/75 text-xl max-w-2xl mx-auto">
            From Grade 7 to Grade 12 — these aren't school exercises. These are real innovations that solve real problems.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-stem-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-stem-blue/20 transition hover:bg-stem-teal">
              Contact Us
            </Link>
            <Link to="/gallery" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white">
              View Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, i) => (
              <motion.div
                key={`${project.title}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.04 * i }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <CTA />
    </div>
  );
}
