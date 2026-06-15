<?php

require_once "dbConnection.php";
require_once "entity/Admin.php";

// $passwordHash = password_hash(
//     "",
//     PASSWORD_DEFAULT
// );

// $admin = new Admin(
//     "",
//     "",
//     $passwordHash
// );

// $stmt = $conn->prepare(
//     "INSERT INTO Admin (name, email, hashed_password)
//      VALUES (?, ?, ?)"
// );

// $stmt->bind_param(
//     "sss",
//     $admin->getName(),
//     $admin->getEmail(),
//     $admin->getPasswordHash()
// );

// if ($stmt->execute()) {
//     echo "Admin inserted successfully";
// } else {
//     echo "Error: " . $stmt->error;
// }

$stmt->close();
$conn->close();