<?php
require 'dbConnection.php';

$serial_no = 1;
$email = "thebrightproduction@gmail.com";
$password = "ShivStudio@1234";

// Use prepared statement to avoid SQL injection
$stmt = $conn->prepare("INSERT INTO user_details (serial_no, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("iss", $serial_no, $email, $password);

if ($stmt->execute()) {
    echo "Record inserted successfully.";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
