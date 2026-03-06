import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import SplineViewer from './3D/SplineViewer'
import './Capabilities.css'

const Capabilities = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const capabilities = [
    {
      image: '/Photos/HomePage/VR.png',
      title: 'Virtual & Augmented Reality Simulations',
      description: 'Immersive VR/AR training and operational simulations for nuclear, defense, and industrial applications.',
      link: '/products/vr-ar'
    },
    {
      image: '/Photos/HomePage/Artificial-Intelligence and Machine-Learning.png',
      title: 'Artificial Intelligence and Machine Learning',
      description: 'AI-powered solutions for predictive maintenance, road safety, and intelligent surveillance systems.',
      link: '/products/ai-ml'
    },
    {
      image: '/Photos/HomePage/Robotics.jpeg',
      title: 'Robotics',
      description: 'Specialized robots for CBRNE detection, NDT inspection, firefighting, underwater operations, and hazardous environments.',
      link: '/products/robotics'
    },
    {
      image: '/Photos/HomePage/Bomb Disposal.png',
      title: 'Bomb Detection & Disposal Equipment',
      description: 'Advanced EOD robotic systems and bomb disposal equipment engineered for Indian defense forces.',
      link: '/products/bdds'
    }
  ]

  return (
    <section className="capabilities-section" id="capabilities" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Our Capabilities</span>
          <h2 className="section-title">Advanced Technology Solutions</h2>
          <p className="section-description">
            Innovative robotics, AI/ML, and VR/AR solutions for defense, nuclear, and critical industries.
          </p>
        </motion.div>

        <motion.div
          className="capabilities-3d-showcase"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, #0A1628 0%, #1B2F4B 100%)',
            minHeight: '400px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}
        >
          {/* SplineViewer removed to prevent multiple concurrent 3D scenes */}
          <div style={{ color: '#2EA3D6', fontSize: '1.2rem', textAlign: 'center', padding: '2rem' }}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
            <p style={{ marginTop: '1rem', opacity: 0.7 }}>3D visualization available in individual product pages</p>
          </div>
        </motion.div>

        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <Link to={capability.link} key={index} className="capability-card-link">
              <motion.div
                className="capability-card card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="capability-icon-img">
                  <img src={capability.image} alt={capability.title} />
                </div>
                <h3 className="capability-title">{capability.title}</h3>
                <p className="capability-description">{capability.description}</p>
                <button className="learn-more-btn">
                  Learn More →
                </button>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
