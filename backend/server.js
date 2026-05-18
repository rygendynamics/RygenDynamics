// Backend Email Service for Rygen Dynamics
// Node.js/Express backend to handle contact form submissions

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

// Career application endpoint
app.post('/api/career-application', async (req, res) => {
  const {
    fullName,
    email,
    phone,
    position,
    linkedIn,
    portfolio,
    experience,
    education,
    skills,
    coverLetter,
    resumeFileName,
    availableFrom
  } = req.body

  if (!fullName || !email || !phone || !position || !experience || !education || !skills || !coverLetter) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields'
    })
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'rygendynamics@gmail.com',
    subject: `Career Application: ${position} - ${fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #2EA3D6, #1F8ACB); padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0;">Rygen Dynamics</h1>
          <p style="margin: 5px 0 0;">New Career Application Received</p>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #0E2A47;">Candidate Information</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2EA3D6;">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Available From:</strong> ${availableFrom || 'Immediately'}</p>
          <p><strong>LinkedIn:</strong> ${linkedIn ? `<a href="${linkedIn}" style="color: #2EA3D6;">${linkedIn}</a>` : 'N/A'}</p>
          <p><strong>Portfolio:</strong> ${portfolio ? `<a href="${portfolio}" style="color: #2EA3D6;">${portfolio}</a>` : 'N/A'}</p>
          <p><strong>Resume File:</strong> ${resumeFileName || 'Not attached'}</p>
          <hr style="margin: 25px 0; border: none; border-top: 1px solid #d1d5db;" />
          <h3 style="color: #0E2A47;">Experience & Education</h3>
          <p><strong>Experience:</strong> ${experience}</p>
          <p><strong>Education:</strong> ${education}</p>
          <p><strong>Skills:</strong> ${skills}</p>
          <h3 style="color: #0E2A47; margin-top: 25px;">Cover Letter</h3>
          <div style="background: white; padding: 15px; border-left: 4px solid #2EA3D6; white-space: pre-wrap;">${coverLetter}</div>
        </div>
      </div>
    `,
    replyTo: email
  }

  const autoReply = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Application Received - Rygen Dynamics Careers',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 30px;">
        <div style="background: #0E2A47; padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0;">Rygen Dynamics</h1>
          <p style="margin: 5px 0 0;">Thank you for your application</p>
        </div>
        <div style="background: white; padding: 25px; margin-top: 20px; border-radius: 8px;">
          <p>Dear ${fullName},</p>
          <p>We have received your application for the <strong>${position}</strong> role.</p>
          <p>Our team will review your submission and reach out if your profile matches our needs.</p>
          <p>Thank you for considering Rygen Dynamics.</p>
          <p style="margin-top: 20px;"><strong>Rygen Dynamics Team</strong></p>
        </div>
      </div>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReply)

    console.log('✅ Career application email sent successfully for:', fullName)
    res.status(200).json({ success: true, message: 'Application sent successfully' })
  } catch (error) {
    console.error('❌ Error sending career application email:', error)
    res.status(500).json({ success: false, message: 'Failed to send career application', error: error.message })
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
