import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import SplineViewer from './3D/SplineViewer'
import './Capabilities.css'

const Capabilities = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const capabilities = [
    {
      icon: 'vr',
      title: 'Virtual & Augmented Reality Simulations',
      description: 'VR & AR based simulations for Nuclear, Oil & Gas, Disaster Management & Defense Industries.',
      link: '/products/vr-ar'
    },
    {
      icon: 'brain',
      title: 'Artificial Intelligence and Machine Learning',
      description: 'Artificial Intelligence & Machine Learning Based Solutions for Defense, Road safety & Preventive Maintenance.',
      link: '/products/ai-ml'
    },
    {
      icon: 'robot',
      title: 'Robotics',
      description: 'Diverse robotic portfolio catering to various applications such as CBRNE, NDT, Firefighting, Underwater ROV, VR Operated Robots',
      link: '/products/robotics'
    },
    {
      icon: 'bomb',
      title: 'Bomb Detection & Disposal Equipment',
      description: 'Leading organization developing & delivering Bomb Detection & Disposal equipment to the Indian forces.',
      link: '/products/bdds'
    }
  ]

  const getIconSVG = (iconName) => {
    const icons = {
      vr: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10h.01M15 14h.01M9 10h.01M9 14h.01" /></svg>,
      brain: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      robot: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
      bomb: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m6.364 1.636l-1.414 1.414M22 12h-2M4 12H2m3.636 6.364l1.414-1.414" /></svg>
    }
    return icons[iconName]
  }

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
          <h2 className="section-title">Cutting-Edge Technology Solutions</h2>
          <p className="section-description">
            Delivering innovative solutions across defense, nuclear, and industrial sectors with advanced robotics, AI, and VR/AR technologies.
          </p>
        </motion.div>

        <motion.div
          className="capabilities-3d-showcase"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SplineViewer sceneUrl="https://prod.spline.design/cbTjMLRrPzMk5j1a/scene.splinecode" />
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
                <div className="capability-icon">{getIconSVG(capability.icon)}</div>
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
