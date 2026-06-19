<?php

require_once __DIR__ . '/vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function sendCorsHeaders(): void
{
    $allowedOrigins = [
        'http://localhost:5173',
        'http://127.0.0.1:5173',
        'https://thebrightproductiontbp.com/backend',
        'https://thebrightproductiontbp.com'
    ];

    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    if (in_array($origin, $allowedOrigins, true)) {
        header("Access-Control-Allow-Origin: {$origin}");
        header('Vary: Origin');
    }

    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
}

function handleCorsPreflight(): void
{
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

function getJwtSecret(): string
{
    static $secret = null;

    if ($secret === null) {
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
        $dotenv->safeLoad();

        $secret = trim(
            (string) (
                $_ENV['JWT_SECRET']
                ?? $_SERVER['JWT_SECRET']
                ?? getenv('JWT_SECRET')
                ?: ''
            )
        );

        if ($secret === '') {
            throw new InvalidArgumentException('JWT_SECRET is not set in .env');
        }
    }

    return $secret;
}

function getJwtSigningKey(): string
{
    return hash('sha256', getJwtSecret(), true);
}

function jwt_verify(string $token): object|false
{
    try {
        return JWT::decode($token, new Key(getJwtSigningKey(), 'HS256'));
    } catch (Exception $e) {
        return false;
    }
}

function jwt_encode(array $payload): string
{
    try {
        return JWT::encode($payload, getJwtSigningKey(), 'HS256');
    } catch (Exception $e) {
        throw new RuntimeException('Failed to create token: ' . $e->getMessage(), 0, $e);
    }
}
