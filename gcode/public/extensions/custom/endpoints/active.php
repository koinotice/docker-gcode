<?php

use Directus\Application\Http\Request;
use Directus\Application\Http\Response;
use Genv\code\Generate;
use Genv\tools\Strings;
use Directus\Services\ItemsService;

return [
    '' => [
        'method' => 'POST',
        'handler' => function (Request $request, Response $response) {
           $data = $request->getParsedBody();


            $itemsService = new ItemsService($this);
            $res = $itemsService->createItem('active', $data);
            return $response->withJson([
                'status'=>200,
                'data' => $res
            ]);
        }
    ]

];
