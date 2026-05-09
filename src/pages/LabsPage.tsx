import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Cpu, Wifi, Glasses, Code2, BarChart3, Lightbulb, Monitor, CheckCircle2 } from 'lucide-react';
import Programs from '../components/sections/Programs';
import CTA from '../components/sections/CTA';

const labs = [
  {
    icon: Brain,
    title: 'AI Lab',
    description: 'Dive deep into artificial intelligence — from supervised learning to generative models. Students train, test, and deploy real AI systems.',
    gradient: 'from-electric-blue to-electric-cyan',
    color: '#0ea5e9',
    tools: ['TensorFlow', 'PyTorch', 'Jupyter', 'Google Colab', 'Hugging Face'],
    outcomes: ['Train neural networks from scratch', 'Build image classifiers', 'Create NLP chatbots', 'Deploy models to production'],
    duration: '12-week module',
    grade: 'Grade 6–12',
    img: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Cpu,
    title: 'Robotics Lab',
    description: 'From servo motors to full autonomous systems. Students learn mechanical design, electronics, and programming to bring machines to life.',
    gradient: 'from-electric-cyan to-neon-green',
    color: '#06b6d4',
    tools: ['Arduino', 'Raspberry Pi', 'ROS', 'LEGO Mindstorms', 'NVIDIA Jetson'],
    outcomes: ['Build autonomous robots', 'Implement PID control', 'Program robotic arms', 'Navigate with sensors'],
    duration: '16-week module',
    grade: 'Grade 4–12',
    img: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wifi,
    title: 'IoT Lab',
    description: 'Connect hardware to the internet and build smart systems that monitor, automate, and respond to the real world.',
    gradient: 'from-neon-green to-electric-blue',
    color: '#10b981',
    tools: ['ESP32', 'Node-RED', 'MQTT', 'AWS IoT', 'Blynk'],
    outcomes: ['Build weather stations', 'Create home automation', 'Design smart agriculture', 'Deploy cloud dashboards'],
    duration: '10-week module',
    grade: 'Grade 5–12',
    img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Glasses,
    title: 'AR/VR Lab',
    description: 'Build immersive experiences for education, design, and entertainment using the latest augmented and virtual reality tools.',
    gradient: 'from-neon-purple to-electric-blue',
    color: '#a855f7',
    tools: ['Unity', 'Unreal Engine', 'ARCore', 'ARKit', 'Meta Quest'],
    outcomes: ['Design VR environments', 'Build AR apps', 'Create 3D models', 'Publish to app stores'],
    duration: '12-week module',
    grade: 'Grade 3–12',
    img: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Code2,
    title: 'Coding Lab',
    description: 'From first loops to full applications. Structured learning paths from Scratch to Python, web development, and app building.',
    gradient: 'from-electric-blue to-neon-purple',
    color: '#38bdf8',
    tools: ['Python', 'JavaScript', 'React', 'Scratch', 'Flask'],
    outcomes: ['Build web apps', 'Create games', 'Automate tasks', 'Publish projects online'],
    duration: 'Ongoing / Year-round',
    grade: 'Grade 1–12',
    img: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: BarChart3,
    title: 'Machine Learning Lab',
    description: 'Advanced data science and ML engineering. Students learn to preprocess data, train models, and evaluate real-world performance.',
    gradient: 'from-electric-cyan to-neon-purple',
    color: '#06b6d4',
    tools: ['scikit-learn', 'pandas', 'NumPy', 'Matplotlib', 'Kaggle'],
    outcomes: ['Build predictive models', 'Visualize data insights', 'Win Kaggle competitions', 'Create AI products'],
    duration: '14-week module',
    grade: 'Grade 8–12',
    img: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Lab',
    description: 'A design-thinking-first maker space for ideating, prototyping, and pitching solutions to real-world problems.',
    gradient: 'from-neon-purple to-neon-pink',
    color: '#ec4899',
    tools: ['3D Printers', 'Laser Cutters', 'CAD Software', 'Soldering Kits', 'Figma'],
    outcomes: ['Design and prototype products', 'Build startup pitches', 'Enter innovation competitions', 'Patent student inventions'],
    duration: 'Semester project',
    grade: 'All Grades',
    img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Monitor,
    title: 'Smart Classroom',
    description: 'Fully digitized, AI-powered learning environments that adapt to student performance and deliver personalized education at scale.',
    gradient: 'from-neon-pink to-electric-cyan',
    color: '#f59e0b',
    tools: ['Smart Boards', 'LMS Platform', 'AI Analytics', 'Cameras', 'Cloud Storage'],
    outcomes: ['Personalized learning paths', 'Real-time teacher insights', 'Digital portfolio building', 'Parent progress reports'],
    duration: 'Permanent setup',
    grade: 'All Grades',
    img: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function LabCard({ lab, i }: { lab: typeof labs[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.05 * (i % 4) }}
      className={`glass-card rounded-3xl overflow-hidden group ${i === 0 ? 'md:col-span-2' : ''}`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img src={lab.img} alt={lab.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${lab.gradient} p-px`}>
            <div className="w-full h-full rounded-xl bg-navy-950/80 flex items-center justify-center">
              <lab.icon size={16} style={{ color: lab.color }} />
            </div>
          </div>
        </div>
        <span className="absolute top-4 right-4 text-[10px] font-mono px-2.5 py-1 rounded-full border" style={{ color: lab.color, background: `${lab.color}20`, borderColor: `${lab.color}30` }}>
          {lab.grade}
        </span>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-white text-xl">{lab.title}</h3>
            <span className="text-[10px] text-white/40 font-mono">{lab.duration}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-white/50 text-sm leading-relaxed mb-5">{lab.description}</p>

        <div className="mb-5">
          <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">Learning Outcomes</div>
          <div className="space-y-2">
            {lab.outcomes.map((o) => (
              <div key={o} className="flex items-start gap-2 text-sm text-white/60">
                <CheckCircle2 size={14} style={{ color: lab.color }} className="mt-0.5 shrink-0" />
                {o}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">Tools & Tech</div>
          <div className="flex flex-wrap gap-1.5">
            {lab.tools.map((t) => (
              <span key={t} className="text-[11px] text-white/40 bg-white/4 border border-white/7 px-2 py-0.5 rounded-md">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function LabsPage() {
  return (
    <div className="bg-navy-950 pt-16">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-electric-blue/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <span className="section-label">Labs & Programs</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            8 Labs. One <span className="text-gradient">Innovation Ecosystem.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
            Each lab is a complete, self-contained learning environment with hardware, software, curriculum, and teacher training included.
          </motion.p>
        </div>
      </section>

      {/* Labs grid */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, i) => (
            <LabCard key={lab.title} lab={lab} i={i} />
          ))}
        </div>
      </section>

      <Programs />
      <CTA />
    </div>
  );
}
