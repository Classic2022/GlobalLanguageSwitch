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

    // Send email
    const response = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: "noreply@urban-reparaturen.de",
            Name: "Urban Reparaturen Website"
          },
          To: [
            {
              Email: "info@digitalsolutionlab.com",
              Name: "Urban Reparaturen"
            }
          ],
          Subject: "New Contact Form Submission - Urban Reparaturen",
          TextPart: emailContent
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