#!/usr/bin/env bash
set -eux

# Author: JW
# Version: 1.1
# Description:
# This script will:
# - Configure a basic nginx server

WEBSITE_DATA_DIR="/data/www"; #where to put files nginx will serve
NGINX_LOG_DIR="/var/log/nginx"; #nginx log file folder
DNS="127.0.0.53:53"; #systemd-resolved

main() {
    apt update || true;
    apt install -y nginx || true;

    #Set up location of website root
    mkdir -p ${WEBSITE_DATA_DIR}

    #Basic page for testing config
    cat <<EOF > ${WEBSITE_DATA_DIR}/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CE-TERRAFORM-PROJECT</title>
  </head>
  <body>
	<h1>Terraform Provisioned Me</h1>
  </body>
</html>
EOF

    #Set ownership of website serving location to the http user used by nginx
    chown -R www-data:www-data ${WEBSITE_DATA_DIR}

    COMMON_NGINX_SERVER_CONFIG=$(cat << EOF
        #harden headers
        add_header X-Frame-Options DENY;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";
        add_header X-Frame-Options "SAMEORIGIN";
        add_header Strict-Transport-Security "max-age=31536000; includeSubdomains; preload";
        add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
        #buffer policy
        client_body_buffer_size 1K;
        client_header_buffer_size 1k;
        client_max_body_size 1k;
        large_client_header_buffers 2 1k;
        #disable version numbers in nginx responses, default error pages etc.
        server_tokens off;
EOF
)
    #Create new nginx.conf
    cat <<EOF >/etc/nginx/nginx.conf
user www-data;
worker_processes  1;

error_log  ${NGINX_LOG_DIR}/error.log;
error_log  ${NGINX_LOG_DIR}/error.log  notice;
error_log  ${NGINX_LOG_DIR}/error.log  info;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    access_log  ${NGINX_LOG_DIR}/access.log;

    sendfile        on;
    keepalive_timeout  65;

    #stops warning of hash_max_size being too small (1024 is default)
    types_hash_max_size 4096;

    server {
        listen 80 default_server;
        listen [::]:80 default_server;
        server_name _;
        resolver ${DNS} valid=300s;
        resolver_timeout 5s;

        #where to put your website files
        root ${WEBSITE_DATA_DIR};

        #root location block
        location / {
            #disable TRACE, DELETE requests
            limit_except GET HEAD POST { deny all; }
        }

        ## Disable .htaccess and other hidden files
        location ~ /\.(?!well-known).* {
        deny all;
        access_log off;
        log_not_found off;
        return 404;
        }

${COMMON_NGINX_SERVER_CONFIG}   
    }
}
EOF

    #Validate configuration of nginx
    nginx -t
    
    #allow www folder in SEL/AA
	chcon -R -h httpd_sys_content_t /data/www

    #Start and enable nginx if systemctl is present
    systemctl enable nginx
    systemctl restart nginx
    systemctl status nginx

}
main 2>&1 | tee /var/log/nginx.install.log
