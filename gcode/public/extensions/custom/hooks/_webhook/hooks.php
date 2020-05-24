<?php

return [
    'actions' => [
        // Post a web callback when an article is created
        'item.create.create_qrcode' => function (array $data) {
//            $client = new \GuzzleHttp\Client([
//                'base_uri' => 'https://postb.in'
//            ]);
//
//            $data = [
//                'type' => 'post',
//                'data' => $data
//            ];
//
//            $response = $client->request('POST', 'b/1586660350668-7137377611361', [
//                'json' => $data
//            ]);
        }

    ],
    'filters' => [
        'item.create.product:before' => function (\Directus\Hook\Payload $payload) {


    //echo "adfasdfasdf";
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

            $payload->set('sku', \Directus\generate_uuid4());

            return $payload;
        }
    ]
];
