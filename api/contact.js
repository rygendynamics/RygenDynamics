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
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb;">
        <!-- Header with Logo -->
        <div style="background: linear-gradient(135deg, #0E2A47 0%, #2EA3D6 100%); padding: 40px 30px; text-align: center;">
          <img src="https://rygendynamics-india.vercel.app/Rygen%20Dynamics.png" alt="Rygen Dynamics" style="max-width: 180px; height: auto; margin-bottom: 15px;" />
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
          <p style="color: #E0F2FE; margin: 8px 0 0 0; font-size: 14px;">Advanced Robotics & Intelligent Systems</p>
        </div>
        
        <!-- Main Content -->
        <div style="padding: 40px 30px; background: #f9fafb;">
          <h2 style="color: #0E2A47; margin: 0 0 25px 0; font-size: 20px; font-weight: 600; border-bottom: 3px solid #2EA3D6; padding-bottom: 10px;">Contact Information</h2>
          
          <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <tr style="background: #f3f4f6;">
              <td style="padding: 15px 20px; font-weight: 600; color: #0E2A47; width: 30%; border-bottom: 1px solid #e5e7eb;">Full Name</td>
              <td style="padding: 15px 20px; color: #374151; border-bottom: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr style="background: white;">
              <td style="padding: 15px 20px; font-weight: 600; color: #0E2A47; border-bottom: 1px solid #e5e7eb;">Email Address</td>
              <td style="padding: 15px 20px; color: #374151; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #2EA3D6; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="background: #f3f4f6;">
              <td style="padding: 15px 20px; font-weight: 600; color: #0E2A47; border-bottom: 1px solid #e5e7eb;">Company/Organization/College</td>
              <td style="padding: 15px 20px; color: #374151; border-bottom: 1px solid #e5e7eb;">${company || 'Not Provided'}</td>
            </tr>
            <tr style="background: white;">
              <td style="padding: 15px 20px; font-weight: 600; color: #0E2A47;">Inquiry Type</td>
              <td style="padding: 15px 20px; color: #374151;">${subject}</td>
            </tr>
          </table>
          
          <h3 style="color: #0E2A47; margin: 30px 0 15px 0; font-size: 18px; font-weight: 600;">Message Details:</h3>
          <div style="background: white; padding: 20px; border-left: 5px solid #2EA3D6; border-radius: 4px; white-space: pre-wrap; line-height: 1.8; color: #374151; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
