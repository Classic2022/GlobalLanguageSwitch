# Fix for Urban Reparaturen Website on Hostinger

This folder contains the files you need to fix the contact form on your Hostinger website. The current issue is that the form is attempting to send data to the wrong location, causing a 404 error.

## How to Fix the Contact Form

1. **Upload these files to your Hostinger website:**

   - `form-handler.php` - Place this file in the **root directory** of your website (same folder as index.html)
   - `button-highlight.css` - Place this in your website's assets folder

2. **Modify your form markup:**
   
   You need to make sure your contact form has these important attributes:
   
   ```html
   <form action="form-handler.php" method="POST">
   ```
   
   And make sure each form field has proper name attributes:
   
   ```html
   <input name="name" ...>
   <input name="email" ...>
   <input name="phone" ...>
   <input name="services[]" ...>
   <textarea name="message" ...></textarea>
   ```

3. **Check your JavaScript:**

   Make sure there are no JavaScript event handlers that prevent the default form submission. The form should submit directly to the PHP script.

## Testing the Fix

After uploading these files and making the necessary changes:

1. Open your website
2. Fill out the contact form
3. Submit it
4. You should see a success message instead of an error

## Troubleshooting

If you still encounter issues:

1. Check your browser's developer console (F12) for errors
2. Make sure the form action path is correct (it should be "form-handler.php" if the PHP file is in the root directory)
3. Verify that your Hostinger hosting plan supports PHP (most plans do)
4. Check if the form-handler.php file is accessible by navigating directly to it

## Need Further Help?

If you continue to have problems with the form, please reach out and I'll help you troubleshoot further.