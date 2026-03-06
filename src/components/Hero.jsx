import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(err => console.log('Video autoplay failed:', err))
    }
  }, [])

  return (
    <section className="hero" id="home">
      {/* Video Background */}
      <div className="hero-video-background">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/Photos/HomePage/Video/6156511-hd_1920_1080_24fps - MERGE - Videobolt.net.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: '700' }}
        >
          Intelligent Engineering
          <br />
          <span className="gradient-text">For Tomorrow</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
            color: 'white', 
            maxWidth: '800px', 
            margin: '0 auto 2.5rem', 
            lineHeight: '1.8',
            fontWeight: '400'
          }}
        >
          Advanced robotics, AI/ML, and automation systems engineered for defense, nuclear, and critical industries.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            marginBottom: '4rem' 
          }}
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
              className="btn btn-primary btn-large"
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
          style={{ 
            maxWidth: '900px', 
            margin: '0 auto',
            padding: '2.5rem',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <img 
              src="/flag.webp" 
              alt="Indian Flag" 
              style={{ 
                width: '120px', 
                height: '80px', 
                objectFit: 'cover', 
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
                margin: '0 auto',
                display: 'block'
              }} 
            />
          </div>
          
          <h3 style={{ 
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', 
            marginBottom: '0.75rem',
            fontWeight: '700'
          }}>
            <span style={{ color: '#ff6b35' }}>नवनिर्मित भारत</span>
            <span style={{ margin: '0 0.75rem', color: '#2EA3D6' }}>|</span>
            <span style={{ color: '#4caf50' }}>आत्मनिर्भर भारत</span>
          </h3>
          
          <h4 style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
            marginBottom: '1.25rem', 
            color: '#2EA3D6',
            fontWeight: '600'
          }}>
            New India <span style={{ margin: '0 0.5rem' }}>•</span> Self-Reliant India
          </h4>
          
          <p style={{ 
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', 
            lineHeight: '1.7',
            color: '#495057',
            margin: '0'
          }}>
            Empowering India's defense and nuclear sectors with cutting-edge robotics and automation 
            solutions, aligned with the <strong style={{ color: '#2EA3D6' }}>MAKE IN INDIA</strong> initiative.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
