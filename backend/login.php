<?php

require_once __DIR__ . '/utility.php';

sendCorsHeaders();
handleCorsPreflight();

header('Content-Type: application/json');

require_once __DIR__ . '/dbConnection.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true) ?? [];
$email = $input['email'] ?? $_POST['email'] ?? $_GET['email'] ?? null;
$password = $input['password'] ?? $_POST['password'] ?? $_GET['password'] ?? null;

if (!$email || !$password) {
    http_response_code(400);
    echo json_encode(['error' => 'Email and password are required']);
    exit;
}

$stmt = $conn->prepare(
    'SELECT name, email, hashed_password FROM Admin WHERE email = ? LIMIT 1'
);
$stmt->bind_param('s', $email);
$stmt->execute();
$result = $stmt->get_result();
$admin = $result->fetch_assoc();
$stmt->close();
$conn->close();

if (!$admin || !password_verify($password, $admin['hashed_password'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid email or password']);
    exit;
}

try {
    $token = jwt_encode([
        'name' => $admin['name'],
        'email' => $admin['email'],
        'iat' => time(),
        'exp' => time() + 3600,
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
    exit;
}

echo json_encode(['token' => $token]);