${message}
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #E0F2FE; border-radius: 6px; border-left: 4px solid #2EA3D6;">
            <p style="margin: 0; color: #0E2A47; font-size: 13px;">
              <strong>📅 Submission Date:</strong> ${new Date().toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}
            </p>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background: #0E2A47; padding: 30px; text-align: center; color: #E0F2FE;">
          <div style="margin-bottom: 20px;">
            <img src="https://rygendynamics-india.vercel.app/Rygen%20Dynamics.png" alt="Rygen Dynamics" style="max-width: 120px; height: auto; opacity: 0.9;" />
          </div>
          <p style="margin: 0 0 5px 0; font-size: 14px; color: #ffffff; font-weight: 600;">© ${new Date().getFullYear()} Rygen Dynamics. All Rights Reserved.</p>
          <p style="margin: 0 0 15px 0; font-size: 12px; color: #94A3B8;">Building the Future with Advanced Robotics & AI</p>
          <div style="border-top: 1px solid #1E3A5F; padding-top: 15px; margin-top: 15px;">
            <p style="margin: 5px 0; font-size: 13px;"><strong>📧 Email:</strong> <a href="mailto:rygendynamics@gmail.com" style="color: #2EA3D6; text-decoration: none;">rygendynamics@gmail.com</a></p>
            <p style="margin: 5px 0; font-size: 13px;"><strong>📞 Phone:</strong> <a href="tel:+918980005452" style="color: #2EA3D6; text-decoration: none;">+91 8980005452</a></p>
            <p style="margin: 5px 0; font-size: 13px;"><strong>🌐 Website:</strong> <a href="https://rygendynamics-india.vercel.app" style="color: #2EA3D6; text-decoration: none;">rygendynamics-india.vercel.app</a></p>
          </div>
          <div style="margin-top: 20px;">
            <a href="https://www.linkedin.com/company/rygendynamics-india" style="display: inline-block; margin: 0 10px; color: #2EA3D6; text-decoration: none; font-weight: 600; font-size: 13px;">🔗 LinkedIn</a>
            <a href="https://github.com/rygendynamics" style="display: inline-block; margin: 0 10px; color: #2EA3D6; text-decoration: none; font-weight: 600; font-size: 13px;">💻 GitHub</a>
          </div>
        </div>
      </div>
    `,
    replyTo: email
  }

  // Auto-reply to sender
  const autoReply = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank You for Contacting Rygen Dynamics - We\'ll Be In Touch Soon!',
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff !important; border: 1px solid #e5e7eb;">
        <!-- Header with Logo -->
        <div style="background-color: #ffffff !important; padding: 40px 30px; text-align: center; border-bottom: 3px solid #2EA3D6;" bgcolor="#ffffff">
          <img src="https://rygendynamics-india.vercel.app/Rygen%20Dynamics.png" alt="Rygen Dynamics" style="max-width: 200px; height: auto; margin-bottom: 20px;" />
          <h1 style="color: #0E2A47; margin: 0; font-size: 26px; font-weight: 600; line-height: 1.3;">Thank You for Reaching Out!</h1>
          <p style="color: #6B7280; margin: 12px 0 0 0; font-size: 15px;">Your message has been received successfully</p>
        </div>
        
        <!-- Main Content -->
        <div style="padding: 40px 30px; background-color: #ffffff !important;" bgcolor="#ffffff">
          <p style="color: #0E2A47; font-size: 18px; margin: 0 0 20px 0; font-weight: 600;">Dear ${name},</p>
          
          <p style="color: #374151; line-height: 1.8; margin: 0 0 20px 0; font-size: 15px;">
            Thank you for your interest in <strong style="color: #2EA3D6;">Rygen Dynamics</strong>! We have successfully received your inquiry and our team is reviewing your message.
          </p>
          
          <div style="background: #F0F9FF; border-left: 5px solid #2EA3D6; padding: 20px; margin: 25px 0; border-radius: 4px;">
            <p style="margin: 0 0 10px 0; color: #0E2A47; font-weight: 600; font-size: 14px;">⏱️ Response Time</p>
            <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6;">
              We typically respond within <strong>24-48 hours</strong> during business days. Our team will carefully review your inquiry and get back to you with a detailed response.
            </p>
          </div>
          
          <!-- Message Summary -->
          <div style="background: #f9fafb; padding: 25px; border-radius: 8px; margin: 25px 0; border: 1px solid #e5e7eb;">
            <h3 style="color: #0E2A47; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">📝 Your Message Summary:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6B7280; font-size: 13px; width: 30%;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0; color: #0E2A47; font-size: 13px;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6B7280; font-size: 13px;"><strong>Company/Organization/College:</strong></td>
                <td style="padding: 8px 0; color: #0E2A47; font-size: 13px;">${company || 'Not Provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6B7280; font-size: 13px; vertical-align: top;"><strong>Message:</strong></td>
                <td style="padding: 8px 0; color: #0E2A47; font-size: 13px; line-height: 1.6;">${message.length > 150 ? message.substring(0, 150) + '...' : message}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #ffffff !important; padding: 25px; border-radius: 8px; margin: 30px 0; text-align: center; border: 2px solid #2EA3D6;" bgcolor="#ffffff">
            <p style="color: #0E2A47; margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">In the meantime, explore what we do:</p>
            <a href="https://rygendynamics-india.vercel.app" style="display: inline-block; background: #2EA3D6; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 10px; font-size: 14px;">Visit Our Website →</a>
          </div>
          
          <p style="color: #374151; line-height: 1.8; margin: 25px 0 0 0; font-size: 14px;">
            Best regards,<br>
            <strong style="color: #0E2A47; font-size: 15px;">Rygen Dynamics Team</strong><br>
            <span style="color: #6B7280; font-size: 13px;">Advanced Robotics & Intelligent Systems</span>
          </p>
        </div>
        
        <!-- Contact Information Section -->
        <div style="background: #f9fafb; padding: 30px; border-top: 3px solid #2EA3D6;">
          <h3 style="color: #0E2A47; margin: 0 0 20px 0; font-size: 16px; font-weight: 600; text-align: center;">📞 Get In Touch</h3>
          <table style="width: 100%; max-width: 500px; margin: 0 auto;">
            <tr>
              <td style="padding: 10px; text-align: center;">
                <div style="display: inline-block; text-align: left;">
                  <p style="margin: 5px 0; color: #374151; font-size: 14px;">
                    <strong style="color: #0E2A47;">📧 Email:</strong> 
                    <a href="mailto:rygendynamics@gmail.com" style="color: #2EA3D6; text-decoration: none;">rygendynamics@gmail.com</a>
                  </p>
                  <p style="margin: 5px 0; color: #374151; font-size: 14px;">
                    <strong style="color: #0E2A47;">📞 Phone:</strong> 
                    <a href="tel:+918980005452" style="color: #2EA3D6; text-decoration: none;">+91 8980005452</a>
                  </p>
                  <p style="margin: 5px 0; color: #374151; font-size: 14px;">
                    <strong style="color: #0E2A47;">🌐 Website:</strong> 
                    <a href="https://rygendynamics-india.vercel.app" style="color: #2EA3D6; text-decoration: none;">rygendynamics-india.vercel.app</a>
                  </p>
                </div>
              </td>
            </tr>
          </table>
          
          <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0 0 15px 0; color: #6B7280; font-size: 13px; font-weight: 600;">Connect With Us:</p>
            <a href="https://www.linkedin.com/company/rygendynamics-india" style="display: inline-block; margin: 0 12px; padding: 10px 20px; background: #0077B5; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 13px; font-weight: 600;">🔗 LinkedIn</a>
            <a href="https://github.com/rygendynamics" style="display: inline-block; margin: 0 12px; padding: 10px 20px; background: #24292e; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 13px; font-weight: 600;">💻 GitHub</a>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background: #0E2A47; padding: 25px; text-align: center; color: #94A3B8;">
          <div style="margin-bottom: 15px;">
            <img src="https://rygendynamics-india.vercel.app/Rygen%20Dynamics.png" alt="Rygen Dynamics" style="max-width: 100px; height: auto; opacity: 0.8;" />
          </div>
          <p style="margin: 5px 0; font-size: 12px; color: #E0F2FE;">© ${new Date().getFullYear()} Rygen Dynamics. All Rights Reserved.</p>
          <p style="margin: 5px 0; font-size: 11px;">Pioneering the Future of Robotics, AI & Autonomous Systems</p>
          <p style="margin: 15px 0 5px 0; font-size: 11px; color: #64748B;">
            You received this email because you contacted us through our website contact form.<br>
            This is an automated confirmation message.
          </p>
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
