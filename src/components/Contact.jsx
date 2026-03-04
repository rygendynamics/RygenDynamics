import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SplineViewer from './3D/SplineViewer'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    attachment: null
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Limit file size to 10MB
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB')
        return
      }
      setFormData({ ...formData, attachment: file })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)
    
    // Use environment variable for API URL (falls back to local backend)
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
    
    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const data = await response.json()
      
      if (data.success) {
        alert('Thank you! Your message has been sent successfully. You will receive a confirmation email shortly.')
        setFormData({ name: '', email: '', company: '', subject: '', message: '', attachment: null })
        // Clear file input
        const fileInput = document.getElementById('attachment')
        if (fileInput) fileInput.value = ''
      } else {
        alert('Failed to send message. Please try again or contact us directly at rygendynamics@gmail.com')
        setSubmitted(false)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Network error. Please check that the backend server is running or contact us at rygendynamics@gmail.com')
      setSubmitted(false)
    }
    
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let's Build the Future Together</h2>
            <p className="contact-description">
              Whether you're looking to collaborate, explore partnership opportunities,
              or discuss a project, we'd love to hear from you.
            </p>

            <div className="contact-3d-viewer">
              <SplineViewer sceneUrl="https://prod.spline.design/V-X5Ty2sZktcuHAP/scene.splinecode" clipHeight={120} />
            </div>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon-wrapper">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Email</div>
                  <a href="mailto:rygendynamics@gmail.com" className="contact-value">
                    rygendynamics@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon-wrapper">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Phone</div>
                  <a href="tel:+918980005452" className="contact-value">
                    +91 8980005452
                  </a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon-wrapper">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Surat, Gujarat</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company / Organization / College</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter your company, organization, or college name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="project">Project Inquiry</option>
                  <option value="investment">Investment Interest</option>
                  <option value="career">Career Opportunities</option>
                  <option value="internship">Internship Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="attachment">Attachment (Optional)</label>
                <input
                  type="file"
                  id="attachment"
                  name="attachment"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                />
                <small className="file-hint">Max file size: 10MB. Accepted formats: PDF, DOC, DOCX, TXT, PNG, JPG</small>
                {formData.attachment && (
                  <div className="file-selected">
                    Selected: {formData.attachment.name} ({(formData.attachment.size / 1024).toFixed(2)} KB)
                  </div>
                )}
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary btn-large btn-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
              >
                {submitted ? 'Message Sent Successfully' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
