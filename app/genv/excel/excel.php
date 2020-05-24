<?php


namespace Genv\excel;


class excel
{

    /**
     * 导出excel csv格式
     * @param string $filename 文件名
     * @param array $tileArray 表头标题列表 格式一维数组 [标题1,标题2,标题3,标题n]
     * @param array $dataArray 数据列表数组 格式二维数组 [[1,2,3,n],[1,2,3,n]]
     */
    public function exportToExcel($filename = 'file', $tileArray = [], $dataArray = [])
    {
        ini_set('memory_limit', '512M');
        ini_set('max_execution_time', 0);
        ob_end_clean();
        ob_start();
        header("Content-Type: text/csv");
        header("Content-Disposition:filename=" . $filename);
        $fp = fopen('php://output', 'w');
        fwrite($fp, chr(0xEF) . chr(0xBB) . chr(0xBF));//转码 防止乱码(比如微信昵称(乱七八糟的))
        fputcsv($fp, $tileArray);
        $index = 0;
        foreach ($dataArray as $item) {
            if ($index == 10000) {
                $index = 0;
                ob_flush();
                flush();
            }
            $index++;
            fputcsv($fp, $item);
        }

        ob_flush();
        flush();
        ob_end_clean();
    }

}