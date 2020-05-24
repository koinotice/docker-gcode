<?php

use Directus\Application\Http\Request;
use Directus\Application\Http\Response;

require_once __DIR__ . '/../functions.php';

class Home
{
    public function __invoke(Request $request, Response $response)
    {
        $data = array('name' => 'Bob', 'age' => 40);
         return $response->withJson($data);
    }
}
