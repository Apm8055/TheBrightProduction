<?php

require_once __DIR__ . '/vendor/autoload.php';

// $host = "srv1493.hstgr.io";
// $dbname = "u449618480_ShivStudioMain";
// $username = "u449618480_ShivPratap";
// $password = "Akhand8055";

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$host = $_ENV['DB_HOST'];
$username = $_ENV['DB_USER'];
$password = $_ENV['DB_PASSWORD'];
$database = $_ENV['DB_NAME'];

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>