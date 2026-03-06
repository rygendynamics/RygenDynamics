import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
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
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <span className="section-tag">Our Capabilities</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1.5rem' }}>
            Advanced Technology Solutions
          </h2>
          <p className="section-description" style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
            maxWidth: '850px', 
            margin: '0 auto', 
            lineHeight: '1.8',
            color: '#495057'
          }}>
            Innovative robotics, AI/ML, and VR/AR solutions for defense, nuclear, and critical industries. 
            We deliver cutting-edge technology that transforms operational efficiency and enhances security across critical sectors.
          </p>
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
