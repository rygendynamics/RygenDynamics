import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import './RoboticsSolutions.css'

const RoboticsSolutions = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref4, inView4] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref5, inView5] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref6, inView6] = useInView({ threshold: 0.2, triggerOnce: true })

  const miniROVFeatures = [
    'Overall dimensions: 1600 × 1200 × 1200 mm; maximum weight up to 100 kg',
    'Rechargeable battery with minimum 2 hours of continuous operation',
    'Remote operation range of ≥250 m (radio control) and ≥50 m (fibre optic control)',
    'Ability to climb slopes and stairs up to 45 degrees',
    'Minimum lifting capacity of 8 kg with a telescopic arm extending up to 2 m',
    'Compact and portable operator control station',
    'High-quality front and rear cameras for real-time situational awareness',
    'Modular mounts for disruptor, RTVS, lifting bracket, and shotgun',
    'Operating temperature range of –15°C to +55°C'
  ]

  const vigilbotFeatures = [
    'Autonomous patrolling with real-time threat detection and alert generation',
    'AI-based computer vision for operation in day and night environments',
    'Detection and classification of humans, animals, vehicles, and weapons',
    'Intelligent alarms for unauthorized movement and security breaches',
    'User-friendly dashboard for intuitive monitoring, control, and system management'
  ]

  const cbrneApplications = [
    'Decontamination of Floor, tools & equipment inside a hot cell',
    'Decontamination of Rescue Aircrafts & their cockpit\'s control electronics',
    'Portable Decontamination Spray/Bath for human operators post maintenance and inspection of radiation prone zone'
  ]

  const vrRobotApplications = [
    'Remote Inspection and Operation through Telepresence, Allows operators to control & operate systems to inspect hazardous or hard-to-reach areas such as pipelines, industrial facilities, or disaster zones, minimizing risks to human operators',
    'VR based Training and Education applications for various industries, excellence centre, & Colleges',
    'To showcase capabilities and smart infrastructure in exhibitions and trade shows'
  ]

  const ndtApplications = [
    'UT Spot thickness and Scans',
    'Remote Visual Inspection in challenging surroundings',
    'Storage Tank Shell and Roof Inspections',
    'Pressure Vessel Inspections',
    'Pipeline & Tube Inspections',
    'Laser Surface 2D/3D Mapping to detect defects'
  ]

  const rovApplications = [
    'Hull Inspections: Assess ship hulls for damage or corrosion',
    'Pipeline Inspections: Identify leaks, blockages, and structural issues in underwater pipelines',
    'Underwater Structure Inspections: Evaluate the integrity of bridges, dams, and offshore platforms',
    'Marine Biology Studies: Support research and monitor marine ecosystems',
    'Salvage Operations: Retrieve submerged objects and conduct search and recovery missions',
    'Aquaculture Monitoring: Monitor the health and conditions of underwater farming environments'
  ]

  const firefightingApplications = [
    'Fire Suppression: Extinguish fires in high-risk areas',
    'Search and Rescue: Locate and rescue trapped individuals',
    'Hazardous Material Handling: Safely manage dangerous substances',
    'Remote Monitoring: Provide real-time fire assessments',
    'Structural Inspections: Identify remaining hazards post-fire'
  ]

  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <div className="robotics-page">
        {/* Hero Section */}
        <section className="robotics-hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag">Robotics Solutions</span>
              <h1 className="page-title">Advanced Robotics for Critical Operations</h1>
            </motion.div>
          </div>
        </section>

        {/* MiniROV – EOD Robot */}
        <section className="robot-section" ref={ref1}>
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
                    src="/Photos/HomePage/Mini ROV ROD.png" 
                    alt="MiniROV EOD Robot"
                    className="robot-image"
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
                <span className="content-tag">EOD Solution</span>
                <h2 className="section-title">MiniROV – EOD Robot</h2>
                <p className="section-subtitle">Explosive Ordnance Disposal (EOD)</p>
                <p className="section-paragraph">
                  The MiniROV is a compact, battery-operated land-based EOD robotic system designed for safe detection, 
                  identification, and neutralization of hazardous objects. It enables remote operations in high-risk 
                  environments, significantly reducing operator exposure. The platform offers robust mobility, modular 
                  payload integration, and dual communication modes for flexible deployment.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="features-section"
              initial={{ opacity: 0, y: 30 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="features-title">Key features and capabilities include:</h3>
              <div className="features-grid">
                {miniROVFeatures.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* VIGILBOT */}
        <section className="robot-section alt" ref={ref2}>
          <div className="container">
            <div className="content-grid reverse">
              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: -50 }}
                animate={inView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="content-tag">Security Solution</span>
                <h2 className="section-title">VIGILBOT – AI Security & Surveillance Robot</h2>
                <p className="section-subtitle">Autonomous Security & Surveillance</p>
                <p className="section-paragraph">
                  VIGILBOT is an AI-powered security and surveillance robot designed for autonomous patrolling and 
                  real-time threat detection at forward bases, ammunition depots, and LAC posts. Leveraging advanced 
                  computer vision and AI analytics, it ensures continuous perimeter monitoring in both day and night conditions.
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
                    src="/Photos/HomePage/VIGILBOT.png" 
                    alt="VIGILBOT"
                    className="robot-image"
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
              <h3 className="features-title">Key features and capabilities of VIGILBOT include:</h3>
              <div className="features-grid">
                {vigilbotFeatures.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CBRNE Robots */}
        <section className="robot-section" ref={ref3}>
          <div className="container">
            <div className="content-grid">
              <motion.div
                className="content-image"
                initial={{ opacity: 0, x: -50 }}
                animate={inView3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="image-wrapper">
                  <img 
                    src="/Photos/HomePage/CBRNE.png" 
                    alt="CBRNE Robots"
                    className="robot-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>

              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: 50 }}
                animate={inView3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="content-tag">Decontamination Solution</span>
                <h2 className="section-title">CBRNE Robots</h2>
                <p className="section-subtitle">Nuclear Decontamination</p>
                <p className="section-paragraph">
                  Our robots are equipped with precise decontamination tools and autonomous navigation systems, enabling 
                  them to perform critical cleanup tasks in radioactive environments, reducing human exposure to hazardous 
                  conditions. We have specially designed & successfully commissioned various robots for Department of 
                  Atomic Energy, Government of India.
                </p>
                <div className="applications">
                  <h4 className="applications-title">Some of the applications for our Nuclear Decontamination Robots are:</h4>
                  <ul className="applications-list">
                    {cbrneApplications.map((application, index) => (
                      <li key={index}>{application}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* VR Controlled Robots */}
        <section className="robot-section alt" ref={ref4}>
          <div className="container">
            <div className="content-grid reverse">
              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: -50 }}
                animate={inView4 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="content-tag">VR Integration</span>
                <h2 className="section-title">VR Controlled Robots</h2>
                <p className="section-subtitle">VR-Operated Systems</p>
                <p className="section-paragraph">
                  With immersive control environments, our VR-operated robots offer operators a first-person perspective, 
                  enhancing the precision of operations in inaccessible or dangerous areas, all while maintaining operator 
                  safety. We have specially designed & successfully commissioned & tested for various Government of India 
                  research organizations.
                </p>
                <div className="applications">
                  <h4 className="applications-title">Some of the applications for our VR Robots are:</h4>
                  <ul className="applications-list">
                    {vrRobotApplications.map((application, index) => (
                      <li key={index}>{application}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="content-image"
                initial={{ opacity: 0, x: 50 }}
                animate={inView4 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&h=600&fit=crop" 
                    alt="VR Controlled Robots"
                    className="robot-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NDT Robots */}
        <section className="robot-section" ref={ref5}>
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
                    src="/Photos/HomePage/NDT.png" 
                    alt="NDT Robots"
                    className="robot-image"
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
                <span className="content-tag">Inspection Solution</span>
                <h2 className="section-title">NDT Robots</h2>
                <p className="section-subtitle">NDT Applications</p>
                <p className="section-paragraph">
                  Incorporating advanced inspection technologies, our NDT robots facilitate early flaw detection in 
                  infrastructure and machinery, accessing hard-to-reach areas with flexible and precise manipulation, 
                  ensuring the integrity of critical systems and structures. We have specially designed & successfully 
                  commissioned systems for prestigious organizations of Government of India.
                </p>
                <div className="applications">
                  <h4 className="applications-title">Some of the applications for our NDT Robots are:</h4>
                  <ul className="applications-list">
                    {ndtApplications.map((application, index) => (
                      <li key={index}>{application}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Underwater ROV */}
        <section className="robot-section alt" ref={ref6}>
          <div className="container">
            <div className="content-grid reverse">
              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: -50 }}
                animate={inView6 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="content-tag">Underwater Solution</span>
                <h2 className="section-title">Underwater ROV</h2>
                <p className="section-subtitle">Underwater ROVs</p>
                <p className="section-paragraph">
                  Our advanced Underwater ROVs deliver precise inspections in challenging environments. With high-resolution 
                  sensors and flexible manipulation, they ensure the integrity of underwater infrastructure. Perfect for 
                  hull, pipeline, and structure evaluations, these ROVs offer unmatched reliability and precision.
                </p>
                <div className="applications">
                  <h4 className="applications-title">Some of the applications for our Underwater ROVs are:</h4>
                  <ul className="applications-list">
                    {rovApplications.map((application, index) => (
                      <li key={index}>{application}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="content-image"
                initial={{ opacity: 0, x: 50 }}
                animate={inView6 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="image-wrapper">
                  <img 
                    src="/Photos/HomePage/Underwater.png" 
                    alt="Underwater ROV"
                    className="robot-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Firefighting Robot */}
        <section className="robot-section">
          <div className="container">
            <div className="content-grid">
              <motion.div
                className="content-image"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="image-wrapper">
                  <img 
                    src="/Photos/HomePage/Firefighting robot.png" 
                    alt="Firefighting Robot"
                    className="robot-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>

              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="content-tag">Firefighting Solution</span>
                <h2 className="section-title">Firefighting Robot</h2>
                <p className="section-paragraph">
                  Our firefighting robots enhance safety and efficiency in fire response. Built for extreme conditions, 
                  they navigate hazardous environments, support fire suppression, and conduct search and rescue operations.
                </p>
                <div className="applications">
                  <h4 className="applications-title">Key applications include:</h4>
                  <ul className="applications-list">
                    {firefightingApplications.map((application, index) => (
                      <li key={index}>{application}</li>
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
              <h2 className="cta-title">Deploy Advanced Robotics in Your Operations</h2>
              <p className="cta-description">
                Explore how our robotic solutions can enhance safety and efficiency in your critical operations.
              </p>
              <Link to="/contact">
                <button className="btn btn-primary btn-large">Contact Us</button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default RoboticsSolutions
