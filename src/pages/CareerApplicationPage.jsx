import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import './CareerApplicationPage.css'

const CareerApplicationPage = () => {
  const [searchParams] = useSearchParams()
  const positionFromUrl = searchParams.get('position') || ''
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: positionFromUrl,
    linkedIn: '',
    portfolio: '',
    experience: '',
    education: '',
    skills: '',
    coverLetter: '',
    resume: null,
    availableFrom: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (positionFromUrl) {
      setFormData(prev => ({ ...prev, position: positionFromUrl }))
    }
  }, [positionFromUrl])

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
      // Only allow PDF and DOC files
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload only PDF or DOC files')
        return
      }
      setFormData({ ...formData, resume: file })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
    
    try {
      // For now, send as JSON (resume file name only)
      // In production, you'd want to implement file upload properly
      const applicationData = {
        ...formData,
        resumeFileName: formData.resume ? formData.resume.name : ''
      }
      
      const response = await fetch(`${apiUrl}/api/career-application`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData)
      })
      
      const data = await response.json()
      
      if (data.success) {
        alert('Thank you! Your application has been submitted successfully. We will review it and get back to you soon.')
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          linkedIn: '',
          portfolio: '',
          experience: '',
          education: '',
          skills: '',
          coverLetter: '',
          resume: null,
          availableFrom: ''
        })
        // Clear file input
        const fileInput = document.getElementById('resume')
        if (fileInput) fileInput.value = ''
        setSubmitted(true)
      } else {
        alert('Failed to submit application. Please try again or email us at rygendynamics@gmail.com')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Network error. Please try again or email us directly at rygendynamics@gmail.com')
    }
    
    setIsLoading(false)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      
      <div className="career-application-page">
        {/* Hero Section */}
        <section className="application-hero">
          <div className="container">
            <motion.div
              className="application-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag">Career Application</span>
              <h1 className="page-title">Join Our Team</h1>
              <p className="hero-description">
                Fill out the form below to apply for a position at Rygen Dynamics
              </p>
            </motion.div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="application-form-section">
          <div className="container">
            <div className="application-grid">
              <motion.div
                className="application-info"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-title">Application Guidelines</h2>
                <p className="info-description">
                  We're looking for talented individuals who are passionate about technology and innovation.
                </p>
                <div className="guidelines-box">
                  <h3>What We Look For:</h3>
                  <ul>
                    <li>
                      <span>✓</span>
                      Strong technical skills and problem-solving abilities
                    </li>
                    <li>
                      <span>✓</span>
                      Passion for robotics, AI/ML, or software development
                    </li>
                    <li>
                      <span>✓</span>
                      Team collaboration and communication skills
                    </li>
                    <li>
                      <span>✓</span>
                      Willingness to learn and adapt to new technologies
                    </li>
                    <li>
                      <span>✓</span>
                      Commitment to excellence and innovation
                    </li>
                  </ul>
                </div>
                <div className="contact-info-box">
                  <h3>Questions?</h3>
                  <p>Email us at: <a href="mailto:rygendynamics@gmail.com">rygendynamics@gmail.com</a></p>
                </div>
              </motion.div>

              <motion.div
                className="application-form-wrapper"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form className="application-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
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
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="position">Position Applying For *</label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a position</option>
                        <option value="Robotics Engineer">Robotics Engineer</option>
                        <option value="AI/ML Engineer">AI/ML Engineer</option>
                        <option value="Software Developer">Software Developer</option>
                        <option value="VR/AR Developer">VR/AR Developer</option>
                        <option value="Embedded Systems Engineer">Embedded Systems Engineer</option>
                        <option value="Mechanical Design Engineer">Mechanical Design Engineer</option>
                        <option value="Business Development Manager">Business Development Manager</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="linkedIn">LinkedIn Profile</label>
                      <input
                        type="url"
                        id="linkedIn"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="portfolio">Portfolio / Website</label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="experience">Years of Experience *</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years (Fresher/Entry Level)</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="education">Highest Education *</label>
                    <input
                      type="text"
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      required
                      placeholder="e.g., B.Tech in Computer Science, M.Tech in Robotics"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="skills">Key Skills *</label>
                    <input
                      type="text"
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Python, React, ROS, Machine Learning, CAD"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="availableFrom">Available From</label>
                    <input
                      type="date"
                      id="availableFrom"
                      name="availableFrom"
                      value={formData.availableFrom}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume">Resume / CV * (PDF or DOC, Max 10MB)</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      required
                      accept=".pdf,.doc,.docx"
                      className="file-input"
                    />
                    {formData.resume && (
                      <p className="file-name">Selected: {formData.resume.name}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="coverLetter">Cover Letter / Why You Want To Join Us *</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit for Rygen Dynamics..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : submitted ? 'Application Submitted ✓' : 'Submit Application'}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default CareerApplicationPage
