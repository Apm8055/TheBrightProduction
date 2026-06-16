<?php

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/dbConnection.php';
require_once __DIR__ . '/utility.php';

sendCorsHeaders();
handleCorsPreflight();

use Cloudinary\Cloudinary;
use Cloudinary\Configuration\Configuration;

header('Content-Type: application/json');

$section = trim($_POST['section'] ?? '');

if (empty($section)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Section is required'
    ]);
    exit;
}

$cloudinary = new Cloudinary([
    'cloud' => [
        'cloud_name' => $_ENV['CLOUDINARY_CLOUD_NAME'],
        'api_key' => $_ENV['CLOUDINARY_API_KEY'],
        'api_secret' => $_ENV['CLOUDINARY_API_SECRET']
    ]
]);

if (!isset($_FILES['images'])) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'No images provided'
    ]);
    exit;
}

$uploadedImages = [];

$stmt = $conn->prepare(
    "INSERT INTO Image (
        cloudinary_public_id,
        cloudinary_url,
        section
    ) VALUES (?, ?, ?)"
);

foreach ($_FILES['images']['tmp_name'] as $index => $tmpFile) {

    if ($_FILES['images']['error'][$index] !== UPLOAD_ERR_OK) {
        continue;
    }

    try {

        $result = $cloudinary->uploadApi()->upload($tmpFile);

        $publicId = $result['public_id'];
        $url = $result['secure_url'];

        $stmt->bind_param(
            "sss",
            $publicId,
            $url,
            $section
        );

        $stmt->execute();

        $uploadedImages[] = [
            'id' => $conn->insert_id,
            'cloudinary_public_id' => $publicId,
            'cloudinary_url' => $url,
            'section' => $section
        ];

    } catch (Exception $e) {

        $uploadedImages[] = [
            'error' => $e->getMessage()
        ];
    }
}

$stmt->close();

echo json_encode([
    'success' => true,
    'images' => $uploadedImages
]);