import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SplineViewer from './3D/SplineViewer'
import './Hero.css'

const Hero = () => {
  const [stats, setStats] = useState([
    { target: 50, current: 0, label: 'Projects Delivered' },
    { target: 15, current: 0, label: 'Technology Partners' },
    { target: 98, current: 0, label: 'Uptime Reliability' }
  ])

  useEffect(() => {
    const animateCounters = () => {
      setStats(prevStats =>
        prevStats.map(stat => ({
          ...stat,
          current: stat.current < stat.target
            ? Math.min(stat.current + Math.ceil(stat.target / 50), stat.target)
            : stat.target
        }))
      )
    }

    const interval = setInterval(animateCounters, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-3d-bg hero-3d-bg-optimized">
        {/* Removed heavy Three.js Canvas for better performance */}
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Engineering Tomorrow's
            <br />
            <span className="gradient-text">Intelligent Solutions</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pioneering advanced robotics, AI integration, and autonomous technologies
            that transform industries and shape tomorrow's world.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Technology
            </motion.button>
            <motion.button
              className="btn btn-secondary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.current}+</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="robot-3d-container">
            <SplineViewer />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default Hero
