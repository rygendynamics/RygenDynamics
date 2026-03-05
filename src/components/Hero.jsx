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

  return (
    <section className="hero" id="home">
      <div className="hero-3d-bg hero-3d-bg-optimized">
        <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 25]} />
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <ParticleField />
          </Suspense>
        </Canvas>
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
            style={{ fontSize: '0.9rem', color: '#1B2F4B', textShadow: 'none' }}
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
                  We are dedicated to becoming a prominent company in the defense and nuclear sectors, 
                  contributing to India's journey towards becoming a hub for cutting-edge, high-tech 
                  robotics and automation solutions in line with the <strong>MAKE IN INDIA</strong> initiative.
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
