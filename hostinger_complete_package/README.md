# Urban Reparaturen - Hostinger Deployment Package

This package contains everything needed to deploy your Urban Reparaturen website to Hostinger with PHP form handling. The package maintains all the functionality and appearance of your current website.

## Package Contents

- **HTML Files**
  - `index.html` - Main homepage
  - `impressum.html` - Legal information page
  - `datenschutz.html` - Privacy policy page

- **PHP Files**
  - `form-handler.php` - Standard PHP mail form handler (no dependencies)
  - `form-handler-phpmailer.php` - Advanced form handler (requires PHPMailer)

- **Assets**
  - `assets/styles.css` - Main stylesheet
  - `assets/button-highlight.css` - CSS for button glow effect
  - `assets/images/` - Logo and background images
  - `assets/icons/` - SVG icons for services and contact information

## Deployment Instructions

### Option 1: Standard PHP Mail (Simple Setup)

1. **Upload All Files**
   - Log in to your Hostinger control panel
   - Navigate to File Manager
   - Upload all files from this package to the `public_html` folder
   - Make sure to maintain the folder structure

2. **Verify Form Configuration**
   - The form in `index.html` is already configured to use `form-handler.php`
   - No additional configuration is needed

### Option 2: Using PHPMailer (Recommended for Better Email Delivery)

1. **Install PHPMailer**
   - Via Composer (if available on your Hostinger plan):
     ```
     composer require phpmailer/phpmailer
     ```
   - Or manual installation:
     - Download PHPMailer from https://github.com/PHPMailer/PHPMailer/releases
     - Create a `vendor/phpmailer/phpmailer` directory on your Hostinger account
     - Upload PHPMailer files to this directory

2. **Configure PHPMailer**
   - Rename `form-handler-phpmailer.php` to `form-handler.php` (replacing the standard version)
   - Edit the file to update your SMTP settings:
     ```php
     $mail->Host       = 'smtp.hostinger.com'; // Your Hostinger SMTP server
     $mail->Username   = 'info@urban-r.de';    // Your email address
     $mail->Password   = 'YOUR_EMAIL_PASSWORD'; // Your email password
     ```

3. **Upload All Files**
   - Upload everything to your Hostinger account as described in Option 1

## Testing Your Website

After deployment, thoroughly test:

1. **General Website Functionality**
   - Verify all pages load correctly
   - Check that mobile responsiveness works
   - Test language switching if applicable
   - Ensure all links and navigation work properly

2. **Form Submission**
   - Fill out and submit the contact form
   - Verify that you receive the email at info@urban-r.de
   - Check that success messages display correctly

## Troubleshooting

If the form doesn't work:

1. **Check Server Logs**
   - Access your Hostinger error logs for PHP errors

2. **Verify Mail Configuration**
   - Confirm that your Hostinger plan supports PHP mail functions
   - Check that your SMTP settings are correct (for PHPMailer option)

3. **Test Mail Function**
   - Create a simple test script to verify mail delivery:
     ```php
     <?php
     mail('your-email@example.com', 'Test Subject', 'This is a test email');
     echo "Mail sent!";
     ?>
     ```

## Customizing Your Website

To customize the website:

1. **Edit HTML Files** - Modify content in the HTML files
2. **Update Styles** - Edit the CSS files in the assets folder
3. **Replace Images** - Swap out images while maintaining filenames and paths

## Need Help?

If you encounter issues with your Hostinger deployment, consider:
- Contacting Hostinger support for help with mail configuration
- Checking PHP version and compatibility (PHP 7.4+ recommended)
- Verifying that your domain DNS settings are properly configured