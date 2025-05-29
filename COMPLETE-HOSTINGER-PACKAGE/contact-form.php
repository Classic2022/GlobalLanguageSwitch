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
    
    // Build email content
    $to = "info@urban-r.de";
    $subject = "New Contact Form Submission - Urban Reparaturen";
    
    $email_content = "New contact form submission:\n\n";
    $email_content .= "Name: " . $name . "\n";
    $email_content .= "Email: " . $email . "\n";
    $email_content .= "Phone: " . $phone . "\n";
    $email_content .= "Message: " . $message . "\n";
    
    if (!empty($services)) {
        $email_content .= "Services requested: " . implode(", ", $services) . "\n";
    }
    
    $email_content .= "\n---\n";
    $email_content .= "Sent from: " . $_SERVER['HTTP_HOST'] . "\n";
    $email_content .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";
    $email_content .= "Date: " . date('Y-m-d H:i:s') . "\n";
    
    // Email headers
    $headers = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
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