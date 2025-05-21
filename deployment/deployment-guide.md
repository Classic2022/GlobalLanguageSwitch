# Deployment Guide for Urban Reparaturen Website on Hostinger

This guide will help you deploy your Urban Reparaturen website to Hostinger's shared hosting environment.

## Step 1: Build the Production Version

First, we need to create a production build of your website:

```bash
npm run build
```

This command will:
- Build the optimized frontend files into `dist/public` directory
- Compile the server code into `dist/index.js`

## Step 2: Prepare Files for Upload

After building, you'll need to upload the following files/folders to your Hostinger hosting:

1. The entire `dist` directory
2. `package.json` and `package-lock.json` files
3. `.env` file with your environment variables (make sure it includes your Mailjet API keys)

## Step 3: Set Up Hostinger

1. Log in to your Hostinger control panel
2. Set up a new website with your domain (e.g., urban-r.de)
3. Access the File Manager or use FTP to upload your files

### Node.js Setup on Hostinger

Hostinger supports Node.js applications. You'll need to:

1. Go to your Hostinger dashboard
2. Navigate to "Website" > "Node.js" 
3. Enable Node.js for your domain
4. Set the application path to your uploaded files
5. Set the Node.js entry point to `dist/index.js`
6. Set the Node.js version to at least 16.x or higher

## Step 4: Environment Variables

Make sure to set up the following environment variables in your Hostinger control panel:

```
NODE_ENV=production
MAILJET_API_KEY=[your-api-key]
MAILJET_SECRET_KEY=[your-secret-key]
PORT=8080 (or whichever port Hostinger assigns)
```

## Step 5: Install Dependencies and Start the Server

Connect to your hosting via SSH (if Hostinger provides this) and run:

```bash
npm install --production
npm start
```

If SSH access is not available, check Hostinger's documentation on how to set up and start Node.js applications.

## Step 6: Configure Domain and DNS

Make sure your domain is properly configured to point to your Hostinger hosting:

1. In your domain registrar, point your domain's A records to Hostinger's nameservers
2. Set up any subdomains if needed
3. Configure SSL certificate for https access

## Troubleshooting

If you encounter issues:

1. Check Hostinger's error logs
2. Verify all environment variables are set correctly
3. Make sure Node.js version is correct
4. Check that all dependencies are installed

## Alternative Deployment (Static Site)

If Hostinger doesn't support Node.js or you prefer a static site deployment:

1. Modify your build process to include a pre-rendering step
2. Use only the static assets in the `dist/public` directory
3. Set up a contact form handler with Hostinger's PHP or use a third-party form service

## Need Additional Help?

Contact Hostinger support for specific hosting-related questions or adjustments needed for your hosting environment.