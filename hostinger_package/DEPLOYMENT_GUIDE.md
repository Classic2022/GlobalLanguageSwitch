# Urban Reparaturen - Hostinger Deployment Guide

This guide will help you deploy your Urban Reparaturen website to Hostinger while preserving all functionality, just switching to PHP for form submission.

## Step-by-Step Deployment Process

### 1. Build the Static Site

First, build your optimized static site:

```bash
# From your project root directory
npx vite build --config vite.config.static.ts
```

This will create a static build in the `dist` folder.

### 2. Prepare Files for Upload

In your `dist` directory, you'll have:
- `index.html` - Main HTML file
- `assets/` folder with JavaScript, CSS, and other assets

Copy the `form-handler.php` file from this package to your `dist` folder.

### 3. Modify Form Handling (Optional)

If you've already built your static site, you may need to modify the form to work with PHP:

1. Open your built `index.html` file
2. Find the contact form
3. Make sure the form has:
   - `action="form-handler.php"` attribute
   - `method="POST"` attribute
   - Proper `name` attributes on all fields (`name`, `email`, `phone`, `message`, `services[]`)

### 4. Upload to Hostinger

1. Log in to your Hostinger control panel
2. Navigate to File Manager
3. Upload all files from your `dist` directory to the `public_html` folder
4. Make sure `form-handler.php` is in the root directory alongside your HTML files

### 5. Test Everything

After uploading, thoroughly test:
- Website appearance (should be identical to your current site)
- Navigation and all interactive elements
- Language switching
- Form submission - fill out and submit the contact form
- Check that emails are properly received at info@urban-r.de

## Troubleshooting

### Form Submission Issues

If the form doesn't work:
- Check your browser console for errors
- Verify PHP is enabled on your Hostinger account
- Make sure `form-handler.php` is in the correct location
- Check Hostinger's error logs

### Email Not Being Received

If emails aren't delivered:
- Check your spam folder
- Verify Hostinger's mail server configuration
- Try changing the "From" address in `form-handler.php` to match your domain
- Contact Hostinger support if mail functions are not working