<?php
 

 for($i=0;$i<10;$i++){
    $dec = strtoupper(sprintf("%04s",base_convert($i,10,36)));
    echo "十进制的 $i 等于三十六进制的 $dec \n";
 }
 