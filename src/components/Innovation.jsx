import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Innovation.css'

const Innovation = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const innovations = [
    {
      number: '01',
      title: 'Quantum-Ready Architecture',
      text: 'Developing hybrid classical-quantum algorithms and preparing systems for the quantum computing revolution.'
    },
    {
      number: '02',
      title: 'Neuromorphic Computing',
      text: 'Brain-inspired computing architectures for ultra-efficient AI processing and real-time learning capabilities.'
    },
    {
      number: '03',
      title: 'Swarm Intelligence',
      text: 'Multi-robot coordination and collective intelligence systems for large-scale autonomous operations.'
    }
  ]

  return (
    <section className="innovation-section" id="innovation" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Innovation Lab</span>
          <h2 className="section-title">Technology at the Edge</h2>
          <p className="section-description">
            Exploring emerging technologies and pushing the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="innovation-grid">
          {innovations.map((innovation, index) => (
            <motion.div
              key={index}
              className="innovation-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="innovation-number">{innovation.number}</div>
              <h3 className="innovation-title">{innovation.title}</h3>
              <p className="innovation-text">{innovation.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Innovation
