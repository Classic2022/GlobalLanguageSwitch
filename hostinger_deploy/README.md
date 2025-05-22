# Urban Reparaturen - Hostinger Deployment Package

This is a deployment package for the Urban Reparaturen website, designed to be hosted on Hostinger with PHP form handling.

## Package Contents

- `index.html` - Main homepage (German)
- `impressum.html` - Legal information page
- `datenschutz.html` - Privacy policy page
- `form-handler.php` - PHP script for processing contact form submissions
- `assets/` - Directory containing CSS, images, and icons

## Features

- Responsive design that works on all devices
- Bilingual support (German/English)
- PHP-based form handling for contact form submissions
- No external dependencies other than Google Fonts

## Instructions for Deployment

1. Upload all files to your Hostinger web hosting account using FTP or the Hostinger File Manager
2. Make sure to maintain the existing folder structure
3. Ensure PHP is enabled on your hosting account

## Form Handling

The contact form on the website submits data to `form-handler.php`, which:

1. Validates user input
2. Formats and sends an email to your business email address
3. Returns a JSON response to the browser

## Customization

To customize the website:

1. Edit the HTML files to change content
2. Modify `assets/styles.css` to change styling
3. Replace logo and icon files in the assets directory
4. Update contact information and company details throughout the site

## Technical Requirements

- PHP 7.2 or higher (recommended)
- Email capability enabled on your hosting

## Important Notes

- Before making the site live, update all placeholder text and images
- Check that the email address in `form-handler.php` is correct
- Test the form submission before making the site publicly available