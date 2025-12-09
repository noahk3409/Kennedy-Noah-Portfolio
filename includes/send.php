<?php

if($_SERVER['REQUEST_METHOD'] === 'POST') {

    $recipient = 'noahalexander9718@gmail.com';
    $subject = 'Inquiry from my portfolio site';

    $first = trim($_POST['first_name'] ?? '');
    $last = trim($_POST['last_name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $message = trim($_POST['message'] ?? '');

    $fail = [];

    if ($first === '') { $fail[] = 'First Name'; }
    if ($last === '') { $fail[] = 'Last Name'; }
    if ($email === '') { $fail[] = 'Email'; }
    if ($message === '') { $fail[] = 'Comments'; }

    if (!empty($fail)) {
        $msg = 'Please complete: ' . implode(', ', $fail);
        header("Location: ../contact.php?msg=" . urlencode($msg));
        exit();
    }

    $emailBody  = "First Name: $first\n";
    $emailBody .= "Last Name: $last\n";
    $emailBody .= "Email: $email\n\n";
    $emailBody .= "Comments:\n$message\n";

    mail($recipient, $subject, $emailBody);

    // Thank you Message//
    $msg = "Thank you for your message.";
    header("Location: ../contact.php?msg=" . urlencode($msg));
    exit();

} else {
    echo "Invalid request.";
}