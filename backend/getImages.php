<?php

require_once __DIR__ . '/dbConnection.php';
require_once __DIR__ . '/utility.php';

sendCorsHeaders();
handleCorsPreflight();

header('Content-Type: application/json');

$section = trim($_GET['section'] ?? '');

if (empty($section)) {
    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => 'Section is required'
    ]);

    exit;
}

$stmt = $conn->prepare(
    "SELECT
        id,
        cloudinary_url,
        section,
        created_at
     FROM Image
     WHERE section = ?
     ORDER BY created_at DESC"
);

$stmt->bind_param("s", $section);

if (!$stmt->execute()) {
    http_response_code(500);

    echo json_encode([
        'success' => false,
        'message' => 'Failed to fetch images'
    ]);

    exit;
}

$result = $stmt->get_result();

$images = [];

while ($row = $result->fetch_assoc()) {
    $images[] = [
        'id' => (int) $row['id'],
        'cloudinary_url' => $row['cloudinary_url'],
        'section' => $row['section'],
        'created_at' => $row['created_at']
    ];
}

$stmt->close();

echo json_encode($images);