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
      description: 'VR & AR based simulations for Nuclear, Oil & Gas, Disaster Management & Defense Industries.',
      link: '/products/vr-ar'
    },
    {
      image: '/Photos/HomePage/Artificial-Intelligence and Machine-Learning.png',
      title: 'Artificial Intelligence and Machine Learning',
      description: 'Artificial Intelligence & Machine Learning Based Solutions for Defense, Road safety & Preventive Maintenance.',
      link: '/products/ai-ml'
    },
    {
      image: '/Photos/HomePage/Robotics.jpeg',
      title: 'Robotics',
      description: 'Diverse robotic portfolio catering to various applications such as CBRNE, NDT, Firefighting, Underwater ROV, VR Operated Robots',
      link: '/products/robotics'
    },
    {
      image: '/Photos/HomePage/Bomb Disposal.png',
      title: 'Bomb Detection & Disposal Equipment',
      description: 'Leading organization developing & delivering Bomb Detection & Disposal equipment to the Indian forces.',
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
