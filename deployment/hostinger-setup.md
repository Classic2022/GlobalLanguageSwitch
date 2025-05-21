# Hostinger Setup Guide for Urban Reparaturen Website

This guide provides detailed instructions for setting up your Urban Reparaturen website on Hostinger's hosting platform.

## Setting Up Your Hostinger Account

### Step 1: Purchase a Hosting Plan
1. Sign up for a Hostinger account at [hostinger.com](https://www.hostinger.com/)
2. Choose a hosting plan that supports:
   - PHP (for the contact form handler)
   - Custom domains
   - SSL certificates

### Step 2: Connect Your Domain
1. If you already own the domain `urban-r.de`:
   - Go to "Domains" in your Hostinger dashboard
   - Select "Connect existing domain"
   - Follow the instructions to update nameservers with your domain registrar
   
2. If you need to purchase the domain:
   - Use Hostinger's domain registration service
   - Search for and purchase `urban-r.de` or a similar available domain

### Step 3: Set Up SSL Certificate
1. In your Hostinger dashboard, navigate to your domain settings
2. Find "SSL" or "Security" section
3. Enable the free SSL certificate
4. Wait for certificate activation (usually takes a few minutes)

## Uploading Your Website Files

### Option 1: Using File Manager
1. Build your project with `npm run build`
2. In your Hostinger dashboard, open "File Manager"
3. Navigate to the `public_html` directory
4. Upload all files from your `dist/public` directory
5. If using the PHP form handler, upload the `form-handler.php` file as well

### Option 2: Using FTP
1. Build your project with `npm run build`
2. Get your FTP credentials from Hostinger (username, password, host)
3. Use an FTP client like FileZilla or WinSCP
4. Connect to your hosting using the FTP credentials
5. Upload all files from your `dist/public` directory to the `public_html` directory
6. If using the PHP form handler, upload the `form-handler.php` file as well

## Setting Up The Contact Form

Since Hostinger supports PHP, we recommend using a PHP-based form handler for simplicity:

1. Create the `form-handler.php` file as described in the static-site-setup.md guide
2. Upload it to the root of your `public_html` directory
3. Ensure the form in your front-end code submits to this PHP script
4. Test the form to ensure emails are being sent correctly

## Additional Configuration

### Create .htaccess File
1. Create a file named `.htaccess` in your `public_html` directory
2. Add the following configurations:

```
# Enable Rewrite Engine
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Cache Control
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Images
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  
  # CSS, JavaScript
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  
  # Others
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType application/x-font-woff "access plus 1 year"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

### Create sitemap.xml
1. Create a file named `sitemap.xml` in your `public_html` directory
2. Add the sitemap content as shown in the performance-optimization.md guide
3. Update your domain name in the sitemap URLs

### Create robots.txt
1. Create a file named `robots.txt` in your `public_html` directory
2. Add the following content:

```
User-agent: *
Allow: /
Sitemap: https://urban-r.de/sitemap.xml
```

## Testing Your Deployment

After completing the setup and deployment:

1. Visit your website at your domain (`https://urban-r.de`)
2. Test the website on different devices and browsers
3. Test navigation to all pages (Home, Impressum, Datenschutz)
4. Test the contact form by submitting a test message
5. Verify that you receive the email from the contact form
6. Check page loading speed with tools like Google PageSpeed Insights

## Troubleshooting Common Issues

### Contact Form Not Working
- Check the path to your PHP form handler in your HTML form
- Ensure PHP is enabled on your hosting
- Check the Hostinger error logs for any PHP errors

### Pages Not Loading After Navigation
- Ensure your `.htaccess` file is properly configured
- Check that all the React files are correctly uploaded

### SSL Certificate Issues
- Ensure the SSL certificate is properly activated
- Check for mixed content warnings in your browser console

### Performance Issues
- Use the recommendations in the performance-optimization.md guide
- Compress any large images that might be slowing down the site

## Maintenance

To update your website in the future:

1. Make changes to your code locally
2. Run the build process: `npm run build`
3. Upload the new build files to Hostinger, replacing the old files
4. Test the site after each update