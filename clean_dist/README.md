# Urban Reparaturen Static Website

This folder contains the complete static website for Urban Reparaturen, optimized for Hostinger hosting.

## Files Structure

- `index-static.html` - The main homepage (rename to index.html when uploading to Hostinger)
- `impressum.html` - Legal information page
- `datenschutz.html` - Privacy policy page
- `form-handler.php` - PHP script that handles the contact form submissions
- `simple-form.html` - A standalone contact form that works without React dependencies
- `assets/` - Folder containing all images, CSS, and other static assets

## Setup Instructions

1. Upload all files and folders to your Hostinger hosting account
2. Rename `index-static.html` to `index.html` on the server
3. Make sure the PHP script has execution permissions (typically already set by default)
4. Test the form submission to verify email functionality

## Important Notes

- The website is built with pure HTML, CSS, and JavaScript (no React dependencies)
- The contact form submits to a PHP script that sends emails using PHP's mail() function
- Emails will be sent FROM: request@urban-r.de TO: info@urban-r.de
- All internal links use relative paths for maximum compatibility

## Form Handler Details

The `form-handler.php` script:
- Validates form inputs
- Sends a formatted HTML email
- Provides response messages in German and English
- Includes error logging for troubleshooting

If you encounter any issues with the form, check:
1. That the form-handler.php file is in the same directory as the HTML files
2. That your hosting allows PHP mail() function
3. Server logs for any PHP errors

## Customization

To customize the website:
- Edit HTML files directly for content changes
- Modify CSS styles within the `<style>` tags in each HTML file
- Replace images in the assets folder (keeping the same filenames)