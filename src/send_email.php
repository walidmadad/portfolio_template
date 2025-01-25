<?php
// Check for empty fields
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "example@Example"; // Your email
    $subject = "Contact Form Submission from $name"; // Email subject
    $body = "You have received a new message from $name ($email):\n\n$message"; // Email body
    $headers = "From: $email"; // Email headers

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!"; // Success message
    } else {
        echo "Message could not be sent."; // Error message
    }
}
?>
