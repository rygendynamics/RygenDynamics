import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SplineViewer from './3D/SplineViewer'
import './Capabilities.css'

const Capabilities = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const capabilities = [
    {
      icon: 'robot',
      title: 'Advanced Robotics',
      description: 'Design and development of industrial robots, collaborative robots (cobots), and specialized robotic systems for complex environments.',
      features: ['Robotic Manipulation Systems', 'Autonomous Navigation', 'Human-Robot Collaboration', 'Custom Actuation Solutions']
    },
    {
      icon: 'brain',
      title: 'AI Integration',
      description: 'Machine learning, computer vision, and neural network implementation for intelligent decision-making and adaptive systems.',
      features: ['Deep Learning Models', 'Computer Vision & Detection', 'Predictive Analytics', 'Edge AI Deployment']
    },
    {
      icon: 'cog',
      title: 'Embedded Systems',
      description: 'Real-time embedded software, FPGA design, and hardware-software co-design for mission-critical applications.',
      features: ['RTOS Development', 'FPGA & ASIC Design', 'Sensor Fusion', 'Low-Power Optimization']
    },
    {
      icon: 'bolt',
      title: 'Industrial Automation',
      description: 'End-to-end automation solutions including PLC programming, SCADA systems, and IIoT integration for smart manufacturing.',
      features: ['Process Automation', 'Quality Control Systems', 'Predictive Maintenance', 'Digital Twin Technology']
    },
    {
      icon: 'shield',
      title: 'Defense Systems',
      description: 'Secure, ruggedized systems for defense and strategic applications, meeting stringent military and government standards.',
      features: ['Tactical Robotics', 'Surveillance Systems', 'Secure Communications', 'Mission-Critical Software']
    },
    {
      icon: 'rocket',
      title: 'Autonomous Systems',
      description: 'Next-generation autonomous vehicles, drones, and intelligent agents with advanced perception and decision-making capabilities.',
      features: ['Path Planning & Control', 'SLAM & Localization', 'Multi-Agent Systems', 'Safety-Critical Software']
    }
  ]

  const getIconSVG = (iconName) => {
    const icons = {
      robot: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
      brain: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      cog: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      bolt: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      rocket: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    }
    return icons[iconName]
  }

  return (
    <section className="capabilities-section" id="capabilities" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Core Capabilities</span>
          <h2 className="section-title">Integrated Technology Solutions</h2>
          <p className="section-description">
            From concept to deployment, we deliver end-to-end solutions across the robotics and AI spectrum.
          </p>
        </motion.div>

        <motion.div
          className="capabilities-3d-showcase"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SplineViewer sceneUrl="https://prod.spline.design/cbTjMLRrPzMk5j1a/scene.splinecode" />
        </motion.div>

        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="capability-card card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="capability-icon">{getIconSVG(capability.icon)}</div>
              <h3 className="capability-title">{capability.title}</h3>
              <p className="capability-description">{capability.description}</p>
              <ul className="capability-list">
                {capability.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
