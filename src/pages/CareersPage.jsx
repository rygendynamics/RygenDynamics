import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import './CareersPage.css'

const CareersPage = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })

  const benefits = [
    {
      icon: '',
      title: 'Innovation-Driven Culture',
      description: 'Work on cutting-edge projects in robotics, AI/ML, and autonomous systems'
    },
    {
      icon: '',
      title: 'Professional Development',
      description: 'Access training programs, workshops, and continuous skill enhancement'
    },
    {
      icon: '',
      title: 'Collaborative Team',
      description: 'Collaborate with talented professionals across diverse disciplines'
    },
    {
      icon: '',
      title: 'Career Advancement',
      description: 'Clear career progression paths and growth opportunities'
    }
  ]

  const openPositions = [
    {
      title: 'Robotics Engineer',
      department: 'Engineering',
      location: 'On-site',
      type: 'Full-time',
      description: 'Design and develop advanced robotic systems for defense, nuclear, and industrial applications.'
    },
    {
      title: 'AI/ML Engineer',
      department: 'Technology',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Develop intelligent systems for accident prevention, predictive maintenance, and autonomous operations.'
    },
    {
      title: 'VR/AR Developer',
      department: 'Technology',
      location: 'On-site',
      type: 'Full-time',
      description: 'Create immersive training simulations for defense, nuclear, and industrial sectors.'
    },
    {
      title: 'Embedded Systems Engineer',
      department: 'Engineering',
      location: 'On-site',
      type: 'Full-time',
      description: 'Design embedded software and hardware for autonomous robotic platforms.'
    },
    {
      title: 'Mechanical Design Engineer',
      department: 'Engineering',
      location: 'On-site',
      type: 'Full-time',
      description: 'Engineer mechanical systems and components for specialized robotics and equipment.'
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Drive growth in defense, nuclear, and industrial technology sectors.'
    }
  ]

  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <div className="careers-page">
        {/* Hero Section */}
        <section className="careers-hero">
          <div className="container">
            <motion.div
              className="careers-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag">Career Opportunities</span>
              <h1 className="page-title">Join Our Team</h1>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="why-join-section" ref={ref1}>
          <div className="container">
            <motion.div
              className="section-header centered"
              initial={{ opacity: 0, y: 30 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">Why Rygen Dynamics</span>
              <h2 className="section-title">Why Work With Us?</h2>
              <p className="section-description">
                Contribute to national security and technological advancement through meaningful work.
              </p>
            </motion.div>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="benefit-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="positions-section" ref={ref2}>
          <div className="container">
            <motion.div
              className="section-header centered"
              initial={{ opacity: 0, y: 30 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">Open Positions</span>
              <h2 className="section-title">Current Openings</h2>
              <p className="section-description">
                Explore exciting opportunities to work on groundbreaking projects in robotics, AI, and automation.
              </Join groundbreaking projects in robotics, AI/ML, and autonomous systems
            </motion.div>

            <div className="positions-list">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  className="position-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="position-header">
                    <div>
                      <h3 className="position-title">{position.title}</h3>
                      <div className="position-meta">
                        <span className="position-department">{position.department}</span>
                        <span className="position-separator">•</span>
                        <span className="position-location">{position.location}</span>
                        <span className="position-separator">•</span>
                        <span className="position-type">{position.type}</span>
                      </div>
                    </div>
                    <Link to="/contact">
                      <button className="apply-btn">Apply Now</button>
                    </Link>
                  </div>
                  <p className="position-description">{position.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="careers-cta-section">
          <div className="container">
            <motion.div
              className="cta-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="cta-title">Don't See Your Role?</h2>
              <p className="cta-description">
                We're always seeking talented professionals. Submit your resume for future opportunities.
              </p>
              <Link to="/contact">
                <button className="btn btn-primary btn-large">Send Your Resume</button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default CareersPage
