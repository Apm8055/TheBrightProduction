<?php
header('Content-Type: application/json');
require 'dbConnection.php';

$response = ["status" => "failed", "err" => "Unknown error"];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize input
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $password = isset($_POST['password']) ? trim($_POST['password']) : '';

    if (empty($email) || empty($password)) {
        $response['err'] = "Email or password cannot be empty.";
    } else {
        // Check if user exists
        $stmt = $conn->prepare("SELECT password FROM user_details WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows === 1) {
            $stmt->bind_result($storedPassword);
            $stmt->fetch();

            if ($password === $storedPassword) { // 🔒 Optional: use password_verify() if hashed
                $response = ["status" => "success", "err" => null];
            } else {
                $response['err'] = "Incorrect password.";
            }
        } else {
            $response['err'] = "Email not found.";
        }

        $stmt->close();
    }
} else {
    $response['err'] = "Invalid request method.";
}

$conn->close();
echo json_encode($response);
?>
