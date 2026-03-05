import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import './VRARSolutions.css'

const VRARSolutions = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref4, inView4] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref5, inView5] = useInView({ threshold: 0.2, triggerOnce: true })

  const benefits = [
    {
      icon: '',
      title: 'Immersive Learning',
      description: 'Realistic simulations that enhance skill retention and operational readiness.'
    },
    {
      icon: '',
      title: 'Custom Solutions',
      description: 'Tailored to your industry\'s specific operational and training requirements.'
    },
    {
      icon: '',
      title: 'Risk-Free Training',
      description: 'Practice critical operations in safe virtual environments without real-world risks.'
    },
    {
      icon: '',
      title: 'Scalable & Flexible',
      description: 'Adaptable solutions that grow with your organization and integrate seamlessly.'
    }
  ]

  const nuclearUseCases = [
    'Maintenance training of Steam Turbines and Generators',
    'Emergency Response Drills Simulation',
    'Simulations for Operations of pumps, valves and radiation monitoring equipment'
  ]

  const oilGasUseCases = [
    'Equipment MRO',
    'Safety procedures and disaster management training',
    'Complex equipment handling simulations'
  ]

  const defenseUseCases = [
    'Infantry Combat Simulation',
    'Aircraft Inspection and MRO',
    'Emergency Response and Medical Training',
    'Disaster Management',
    'Equipment MRO'
  ]

  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <div className="vrar-page">
        {/* Hero Section */}
        <section className="vrar-hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag">VR/AR Solutions</span>
              <h1 className="page-title">Virtual & Augmented Reality Lab Setups & Simulators</h1>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section" ref={ref1}>
          <div className="container">
            <motion.div
              className="section-header centered"
              initial={{ opacity: 0, y: 30 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Why Choose Our AR & VR Solutions?</h2>
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
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nuclear & Thermal Industry */}
        <section className="industry-section" ref={ref2}>
          <div className="container">
            <div className="content-grid">
              <motion.div
                className="content-image"
                initial={{ opacity: 0, x: -50 }}
                animate={inView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop" 
                    alt="Nuclear & Thermal Industry"
                    className="industry-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>

              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: 50 }}
                animate={inView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="content-tag">Industry Solution</span>
                <h2 className="section-title">Nuclear & Thermal Industry</h2>
                <p className="section-paragraph">
                  VR simulations replicate critical procedures and emergency scenarios, providing hands-on training 
                  without inherent risks. Enhance safety protocols and reduce operational hazards.
                </p>
                <div className="use-cases">
                  <h4 className="use-cases-title">Some of the use cases are:</h4>
                  <ul className="use-cases-list">
                    {nuclearUseCases.map((useCase, index) => (
                      <li key={index}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Sector */}
        <section className="industry-section alt" ref={ref3}>
          <div className="container">
            <div className="content-grid reverse">
              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: -50 }}
                animate={inView3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="content-tag">Industry Solution</span>
                <h2 className="section-title">Education Sector</h2>
                <p className="section-paragraph">
                  Our VR modules revolutionize engineering and medical education through immersive, hands-on experiences. \n                  Students engage with realistic simulations across civil, electrical, electronics, IT, and mechanical disciplines.\n                </p>
                <div className="features-list">
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Machine module exploration for equipment operation training</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Laboratory experiment simulations for safe scientific practice</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Virtual industrial facility tours and operational walkthroughs</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="content-image"
                initial={{ opacity: 0, x: 50 }}
                animate={inView3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=600&fit=crop" 
                    alt="Education Sector"
                    className="industry-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Supply Chain/Logistics */}
        <section className="industry-section" ref={ref4}>
          <div className="container">
            <div className="content-grid">
              <motion.div
                className="content-image"
                initial={{ opacity: 0, x: -50 }}
                animate={inView4 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop" 
                    alt="Supply Chain & Logistics"
                    className="industry-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>

              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: 50 }}
                animate={inView4 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="content-tag">Industry Solution</span>
                <h2 className="section-title">Supply Chain/Logistics Sector</h2>
                <p className="section-paragraph">
                  Optimize warehouse and inventory management through immersive VR training. Simulations cover fire safety 
                  protocols, inventory rotation (FIFO), efficient stacking methods, and emergency response procedures in 
                  virtual warehouse environments.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Oil & Gas Industry */}
        <section className="industry-section alt">
          <div className="container">
            <div className="content-grid reverse">
              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="content-tag">Industry Solution</span>
                <h2 className="section-title">Oil & Gas Industry</h2>
                <p className="section-paragraph">
                  Immersive VR training modules for hazardous environment operations, complex equipment handling, and 
                  maintenance procedures. Enhance safety protocols and operational efficiency through risk-free practice 
                  environments.
                </p>
                <div className="use-cases">
                  <h4 className="use-cases-title">Some of the use cases are:</h4>
                  <ul className="use-cases-list">
                    {oilGasUseCases.map((useCase, index) => (
                      <li key={index}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="content-image"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop" 
                    alt="Oil & Gas Industry"
                    className="industry-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Defense and Public Safety */}
        <section className="industry-section" ref={ref5}>
          <div className="container">
            <div className="content-grid">
              <motion.div
                className="content-image"
                initial={{ opacity: 0, x: -50 }}
                animate={inView5 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1568667256549-094345857637?w=800&h=600&fit=crop" 
                    alt="Defense and Public Safety"
                    className="industry-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>

              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: 50 }}
                animate={inView5 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="content-tag">Industry Solution</span>
                <h2 className="section-title">Defense and Public Safety</h2>
                <p className="section-paragraph">
                  Realistic AR/VR combat and tactical simulations for defense forces. Enhance decision-making, strategy, \n                  and operational readiness through immersive battlefield scenarios without personnel risk.\n                </p>
                <div className="use-cases">
                  <h4 className="use-cases-title">Applications for Armed Forces (Air Force, Navy, Army, Paramilitary):</h4>
                  <ul className="use-cases-list">
                    {defenseUseCases.map((useCase, index) => (
                      <li key={index}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <motion.div
              className="cta-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="cta-title">Transform Your Training Operations</h2>
              <p className="cta-description">
                Discover how our VR/AR solutions can enhance operational readiness and safety protocols.
              </p>
              <Link to="/contact">
                <button className="btn btn-primary btn-large">Get in Touch</button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default VRARSolutions
