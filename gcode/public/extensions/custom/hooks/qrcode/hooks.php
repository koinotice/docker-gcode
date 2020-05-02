<?php
use Genv\code\Generate;

use Directus\Services\ItemsService;

return [
    'actions' => [
        // Post a web callback when an article is created
        'item.create.stock' => function (array $data) {

            $generate = Generate::bar();
            $qrcode=Generate::qr();
            $app = \Directus\Application\Application::getInstance();

            $itemsService = new ItemsService($app->getContainer());
            for($i=0;$i<$data["num"];$i++){
                $params=array();
                $params['sid']=$data['id'];
                $params['pid']=$data['product'];
                $params['code']=sprintf("%d-%d-%d", $params['pid'], $params['sid'],$i);

                $qr_code="http://bg.pmker.com/m/#/?code=". $params['code'];
                $qrcode_path = $qrcode->create($qr_code,"qrcodes/qr_".$params['sid']);

                $params['qc_path']=$qrcode_path;

                $programs = $itemsService->createItem('qrcode', $params);

            }
//
//            $params = $request->getQueryParams();
//
//            var_dump($params);
//            $programs = $itemsService->findAll('product', $params);
//
        }

    ],
    'filters' => [
        'item.create.product:before' => function (\Directus\Hook\Payload $payload) {


   // echo "adfasdfasdf";
//            if ($payload->has('uuid')) {
//                throw new \Directus\Exception\UnprocessableEntityException('Users are not allowed to set UUID');
//            }
//
//            $title = $payload->get('title');
//            if (!$title || strlen($title) < 10) {
//                throw new \Directus\Exception\UnprocessableEntityException('Article title is too short. Expecting at least 10 characters.');
//            }
//
//            if (preg_match('/[^a-z0-9]/i', $title)) {
//                throw new \Directus\Exception\UnprocessableEntityException('Article title has invalid characters. Only alphanumeric characters are allowed');
//            }

           // $payload->set('sku', \Directus\generate_uuid4());

            return $payload;
        }
    ]
];
