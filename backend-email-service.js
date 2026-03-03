// Backend Email Service for Rygen Dynamics
// This is a Node.js/Express backend to handle contact form submissions

// ============================================
// SETUP INSTRUCTIONS:
// ============================================
// 1. Create a new folder: backend/
// 2. Copy this file to: backend/server.js
// 3. Run: npm init -y
// 4. Install dependencies: npm install express nodemailer cors dotenv
// 5. Create .env file with Gmail credentials
// 6. Run: node server.js

// ============================================
// INSTALLATION COMMANDS:
// ============================================
/*
mkdir backend
cd backend
npm init -y
npm install express nodemailer cors dotenv
*/

// ============================================
// .env FILE (Create this in backend folder):
// ============================================
/*
EMAIL_USER=rygendynamics@gmail.com
EMAIL_PASSWORD=your_app_specific_password
PORT=5000

# To get Gmail App Password:
# 1. Go to Google Account settings
# 2. Enable 2-Factor Authentication
# 3. Generate App Password for "Mail"
# 4. Use that password here
*/

// ============================================
// SERVER CODE (backend/server.js):
// ============================================

const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Transporter verification failed:', error)
  } else {
    console.log('✅ Email service is ready')
  }
})

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, company, subject, message } = req.body

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Missing required fields' 
    })
  }

  // Email to Rygen Dynamics
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'rygendynamics@gmail.com',
    subject: `Rygen Dynamics Contact: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #2EA3D6, #1F8ACB); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Rygen Dynamics</h1>
          <p style="color: white; margin: 5px 0;">New Contact Form Submission</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #0E2A47;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #0E2A47;">Name:</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr style="background: white;">
              <td style="padding: 10px; font-weight: bold; color: #0E2A47;">Email:</td>
              <td style="padding: 10px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #0E2A47;">Company:</td>
              <td style="padding: 10px;">${company || 'N/A'}</td>
            </tr>
            <tr style="background: white;">
              <td style="padding: 10px; font-weight: bold; color: #0E2A47;">Subject:</td>
              <td style="padding: 10px;">${subject}</td>
            </tr>
          </table>
          
          <h3 style="color: #0E2A47; margin-top: 20px;">Message:</h3>
          <div style="background: white; padding: 15px; border-left: 4px solid #2EA3D6; white-space: pre-wrap;">
            ${message}
          </div>
          
          <p style="margin-top: 20px; color: #6B7280; font-size: 14px;">
            <strong>Submitted:</strong> ${new Date().toLocaleString()}
          </p>
        </div>
        
        <div style="background: #0E2A47; padding: 15px; text-align: center; color: white; font-size: 12px;">
          <p style="margin: 0;">© ${new Date().getFullYear()} Rygen Dynamics. All rights reserved.</p>
          <p style="margin: 5px 0;">Advanced Robotics & Intelligent Systems</p>
        </div>
      </div>
    `,
    replyTo: email
  }

  // Auto-reply to sender
  const autoReply = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for contacting Rygen Dynamics',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #2EA3D6, #1F8ACB); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Rygen Dynamics</h1>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #0E2A47;">Thank you for reaching out!</h2>
          
          <p style="color: #6B7280; line-height: 1.6;">
            Dear ${name},
          </p>
          
          <p style="color: #6B7280; line-height: 1.6;">
            We have received your message and our team will review it shortly. 
            We typically respond within 24-48 hours during business days.
          </p>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #2EA3D6; margin: 20px 0;">
            <h3 style="color: #0E2A47; margin-top: 0;">Your Message:</h3>
            <p style="color: #6B7280; margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
            <p style="color: #6B7280; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #6B7280; line-height: 1.6;">
            Best regards,<br>
            <strong>Rygen Dynamics Team</strong><br>
            Advanced Robotics & Intelligent Systems
          </p>
        </div>
        
        <div style="background: #0E2A47; padding: 15px; text-align: center; color: white; font-size: 12px;">
          <p style="margin: 0;">rygendynamics@gmail.com</p>
          <p style="margin: 5px 0;">India</p>
          <div style="margin-top: 10px;">
            <a href="https://www.linkedin.com/company/rygendynamics-india" style="color: #2EA3D6; text-decoration: none; margin: 0 10px;">LinkedIn</a>
            <a href="https://github.com/rygendynamics" style="color: #2EA3D6; text-decoration: none; margin: 0 10px;">GitHub</a>
          </div>
        </div>
      </div>
    `
  }

  try {
    // Send email to Rygen Dynamics
    await transporter.sendMail(mailOptions)
    
    // Send auto-reply to sender
    await transporter.sendMail(autoReply)
    
    console.log('✅ Email sent successfully to:', email)
    
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    })
  } catch (error) {
    console.error('❌ Error sending email:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
    })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📧 Email recipient: rygendynamics@gmail.com`)
})

// ============================================
// TO RUN THE SERVER:
// ============================================
/*
1. Save this file as backend/server.js
2. Create .env file with your Gmail credentials
3. Run: node server.js
4. Backend will run on http://localhost:5000
*/

// ============================================
// UPDATE Contact.jsx TO USE THIS BACKEND:
// ============================================
/*
const handleSubmit = async (e) => {
  e.preventDefault()
  setSubmitted(true)
  
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    
    const data = await response.json()
    
    if (data.success) {
      alert('Thank you! Your message has been sent successfully.')
      setFormData({ name: '', email: '', company: '', subject: '', message: '' })
    } else {
      alert('Failed to send message. Please try again.')
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Network error. Please check your connection.')
  } finally {
    setTimeout(() => setSubmitted(false), 2000)
  }
}
*/
