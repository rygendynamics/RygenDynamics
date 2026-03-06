import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import ParticleField from './3D/ParticleField'
import SplineViewer from './3D/SplineViewer'
import './Hero.css'

const Hero = () => {
  const [enableParticles, setEnableParticles] = useState(true)
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    // Check device capabilities
    const checkPerformance = () => {
      const memory = navigator.deviceMemory || 4
      const cpuCores = navigator.hardwareConcurrency || 2
            // Set low performance mode for devices with less resources
      if (memory < 4 || cpuCores < 4) {
        setIsLowPerformance(true)
      }
            // Only disable particles on very low-end devices
      if (memory < 2 || cpuCores < 2) {
        setEnableParticles(false)
      }
    }

    checkPerformance()

    // Monitor memory usage if available
    if (performance.memory) {
      const checkMemory = () => {
        const usedMemoryMB = performance.memory.usedJSHeapSize / 1048576
        const totalMemoryMB = performance.memory.jsHeapSizeLimit / 1048576
        
        // If using more than 85% of available memory, disable effects
        if (usedMemoryMB / totalMemoryMB > 0.85) {
          setEnableParticles(false)
        }
      }

      const memoryCheckInterval = setInterval(checkMemory, 10000) // Check less frequently
      
      return () => clearInterval(memoryCheckInterval)
    }
  }, [])

  return (
    <section className="hero" id="home">
      {enableParticles && (
        <div className="hero-3d-bg hero-3d-bg-optimized">
          <Canvas 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            dpr={[1, 1.5]} // Limit pixel ratio for performance
            performance={{ min: 0.5 }} // Allow frame rate to drop for performance
          >
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 25]} />
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={0.5} />
              <ParticleField lowPerformance={isLowPerformance} />
            </Suspense>
          </Canvas>
        </div>
      )}

      <div className="container hero-container">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Intelligent Engineering
            <br />
            <span className="gradient-text">For Tomorrow</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            style={{ fontSize: '0.9rem', color: '#1B2F4B', textShadow: 'none' }}
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
          >
            <div className="mission-badge">
              <div className="mission-flag">
                <img src="/flag.webp" alt="Indian Flag" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="mission-text">
                <h3 className="mission-title">
                  <span className="hindi-text">नवनिर्मित भारत</span>
                  <span className="divider">|</span>
                  <span className="hindi-text">आत्मनिर्भर भारत</span>
                </h3>
                <h4 className="mission-subtitle">
                  New India <span className="dot">•</span> Self-Reliant India
                </h4>
                <p className="mission-description">
                  Empowering India's defense and nuclear sectors with cutting-edge robotics and automation 
                  solutions, aligned with the <strong>MAKE IN INDIA</strong> initiative.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="robot-3d-container">
            <SplineViewer clipHeight={80} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
