import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/Rygen Dynamics.png" alt="Rygen Dynamics" className="footer-logo" />
            <p className="footer-tagline">
              Engineering intelligent systems for tomorrow's challenges.
            </p>
            <div className="social-links">
              <motion.a 
                href="https://www.linkedin.com/company/rygendynamics-india" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                whileHover={{ y: -5 }}
                title="LinkedIn"
              >
                <span>in</span>
              </motion.a>
              <motion.a href="#" className="social-link" whileHover={{ y: -5 }}>
                <span>𝕏</span>
              </motion.a>
              <motion.a 
                href="https://github.com/rygendynamics" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                whileHover={{ y: -5 }}
                title="GitHub"
              >
                <span>GH</span>
              </motion.a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#vision">Vision & Mission</a></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Solutions</h4>
            <ul>
              <li><a href="#capabilities">Advanced Robotics</a></li>
              <li><a href="#capabilities">AI Integration</a></li>
              <li><a href="#capabilities">Embedded Systems</a></li>
              <li><a href="#capabilities">Defense Systems</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">White Papers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-cta">
            <h4 className="footer-heading">Stay Updated</h4>
            <p className="footer-cta-text">Subscribe to our newsletter for the latest in robotics and AI.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Rygen Dynamics. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
