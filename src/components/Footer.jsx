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
              <li><Link to="/about">Vision & Mission</Link></li>
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

          <div className="footer-links">
            <h4 className="footer-heading">Resources</h4>
            <ul>
              <li><Link to="/contact">Documentation</Link></li>
              <li><Link to="/contact">Case Studies</Link></li>
              <li><Link to="/contact">White Papers</Link></li>
              <li><Link to="/contact">Blog</Link></li>
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
