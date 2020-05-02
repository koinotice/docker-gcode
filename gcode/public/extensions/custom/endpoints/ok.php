<?php

use Directus\Application\Http\Request;
use Directus\Application\Http\Response;
use Genv\code\Generate;
use Genv\tools\Strings;
use Directus\Services\ItemsService;

return [
    '' => [
        'method' => 'GET',
        'handler' => function (Request $request, Response $response) {
            // Simple GET endpoint example

//            // Get all answers from DB
//            $itemsService = new ItemsService($this);
//
//            $params = $request->getQueryParams();
//
//            var_dump($params);
//            $programs = $itemsService->findAll('product', $params);
//
//
//            return $response->withJson([
//                'data' => [
//                    $programs
//                ]
//            ]);
//            exit;
            //echo  Strings::generateRandomString();
            $generate = Generate::bar();

            /** 直接输出图片 */
           // $generate->create("123456789");

//            /** 直接输出图片下面显示数字 */
 //$generate->create("123456789",true);
//
//            /** 条形码存入本地并输出存储路径 */
 $file_path = $generate->create("123456789",true,"qrcodes");
 var_dump($file_path);
 exit;
            return $response->withJson([
                'data' => [
                    'item 1',
                    'item 2'
                ]
            ]);
        }
    ],
    '/datetime' => [
        'group' => true,
        'endpoints' => [
            '/date[/{when}]' => [
                'method' => 'GET',
                'handler' => function (Request $request, Response $response) {
                    $when = $request->getAttribute('when');

                    $datetime = new DateTime();
                    switch ($when) {
                        case 'yesterday':
                            $datetime->modify('-1 day');
                            break;
                        case 'tomorrow':
                            $datetime->modify('+1 day');
                            break;
                        default:
                            // When empty we fallback to 'today' option
                            if (!empty($when)) {
                                throw new \Directus\Exception\Exception(
                                    sprintf(
                                        'Unknown: %. Options available: %s',
                                        $when, implode(['today', 'yesterday', 'tomorrow'])
                                    )
                                );
                            }
                    }

                    return $response->withJson([
                        'data' => [
                            'date' => $result = $datetime->format('Y-m-d')
                        ]
                    ]);
                }
            ],
            '/time' => [
                'handler' => function ($request, $response) {
                    return $response->withJSON([
                        'data' => [
                            'time' => date('H:i:s', time())
                        ]
                    ]);
                }
            ]
        ]
    ]
];
