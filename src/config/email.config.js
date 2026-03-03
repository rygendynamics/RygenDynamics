// Email Configuration for Rygen Dynamics Contact Form
// Target Email: rygendynamics@gmail.com

/* 
 * SETUP OPTIONS FOR EMAIL SUBMISSION:
 * Choose one of the following methods to handle form submissions
 */

// ============================================
// OPTION 1: EmailJS (Recommended - Free & Easy)
// ============================================
// 1. Sign up at https://www.emailjs.com/
// 2. Create email service (Gmail)
// 3. Create email template
// 4. Get your credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id',     // Replace with your EmailJS service ID
  TEMPLATE_ID: 'your_template_id',   // Replace with your EmailJS template ID
  PUBLIC_KEY: 'your_public_key'      // Replace with your EmailJS public key
}

// Install: npm install @emailjs/browser
// Usage in Contact.jsx:
/*
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  
  try {
    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        to_email: 'rygendynamics@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        submission_date: new Date().toLocaleString()
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', company: '', subject: '', message: '' })
  } catch (error) {
    console.error('Failed to send:', error)
    alert('Failed to send message. Please try again.')
  }
}
*/

// ============================================
// OPTION 2: Formspree (Simple, No Backend)
// ============================================
// 1. Sign up at https://formspree.io/
// 2. Get your form endpoint
// 3. Update form action

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your_form_id'

// Usage: Simply change form action in Contact.jsx:
/*
<form 
  action="https://formspree.io/f/your_form_id" 
  method="POST"
  className="contact-form"
>
*/

// ============================================
// OPTION 3: Custom Backend (Node.js + Nodemailer)
// ============================================
// See backend-email-service.js for implementation

export const BACKEND_API_URL = 'http://localhost:5000/api/contact'

// Usage in Contact.jsx:
/*
const handleSubmit = async (e) => {
  e.preventDefault()
  
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', company: '', subject: '', message: '' })
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Failed to send message.')
  }
}
*/

// ============================================
// OPTION 4: Google Forms (Alternative)
// ============================================
// 1. Create Google Form
// 2. Get form URL
// 3. Use form submission URL

export const GOOGLE_FORM_CONFIG = {
  FORM_URL: 'https://docs.google.com/forms/d/e/your_form_id/formResponse',
  FIELDS: {
    name: 'entry.xxxxx',      // Your Google Form field IDs
    email: 'entry.xxxxx',
    company: 'entry.xxxxx',
    subject: 'entry.xxxxx',
    message: 'entry.xxxxx'
  }
}

// ============================================
// CURRENT IMPLEMENTATION (Mailto - Basic)
// ============================================
// Currently opens email client - works but not ideal
// Users must have email client configured

export const RECIPIENT_EMAIL = 'rygendynamics@gmail.com'
