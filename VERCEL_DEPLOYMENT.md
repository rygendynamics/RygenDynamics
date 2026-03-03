# 🚀 Vercel Deployment Guide - Rygen Dynamics

## Overview
Your Rygen Dynamics website is now configured for Vercel deployment. This guide will help you deploy both the frontend (React app) and backend (serverless email API) to Vercel.

---

## 📋 Prerequisites

1. **GitHub Account** (to connect your repository)
2. **Vercel Account** (free tier available at [vercel.com](https://vercel.com))
3. **Gmail App Password** (you already have: `yxgpkhzsnxlphcvs`)

---

## 🎯 Deployment Steps

### Step 1: Push Your Code to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Rygen Dynamics website"
   ```

2. **Create a GitHub repository**:
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `rygen-dynamics-website` (or any name you prefer)
   - Make it **Private** (recommended for security)
   - Click "Create repository"

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/rygen-dynamics-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. Click **"Add New Project"**
3. **Import your GitHub repository**:
   - Select "Import Git Repository"
   - Choose your `rygen-dynamics-website` repository
   - Click "Import"

4. **Configure Project Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. **Add Environment Variables** (IMPORTANT!):
   Click "Environment Variables" and add:
   
   | Name | Value |
   |------|-------|
   | `EMAIL_USER` | `rygendynamics@gmail.com` |
   | `EMAIL_PASSWORD` | `yxgpkhzsnxlphcvs` |
   | `VITE_API_URL` | Leave empty for now (will add after deployment) |

6. **Click "Deploy"**
   - Vercel will build and deploy your site
   - Wait 2-3 minutes for completion

### Step 3: Configure API URL

1. **After deployment completes**, you'll get a URL like:
   ```
   https://rygen-dynamics-website.vercel.app
   ```

2. **Go back to Vercel Dashboard**:
   - Click on your project
   - Go to **Settings** → **Environment Variables**
   - Edit `VITE_API_URL` and set it to your deployment URL:
   ```
   https://rygen-dynamics-website.vercel.app
   ```

3. **Redeploy** (to apply the new environment variable):
   - Go to **Deployments** tab
   - Click the three dots on the latest deployment
   - Click "Redeploy"

### Step 4: Test Your Deployment

1. **Visit your live site**:
   ```
   https://rygen-dynamics-website.vercel.app
   ```

2. **Test the contact form**:
   - Scroll to the Contact section
   - Fill out the form
   - Submit
   - Check `rygendynamics@gmail.com` for the email
   - Check the sender's email for auto-reply

---

## 🔧 Project Structure

```
RygenDynamics/
├── api/
│   └── contact.js          # Vercel serverless function for email
├── src/
│   ├── components/
│   │   └── Contact.jsx     # Updated with environment variable
│   └── ...
├── backend/                # Local development backend (not deployed)
│   ├── server.js
│   └── .env
├── vercel.json            # Vercel configuration
├── .env.local             # Local development environment vars
├── .env.production        # Production environment vars template
└── package.json           # Added nodemailer dependency

```

---

## 🌍 Environment Variables Explained

### For Vercel Dashboard (Production):
- `EMAIL_USER`: Your Gmail address (`rygendynamics@gmail.com`)
- `EMAIL_PASSWORD`: Your Gmail App Password (`yxgpkhzsnxlphcvs`)
- `VITE_API_URL`: Your Vercel deployment URL

### For Local Development:
- `.env.local`: Contains `VITE_API_URL=http://localhost:5000`
- `backend/.env`: Contains Gmail credentials for local backend

---

## 🔄 How It Works

### Local Development:
1. Run backend: `cd backend && node server.js` (port 5000)
2. Run frontend: `npm run dev` (port 3000)
3. Frontend connects to `http://localhost:5000/api/contact`

### Production (Vercel):
1. Frontend deployed as static React app
2. Backend deployed as serverless function at `/api/contact`
3. Frontend connects to `https://your-site.vercel.app/api/contact`

---

## 📧 Email Configuration

### Current Setup:
- **Sender**: `rygendynamics@gmail.com`
- **Recipient**: `rygendynamics@gmail.com`
- **Auto-reply**: Sent to form submitter
- **Gmail App Password**: Already configured

### Email Features:
✅ Branded HTML templates
✅ Automatic replies to customers
✅ Form data validation
✅ Error handling
✅ Professional formatting

---

## 🛠️ Updating Your Site

### After making changes:

1. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```

2. **Vercel auto-deploys** your changes!
   - No manual steps needed
   - Takes 2-3 minutes
   - Receives notifications on completion

---

## 🎨 Custom Domain (Optional)

### To use your own domain:

1. **Buy a domain** (e.g., `rygendynamics.com`)
2. **In Vercel Dashboard**:
   - Go to your project → Settings → Domains
   - Click "Add Domain"
   - Enter your domain
   - Follow DNS configuration instructions
3. **Update `VITE_API_URL`** environment variable to your custom domain

---

## 🔒 Security Notes

### Keep Secret:
- ❌ **Never commit** `.env` files to GitHub
- ❌ **Never commit** Gmail App Password to code
- ✅ **Use** Vercel environment variables for secrets
- ✅ **Keep** repository private

### Already Protected:
- `.env.local` is in `.gitignore`
- `backend/.env` is in `.gitignore`
- Environment variables stored securely in Vercel

---

## 🐛 Troubleshooting

### Contact Form Not Working:
1. **Check Vercel Logs**:
   - Go to Vercel Dashboard → Deployments
   - Click on latest deployment → View Function Logs
   - Look for errors in `/api/contact` function

2. **Verify Environment Variables**:
   - Settings → Environment Variables
   - Make sure all three are set correctly
   - Redeploy after changes

3. **Test API Directly**:
   ```bash
   curl -X POST https://your-site.vercel.app/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Testing"}'
   ```

### Build Failures:
- Check build logs in Vercel Dashboard
- Make sure all dependencies are in `package.json`
- Verify `npm run build` works locally

### Email Not Sending:
- Verify Gmail App Password is correct
- Check if 2-Step Verification is enabled on Gmail
- Review function logs for error messages

---

## 📊 Monitoring

### Vercel Analytics:
- Go to your project → Analytics
- See page views, performance metrics
- Monitor form submissions

### Email Monitoring:
- Check Gmail for received form submissions
- Monitor Gmail sent folder for auto-replies
- Set up Gmail filters for organization

---

## 🎉 What You Get After Deployment

### Production URL:
- ✅ Fast global CDN delivery
- ✅ Automatic HTTPS certificate
- ✅ Zero-downtime deployments
- ✅ Auto-scaling serverless functions

### Features Working:
- ✅ 3D animations (Robot arm, particles, cube)
- ✅ Contact form with email notifications
- ✅ Auto-reply to customers
- ✅ Social media links (LinkedIn, GitHub)
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Professional branding

---

## 📞 Support

### Need Help?
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Issues**: Report problems in your repository
- **Vercel Support**: Available through dashboard

### Quick Links:
- Vercel Dashboard: [vercel.com/dashboard](https://vercel.com/dashboard)
- GitHub Repo: `https://github.com/YOUR_USERNAME/rygen-dynamics-website`
- Production Site: `https://your-site.vercel.app`

---

## ✅ Deployment Checklist

Before deploying:
- [ ] Code pushed to GitHub
- [ ] Repository is private (recommended)
- [ ] `.env` files are in `.gitignore`
- [ ] Gmail App Password ready

During deployment:
- [ ] Connected GitHub repository
- [ ] Framework preset set to Vite
- [ ] Environment variables added (all 3)
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`

After deployment:
- [ ] Updated `VITE_API_URL` with production URL
- [ ] Redeployed with new environment variable
- [ ] Tested contact form
- [ ] Verified email received
- [ ] Checked auto-reply sent

---

## 🚀 You're Ready to Deploy!

Follow the steps above and your Rygen Dynamics website will be live on Vercel with:
- ⚡ Lightning-fast performance
- 📧 Professional email system
- 🎨 Beautiful 3D animations
- 📱 Mobile-responsive design
- 🔒 Secure HTTPS

**Let's make Rygen Dynamics visible to the world!** 🌍
