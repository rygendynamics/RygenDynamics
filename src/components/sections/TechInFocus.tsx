import { motion } from 'framer-motion';

const technologies = [
  {
    title: 'Coding - Graphical & Python',
    desc: 'Learn visual block-based and text-based coding with real-world applications.',
    img: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Self-Driving Technology',
    desc: 'Build autonomous systems with sensors, AI, and computer vision.',
    img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Robotics with AI',
    desc: 'Design and program intelligent robots that solve real problems.',
    img: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Train models and build intelligent systems with neural networks.',
    img: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'AR/VR Experiences',
    desc: 'Create immersive learning with augmented and virtual reality.',
    img: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'IoT & Sensors',
    desc: 'Connect the physical world with smart devices and data.',
    img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function TechInFocus() {
  return (
    <section className="py-16 md:py-24 bg-stem-yellow">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center text-stem-navy mb-4"
        >
          Technologies in Focus for<br />
          <span className="text-stem-blue">Inclusive AI Education</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-stem-dark text-lg max-w-3xl mx-auto mt-6 leading-relaxed"
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
