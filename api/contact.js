// Vercel Serverless Function for Contact Form
// This replaces the Express backend for production deployment

const nodemailer = require('nodemailer')

// Configure CORS headers
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const { name, email, company, subject, message } = req.body

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Missing required fields' 
    })
  }

  // Create email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  })

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
    
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    })
  } catch (error) {
    console.error('❌ Error sending email:', error)
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
    })
  }
}

module.exports = allowCors(handler)
