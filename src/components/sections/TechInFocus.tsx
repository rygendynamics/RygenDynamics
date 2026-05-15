import { motion } from 'framer-motion';
import imgCoding from '../../assets/Coding.png';
import imgAI from '../../assets/AI.png';
import imgML from '../../assets/ML.png';
import imgRobotics from '../../assets/Robotics.png';
import imgARVR from '../../assets/ARVR.png';
import imgIOT from '../../assets/IOT.png';

const technologies = [
  {
    title: 'Coding - Graphical & Python',
    desc: 'Learn visual block-based and text-based coding with real-world applications.',
    img: imgCoding,
  },
  {
    title: 'Artificial Intelligence',
    desc: 'Build autonomous systems with sensors, AI, and computer vision.',
    img: imgAI,
  },
  {
    title: 'Machine Learning',
    desc: 'Train models and build intelligent systems with neural networks.',
    img: imgML,
  },
  {
    title: 'Robotics',
    desc: 'Design and program intelligent robots that solve real problems.',
    img: imgRobotics,
  },
  {
    title: 'AR & VR Tech',
    desc: 'Create immersive learning with augmented and virtual reality.',
    img: imgARVR,
  },
  {
    title: 'Internet of Things (IoT)',
    desc: 'Connect the physical world with smart devices and data.',
    img: imgIOT,
  },
];

export default function TechInFocus() {
  return (
    <section className="py-16 md:py-24 bg-stem-blue">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center text-white mb-4"
        >
          Technologies in Focus for<br />
          <span className="text-slate-100">Inclusive AI Education</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-slate-200 text-lg max-w-3xl mx-auto mt-6 leading-relaxed"
        >
          Get your kids an opportunity to master world-class technological concepts like coding,
          training machine learning models, self-driving cars, natural language processing with
          real-life practical activity-based learning (ABL).
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-rounded overflow-hidden bg-white group cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tech.img}
                  alt={tech.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-stem-navy mb-2">{tech.title}</h3>
                <p className="text-slate-700 text-sm">{tech.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
