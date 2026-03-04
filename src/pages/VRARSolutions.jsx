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
      description: 'Dive into realistic, interactive scenarios that boost skill retention and readiness, transforming the way your team trains.'
    },
    {
      icon: '',
      title: 'Customized for You',
      description: 'Each solution is crafted to meet your industry\'s unique demands, ensuring relevance and effectiveness.'
    },
    {
      icon: '',
      title: 'Safety First',
      description: 'Our risk-free virtual environments allow for safe practice of critical operations, minimizing real-world accidents.'
    },
    {
      icon: '',
      title: 'Scalable & Integrative',
      description: 'Our flexible solutions grow with your needs, seamlessly integrating into your existing training framework.'
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
                  Enhance safety protocols and reduce risk with VR simulations that replicate critical procedures and 
                  emergency scenarios, offering a hands-on learning experience without the inherent dangers.
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
                  Virtual Reality (VR) modules redefine education and training for engineering and medical disciplines, 
                  preparing students for the demands of modern workplaces. Our immersive simulations cover civil, 
                  electrical, electronics, IT, and mechanical fields, offering hands-on experiences in diverse environments.
                </p>
                <div className="features-list">
                  <div className="feature-item">
                    <span className="feature-icon">🔧</span>
                    <span>Explore machine modules for in-depth understanding of machinery functions</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🧪</span>
                    <span>Experiment simulations for safe scientific exploration</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🏭</span>
                    <span>Industrial environments for virtual tours of operational facilities</span>
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
                  Revolutionize supply chain management with immersive VR experiences. Explore our cutting-edge solutions 
                  for storage and inventory optimization, from ensuring fire safety in LPG cylinder storage to implementing 
                  the first in first out principle for dry ration supplies. Our VR simulations provide hands-on training 
                  and visualization, allowing users to learn best practices for efficient stacking, rotation, and emergency 
                  response protocols within a virtual warehouse environment.
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
                  Virtual Reality (VR) modules revolutionize training and operations in the oil and gas sector by 
                  providing immersive simulations for hazardous environment training, complex equipment handling, and 
                  detailed maintenance procedures. This technology enhances safety, improves operational efficiency, 
                  and reduces downtime by allowing personnel to practice and perfect their skills in a controlled, 
                  risk-free setting.
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
                  Prepare your forces with our AR & VR combat and strategic planning simulations. Experience hyper-realistic 
                  battlefield scenarios that improve decision-making, strategy, and teamwork, all while ensuring the safety 
                  of your personnel.
                </p>
                <div className="use-cases">
                  <h4 className="use-cases-title">Some of the use cases for Armed forces such as Air Force, Navy, Army and Paramilitary are:</h4>
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
              <h2 className="cta-title">Ready to Transform Your Operations?</h2>
              <p className="cta-description">
                Contact us today to learn how our VR/AR solutions can revolutionize your training and operations.
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
