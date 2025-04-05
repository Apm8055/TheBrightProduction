<?php
header('Content-Type: application/json');
require 'dbConnection.php';

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

$sno = 1;
$value = 42;

if (!is_numeric($sno) || !is_numeric($value)) {
    http_response_code(400);
    echo json_encode(["error" => "Both sno and value must be integers"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO Test (SerialNo, Value) VALUES (?, ?)");
$stmt->bind_param("ii", $sno, $value); // both are integers

if ($stmt->execute()) {
    echo json_encode(["message" => "Data inserted successfully"]);
} else {
    echo json_encode(["error" => "Insert failed: " . $conn->error]);
}

$stmt->close();
$conn->close();
?>
