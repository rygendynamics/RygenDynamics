import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import './BDDSEquipment.css'

const BDDSEquipment = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true })

  const eodFeatures = [
    'Remote Safety: Perform operations from a safe distance with minimized risk in unstable environments',
    'Efficient Neutralization: Armed with versatile tools for quick disarmament of explosive threats',
    'Instant Insights: Fast data analysis for prompt response and informed decision-making',
    'Ease of Use: Intuitive interfaces for straightforward operation by emergency teams'
  ]

  const telescopicFeatures = [
    {
      title: 'Length',
      description: '5m when fully extended and 900mm in collapsed position'
    },
    {
      title: 'Weight',
      description: 'Not more than 9 Kg without wheels and less than 15 Kg with wheels & counterweight'
    },
    {
      title: 'Lifting capacity',
      description: 'It can lift up to 25 kg'
    },
    {
      title: 'Stand-off distance',
      description: 'Minimum stand-off distance of 3 meters from the tip of the claw when fully extended'
    },
    {
      title: 'Break away tip',
      description: 'The Telescopic Manipulator will have a break away tip arrangement, so that in case of possible explosion, only the tip is damaged and reduce the recoil effect almost to nil'
    },
    {
      title: 'Adjustable claw',
      description: 'Opens to 210mm'
    },
    {
      title: 'Carrying case',
      description: 'The equipment in a folded state will be small, portable, and wheeled carrying case'
    },
    {
      title: 'Built for Extremes',
      description: 'Reliable operation in temperatures ranging from -20°C to +60°C'
    },
    {
      title: 'Waterproofing',
      description: 'Electronics and battery case are water-resistant'
    },
    {
      title: 'Long-lasting battery',
      description: '6-hour continuous operation with a lithium-ion rechargeable battery'
    },
    {
      title: 'Optional claws',
      description: 'L-shaped, Teethed, and straight jaws will be provided as attachments for the claw to pick up and hold tightly circular, smooth, flat and rectangular objects'
    },
    {
      title: 'Shoulder strap',
      description: 'Comfortable and adjustable shoulder Strap for the operator to wear and handle it while wearing a Bomb Suit'
    },
    {
      title: 'Durable construction',
      description: 'Made of aluminum, stainless steel, and carbon fiber'
    }
  ]

  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <div className="bdds-page">
        {/* Hero Section */}
        <section className="bdds-hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag">BDDS Equipment</span>
              <h1 className="page-title">Bomb Detection & Disposal Equipment</h1>
            </motion.div>
          </div>
        </section>

        {/* EOD Robot */}
        <section className="equipment-section" ref={ref1}>
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
                    src="/Photos/HomePage/EOD.png" 
                    alt="EOD Robot"
                    className="equipment-image"
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
                <h2 className="section-title">EOD Robot</h2>
                <p className="section-paragraph">
                  EOD Robotic Solutions, engineered to confront and mitigate the risks posed by explosive threats. 
                  Designed for precision, safety, and efficiency, these robotic systems enable first responders and 
                  defense teams to tackle hazardous environments head-on, ensuring public safety and environmental 
                  protection with minimal human exposure.
                </p>
                <p className="section-paragraph highlight-text">
                  EOD Robot is battery operated land rover that can undertake multiple missions to scan, locate and 
                  dispose of/ destroy hazardous objects safely.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="features-section"
              initial={{ opacity: 0, y: 30 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="features-grid-large">
                {eodFeatures.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <p className="feature-card-text">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Telescopic Manipulator */}
        <section className="equipment-section alt" ref={ref2}>
          <div className="container">
            <div className="content-grid reverse">
              <motion.div
                className="content-text"
                initial={{ opacity: 0, x: -50 }}
                animate={inView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="content-tag">Manipulation Equipment</span>
                <h2 className="section-title">Telescopic Manipulator</h2>
                <p className="section-paragraph">
                  The Telescopic Manipulator can handle & manipulate unknown suspicious objects such as IEDs from a safe 
                  distance. This advanced tool aligns with modernization efforts, enhancing officer safety during critical 
                  operations. We can manipulate objects from tree, and Dustbin, to Grip objects under vehicles. Also, we 
                  can grip objects as light as egg, water bottles without breakage and deformity.
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
                    src="/Photos/HomePage/Telescopic Manipulator.png" 
                    alt="Telescopic Manipulator"
                    className="equipment-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="specifications-section"
              initial={{ opacity: 0, y: 30 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="specifications-title">Technical Specifications:</h3>
              <div className="specifications-grid">
                {telescopicFeatures.map((spec, index) => (
                  <div key={index} className="specification-item">
                    <h4 className="spec-title">{spec.title}</h4>
                    <p className="spec-description">{spec.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Car Remote Opening Toolkit (CROT) */}
        <section className="equipment-section" ref={ref3}>
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
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop" 
                    alt="CROT"
                    className="equipment-image"
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
                <span className="content-tag">Vehicle Safety</span>
                <h2 className="section-title">Car Remote Opening Toolkit (CROT)</h2>
                <p className="section-paragraph">
                  In today's world, the rising threat of terrorism and sabotage makes it crucial for countries to be 
                  prepared for any emergency. Our equipment is designed to help bomb disposal squads effectively neutralize 
                  threats, ensuring safety and security. Our Car Remote Opening Toolkit allows for the safe handling of 
                  potentially booby-trapped vehicles from a distance, emphasizing careful planning and preparation for 
                  unpredictable outcomes.
                </p>

                <div className="info-boxes">
                  <div className="info-box search">
                    <h4 className="info-box-title">
                      <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '20px', height: '20px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search & Safety
                    </h4>
                    <p className="info-box-text">
                      CROT ensures safe access to suspicious vehicles facing potential booby traps, as certain IEDs detonate upon car access or ignition.
                    </p>
                  </div>

                  <div className="info-box warning">
                    <h4 className="info-box-title">
                      <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '20px', height: '20px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Warning
                    </h4>
                    <p className="info-box-text">
                      IEDs are inherently unstable. Handle suspect objects with utmost care to prevent accidental detonation. CROT is ideal for such situations.
                    </p>
                  </div>

                  <div className="info-box flexibility">
                    <h4 className="info-box-title">
                      <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '20px', height: '20px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Flexibility
                    </h4>
                    <p className="info-box-text">
                      Compatible with all vehicle types, providing comprehensive coverage for various emergency scenarios.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Safety Notice Section */}
        <section className="safety-notice-section">
          <div className="container">
            <motion.div
              className="safety-notice"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <svg className="safety-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '64px', height: '64px', color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="safety-title">Committed to Safety & Excellence</h3>
              <p className="safety-description">
                All our BDDS equipment is designed and manufactured to the highest safety standards, ensuring maximum 
                operator protection and operational reliability in critical situations. We work closely with Indian 
                defense forces to deliver solutions that save lives and protect national security.
              </p>
            </motion.div>
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
              <h2 className="cta-title">Protect Your Forces with Advanced BDDS Equipment</h2>
              <p className="cta-description">
                Contact us to learn more about our bomb detection and disposal solutions tailored for your requirements.
              </p>
              <Link to="/contact">
                <button className="btn btn-primary btn-large">Request Information</button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default BDDSEquipment
