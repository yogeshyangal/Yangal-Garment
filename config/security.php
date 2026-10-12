<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Security Configuration
    |--------------------------------------------------------------------------
    |
    | This file contains security-related configuration for the application.
    |
    */

    /*
    |--------------------------------------------------------------------------
    | Allowed File Upload Types
    |--------------------------------------------------------------------------
    |
    | List of allowed MIME types for file uploads.
    |
    */
    'allowed_file_types' => [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
        'application/pdf',
    ],

    /*
    |--------------------------------------------------------------------------
    | Maximum File Upload Size (in bytes)
    |--------------------------------------------------------------------------
    |
    | Maximum file size for uploads (5MB = 5242880 bytes).
    |
    */
    'max_file_size' => 5242880,

    /*
    |--------------------------------------------------------------------------
    | Rate Limiting
    |--------------------------------------------------------------------------
    |
    | Rate limiting configuration for various endpoints.
    |
    */
    'rate_limiting' => [
        'login' => '5,1', // 5 attempts per minute
        'api' => '60,1', // 60 requests per minute
        'enquiry' => '10,1', // 10 enquiries per minute
    ],

    /*
    |--------------------------------------------------------------------------
    | Password Requirements
    |--------------------------------------------------------------------------
    |
    | Password policy configuration.
    |
    */
    'password' => [
        'min_length' => 8,
        'require_uppercase' => true,
        'require_lowercase' => true,
        'require_number' => true,
        'require_special' => true,
    ],

    /*
    |--------------------------------------------------------------------------
    | Session Security
    |--------------------------------------------------------------------------
    |
    | Session-related security settings.
    |
    */
    'session' => [
        'lifetime' => 120, // 2 hours
        'expire_on_close' => false,
        'encrypt' => true,
        'http_only' => true,
        'secure' => env('APP_ENV') === 'production',
        'same_site' => 'lax',
    ],
];
