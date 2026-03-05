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
                <h2 className="section-title">Leading India's Defense & Nuclear Technology</h2>
                <p className="section-paragraph">
                  <strong>Rygen Dynamics</strong> is India's emerging leader in advanced defense and nuclear technologies. 
                  We deliver robotics, AI/ML solutions, AR/VR simulations, and automation systems that address critical 
                  challenges in national security and industrial operations.
                </p>
                <p className="section-paragraph">
                  Our expertise spans heavy-duty equipment, autonomous robotics, and specialized IT solutions for 
                  homeland security, defense, and nuclear safety. We transform complex operational challenges into 
                  reliable, intelligent solutions.
                </p>
                <p className="section-paragraph">
                  Partnering with Rygen Dynamics means collaborating with experts committed to excellence, innovation, 
                  and national security—building a safer, technologically advanced future for India.  
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
                <h2 className="section-title">Solutions for a Smarter World</h2>
                <p className="section-paragraph">
                  Our vision: <strong>'Solutions for a Smarter World.'</strong> We enhance safety, security, and 
                  operational efficiency through cutting-edge robotics, AI/ML, AR/VR, and automation technologies.
                </p>
                <p className="section-paragraph">
                  Aligned with <strong>'Atmanirbhar Bharat',</strong> we integrate traditional values with modern 
                  innovation, creating sustainable solutions that serve national interests and advance global progress.
                </p>
                <p className="section-paragraph">
                  We envision a future where technology and tradition converge to build a more secure, efficient, 
                  and prosperous society.
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
                  Our mission is to achieve global leadership in advanced technologies—Robotics, AI/ML, AR/VR, and 
                  Automation—positioning India as a center of innovation and technological excellence.
                </p>
                <p className="section-paragraph">
                  Built on <strong>integrity, innovation, and cultural respect,</strong> we deliver solutions for 
                  the most critical challenges in defense, nuclear energy, and industrial automation, ensuring 
                  technology serves as a catalyst for safety, security, and operational efficiency.
                </p>
                <p className="section-paragraph">
                  We unite cutting-edge innovation with time-honored values to empower societies worldwide, driving 
                  progress with ethical responsibility and national pride.
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
                  icon: '',
                  title: 'Excellence',
                  description: 'Delivering world-class solutions that exceed industry standards'
                },
                {
                  icon: '',
                  title: 'Innovation',
                  description: 'Pioneering cutting-edge technologies for tomorrow\'s challenges'
                },
                {
                  icon: '',
                  title: 'Integrity',
                  description: 'Upholding the highest ethical standards in all our operations'
                },
                {
                  icon: '',
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
