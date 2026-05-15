import { motion } from 'framer-motion';
import { Target, Brain, Lightbulb, Edit3, RefreshCw } from 'lucide-react';
import imgConsumer from '../../assets/CONSUMER.png';
import imgInnovator from '../../assets/INNOVATOR.png';
import imgCreator from '../../assets/CREATOR.png';
import imgDesignThinking from '../../assets/design_thinking.png';

export default function Methodology() {
  const methodologySteps = [
    {
      number: '01',
      title: 'EMPATHIZE',
      description: 'Understand the users, their needs, and the problems they face.',
      color: 'bg-stem-purple',
    },
    {
      number: '02',
      title: 'DEFINE',
      description: 'Analyze the problem and identify the core issue.',
      color: 'bg-stem-teal',
    },
    {
      number: '03',
      title: 'IDEATE',
      description: 'Generate creative ideas to solve the defined problem.',
      color: 'bg-stem-orange',
    },
    {
      number: '04',
      title: 'PROTOTYPE',
      description: 'Build and experiment with ideas to create a tangible solution.',
      color: 'bg-stem-pink',
    },
    {
      number: '05',
      title: 'TEST',
      description: 'Test the solution, get feedback and refine it.',
      color: 'bg-stem-blue',
    },
    {
      number: '06',
      title: 'IMPLEMENT',
      description: 'Implement the best solution and create real impact.',
      color: 'bg-stem-yellow',
    },
  ];

  const cicPhases = [
    {
      title: 'CONSUMER',
      subtitle: 'Activity-based Learning (ABL)',
      description: 'Students engage as consumers, working with various DIY kits and coding platforms to perform activities.',
      img: imgConsumer,
    },
    {
      title: 'INNOVATOR',
      subtitle: 'Innovation & Growth',
      description: 'Activity-based Learning assists students in ideation and growth as innovators, encouraging them to think outside the box.',
      img: imgInnovator,
    },
    {
      title: 'CREATOR',
      subtitle: 'Project-based Learning (PBL)',
      description: 'Students become creators, building innovative solutions to tackle real-world global challenges and drive change.',
      img: imgCreator,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-stem-navy text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* CIC Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Methodology</h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            Our CIC (Consumer → Innovator → Creator) Methodology and Design Thinking approach form
            the core of all our STEM programs and curricula.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {cicPhases.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="relative rounded-3xl overflow-hidden mb-4 h-48">
                  <img
                    src={phase.img}
                    alt={phase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-end justify-center pb-4">
                    <span className="text-3xl font-bold">→</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 backdrop-blur">
                  <h3 className="text-2xl font-bold mb-1">{phase.title}</h3>
                  <p className="text-stem-yellow font-semibold text-sm mb-3">{phase.subtitle}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Thinking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Design Thinking Approach</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div className="space-y-4">
              {methodologySteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className={`${step.color} badge-circle w-12 h-12 flex-shrink-0 text-white font-bold`}>
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{step.title}</h4>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center mt-8 md:mt-0"
            >
              <img src={imgDesignThinking} alt="Design Thinking Approach" className="w-full h-auto rounded-3xl object-contain md:scale-110" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
