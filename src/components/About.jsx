import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Canvas } from '@react-three/fiber'
import { Float, Box } from '@react-three/drei'
import { Suspense } from 'react'
import SplineViewer from './3D/SplineViewer'
import './About.css'

const RotatingCube = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <Box args={[2, 2, 2]}>
        <meshStandardMaterial
          color="#2EA3D6"
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </Box>
    </Float>
  )
}

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const highlights = [
    { icon: 'check', text: 'ISO-Certified Quality Standards' },
    { icon: 'lightning', text: 'Rapid Prototyping & Deployment' },
    { icon: 'shield', text: 'Defense-Grade Security' }
  ]

  const getIconSVG = (iconName) => {
    const icons = {
      check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
      lightning: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    }
    return icons[iconName]
  }

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Us</span>
          <h2 className="section-title">
            Engineering Tomorrow's<br />Intelligent Machines
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-text">
              <strong>Rygen Dynamics</strong> is an early-stage deep-tech startup at the forefront of
              robotics innovation, artificial intelligence integration, and autonomous systems development.
            </p>
            <p className="about-text">
              We combine cutting-edge research with practical engineering to deliver intelligent solutions
              that address real-world challenges across defense, industrial automation, and emerging technologies.
            </p>
            <p className="about-text">
              Our multidisciplinary team of engineers, researchers, and innovators is committed to pushing
              the boundaries of what's possible in robotics and AI, creating systems that are not just
              automated, but truly intelligent and adaptive.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="highlight-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="highlight-icon">{getIconSVG(item.icon)}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="cube-3d-container">
              <SplineViewer sceneUrl="https://prod.spline.design/xkzY6hO5tZI40bOi/scene.splinecode" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
