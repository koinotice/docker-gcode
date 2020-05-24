#!/bin/sh

test -e /srv/index.php  

chmod -R 777 /srv/public

 
cat > /etc/Caddyfile << EOF
:80 {
    gzip
    cache
    fastcgi / 127.0.0.1:9000 php
    on startup php-fpm7
    rewrite {
        if {file} not feed.xml
        to {path} {path}/ /index.php?{query}
    }
    redir /feed.xml /feed 301
    root /srv/public
}
EOF


/bin/parent caddy --conf /etc/Caddyfile --log stdout --agree=$ACME_AGREE -quic
