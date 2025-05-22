<?php
// Form handler for Urban Reparaturen contact form
header('Content-Type: application/json');

// Enable error reporting for debugging (uncomment if needed)
// ini_set('display_errors', 1);
// error_reporting(E_ALL);

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form data and sanitize inputs
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    // Handle services array
    $services = isset($_POST['services']) ? (array)$_POST['services'] : [];
    // Sanitize each service
    $services = array_map(function($item) {
        return filter_var($item, FILTER_SANITIZE_STRING);
    }, $services);
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode([
            'success' => false,
            'message' => 'Name, email and message are required fields.'
        ]);
        exit;
    }
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            'success' => false,
            'message' => 'Please enter a valid email address.'
        ]);
        exit;
    }
    
    // Format services for email
    $services_text = empty($services) 
        ? 'Keine Leistungen ausgewählt' 
        : 'Gewünschte Leistungen: ' . implode(', ', $services);
    
    // Email recipient - the company email
    $to = "info@urban-r.de";
    
    // Email subject
    $subject = "Neue Kontaktanfrage - Urban Reparaturen";
    
    // Email message content (plain text)
    $email_content = "
Neue Kontaktanfrage von der Urban Reparaturen Webseite:

Name: $name
Email: $email
Telefon: " . ($phone ?: 'Nicht angegeben') . "
$services_text

Nachricht:
$message
";
    
    // HTML email content
    $html_content = "
<!DOCTYPE html>
<html lang='de'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Neue Kontaktanfrage - Urban Reparaturen</title>
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
  <div class='container'>
    <div class='header'>
      <h1>Neue Kontaktanfrage - Urban Reparaturen</h1>
    </div>
    
    <p>Sie haben eine neue Kontaktanfrage über die Webseite erhalten. Hier sind die Details:</p>
    
    <div class='info-box'>
      <div class='field'>
        <div class='field-name'>Name:</div>
        <div class='field-value'>" . htmlspecialchars($name) . "</div>
      </div>
      
      <div class='field'>
        <div class='field-name'>Email:</div>
        <div class='field-value'><a href='mailto:" . htmlspecialchars($email) . "' style='color: #1A4D3C;'>" . htmlspecialchars($email) . "</a></div>
      </div>
      
      <div class='field'>
        <div class='field-name'>Telefon:</div>
        <div class='field-value'>" . htmlspecialchars($phone ?: 'Nicht angegeben') . "</div>
      </div>
      
      <div class='field'>
        <div class='field-name'>Gewünschte Leistungen:</div>
        <div class='field-value'>";
        
    if (!empty($services)) {
        foreach ($services as $service) {
            $html_content .= "<span class='service-tag'>" . htmlspecialchars($service) . "</span> ";
        }
    } else {
        $html_content .= "Keine Leistungen ausgewählt";
    }
        
    $html_content .= "
        </div>
      </div>
    </div>
    
    <div class='field'>
      <div class='field-name'>Nachricht:</div>
      <div class='message-box'>
        " . nl2br(htmlspecialchars($message)) . "
      </div>
    </div>
    
    <div class='footer'>
      <p>© " . date('Y') . " Urban Reparaturen | Dies ist eine automatische Nachricht von Ihrem Website-Kontaktformular.</p>
    </div>
  </div>
</body>
</html>
";
    
    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: request@urban-r.de" . "\r\n"; // Set the from address
    $headers .= "Reply-To: " . $email . "\r\n";
    
    // Send email
    $mail_sent = mail($to, $subject, $html_content, $headers);
    
    // Return response
    if ($mail_sent) {
        echo json_encode([
            'success' => true,
            'message' => (strpos($_SERVER['HTTP_ACCEPT_LANGUAGE'], 'de') !== false) ? 
                'Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze mit Ihnen in Verbindung setzen.' : 
                'Thank you for your message. We will contact you shortly.'
        ]);
    } else {
        // Log the error for troubleshooting
        error_log("Failed to send email from contact form. Check mail server configuration.");
        
        echo json_encode([
            'success' => false,
            'message' => (strpos($_SERVER['HTTP_ACCEPT_LANGUAGE'], 'de') !== false) ? 
                'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.' : 
                'There was an error sending your message. Please try again later.'
        ]);
    }
    
    exit;
}

// If not a POST request, return an error in JSON format
echo json_encode([
    'success' => false,
    'message' => 'Invalid request method. Form submissions must use POST.'
]);
exit;
?>