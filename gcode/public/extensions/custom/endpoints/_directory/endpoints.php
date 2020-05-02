<?php

require __DIR__ . '/controllers/Home.php';

return [
    '/ok' => [
        'method' => 'GET',
        'handler' => Home::class
    ],
];
