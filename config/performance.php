<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Performance Configuration
    |--------------------------------------------------------------------------
    |
    | This file contains performance-related configuration for the application.
    |
    */

    /*
    |--------------------------------------------------------------------------
    | Image Optimization
    |--------------------------------------------------------------------------
    |
    | Configuration for image optimization and lazy loading.
    |
    */
    'images' => [
        'lazy_load' => true,
        'webp_support' => true,
        'max_width' => 1920,
        'max_height' => 1080,
        'quality' => 85,
    ],

    /*
    |--------------------------------------------------------------------------
    | Caching Strategy
    |--------------------------------------------------------------------------
    |
    | Cache configuration for various components.
    |
    */
    'cache' => [
        'enabled' => env('CACHE_ENABLED', true),
        'default_ttl' => 3600, // 1 hour
        'products_ttl' => 86400, // 24 hours
        'categories_ttl' => 86400, // 24 hours
        'blogs_ttl' => 3600, // 1 hour
        'settings_ttl' => 86400, // 24 hours
    ],

    /*
    |--------------------------------------------------------------------------
    | Database Query Optimization
    |--------------------------------------------------------------------------
    |
    | Database query optimization settings.
    |
    */
    'database' => [
        'eager_loading' => true,
        'query_caching' => true,
        'index_hints' => true,
    ],

    /*
    |--------------------------------------------------------------------------
    | API Response Optimization
    |--------------------------------------------------------------------------
    |
    | API response optimization settings.
    |
    */
    'api' => [
        'pagination' => 15,
        'max_pagination' => 100,
        'response_compression' => true,
    ],

    /*
    |--------------------------------------------------------------------------
    | CDN Configuration
    |--------------------------------------------------------------------------
    |
    | Content Delivery Network configuration (optional).
    |
    */
    'cdn' => [
        'enabled' => env('CDN_ENABLED', false),
        'url' => env('CDN_URL'),
        'assets_url' => env('CDN_ASSETS_URL'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Asset Optimization
    |--------------------------------------------------------------------------
    |
    | Frontend asset optimization settings.
    |
    */
    'assets' => [
        'minify_css' => env('ASSET_MINIFY_CSS', true),
        'minify_js' => env('ASSET_MINIFY_JS', true),
        'versioning' => true,
    ],
];
