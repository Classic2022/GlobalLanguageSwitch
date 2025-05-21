# Urban Reparaturen - Hostinger Deployment Files

This folder contains all the files you need to upload to Hostinger for your static website deployment.

## Uploading to Hostinger

1. Log into your Hostinger account
2. Navigate to File Manager (or use FTP to upload)
3. Go to your domain's `public_html` folder
4. Upload the following files to this folder:

## Required Files

These files are ready to upload directly to your Hostinger `public_html` directory:

- **form-handler.php** - PHP script that will handle your contact form submissions
- **.htaccess** - Handles routing, caching, compression, and security
- **robots.txt** - Helps search engines understand your site
- **sitemap.xml** - Improves your search engine visibility

## Static Site Files

Additionally, you need to upload your website's static files:

1. Run `npm run build` locally
2. Upload all files from the `dist/public` directory to your Hostinger account
3. Make sure all files are in the root `public_html` folder

## Contact Form Setup

The contact form is set up to work without Node.js. The PHP handler will send emails directly to info@urban-r.de when someone submits the form.

## Final Steps

After uploading all files:

1. Visit your website and test the navigation
2. Submit a test contact form to verify it's working
3. Check if the favicon appears correctly
4. Verify the WebP images are loading properly

If you encounter any issues, refer to the detailed guides in this deployment folder.

Need help? Feel free to reach out to your web developer for assistance.