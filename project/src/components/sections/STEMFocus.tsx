import { motion } from 'framer-motion';

const stemItems = [
  {
    letter: 'S',
    title: 'Science',
    description: 'Explore the world through inquiry and experimentation.',
    color: 'bg-stem-pink',
    icon: '🧪',
  },
  {
    letter: 'T',
    title: 'Technology',
    description: 'Learn coding, automation, and digital systems.',
    color: 'bg-stem-blue',
    icon: '💻',
  },
  {
    letter: 'E',
    title: 'Engineering',
    description: 'Design solutions and build real-world prototypes.',
    color: 'bg-stem-orange',
    icon: '⚙️',
  },
  {
    letter: 'M',
    title: 'Mathematics',
    description: 'Apply logic and problem-solving in every challenge.',
    color: 'bg-stem-purple',
    icon: '📊',
  },
];

export default function STEMFocus() {
  return (
    <section className="py-16 md:py-24 bg-stem-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-4"
        >
          Our <span className="text-stem-blue">STEM Focus</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle text-center max-w-2xl mx-auto"
        >
          Integrated learning across all four STEM disciplines, building future-ready innovators.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stemItems.map((item, i) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`${item.color} badge-circle w-20 h-20 mx-auto mb-4 text-3xl`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-xl text-stem-navy mb-2">{item.title}</h3>
              <p className="text-stem-gray text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
