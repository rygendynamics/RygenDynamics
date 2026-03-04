import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import './AboutPage.css'

const AboutPage = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          {/* 3D element temporarily disabled for performance */}
          <div className="container">
            <motion.div
              className="about-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag">About Rygen Dynamics</span>
              <h1 className="page-title">Engineering the Future</h1>
              <div className="hero-underline"></div>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="about-section" ref={ref1}>
          <div className="container">
            <div className="content-grid">
              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: -50 }}
                animate={inView1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-title">Leading the Future of Defense & Nuclear Technology</h2>
                <p className="section-paragraph">
                  Welcome to <strong>Rygen Dynamics</strong>, a pioneering entity in India's defense and nuclear sectors, 
                  established with the vision to revolutionize the technological landscape. Based in India, we are at the 
                  forefront of delivering advanced robotics, AI/ML solutions, AR/VR simulations, and automation systems 
                  that address the most pressing challenges in critical industries.
                </p>
                <p className="section-paragraph">
                  Our expertise spans a comprehensive spectrum—from developing heavy-duty industrial equipment and 
                  sophisticated robotic systems to implementing cutting-edge IT solutions focused on homeland security, 
                  defense applications, and nuclear safety. Rygen Dynamics excels as a key provider of specialized 
                  machinery, autonomous robots, and comprehensive engineering design services, transforming complex 
                  operational challenges into efficient, reliable solutions.
                </p>
                <p className="section-paragraph">
                  Choosing Rygen Dynamics means partnering with a company dedicated to excellence, innovation, and 
                  unwavering commitment to national security. Every solution we deliver contributes to building a 
                  safer, more sustainable, and technologically advanced future for India and beyond.
                </p>
              </motion.div>
              
              <motion.div
                className="content-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView1 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" 
                    alt="Advanced Technology"
                    className="about-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section" ref={ref2}>
          <div className="container">
            <div className="content-grid reverse">
              <motion.div
                className="content-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" 
                    alt="Our Vision"
                    className="about-image"
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
                <span className="content-tag">Our Vision</span>
                <h2 className="section-title">Solution for a Smarter World</h2>
                <p className="section-paragraph">
                  At Rygen Dynamics, our vision is encapsulated in our motto: <strong>'Solution for a Smarter World.'</strong> 
                  We are committed to enhancing operational efficiency, safety, and security through the deployment of 
                  cutting-edge technologies including robotics, artificial intelligence and machine learning (AI/ML), 
                  augmented and virtual reality (AR/VR), and comprehensive automation solutions.
                </p>
                <p className="section-paragraph">
                  In alignment with the <strong>'Atmanirbhar Bharat'</strong> (Self-Reliant India) initiative, we seamlessly 
                  integrate traditional Indian values with modern technological innovation. Our approach is rooted in 
                  creating sustainable, ethical, and impactful solutions that not only serve national interests but also 
                  contribute to improving quality of life on a global scale.
                </p>
                <p className="section-paragraph">
                  We envision a future where technology and tradition converge to create a more secure, efficient, and 
                  prosperous society for all.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section" ref={ref3}>
          <div className="container">
            <div className="content-grid">
              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: -50 }}
                animate={inView3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="content-tag">Our Mission</span>
                <h2 className="section-title">Leading Innovation in Critical Technologies</h2>
                <p className="section-paragraph">
                  At Rygen Dynamics, our mission is to achieve global leadership in the development and deployment of 
                  advanced technologies—Robotics, AI/ML, AR/VR, and Automation—that reshape industries and position 
                  India as a beacon of innovation and technological excellence on the world stage.
                </p>
                <p className="section-paragraph">
                  Built on a foundation of <strong>integrity, innovation, and cultural respect</strong>, we are dedicated 
                  to delivering solutions that address the most critical challenges in defense, nuclear energy, and 
                  industrial automation. Our work ensures that technology serves as a force for positive transformation, 
                  enhancing safety, security, and operational efficiency across sectors.
                </p>
                <p className="section-paragraph">
                  We are committed to crafting a future where cutting-edge technology and time-honored traditions unite 
                  to empower societies worldwide, driving progress while upholding the highest standards of ethical 
                  responsibility and national pride.
                </p>
              </motion.div>
              
              <motion.div
                className="content-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView3 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop" 
                    alt="Our Mission"
                    className="about-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <motion.div
              className="section-header centered"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">Our Values</span>
              <h2 className="section-title">Built on Strong Foundations</h2>
            </motion.div>

            <div className="values-grid">
              {[
                {
                  icon: '🎯',
                  title: 'Excellence',
                  description: 'Delivering world-class solutions that exceed industry standards'
                },
                {
                  icon: '🔬',
                  title: 'Innovation',
                  description: 'Pioneering cutting-edge technologies for tomorrow\'s challenges'
                },
                {
                  icon: '🛡️',
                  title: 'Integrity',
                  description: 'Upholding the highest ethical standards in all our operations'
                },
                {
                  icon: '🇮🇳',
                  title: 'National Pride',
                  description: 'Contributing to India\'s technological self-reliance and growth'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AboutPage
