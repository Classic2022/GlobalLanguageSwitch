# Urban Reparaturen - Hostinger Deployment Checklist

Use this checklist to ensure your website functions and looks exactly the same on Hostinger as it does in your development environment.

## Pre-Deployment

- [ ] Build optimized static site with `npx vite build --config vite.config.static.ts`
- [ ] Verify all CSS, JavaScript and images are included in the build
- [ ] Check that all paths are relative or properly configured for production
- [ ] Make sure the contact form is properly configured to work with PHP

## Files to Upload

- [ ] All HTML files (index.html, etc.)
- [ ] All asset files (JavaScript, CSS, images)
- [ ] form-handler.php
- [ ] Verify favicon and other site icons are included

## Form Configuration

- [ ] Form has `action="form-handler.php"` attribute
- [ ] Form has `method="POST"` attribute
- [ ] All form fields have proper `name` attributes:
  - [ ] name="name"
  - [ ] name="email"
  - [ ] name="phone"
  - [ ] name="message"
  - [ ] name="services[]" (for checkboxes)
- [ ] Client-side validation is working correctly
- [ ] form-handler.php has the correct recipient email (info@urban-r.de)

## Post-Deployment Testing

- [ ] Website loads correctly and looks identical to the development version
- [ ] All pages and navigation function properly
- [ ] Language switching works as expected
- [ ] Mobile responsiveness works correctly
- [ ] Contact form submits without errors
- [ ] Success message appears after form submission
- [ ] Test email notification is received at info@urban-r.de
- [ ] All interactive elements (buttons, toggles, etc.) function properly

## Performance Checks

- [ ] Page load time is acceptable
- [ ] Images are optimized and load quickly
- [ ] JavaScript runs without console errors
- [ ] CSS renders correctly without visual glitches