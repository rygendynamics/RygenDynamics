import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const programs = [
  {
    id: 'primary',
    grade: 'Primary School',
    range: 'Grades 1–5',
    color: '#10b981',
    tagline: 'Spark curiosity, build the foundation',
    skills: ['Scratch Programming', 'Basic Robotics', 'Computational Thinking', 'Digital Literacy', 'Creative Design'],
    projects: ['Build a simple robot', 'Create animations with Scratch', 'Design a smart toy', 'Program a mini race car'],
    overview: 'Introduce students to the world of technology through play-based and project-driven activities. No prior experience needed — just curiosity.',
    curriculum: ['Introduction to coding with Scratch', 'Basic electronics and circuits', 'Robot building with LEGO kits', 'Digital creativity and storytelling'],
  },
  {
    id: 'middle',
    grade: 'Middle School',
    range: 'Grades 6–8',
    color: '#0ea5e9',
    tagline: 'Explore, experiment, create',
    skills: ['Python Programming', 'Arduino & Sensors', 'IoT Projects', 'Basic AI Concepts', '3D Design'],
    projects: ['Smart home model', 'Weather monitoring station', 'Line-following robot', 'Basic machine learning model'],
    overview: 'Deeper dives into real programming languages, hardware interfacing, and connected systems. Students begin building solutions to real problems.',
    curriculum: ['Python fundamentals', 'Arduino programming', 'IoT with ESP32', 'Intro to machine learning', 'PCB design basics'],
  },
  {
    id: 'high',
    grade: 'High School',
    range: 'Grades 9–12',
    color: '#a855f7',
    tagline: 'Build, innovate, lead',
    skills: ['Advanced AI/ML', 'Autonomous Robotics', 'Computer Vision', 'Data Science', 'Full-Stack Development'],
    projects: ['Autonomous navigation robot', 'AI-powered health monitor', 'Custom drone build', 'AR learning app', 'Self-driving car simulation'],
    overview: 'Industry-level projects, international competitions, and certification pathways. Students graduate as builders and innovators ready for top universities and careers.',
    curriculum: ['TensorFlow & PyTorch', 'Computer vision with OpenCV', 'ROS (Robot Operating System)', 'Full-stack web development', 'Data Science & Analytics', 'Capstone innovation project'],
  },
];

export default function Programs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState('middle');

  const current = programs.find((p) => p.id === active)!;

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-navy-900">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-electric-blue/4 rounded-full blur-[120px] -translate-y-1/2" />
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
            <span className="section-label">Programs by Grade</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-white mb-5"
          >
            A{' '}
            <span className="text-gradient">learning journey</span>
            {' '}from
            <br />
            first code to final invention
          </motion.h2>
        </div>

        {/* Tab selector */}
        <div className="flex justify-center mb-10">
          <div className="glass rounded-2xl p-1.5 flex gap-1">
            {programs.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`relative px-5 py-3 rounded-xl text-sm font-display font-medium transition-all duration-300 ${
                  active === p.id ? 'text-white' : 'text-white/50 hover:text-white/80'
                }`}
              >
                {active === p.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: `${p.color}20`, border: `1px solid ${p.color}30` }}
                  />
                )}
                <span className="relative z-10">{p.grade}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Left */}
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs font-mono font-medium px-3 py-1.5 rounded-full border"
                  style={{ color: current.color, background: `${current.color}15`, borderColor: `${current.color}30` }}
                >
                  {current.range}
                </span>
                <span className="text-white/30 text-sm">{current.tagline}</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-4">{current.grade}</h3>
              <p className="text-white/50 leading-relaxed mb-8">{current.overview}</p>

              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-4">Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {current.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-white/70 bg-white/4 border border-white/8 px-3 py-1.5 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-4">Curriculum Topics</h4>
                <div className="space-y-2">
                  {current.curriculum.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                      <ChevronRight size={14} style={{ color: current.color }} className="shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Projects */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-5">
                Student Projects
              </h4>
              <div className="space-y-4">
                {current.projects.map((project, i) => (
                  <motion.div
                    key={project}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-card rounded-2xl p-5 flex items-center gap-4 group cursor-default"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold font-display"
                      style={{ background: `${current.color}15`, color: current.color }}
                    >
                      0{i + 1}
                    </div>
                    <span className="text-white/80 font-medium text-sm">{project}</span>
                    <ChevronRight
                      size={16}
                      className="ml-auto text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Completion badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 glass rounded-2xl p-5 flex items-center gap-4 border"
                style={{ borderColor: `${current.color}25` }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: `${current.color}15` }}
                >
                  🏆
                </div>
                <div>
                  <div className="text-white font-display font-semibold text-sm mb-0.5">
                    Certified {current.grade} Graduate
                  </div>
                  <div className="text-white/40 text-xs">
                    Nationally recognized certification upon completion
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
