import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Vision.css'

const Vision = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="vision-section" id="vision" ref={ref}>
      <div className="container">
        <div className="vision-grid">
          <motion.div
            className="vision-card"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="vision-icon-large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="vision-title">Our Vision</h3>
            <p className="vision-text">
              To become a global leader in intelligent autonomous systems, driving
              technological sovereignty and creating solutions that enhance human capability,
              national security, and industrial productivity.
            </p>
            <p className="vision-text">
              We envision a future where intelligent machines work seamlessly alongside humans,
              solving complex challenges and enabling unprecedented levels of efficiency and innovation
              across critical sectors.
            </p>
          </motion.div>

          <motion.div
            className="vision-card"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="vision-icon-large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="vision-title">Our Mission</h3>
            <p className="vision-text">
              Deliver cutting-edge robotic and AI solutions that are reliable, scalable, and secure.
              We are committed to excellence in engineering, ethical innovation, and creating
              technology that serves humanity's greatest challenges.
            </p>
            <ul className="mission-list">
              <li><strong>Innovation First:</strong> Continuously push technological boundaries</li>
              <li><strong>Quality Assured:</strong> Maintain the highest standards in every project</li>
              <li><strong>Client Success:</strong> Partner closely for optimal outcomes</li>
              <li><strong>National Impact:</strong> Contribute to technological sovereignty</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Vision
