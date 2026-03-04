import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import './AIMLSolutions.css'

const AIMLSolutions = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })

  const accidentPreventionFeatures = [
    'Smart Eye Monitoring: AI algorithms track eye movements, alerting against driver fatigue',
    'Drink & Drive Identifier: Detects whether the driver has consumed alcohol, and gives auditory feedback accordingly',
    'Adaptable in any light: Performs seamlessly in low light conditions, ensuring 24/7 vigilance',
    'Ethnicity Calibration: Tailored for diverse driver personnel for precise assessments',
    'Distraction Detection: Warns against mobile phone use, smoking cigarettes, and consuming any drink to maintain focus on driving',
    'Data Logging: Can get details about the sleeping history of the driver while driving',
    'Alert duration: Continuous till appropriate action is taken by the individual',
    'Rugged & Ergonomic: Lightweight and rugged enclosure',
    'Vibration Proof system: The system is certified by NABL Accredited lab that in case of high vibration system will run as usual',
    'Buzzer tunes change based on Sleepiness Alert, It also warns against Anti-infrared glasses'
  ]

  const predictiveMaintenanceFeatures = [
    'Timely Maintenance: Schedules interventions at optimal times, extending equipment lifespan',
    'Failure Prediction: Forecasts equipment malfunctions, enabling preemptive action',
    'Operational Efficiency: Reduces downtime, ensuring smooth transit operations',
    'Cost Reduction: Minimizes maintenance expenses by preventing major failures'
  ]

  const predictiveMaintenanceUseCases = [
    'Predictive Maintenance system for Metro Rail Equipment',
    'Predictive Maintenance system for Armored Vehicles',
    'Predictive Maintenance of mining equipment'
  ]

  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <div className="aiml-page">
        {/* Hero Section */}
        <section className="aiml-hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag">AI/ML Solutions</span>
              <h1 className="page-title">Artificial Intelligence and Machine Learning</h1>
            </motion.div>
          </div>
        </section>

        {/* AI Based Accident Prevention System */}
        <section className="solution-section" ref={ref1}>
          <div className="container">
            <div className="content-grid">
              <motion.div
                className="content-image"
                initial={{ opacity: 0, x: -50 }}
                animate={inView1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop" 
                    alt="AI Accident Prevention"
                    className="solution-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>

              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: 50 }}
                animate={inView1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="content-tag">Safety Solution</span>
                <h2 className="section-title">AI Based Accident Prevention System</h2>
                <p className="section-paragraph">
                  Elevate road safety with AI-based Accident Prevention system, crafted for the Indian Army vehicles, 
                  Loco pilots, Bus drivers etc. Designed to monitor driver fatigue through advanced eye-tracking 
                  technology, ensuring a vigilant & secure journey.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="features-section"
              initial={{ opacity: 0, y: 30 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="features-title">Key Features:</h3>
              <div className="features-grid">
                {accidentPreventionFeatures.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Based Predictive Maintenance */}
        <section className="solution-section alt" ref={ref2}>
          <div className="container">
            <div className="content-grid reverse">
              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: -50 }}
                animate={inView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="content-tag">Maintenance Solution</span>
                <h2 className="section-title">AI Based Predictive Maintenance</h2>
                <p className="section-paragraph">
                  Revolutionizing maintenance practices across various industries, our predictive maintenance systems 
                  leverage advanced AI algorithms to forecast and prevent potential breakdowns in vehicles, machinery, 
                  oil and gas vessels, and more. By harnessing real-time data analytics, we ensure optimal operational 
                  performance, minimize downtime, and maximize asset lifespan, empowering businesses to stay ahead in a 
                  rapidly evolving landscape.
                </p>
              </motion.div>

              <motion.div
                className="content-image"
                initial={{ opacity: 0, x: 50 }}
                animate={inView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop" 
                    alt="Predictive Maintenance"
                    className="solution-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="features-section"
              initial={{ opacity: 0, y: 30 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="features-columns">
                <div className="features-column">
                  <h3 className="features-title">Key Features:</h3>
                  <div className="features-list">
                    {predictiveMaintenanceFeatures.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="features-column">
                  <h3 className="features-title">Some Use cases of AI Based Predictive Maintenance are:</h3>
                  <div className="features-list">
                    {predictiveMaintenanceUseCases.map((useCase, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-icon">→</span>
                        <span className="feature-text">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="industries-section">
          <div className="container">
            <motion.div
              className="section-header centered"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">Industries We Serve</span>
              <h2 className="section-title">Powering Critical Sectors with AI</h2>
            </motion.div>

            <div className="industries-grid">
              {[
                {
                  icon: '🛡️',
                  title: 'Defense',
                  description: 'Advanced AI solutions for military vehicles and strategic operations'
                },
                {
                  icon: '⚡',
                  title: 'Nuclear',
                  description: 'Predictive maintenance and safety monitoring systems'
                },
                {
                  icon: '🚊',
                  title: 'Railway',
                  description: 'AI-powered systems for loco pilots and metro operations'
                },
                {
                  icon: '🚛',
                  title: 'Transportation',
                  description: 'Driver monitoring and accident prevention solutions'
                },
                {
                  icon: '🛢️',
                  title: 'Oil & Gas',
                  description: 'Equipment monitoring and preventive maintenance'
                },
                {
                  icon: '⚙️',
                  title: 'Industrial',
                  description: 'Machine monitoring and operational efficiency solutions'
                }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  className="industry-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="industry-icon">{industry.icon}</div>
                  <h3 className="industry-title">{industry.title}</h3>
                  <p className="industry-description">{industry.description}</p>
                </motion.div>
              ))}
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
              <h2 className="cta-title">Transform Your Operations with AI</h2>
              <p className="cta-description">
                Ready to implement cutting-edge AI/ML solutions in your organization? Contact us today to learn more.
              </p>
              <Link to="/contact">
                <button className="btn btn-primary btn-large">Get Started</button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AIMLSolutions
