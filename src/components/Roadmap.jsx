import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Roadmap.css'

const Roadmap = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const phases = [
    {
      phase: 'Phase 1 - Foundation',
      title: '2026 Q1-Q2',
      description: 'Core team establishment, R&D infrastructure, initial client engagements'
    },
    {
      phase: 'Phase 2 - Expansion',
      title: '2026 Q3-Q4',
      description: 'Government partnerships, defense sector entry, product portfolio expansion'
    },
    {
      phase: 'Phase 3 - Scale',
      title: '2027',
      description: 'National presence, strategic collaborations, Series A funding'
    },
    {
      phase: 'Phase 4 - Leadership',
      title: '2028+',
      description: 'Global expansion, thought leadership, deep-tech innovation hub'
    }
  ]

  return (
    <section className="roadmap-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Growth Trajectory</span>
          <h2 className="section-title">Strategic Roadmap</h2>
        </motion.div>

        <div className="roadmap-timeline">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ x: 10 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-phase">{phase.phase}</span>
                <h4 className="timeline-title">{phase.title}</h4>
                <p>{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap
