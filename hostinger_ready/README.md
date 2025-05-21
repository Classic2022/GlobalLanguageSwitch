# Urban Reparaturen - Hostinger Deployment

This folder contains all the files you need to deploy your Urban Reparaturen website to Hostinger.

## What's Included

- **Static HTML/CSS/JS files**: Built and optimized from your React application
- **form-handler.php**: PHP script to process contact form submissions and send emails
- **Button highlight animation**: Custom CSS for the pulsing glow effect on CTA buttons

## Deployment Instructions

1. Log in to your Hostinger control panel
2. Navigate to the File Manager
3. Go to the `public_html` directory (or your site's root directory)
4. Upload all the files from the `public_html` folder in this package to your Hostinger `public_html` directory
5. Make sure to maintain the same folder structure

## Important Notes

- The contact form is configured to send emails to `info@urban-r.de`. If you need to change this, edit the `$to` variable in `form-handler.php`
- The PHP form handler requires Hostinger's mail server to be properly configured to send emails
- If you experience any issues with emails not being sent, contact Hostinger support to ensure that your hosting plan includes email sending capabilities

## Testing Your Deployment

After uploading all files:

1. Visit your website URL
2. Test the language toggle to make sure both German and English content appears correctly
3. Fill out and submit the contact form to ensure it processes correctly
4. Verify that you receive the form submission email at the specified address

## Customizing Your Deployment

- The button highlight effect can be modified by editing `assets/button-highlight.css`
- To change the recipient email address, edit the `$to` variable in `form-handler.php`
- If you need to customize form fields, update both the form in the React components and the corresponding PHP processing in `form-handler.php`

## Need Help?

If you encounter any issues with your Hostinger deployment, please reach out for assistance!