# Urban Reparaturen - Hostinger Installation Guide

This comprehensive guide will walk you through the process of deploying your Urban Reparaturen website to Hostinger, with step-by-step instructions to ensure everything works perfectly.

## Before You Begin

Make sure you have:
- A Hostinger account with hosting plan activated
- Access to your Hostinger control panel
- Your domain connected to Hostinger (if using a custom domain)

## Step 1: Prepare Your Files

1. **Review the Package Contents**
   - All HTML files (index.html, impressum.html, datenschutz.html)
   - PHP form handler (form-handler.php)
   - Assets folder with CSS, images, and icons

2. **Choose Your Form Handler**
   - Standard version (form-handler.php) - Simple setup, uses PHP's mail() function
   - PHPMailer version (form-handler-phpmailer.php) - More reliable, requires installation

## Step 2: Upload Files to Hostinger

1. **Log in to Your Hostinger Control Panel**
   - Navigate to your hosting account dashboard

2. **Access File Manager**
   - Look for "File Manager" or similar option in your dashboard

3. **Navigate to public_html Folder**
   - This is your website's root directory

4. **Upload Files**
   - Upload all files and folders from this package to the public_html folder
   - Maintain the exact folder structure:
     ```
     public_html/
     ├── index.html
     ├── impressum.html
     ├── datenschutz.html
     ├── form-handler.php
     ├── assets/
     │   ├── styles.css
     │   ├── button-highlight.css
     │   ├── images/
     │   │   ├── logo.svg
     │   │   ├── logo-light.svg
     │   │   └── hero-bg.jpg
     │   └── icons/
     │       ├── repair.svg
     │       ├── locksmith.svg
     │       └── ... (other icons)
     ```

## Step 3: Configure Form Handler

### Option A: Standard PHP Mail

If using the standard form handler (form-handler.php):

1. **Verify Recipient Email**
   - Open form-handler.php in Hostinger's file editor
   - Check that the recipient email is correct:
     ```php
     $to = "info@urban-r.de"; // Update if needed
     ```

2. **Configure From Address**
   - Ensure the "From" address uses your domain:
     ```php
     $headers .= "From: website@urban-r.de" . "\r\n"; // Update to use your domain
     ```

### Option B: PHPMailer Setup

If using the enhanced PHPMailer version:

1. **Install PHPMailer**
   - Via Hostinger Terminal (if available):
     ```
     cd public_html
     composer require phpmailer/phpmailer
     ```
   - Or manual installation:
     - Download PHPMailer from GitHub
     - Create vendor/phpmailer/phpmailer directory
     - Upload files via File Manager

2. **Rename and Configure File**
   - Rename form-handler-phpmailer.php to form-handler.php (replacing the standard version)
   - Edit the SMTP settings:
     ```php
     $mail->Host       = 'smtp.hostinger.com'; // Your Hostinger SMTP server
     $mail->Username   = 'info@urban-r.de';    // Your email address
     $mail->Password   = 'YOUR_EMAIL_PASSWORD'; // Your email password
     $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Or ENCRYPTION_SMTPS
     $mail->Port       = 587; // 465 for SSL
     ```

## Step 4: Test Your Website

1. **Visit Your Website**
   - Go to your domain (e.g., www.urban-r.de)
   - Verify all pages load correctly with proper styling

2. **Check Mobile Responsiveness**
   - Test on different devices or use browser developer tools

3. **Test Contact Form**
   - Fill out the contact form
   - Submit the form
   - Verify you receive the email at your designated address
   - Check that success message appears correctly

## Troubleshooting

### Form Submission Issues

1. **Check PHP Error Logs**
   - Access Hostinger's error logs in your control panel
   - Look for any PHP errors related to mail functions

2. **Verify PHP Mail Function**
   - Create a test file (test-mail.php) with:
     ```php
     <?php
     $result = mail('your-email@example.com', 'Test Subject', 'This is a test email');
     echo "Mail result: " . ($result ? "Success" : "Failed");
     ?>
     ```
   - Upload and run this file to test basic mail functionality

3. **Check Form Action**
   - Ensure the form action in index.html points to the correct path:
     ```html
     <form id="contact-form" action="form-handler.php" method="POST">
     ```

### PHPMailer Issues

1. **Verify Installation**
   - Check that vendor/autoload.php exists and is accessible

2. **Test SMTP Settings**
   - Create a test script with your SMTP credentials
   - Common issues include incorrect password or port

3. **Try Different Mail Configuration**
   - Some Hostinger plans may require specific SMTP settings
   - Contact Hostinger support for recommended settings

## Final Steps

After successful testing:

1. **Update Content as Needed**
   - Replace any placeholder text with your actual content
   - Update contact information if necessary

2. **Consider SSL Certificate**
   - If not already enabled, activate SSL for your domain
   - Update any http:// links to https://

3. **Regular Backups**
   - Set up regular backups of your website files
   - Hostinger typically offers backup functionality

Congratulations! Your Urban Reparaturen website should now be fully functional on Hostinger with PHP form handling.