import Mailjet from 'node-mailjet';

// Check if Mailjet API keys are present
if (!process.env.MAILJET_API_KEY || !process.env.MAILJET_SECRET_KEY) {
  console.warn("Mailjet API keys are not set. Email notifications will not work.");
}

// Initialize Mailjet client
const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY || '',
  apiSecret: process.env.MAILJET_SECRET_KEY || ''
});

// Log that Mailjet is properly configured
console.log("Mailjet is configured with API keys:", 
  process.env.MAILJET_API_KEY ? "API Key: [Set]" : "API Key: [Not Set]",
  process.env.MAILJET_SECRET_KEY ? "Secret Key: [Set]" : "Secret Key: [Not Set]"
);

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  services?: string[];
}

export async function sendContactNotification(data: EmailData): Promise<boolean> {
  try {
    // Create the services list if available
    const servicesText = data.services && data.services.length > 0
      ? `Selected Services: ${data.services.join(', ')}`
      : 'No services selected';

    // Format email content
    const emailContent = `
      New contact form submission from Urban Reparaturen website:
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone || 'Not provided'}
      ${servicesText}
      
      Message:
      ${data.message}
    `;

    // Send email - using a verified sender address to avoid spam filters
    const response = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: "adilsunil66@gmail.com", // Using the account email associated with Mailjet
            Name: "Urban Reparaturen Website"
          },
          To: [
            {
              Email: "info@digitalsolutionlab.com",
              Name: "Urban Reparaturen"
            }
          ],
          Subject: "New Contact Form Submission - Urban Reparaturen",
          TextPart: emailContent,
          // Adding HTML part with a professionally styled template
          HTMLPart: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>New Contact Form Submission</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #333333;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f4;
                }
                .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: #ffffff;
                  border-radius: 8px;
                  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
                .header {
                  background-color: #1A4D3C;
                  color: white;
                  padding: 20px;
                  text-align: center;
                  border-radius: 8px 8px 0 0;
                  margin: -20px -20px 20px;
                }
                .header h1 {
                  margin: 0;
                  font-size: 24px;
                }
                .logo {
                  max-width: 150px;
                  margin-bottom: 15px;
                }
                .info-box {
                  background-color: #f9f9f9;
                  border-left: 4px solid #1A4D3C;
                  padding: 15px;
                  margin-bottom: 20px;
                  border-radius: 0 4px 4px 0;
                }
                .field {
                  margin-bottom: 15px;
                }
                .field-name {
                  font-weight: bold;
                  color: #1A4D3C;
                  margin-bottom: 5px;
                }
                .field-value {
                  margin: 0;
                }
                .message-box {
                  background-color: #f9f9f9;
                  padding: 15px;
                  border-radius: 4px;
                  margin-top: 10px;
                }
                .service-tag {
                  display: inline-block;
                  background-color: #e8f5e9;
                  color: #1A4D3C;
                  padding: 4px 8px;
                  border-radius: 4px;
                  margin-right: 5px;
                  margin-bottom: 5px;
                  font-size: 14px;
                }
                .footer {
                  margin-top: 30px;
                  text-align: center;
                  font-size: 14px;
                  color: #777;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>New Inquiry from Urban Reparaturen Website</h1>
                </div>
                
                <p>You have received a new contact form submission from the website. Here are the details:</p>
                
                <div class="info-box">
                  <div class="field">
                    <div class="field-name">Name:</div>
                    <div class="field-value">${data.name}</div>
                  </div>
                  
                  <div class="field">
                    <div class="field-name">Email:</div>
                    <div class="field-value"><a href="mailto:${data.email}" style="color: #1A4D3C;">${data.email}</a></div>
                  </div>
                  
                  <div class="field">
                    <div class="field-name">Phone:</div>
                    <div class="field-value">${data.phone || 'Not provided'}</div>
                  </div>
                  
                  <div class="field">
                    <div class="field-name">Services Requested:</div>
                    <div class="field-value">
                      ${data.services && data.services.length > 0 
                        ? data.services.map(service => `<span class="service-tag">${service}</span>`).join(' ')
                        : 'None selected'}
                    </div>
                  </div>
                </div>
                
                <div class="field">
                  <div class="field-name">Message:</div>
                  <div class="message-box">
                    ${data.message.replace(/\n/g, '<br>')}
                  </div>
                </div>
                
                <div class="footer">
                  <p>© ${new Date().getFullYear()} Urban Reparaturen | This is an automated message from your website contact form.</p>
                </div>
              </div>
            </body>
            </html>
          `
        }
      ]
    });

    console.log('Email sent successfully:', response.body);
    return true;
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return false;
  }
}