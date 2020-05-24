<?php
/**
 * Class qrstr
 * @author Genv <666@majiameng.com>
 * @date: 2019/9/26 18:16
 */

namespace Genv\code\Gateways\qrcode;

class QRstr
{
    public static function set(&$srctab, $x, $y, $repl, $replLen = false) {
        $srctab[$y] = substr_replace($srctab[$y], ($replLen !== false)?substr($repl,0,$replLen):$repl, $x, ($replLen !== false)?$replLen:strlen($repl));
    }
}