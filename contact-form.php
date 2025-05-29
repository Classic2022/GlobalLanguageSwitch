<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $message = strip_tags(trim($_POST["message"]));
    $services = isset($_POST["services"]) ? $_POST["services"] : array();
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo "Please fill in all required fields.";
        exit;
    }
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please enter a valid email address.";
        exit;
    }
    
    // Build HTML email content
    $to = "info@urban-r.de";
    $subject = "🔧 New Contact Form Submission - Urban Reparaturen";
    
    $services_html = "";
    if (!empty($services)) {
        $services_html = "<div style='margin: 15px 0;'>
                            <strong style='color: #1A4D3C;'>Services Requested:</strong><br>
                            <div style='background: #f8f9fa; padding: 10px; border-radius: 5px; margin-top: 5px;'>";
        foreach($services as $service) {
            $services_html .= "<span style='display: inline-block; background: #1A4D3C; color: white; padding: 3px 8px; margin: 2px; border-radius: 3px; font-size: 12px;'>" . htmlspecialchars($service) . "</span>";
        }
        $services_html .= "</div></div>";
    }
    
    $email_content = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>New Contact Form Submission</title>
    </head>
    <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f5f5f5;'>
        <div style='max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'>
            <!-- Header -->
            <div style='background: linear-gradient(135deg, #1A4D3C 0%, #2d6a4f 100%); color: white; padding: 30px 20px; text-align: center;'>
                <h1 style='margin: 0; font-size: 24px; font-weight: bold;'>🏠 URBAN REPARATUREN</h1>
                <p style='margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;'>New Contact Form Submission</p>
            </div>
            
            <!-- Content -->
            <div style='padding: 30px 20px;'>
                <div style='background: #f8f9fa; border-left: 4px solid #1A4D3C; padding: 20px; margin-bottom: 25px; border-radius: 0 5px 5px 0;'>
                    <h2 style='margin: 0 0 15px 0; color: #1A4D3C; font-size: 18px;'>📞 Contact Information</h2>
                    
                    <div style='margin-bottom: 15px;'>
                        <strong style='color: #1A4D3C;'>👤 Name:</strong><br>
                        <span style='font-size: 16px; color: #2c3e50;'>" . htmlspecialchars($name) . "</span>
                    </div>
                    
                    <div style='margin-bottom: 15px;'>
                        <strong style='color: #1A4D3C;'>📧 Email:</strong><br>
                        <a href='mailto:" . htmlspecialchars($email) . "' style='color: #3498db; text-decoration: none; font-size: 16px;'>" . htmlspecialchars($email) . "</a>
                    </div>
                    
                    <div style='margin-bottom: 15px;'>
                        <strong style='color: #1A4D3C;'>📱 Phone:</strong><br>
                        <a href='tel:" . htmlspecialchars($phone) . "' style='color: #3498db; text-decoration: none; font-size: 16px;'>" . htmlspecialchars($phone) . "</a>
                    </div>
                </div>
                
                " . $services_html . "
                
                <div style='margin: 20px 0;'>
                    <strong style='color: #1A4D3C; font-size: 16px;'>💬 Message:</strong>
                    <div style='background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px; border: 1px solid #e9ecef;'>
                        <p style='margin: 0; white-space: pre-wrap; color: #2c3e50; line-height: 1.6;'>" . htmlspecialchars($message) . "</p>
                    </div>
                </div>
                
                <!-- Call to Action -->
                <div style='text-align: center; margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 8px;'>
                    <p style='margin: 0 0 15px 0; color: #6c757d; font-size: 14px;'>Quick Actions</p>
                    <a href='mailto:" . htmlspecialchars($email) . "' style='display: inline-block; background: #1A4D3C; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 0 10px; font-weight: bold;'>✉️ Reply</a>
                    <a href='tel:" . htmlspecialchars($phone) . "' style='display: inline-block; background: #28a745; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 0 10px; font-weight: bold;'>📞 Call</a>
                </div>
            </div>
            
            <!-- Footer -->
            <div style='background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #dee2e6;'>
                <p style='margin: 0; font-size: 12px; color: #6c757d;'>
                    <strong>📍 Sent from:</strong> " . htmlspecialchars($_SERVER['HTTP_HOST']) . "<br>
                    <strong>🌍 IP Address:</strong> " . htmlspecialchars($_SERVER['REMOTE_ADDR']) . "<br>
                    <strong>📅 Date:</strong> " . date('d.m.Y H:i:s') . "
                </p>
                <div style='margin-top: 15px; padding-top: 15px; border-top: 1px solid #dee2e6;'>
                    <p style='margin: 0; font-size: 11px; color: #adb5bd;'>
                        Urban Reparaturen - Ihr Partner für Wohnungspflege in Berlin<br>
                        Konstanzerstr. 54, 10707 Berlin | info@urban-r.de
                    </p>
                </div>
            </div>
        </div>
    </body>
    </html>";
    
    // Email headers for HTML
    $headers = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "Thank you! Your message has been sent successfully.";
    } else {
        http_response_code(500);
        echo "Sorry, there was an error sending your message. Please try again.";
    }
} else {
    http_response_code(405);
    echo "Method not allowed.";
}
?>