# Urban Reparaturen - Hostinger Deployment Package

This is a deployment package for the Urban Reparaturen website, designed for Hostinger hosting with PHP Mailer form handling.

## Setup Instructions

### 1. PHPMailer Installation
Before deploying, you need to install PHPMailer on your Hostinger account:

1. Log in to your Hostinger account and access the File Manager
2. Navigate to your website's root directory
3. Create a folder named `vendor` if it doesn't exist
4. Inside the `vendor` folder, install PHPMailer using one of these methods:
   - **Option A**: Use Hostinger's Terminal to run:
     ```
     composer require phpmailer/phpmailer
     ```
   - **Option B**: Manually upload PHPMailer files to a folder structure like:
     ```
     vendor/phpmailer/phpmailer/...
     ```
     (You can download PHPMailer from [GitHub](https://github.com/PHPMailer/PHPMailer/releases))

### 2. Email Configuration
Edit the `form-handler.php` file to update these settings:

1. Update your SMTP settings:
   ```php
   $mail->Host       = 'smtp.hostinger.com'; // Replace with your Hostinger SMTP server
   $mail->Username   = 'info@urban-r.de';    // Replace with your email address
   $mail->Password   = 'YOUR_EMAIL_PASSWORD'; // Replace with your email password
   ```

2. Update the recipient email address:
   ```php
   $to = "info@urban-r.de"; // Replace with your recipient email
   ```

### 3. File Upload
Upload all files in this package to your Hostinger hosting account, maintaining the folder structure.

## Package Contents

- `index.html` - Main homepage with contact form
- `form-handler.php` - PHP script for form processing using PHPMailer
- `assets/` - Directory containing CSS, JavaScript, and images
- Additional HTML pages (datenschutz.html, impressum.html, etc.)

## Testing

After deployment, test the contact form by submitting a test message. Check both for successful submission and proper email delivery.

## Troubleshooting

If the form doesn't work:
1. Check your Hostinger error logs
2. Verify PHPMailer is installed correctly
3. Confirm your SMTP settings are correct
4. Make sure your Hostinger plan supports mail functions

## Important Notes

- Update all placeholders (YOUR_EMAIL_PASSWORD) with actual values
- Make sure PHPMailer is properly installed in the vendor directory
- Configure proper email permissions in your Hostinger account