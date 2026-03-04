import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import Contact from '../components/Contact'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <motion.div
              className="contact-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag">Contact Us</span>
              <h1 className="page-title">Get in Touch</h1>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section - Using existing Contact component */}
        <section className="contact-form-section">
          <Contact />
        </section>
      </div>

      <Footer />
    </>
  )
}

export default ContactPage
