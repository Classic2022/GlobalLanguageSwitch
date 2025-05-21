# Static Site Deployment Guide for Urban Reparaturen

This guide will help you deploy your Urban Reparaturen website as a static site on Hostinger, which is often simpler than setting up a Node.js environment.

## Step 1: Modify the Project for Static Deployment

For a static site deployment, we need to adjust a few things:

### 1. Create a Static Contact Form Handler

Since a static site can't process form submissions directly with Node.js, we'll need to use one of these approaches:

- **Option A: Hostinger PHP Form Handler**
  Create a PHP script to handle form submissions and email them via PHP's mail function
  
- **Option B: Third-party Form Service**
  Use a service like Formspree, Netlify Forms, or GetForm to handle submissions

### 2. Pre-render the React Application

For better SEO and faster loading:

```bash
npm run build
```

## Step 2: Prepare Files for Upload

You'll need to upload the following to Hostinger:

1. All files from the `dist/public` directory
2. If using Option A for the contact form, include your PHP form handler

## Step 3: Set Up Hostinger

1. Log in to your Hostinger control panel
2. Navigate to your domain settings
3. Upload all files to the public_html directory using either:
   - File Manager in the Hostinger control panel
   - FTP client like FileZilla

## Step 4: Configure Redirects for SPA Routing

Since we're using a Single Page Application with client-side routing, create a `.htaccess` file in your root directory with the following content:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This will ensure that all routes are handled by your React application.

## Step 5: Set Up SSL Certificate

Enable HTTPS for your website:

1. In the Hostinger dashboard, navigate to "SSL/TLS"
2. Enable "SSL" for your domain
3. Follow the prompts to set up Let's Encrypt or another SSL certificate

## Implementation Example: PHP Contact Form Handler

If you choose Option A, here's a sample PHP script to handle form submissions. Save this as `form-handler.php` in your root directory:

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';
    $services = $_POST['services'] ?? [];
    
    // Format services
    $services_text = empty($services) ? 'No services selected' : 'Selected Services: ' . implode(', ', $services);
    
    // Email recipient
    $to = "info@urban-r.de";
    
    // Email subject
    $subject = "New Contact Form Submission - Urban Reparaturen";
    
    // Email content
    $email_content = "
    New contact form submission from Urban Reparaturen website:
    
    Name: $name
    Email: $email
    Phone: " . ($phone ?: 'Not provided') . "
    $services_text
    
    Message:
    $message
    ";
    
    // Email headers
    $headers = "From: website@urban-r.de\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Send email
    $mail_sent = mail($to, $subject, $email_content, $headers);
    
    // Return JSON response
    header('Content-Type: application/json');
    
    if ($mail_sent) {
        echo json_encode([
            'success' => true,
            'message' => 'Message received successfully. You will be contacted shortly.'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'There was an error sending your message. Please try again later.'
        ]);
    }
    exit;
}

// If not a POST request, redirect to homepage
header("Location: /");
exit;
?>
```

## Updating Your Contact Form

You'll need to modify the contact form in your React application to submit to the PHP handler:

```javascript
// In contact-section.tsx, modify the handleSubmit function:

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  // Get form values
  const formData = new FormData();
  formData.append('name', nameRef.current?.value || "");
  formData.append('email', emailRef.current?.value || "");
  formData.append('phone', phoneRef.current?.value || "");
  formData.append('message', messageRef.current?.value || "");
  
  // Get selected services
  if (repairsRef.current?.checked) formData.append('services[]', language === "de" ? "Reparaturen" : "Repairs");
  if (locksmithRef.current?.checked) formData.append('services[]', language === "de" ? "Schlüsseldienst" : "Locksmith");
  if (transportRef.current?.checked) formData.append('services[]', language === "de" ? "Transporte" : "Transport");
  if (assemblyRef.current?.checked) formData.append('services[]', language === "de" ? "Möbelaufbau" : "Assembly");
  
  try {
    setIsSubmitting(true);
    
    const response = await fetch('/form-handler.php', {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    
    if (data.success) {
      setSubmitStatus('success');
      setStatusMessage(language === "de" 
        ? "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze mit Ihnen in Verbindung setzen."
        : "Thank you for your message. We will contact you shortly.");
      resetForm();
    } else {
      setSubmitStatus('error');
      setStatusMessage(language === "de"
        ? "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut."
        : "There was a problem sending your message. Please try again later.");
    }
  } catch (error) {
    setSubmitStatus('error');
    setStatusMessage(language === "de"
      ? "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut."
      : "There was a problem sending your message. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};
```

## Finalizing Your Static Deployment

After updating your code for static deployment:

1. Run the build process again: `npm run build`
2. Upload all static files to Hostinger
3. Test your website thoroughly, especially the contact form
4. Make sure all links work correctly