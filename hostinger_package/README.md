# Urban Reparaturen - Hostinger Deployment Package

This package contains everything needed to deploy your Urban Reparaturen website to Hostinger while maintaining all your current functionality, just switching to PHP for form submission.

## Package Contents

- `form-handler.php`: Standard PHP form handler (no dependencies)
- `form-handler-phpmailer.php`: Enhanced form handler using PHPMailer
- `DEPLOYMENT_GUIDE.md`: Step-by-step instructions for deployment
- `DEPLOYMENT_CHECKLIST.md`: Checklist to ensure everything works correctly

## Installation Options

### Option 1: Standard PHP Mail (Simplest)

Use `form-handler.php` if you want the simplest setup with no dependencies:

1. Build your static site with `npx vite build --config vite.config.static.ts`
2. Copy `form-handler.php` to your build output directory
3. Upload everything to Hostinger

This option uses PHP's built-in `mail()` function and requires no additional setup.

### Option 2: PHPMailer (Recommended)

For more reliable email delivery, use `form-handler-phpmailer.php`:

1. Build your static site with `npx vite build --config vite.config.static.ts`
2. Install PHPMailer on your Hostinger account:
   
   a) Using Composer (if available on your Hostinger plan):
   ```
   composer require phpmailer/phpmailer
   ```
   
   b) Manual installation:
   - Download PHPMailer from https://github.com/PHPMailer/PHPMailer/releases
   - Create a `vendor/phpmailer/phpmailer` directory on your Hostinger account
   - Upload the PHPMailer files to this directory
   
3. Copy `form-handler-phpmailer.php` to your build output directory and rename it to `form-handler.php`
4. Update the SMTP settings in the file with your Hostinger email credentials
5. Upload everything to Hostinger

## Maintaining Your Site's Appearance and Functionality

This deployment package ensures that:
- Your website looks exactly the same as your current version
- All JavaScript functionality continues to work
- Form submissions are handled by PHP instead of your current method
- Emails are sent to info@urban-r.de when someone submits the form

## Testing After Deployment

After deploying to Hostinger, thoroughly test:
1. Site appearance on desktop and mobile
2. All interactive elements
3. Language switching
4. Form submission - fill out the contact form and check that emails are received

## Getting Help

If you encounter any issues with the deployment or form functionality, refer to the included guides or contact Hostinger support for assistance with their mail server configuration.