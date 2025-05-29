# URBAN REPARATUREN - Hostinger Deployment Guide

## Files to Upload to Hostinger

### 1. Static Files (Upload to public_html/)
Copy all files from the `dist/public/` folder to your Hostinger public_html directory:
- `index.html` (main page)
- `assets/` folder (contains CSS and JS)
- `images/` folder (if any)

### 2. Server Configuration
- Upload `.htaccess` file to public_html root for proper routing

### 3. PHP Contact Form
Your contact form now uses PHP for email delivery:
- The `contact-form.php` file handles form submissions
- No API keys or server configuration needed
- Emails are sent directly through PHP's mail() function

## Hostinger Setup Steps

### Step 1: File Upload
1. Log into your Hostinger control panel
2. Go to File Manager
3. Navigate to public_html folder
4. Upload all files from `dist/public/` folder
5. Upload the `.htaccess` file to the root

### Step 2: Domain Configuration
1. Make sure your domain points to public_html
2. The app will be accessible at your domain root

### Step 3: Contact Form Setup
Your contact form uses PHP for email delivery:
1. The contact-form.php file is included in the package
2. No additional setup required - works immediately after upload
3. Emails will be sent to: info@urban-r.de

## Files Structure on Hostinger
```
public_html/
├── index.html
├── .htaccess
├── contact-form.php
├── assets/
│   ├── index-6STLF4Wi.css
│   └── index-BKzU5Uc-.js
└── images/
```

## Features Included
✅ Bilingual website (German/English)
✅ Responsive design
✅ Contact form with Mailjet integration
✅ SEO optimized
✅ Fast loading with compressed assets
✅ Proper routing for single-page application

## Support
- All static assets are optimized and compressed
- Browser caching is configured for optimal performance
- Security headers are set via .htaccess