# Urban Reparaturen - Complete Hostinger Deployment Guide

This guide provides step-by-step instructions for deploying your website to Hostinger using the static site approach with PHP form handling.

## Overview of Deployment Strategy

We're using a static site approach where:
1. The main website content is delivered as static HTML/CSS/JS files (built from your React application)
2. The contact form is processed by a PHP script (`form-handler.php`) that handles the email sending

This approach offers:
- Excellent performance (static content loads quickly)
- Simple deployment (just upload files to Hostinger)
- No need for Node.js hosting (which would be more expensive)
- Reliable contact form processing using Hostinger's built-in PHP and mail capabilities

## Step-by-Step Deployment Instructions

### 1. Build Your React Application

First, make sure you have the latest build of your React application:

```bash
npm run build
```

This will create optimized production files in the `dist/public` directory.

### 2. Prepare Your Hostinger Files

You'll need to copy these files to your Hostinger deployment:

- All static assets from `dist/public` folder (HTML, CSS, JS files)
- The `form-handler.php` script (already included in this package)
- The `button-highlight.css` file for the CTA button animation

### 3. Upload to Hostinger

1. Log in to your Hostinger control panel
2. Navigate to "File Manager"
3. Go to the `public_html` directory
4. Upload all the files from the `public_html` folder in this package

### 4. Test Your Deployment

After uploading:

1. Visit your website URL
2. Test navigation, language switching, and all interactive elements
3. Submit a test contact form to ensure emails are properly sent
4. Check that you receive the email at info@urban-r.de

## PHP Form Handler Details

The `form-handler.php` script handles:

- Form data validation
- Email formation with proper HTML formatting
- Sending the email notification
- Returning success/error responses in JSON format

When a visitor submits the contact form, JavaScript:
1. Prevents the default form submission
2. Captures the form data
3. Sends it to form-handler.php via AJAX
4. Displays success/error messages based on the response

## Troubleshooting Tips

If you encounter issues with your deployment:

### Email Not Being Sent:
- Verify that Hostinger's mail service is properly configured
- Check if the `mail()` function is enabled in your PHP configuration
- Try changing the "From" address in the email headers to match your domain

### Form Submission Errors:
- Check browser console for JavaScript errors
- Verify that the form action points to the correct path for form-handler.php
- Ensure all required form fields are properly named and match what the PHP script expects

### Content Not Displaying Correctly:
- Make sure all asset paths in your HTML/CSS are correct
- Check that you've uploaded all necessary files with the proper folder structure

## Customizing Your Deployment

To modify aspects of your deployment:

### Changing the Recipient Email:
- Edit the `$to` variable in `form-handler.php`

### Updating Form Fields:
- If you add or change form fields, update both:
  - The HTML form in your React components
  - The corresponding PHP processing code in `form-handler.php`

### Modifying Button Animation:
- Edit the CSS in `assets/button-highlight.css`

## Security Considerations

The form handler includes:
- Input sanitization to prevent injection attacks
- Email validation
- CSRF protection (via same-origin policy)
- Error handling and logging

## Support Resources

If you need additional help with your Hostinger deployment:
- Hostinger Knowledge Base: https://www.hostinger.com/tutorials/
- Hostinger Support: Available through your hosting control panel