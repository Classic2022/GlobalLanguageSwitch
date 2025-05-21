# Urban Reparaturen - Hostinger Static Deployment Guide

This guide will help you deploy your Urban Reparaturen website as a fully static site on Hostinger with PHP form handling.

## Step-by-Step Deployment Process

### 1. Build the Static Site

Use the optimized static configuration for building:

```bash
# From your project root directory
npx vite build --config vite.config.static.ts
```

This will create a clean, static build in the `dist` folder.

### 2. Prepare Files for Hostinger

In your `dist` directory, you'll now have:
- `index.html`
- `assets/` folder with your JavaScript, CSS, and other assets

Make sure to add the following files:
- `form-handler.php` (copy from the `hostinger_fixed` folder)
- Your `assets/button-highlight.css` file (for the button glow effect)

### 3. Verify Your HTML

Open `dist/index.html` and verify:
- Form action is set to `/form-handler.php`
- Form fields have proper `name` attributes
- JavaScript uses `/form-handler.php` absolute path for fetch requests

### 4. Upload to Hostinger

Upload all files to your Hostinger account:
- Log in to Hostinger control panel
- Navigate to the File Manager
- Upload all files from the `dist` directory to the `public_html` folder

### 5. Verify the Deployment

After uploading:
- Visit your website URL
- Test the navigation, language switching, etc.
- Fill out the contact form and submit it
- Check that you receive the form submission email

## Files to Upload

1. All HTML, CSS, and JavaScript files from the `dist` directory
2. The `form-handler.php` file in the root directory (`public_html`)
3. Any other assets like images, fonts, etc.

## Form Handler Configuration

The `form-handler.php` file is configured to:
- Process form submissions
- Send emails to `info@urban-r.de`
- Return JSON responses for proper handling by the website

If you need to change the recipient email address, edit the `$to` variable in the `form-handler.php` file.

## Troubleshooting

If you encounter issues:

### Form Submission Problems
- Check that `form-handler.php` is in the root directory (same as index.html)
- Verify PHP is enabled on your Hostinger account
- Check that all form fields have proper `name` attributes
- Check browser console for JavaScript errors

### Email Not Being Sent
- Verify Hostinger's mail server is properly configured
- Check the PHP error logs for any issues
- Try changing the "From" address in the form-handler.php to match your domain

## Maintenance

To update your website in the future:
1. Make changes to your local code
2. Rebuild using the same static configuration
3. Upload only the changed files to Hostinger