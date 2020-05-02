FROM  abiosoft/caddy:php 

ENV CADDYPATH=/srv/caddycerts

WORKDIR /opt

COPY entrypoint.sh /bin/entrypoint.sh

RUN chmod +x /bin/entrypoint.sh  
    
 
 
RUN mkdir -p /data/cache
RUN mkdir -p /data/logs
# TODO: need to replace to nobody user permissions
RUN chmod 777 -R /srv
RUN chmod 777 -R /data
WORKDIR /srv/public

EXPOSE 80 443 2015


ENTRYPOINT ["/bin/entrypoint.sh"]