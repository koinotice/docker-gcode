<?php

use Directus\Application\Http\Request;
use Directus\Application\Http\Response;
use Genv\code\Generate;
use Genv\tools\Strings;
use Directus\Services\ItemsService;

$zip = new \ZipArchive;
return [
    '{id}' => [
        'method' => 'GET',
        'handler' => function (Request $request, Response $response) use ($zip) {
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

            $xls->setColumnHeader('A1', 'C1', '设备管理', '90adf0')->setRowHeight(1, 30);;

            // set one cel

            $i = 2;
            foreach ($programs['data'] as $k => $y) {
                $xls->setCellValue('B' . $i, $y['code']);
                $xls->setImageValue('C' . $i, $y['qc_path']);
                $xls->setRowHeight($i, 100);
                $i++;
            };

            // download file, or add second parameter with 'pdf' to download as PDF
            //$xls ->forceDownload('设备管理');
            $xls->saveAs("qrcodes/qr_" . $piciId . "/设备管理.xlsx");
            // $path=realpath(__DIR__.'/../../../../php/');
            $dir = 'qrcodes/qr_' . $piciId;

            $filezip='download/stock'.$piciId.'.zip';

            if ($zip->open($filezip, \ZipArchive::CREATE) === true) {

                $zip->addEmptyDir('images');


                if ($handle = opendir($dir)) {

                    while (false !== ($entry = readdir($handle))) {
                        if ($entry != "." && $entry != ".." && !is_dir($dir . '/' . $entry)) {

                            $zip->addFile($dir . '/' . $entry, 'images/' . $entry);
                        }
                    }
                    closedir($handle);
                }

                // 关闭zip文件
                $zip->close();
            } else {

            }



            header($_SERVER['SERVER_PROTOCOL'].' 200 OK');
            header("Content-Type: application/zip");
            header("Content-Transfer-Encoding: Binary");
            header("Content-Length: ".filesize($filezip));
            header("Content-Disposition:attachment;filename=\"".basename($filezip)."\"");


            while (ob_get_level())
            {
                ob_end_clean();
            }
            readfile($filezip);
            exit;
            ob_start ();

        }
    ]

];
