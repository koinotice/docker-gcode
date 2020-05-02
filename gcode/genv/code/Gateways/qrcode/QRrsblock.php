<?php
/**
 * Class QRrsblock
 * @author Genv <666@majiameng.com>
 * @date: 2019/9/26 18:21
 */
namespace Genv\code\Gateways\qrcode;
class QRrsblock
{
    public $dataLength;
    public $data = array();
    public $eccLength;
    public $ecc = array();

    public function __construct($dl, $data, $el, &$ecc, QRrsItem $rs)
    {
        $rs->encode_rs_char($data, $ecc);

        $this->dataLength = $dl;
        $this->data = $data;
        $this->eccLength = $el;
        $this->ecc = $ecc;
    }
}