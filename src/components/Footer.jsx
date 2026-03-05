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
              Advanced solutions for defense, nuclear, and critical industries.
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
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Solutions</h4>
            <ul>
              <li><Link to="/products/robotics">Advanced Robotics</Link></li>
              <li><Link to="/products/ai-ml">AI Integration</Link></li>
              <li><Link to="/products">Embedded Systems</Link></li>
              <li><Link to="/products/bdds">Defense Systems</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Information</h4>
            <div className="footer-contact-item">
              <strong>Email</strong>
              <a href="mailto:rygendynamics@gmail.com">rygendynamics@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <strong>Phone</strong>
              <a href="tel:+918980005452">+91 8980005452</a>
            </div>
            <div className="footer-contact-item">
              <strong>Location</strong>
              <span>Surat, Gujarat</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Rygen Dynamics. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
            <Link to="/contact">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
