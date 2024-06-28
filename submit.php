<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $message = $_POST['message'];
    
    // // You can add additional validation here if needed
    
    // // Example: Send an email (you can use a library like PHPMailer for better email handling)
    // $to = "your-email@example.com"; // Replace with your email address
    // $subject = "New Form Submission";
    // $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    echo "works";
    
    // if (mail($to, $subject, $body)) {
    //     // // Redirect to a thank-you page or display a success message
    //     // header("Location: /thank-you.html");
    //     // exit();
    //     echo "works";
    // } else {
    //     // Handle errors, e.g., display an error message
    //     echo "Oops! Something went wrong.";
    // }
}
?>