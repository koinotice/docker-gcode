FROM  abiosoft/caddy:php 

ENV CADDYPATH=/srv/caddycerts

WORKDIR /opt

COPY entrypoint.sh /bin/entrypoint.sh

RUN chmod +x /bin/entrypoint.sh  
    
WORKDIR /srv/public

EXPOSE 80 443 2015
VOLUME /srv

ENTRYPOINT ["/bin/entrypoint.sh"]
