<?php
header('Content-Type: application/json');
require 'dbConnection.php';

// Query to fetch all rows from Test table
$sql = "SELECT * FROM Test";
$result = $conn->query($sql);

$data = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode(["message" => "No records found"]);
}

$conn->close();
?>
