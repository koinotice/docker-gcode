<?php

use Directus\Application\Http\Request;
use Directus\Application\Http\Response;
use Genv\code\Generate;
use Genv\tools\Strings;
use Directus\Services\ItemsService;

return [
    '{id}' => [
        'method' => 'GET',
        'handler' => function (Request $request, Response $response) {
            // Simple GET endpoint example
            $piciId = $request->getAttribute('id');

            // Get all answers from DB
            $itemsService = new ItemsService($this);

            $params['limit'] = 10000;
            $params['filter'] = [
                'sid' => ['eq' => $piciId]
            ];

            $programs = $itemsService->findAll('qrcode', $params);

            $xls = new Arifrh\EasyExcel\EasyExcel('Example 1');

            $xls->setColumnsWidth([
                'A' => 20, 'B' => 40, 'C' => 40
            ]);

            $xls  ->setColumnHeader('A1', 'C1', '设备管理', '90adf0')->setRowHeight(1, 30);;

                // set one cel

             $i = 2;
            foreach ($programs['data'] as $k => $y) {
                $xls->setCellValue('B' . $i, $y['code']);
                $xls->setImageValue('C' . $i, $y['qc_path']);
                $xls->setRowHeight($i, 100);
                $i++;
            };

                // download file, or add second parameter with 'pdf' to download as PDF
               $xls ->forceDownload('设备管理');

        }
    ]

];
