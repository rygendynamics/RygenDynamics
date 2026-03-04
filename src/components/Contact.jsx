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
