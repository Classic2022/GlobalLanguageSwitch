# Urban Reparaturen - Hostinger Deployment Checklist

Use this checklist to make sure you've correctly deployed your static website to Hostinger.

## Pre-Deployment

- [ ] Create optimized static build using `npx vite build --config vite.config.static.ts`
- [ ] Verify all assets are properly included in the build output
- [ ] Check that form-handler.php is configured with the correct recipient email (info@urban-r.de)
- [ ] Confirm button-highlight.css is included for your CTA glow effect

## Files to Upload

- [ ] All files from the dist directory:
  - [ ] index.html
  - [ ] assets/index-*.js (your bundled JavaScript)
  - [ ] assets/index-*.css (your bundled CSS)
  - [ ] assets/button-highlight.css (your custom button glow effect)
  - [ ] Other assets like images, etc.
- [ ] form-handler.php (placed in the root directory)

## Configuration

- [ ] Make sure form action is set to `/form-handler.php` (with leading slash)
- [ ] Check that JavaScript fetch calls use `/form-handler.php` (with leading slash)
- [ ] Verify form fields have proper name attributes for PHP processing:
  - [ ] name="name"
  - [ ] name="email"
  - [ ] name="phone"
  - [ ] name="message"
  - [ ] name="services[]" for service checkboxes

## Post-Deployment Testing

- [ ] Website loads correctly
- [ ] Navigation works
- [ ] Language switching works
- [ ] Contact form displays correctly
- [ ] Form submission works without errors
- [ ] Success message appears after form submission
- [ ] Email notification is received at info@urban-r.de

## Common Issues and Solutions

- **404 error when submitting form**:
  - Verify form-handler.php is in the root directory
  - Check that all paths use leading slashes

- **Form submits but no email received**:
  - Verify PHP mail() function is enabled on your hosting
  - Check spam folder
  - Try changing the "From" address in form-handler.php

- **JavaScript errors**:
  - Check browser console for any errors
  - Verify all asset paths are correct

If you encounter persistent issues, you can reach out for additional help or consult Hostinger's support.