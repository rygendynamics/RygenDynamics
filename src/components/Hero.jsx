import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: '3.5rem', marginBottom: '2rem' }}
        >
          Intelligent Engineering
          <br />
          <span className="gradient-text">For Tomorrow</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          style={{ fontSize: '1.25rem', color: '#1B2F4B', maxWidth: '900px', margin: '0 auto 3rem', lineHeight: '1.8' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Advanced robotics, AI/ML, and automation systems engineered for defense, nuclear, and critical industries.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '4rem' }}
        >
          <Link to="/products">
            <motion.button
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Technology
            </motion.button>
          </Link>
          <a href="#capabilities">
            <motion.button
              className="btn btn-secondary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Capabilities
            </motion.button>
          </a>
        </motion.div>

        {/* Aatma-Nirbhar Bharat Section */}
        <motion.div
          className="hero-mission"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ maxWidth: '1000px', margin: '0 auto' }}
        >
          <div className="mission-badge" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div className="mission-flag" style={{ flex: '0 0 120px' }}>
              <img src="/flag.webp" alt="Indian Flag" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <div className="mission-text" style={{ flex: '1 1 500px', textAlign: 'left' }}>
              <h3 className="mission-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                <span className="hindi-text">नवनिर्मित भारत</span>
                <span className="divider"> | </span>
                <span className="hindi-text">आत्मनिर्भर भारत</span>
              </h3>
              <h4 className="mission-subtitle" style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#2EA3D6' }}>
                New India <span className="dot">•</span> Self-Reliant India
              </h4>
              <p className="mission-description" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                Empowering India's defense and nuclear sectors with cutting-edge robotics and automation 
                solutions, aligned with the <strong>MAKE IN INDIA</strong> initiative.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
