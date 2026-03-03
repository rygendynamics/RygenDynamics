# 📧 Email Setup Instructions for Rygen Dynamics

## Current Implementation
The contact form currently uses `mailto:` which opens the user's email client. For a professional solution, follow one of the options below.

---

## ✅ **RECOMMENDED: EmailJS (Easiest & Free)**

### Why EmailJS?
- ✅ No backend needed
- ✅ Free tier (200 emails/month)
- ✅ 5 minutes setup
- ✅ Works from browser

### Setup Steps:

1. **Sign up at [EmailJS](https://www.emailjs.com/)**

2. **Add Email Service**
   - Go to "Email Services"
   - Click "Add New Service"
   - Select "Gmail"
   - Connect your Gmail: `rygendynamics@gmail.com`

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Template variables:
     ```
     From: {{from_name}} ({{from_email}})
     Company: {{company}}
     Subject: {{subject}}
     
     Message:
     {{message}}
     
     Submitted: {{submission_date}}
     ```

4. **Get Your Credentials**
   - Service ID (from Email Services)
   - Template ID (from Email Templates)
   - Public Key (from Account settings)

5. **Install EmailJS**
   ```bash
   npm install @emailjs/browser
   ```

6. **Update Contact.jsx**
   ```javascript
   import emailjs from '@emailjs/browser'

   const handleSubmit = async (e) => {
     e.preventDefault()
     
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         {
           to_email: 'rygendynamics@gmail.com',
           from_name: formData.name,
           from_email: formData.email,
           company: formData.company,
           subject: formData.subject,
           message: formData.message,
           submission_date: new Date().toLocaleString()
         },
         'YOUR_PUBLIC_KEY'
       )
       
       alert('Message sent successfully!')
       setFormData({ name: '', email: '', company: '', subject: '', message: '' })
     } catch (error) {
       alert('Failed to send. Please try again.')
     }
   }
   ```

---

## 🔧 **Option 2: Custom Backend (Full Control)**

I've created a complete backend service for you in `backend-email-service.js`.

### Setup:

1. **Install Node.js** (if not already installed)

2. **Create backend folder**
   ```bash
   mkdir backend
   cd backend
   npm init -y
   npm install express nodemailer cors dotenv
   ```

3. **Copy the server code**
   - Use code from `backend-email-service.js`
   - Save as `backend/server.js`

4. **Create `.env` file in backend folder**
   ```env
   EMAIL_USER=rygendynamics@gmail.com
   EMAIL_PASSWORD=your_app_specific_password
   PORT=5000
   ```

5. **Get Gmail App Password**
   - Go to [Google Account](https://myaccount.google.com/)
   - Security → 2-Step Verification (enable it)
   - Security → App passwords → Generate
   - Select "Mail" and get password
   - Use this in `.env` file

6. **Run the backend**
   ```bash
   cd backend
   node server.js
   ```

7. **Update Contact.jsx** (example in backend-email-service.js)

### Features:
- ✅ Sends email to your Gmail
- ✅ Sends auto-reply to customer
- ✅ Beautiful HTML email templates
- ✅ Form validation
- ✅ Error handling

---

## 🌐 **Option 3: Formspree (No Backend)**

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form
3. Get your form endpoint
4. Update Contact.jsx:
   ```javascript
   <form 
     action="https://formspree.io/f/YOUR_FORM_ID" 
     method="POST"
   >
   ```

---

## 📊 **Option 4: Google Forms**

1. Create a [Google Form](https://forms.google.com/)
2. Configure to send responses to `rygendynamics@gmail.com`
3. Get form submission URL
4. Update Contact.jsx to submit to Google Forms

---

## 🎯 **What I Need From You**

To complete the email setup, please tell me:

1. **Which option do you prefer?**
   - EmailJS (recommended, easiest)
   - Custom Backend (most control)
   - Formspree (simple)
   - Google Forms (alternative)

2. **For EmailJS (if chosen):**
   - Your EmailJS Service ID
   - Your EmailJS Template ID
   - Your EmailJS Public Key

3. **For Custom Backend (if chosen):**
   - Should I help set up the backend server?
   - Do you need help getting Gmail App Password?

4. **Additional fields you want in the form:**
   - Current fields: Name, Email, Company, Subject, Message
   - Do you need: Phone number? Country? Project budget? Timeline?

---

## 📝 **Current Form Data Collected**

When someone submits the form, you'll receive:
- ✅ Full Name
- ✅ Email Address
- ✅ Company/Organization
- ✅ Subject (Partnership/Project/Investment/Career/Other)
- ✅ Message
- ✅ Submission Date & Time

**All sent to:** `rygendynamics@gmail.com`

---

## 🔗 **Social Links Updated**

✅ LinkedIn: https://www.linkedin.com/company/rygendynamics-india
✅ GitHub: https://github.com/rygendynamics

Both links now open in new tabs and are properly configured in the footer!

---

**What would you like to do next?** Let me know which email solution you prefer and any additional fields you'd like in the contact form! 🚀
