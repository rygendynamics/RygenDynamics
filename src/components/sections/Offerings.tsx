import { motion } from 'framer-motion';
import { Cpu, Code, Glasses, Lightbulb, Clipboard, Hand, Rocket, User, Shield } from 'lucide-react';

const offerings = [
  {
    icon: Cpu,
    title: 'STEAM & ROBOTICS',
    description:
      'Our STEAM & Robotics program helps students explore the world of science, technology, engineering, arts and mathematics through hands-on activities. Students design, build and program their own robots while developing problem-solving, teamwork and engineering skills.',
    img: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-stem-blue',
  },
  {
    icon: Code,
    title: 'CODING & ARTIFICIAL INTELLIGENCE',
    description:
      'We introduce students to the world of coding and AI through fun, interactive and project-based learning. From block coding to advanced concepts, students create apps, games and smart solutions while building logical thinking and computational skills.',
    img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-stem-orange',
  },
  {
    icon: Glasses,
    title: 'AUGMENTED REALITY & VIRTUAL REALITY',
    description:
      'Our AR/VR solutions create immersive learning experiences that bring concepts to life. Students can explore 3D models, simulations and virtual worlds that make learning more engaging, interactive and easy to understand.',
    img: 'https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-stem-teal',
  },
  {
    icon: Lightbulb,
    title: 'INNOVATION & MAKER LAB',
    description:
      'Our Innovation & Maker Lab encourages students to ideate, design and prototype their ideas. Through hands-on experiments and open-ended projects, students develop creativity, critical thinking and the confidence to become future innovators.',
    img: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-stem-pink',
  },
];

export default function Offerings() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Offerings for Educators & Partners</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Empowering educators, institutions, and organizations to inspire the next generation of
            innovators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering, i) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-rounded overflow-hidden bg-white border-2 border-stem-light-gray hover:border-stem-blue transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={offering.img}
                    alt={offering.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Circular Icon Badge */}
                  <div
                    className={`absolute top-4 left-4 ${offering.color} badge-circle w-16 h-16 text-3xl border-4 border-white shadow-lg flex items-center justify-center`}
                  >
                    <offering.icon size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-stem-navy mb-4">{offering.title}</h3>
                  <p className="text-slate-700 leading-relaxed text-sm">{offering.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 bg-stem-light-blue rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { value: 'Curriculum Aligned', Icon: Clipboard },
              { value: 'Hands-On Learning', Icon: Hand },
              { value: 'Future Ready', Icon: Rocket },
              { value: 'Teacher Support', Icon: User },
              { value: 'Safe & Reliable', Icon: Shield },
            ].map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="text-white flex flex-col items-center justify-center"
              >
                <div className="text-3xl mb-2 flex items-center justify-center"><stat.Icon size={24} /></div>
                <p className="font-semibold text-sm text-center">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
