<?php
$host = '193.203.184.96';
$dbname = 'u449618480_ShivStudioTest';
$username = 'u449618480_Shiv'; // 🔁 Replace this
$password = 'Akhand@8055'; // 🔁 Replace this

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
}

echo "✅ Connected successfully to $dbname";
?>
