<?php

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/dbConnection.php';
require_once __DIR__ . '/utility.php';

sendCorsHeaders();
handleCorsPreflight();

use Cloudinary\Cloudinary;

header('Content-Type: application/json');

$id = $_POST['id'] ?? null;

if (!$id) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Image id is required'
    ]);
    exit;
}

try {

    $cloudinary = new Cloudinary(
        sprintf(
            'cloudinary://%s:%s@%s',
            $_ENV['CLOUDINARY_API_KEY'],
            $_ENV['CLOUDINARY_API_SECRET'],
            $_ENV['CLOUDINARY_CLOUD_NAME']
        )
    );

    // Fetch image
    $stmt = $conn->prepare(
        "SELECT id, cloudinary_public_id
         FROM Image
         WHERE id = ?"
    );

    $stmt->bind_param("i", $id);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        http_response_code(404);
        echo json_encode([
            'success' => false,
            'message' => 'Image not found'
        ]);
        exit;
    }

    $image = $result->fetch_assoc();

    // Delete from Cloudinary
    $cloudinaryResponse = $cloudinary
        ->uploadApi()
        ->destroy($image['cloudinary_public_id']);

    if (
        !isset($cloudinaryResponse['result']) ||
        $cloudinaryResponse['result'] !== 'ok'
    ) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Failed to delete image from Cloudinary'
        ]);
        exit;
    }

    // Delete from DB
    $deleteStmt = $conn->prepare(
        "DELETE FROM Image WHERE id = ?"
    );

    $deleteStmt->bind_param("i", $id);

    if (!$deleteStmt->execute()) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Failed to delete image from database'
        ]);
        exit;
    }

    echo json_encode([
        'success' => true,
        'message' => 'Image deleted successfully'
    ]);

} catch (Exception $e) {

    http_response_code(500);

    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}