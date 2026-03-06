import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

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

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: '1000px', margin: '0 auto' }}
        >
          <p className="about-text" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.9' }}>
            <strong>Rygen Dynamics</strong> is an early-stage deep-tech startup at the forefront of
            robotics innovation, artificial intelligence integration, and autonomous systems development.
          </p>
          <p className="about-text" style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            We combine cutting-edge research with practical engineering to deliver intelligent solutions
            that address real-world challenges across defense, industrial automation, and emerging technologies.
          </p>
          <p className="about-text" style={{ fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
            Our multidisciplinary team of engineers, researchers, and innovators is committed to pushing
            the boundaries of what's possible in robotics and AI, creating systems that are not just
            automated, but truly intelligent and adaptive.
          </p>

          <div className="about-highlights" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-item"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', borderRadius: '12px', textAlign: 'center' }}
              >
                <span className="highlight-icon" style={{ display: 'block', marginBottom: '1rem', color: '#2EA3D6' }}>{getIconSVG(item.icon)}</span>
                <span style={{ fontSize: '1.05rem', fontWeight: '600' }}>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
