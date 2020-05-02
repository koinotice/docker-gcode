<?php

return [
    'database' => [
        'type' => 'mysql',
        'host' => 'mysql',
        'port' => 3306,
        'name' => 'pmker',
        'username' => 'pmker',
        'password' => 'Zheli123',
        'engine' => 'InnoDB',
        'charset' => 'utf8mb4',
        // Remove 'host' above when using sockets
        'socket' => '',
    ],

    'cors' => [
        'enabled' => true,
        'origin' => array(
            0 => '*',
        ),
        'methods' => array(
            0 => 'GET',
            1 => 'POST',
            2 => 'PUT',
            3 => 'PATCH',
            4 => 'DELETE',
            5 => 'HEAD',
        ),
        'headers' => array(),
        'exposed_headers' => array(),
        'max_age' => 600,
        'credentials' => true,
    ],

    'rate_limit' => [
        'enabled' => false,
        'limit' => 100,
        'interval' => 60,
        'adapter' => 'redis',
        'host' => '127.0.0.1',
        'port' => 6379,
        'timeout' => 10,
    ],

    'storage' => [
        'adapter' => 'local',
        'root' => 'public/uploads/gcms/originals',
        'root_url' => '/uploads/gcms/originals',
        'thumb_root' => 'public/uploads/gcms/generated',
        // 'key' => '',
        // 'secret' => '',
        // 'region' => '',
        // 'version' => '',
        // 'bucket' => '',
        // 'options' => '',
        // 'endpoint' => '',
        // 'proxy_downloads' => '',
    ],

    'mail' => [
        'default' => [
            'transport' => 'sendmail',
            // 'sendmail' => '',
            // 'host' => '',
            // 'port' => '',
            // 'username' => '',
            // 'password' => '',
            // 'encryption' => '',
            'from' => 'admin@example.com'
        ],
    ],

    'cache' => [
        'enabled' => false,
        'response_ttl' => 3600,
        'pool' => [
            // 'adapter' => '',
            // 'path' => '',
            // 'host' => '',
            // 'port' => '',
        ],
    ],

    'auth' => [
        'secret_key' => 'JdGGA2JziQTcm9d2BfhWk8BzyxDFHetG',
        'public_key' => 'd4b1079e-d686-42b6-8e14-0cbe664b6b0b',
        'social_providers' => [
            // 'okta' => '',
            // 'github' => '',
            // 'facebook' => '',
            // 'google' => '',
            // 'twitter' => '',
        ],
    ],

    'hooks' => [
        'actions' => [],
        'filters' => [],
    ],

    'tableBlacklist' => [],

    'env' => 'production',

    'logger' => [
        'path' => '../logs',
    ],
];
