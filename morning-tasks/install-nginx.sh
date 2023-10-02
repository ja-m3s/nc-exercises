#!/usr/bin/env bash

set -x
set -u
set -e

# Author: James
# Version: 1.1
# Description:
# This script will:
# - Configure a basic nginx server
# - Set a location to provide access via basic authentication
# - Configure https and force it's use
# - Provide basic hardening of nginx
#
# Notes:
# - The script places ssl certs in /etc/ssl by default.
# - The script generates a 4096 bit key/cert pair which expires in 365 days.
# - The script logs all output to log file nginx.install.log but will not log any passwords.
# - The script is set via variables, and takes no arguments.
# - Created on a local VM, may require changes for use on a server
#
# Usage:
# - Upload to, then run on server as sudo user:
# sudo ./install-nginx.sh
# - Run from ssh:
# ssh root@server "bash -s" < ./install-nginx.sh
#
# Further works to be considered:
# - Build nginx from source with superfluous modules removed
# - Implement crawler blocking
# - Implement mod security
# - Improve cross-platformability by implementing detection of other init systems like openrc as used on alpine
# - Let's Encrypt/Cert bot
# - Implement chroot for nginx
# - Improve hardening from source https://calomel.org/nginx.html (amazing guide, well worth a read)
# - mount web root on a separate btrfs subvolume with restricted permissions
# - make options setable with flags i.e. disablable/enablable with something like ENABLE_CHROOT=Y;
# Copyright (C) 2022 James Whitburn
#
#This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
#
#This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
#
#You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.

WEBSITE_DATA_DIR="/data/www"; #where to put files nginx will serve
NGINX_LOG_DIR="/var/log/nginx"; #nginx log file folder
SSL_CONF_DIR="/etc/ssl"; #keys and certs are put here
SERVER_NAME="aws-ubuntu-1"; #Used as commonName in SSL Cert by default, and for filenames
SSL_CONF_FILE="${SSL_CONF_DIR}/openssl-key.conf"; #a temporary file that is deleted after certificate is created
DNS="127.0.0.53:53"; #nginx's DNS resolver
#I'm just using my systemd-resolved on my server,
#but you could use Cloudflare, or Google or whatever.

#CSR Settings for SSL
CERT_COUNTRY="UK";
CERT_STATE="London";
CERT_LOCALITY="London";
CERT_ORG_NAME="N/A";
CERT_COMMON_NAME=${SERVER_NAME};

#Arch configuration for packages, could change depending on system
# i.e apt on Debian
# no prompts, don't reinstall if already there
PACKAGE_MANAGER="apt install";
NGINX_PACKAGES="nginx";

main() {

    #install nginx package if it can find the package manager or exit
    if type "$(echo "${PACKAGE_MANAGER}" | cut -d' ' -f1 )" > /dev/null; then
        # && true to prevent script exit
        ${PACKAGE_MANAGER} ${NGINX_PACKAGES} && true
    else
        echo 'cannot find package system, please manually install'
        exit
    fi

    #Set up location of website root
    mkdir -p ${WEBSITE_DATA_DIR}

    #Basic page for testing config
    echo 'Hello World' > ${WEBSITE_DATA_DIR}/index.html

    #Create locations for certificate, key
    mkdir -p ${SSL_CONF_DIR}/private
    mkdir -p ${SSL_CONF_DIR}/certs

    #Make private key location root-accessible only
    chmod 700 ${SSL_CONF_DIR}/private

    #Make cert location readable by http
    chown -R www-data:www-data ${SSL_CONF_DIR}/certs

    #Set ownership of website serving location to the http user used by nginx
    chown -R www-data:www-data ${WEBSITE_DATA_DIR}

    #Backup old nginx.conf
    cp -a /etc/nginx/nginx.conf /etc/nginx/nginx.conf.old

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

        #server block for http, redirects all http:// requests to https://
        listen 80 default_server;
        listen [::]:80 default_server;
        server_name _;
        return 301 https://\$host\$request_uri;

${COMMON_NGINX_SERVER_CONFIG}
    }

    server {
        #ssl (https) connection handler
        listen 443 ssl;
        ssl_certificate     ${SSL_CONF_DIR}/certs/${SERVER_NAME}.crt;
        ssl_certificate_key ${SSL_CONF_DIR}/private/${SERVER_NAME}.key;
        ssl_dhparam ${SSL_CONF_DIR}/certs/dhparam.pem;

        #hardening protocols, ciphers, and session
        ssl_protocols TLSv1.3;# Requires nginx >= 1.13.0 else use TLSv1.2
        ssl_prefer_server_ciphers on;
        ssl_ciphers EECDH+AESGCM:EDH+AESGCM;
        ssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0
        ssl_session_timeout  10m;
        ssl_session_cache shared:SSL:10m;
        ssl_session_tickets off; # Requires nginx >= 1.5.9

        #set stapling, but will warn as using self-signed certificate
        ssl_stapling on; # Requires nginx >= 1.3.7
        ssl_stapling_verify on; # Requires nginx => 1.3.7

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

    #Setup the diffie-helman parameters
    #very slow, so comment during testing
    openssl dhparam -out ${SSL_CONF_DIR}/certs/dhparam.pem 2048

    #Set up SSL Certificates - self-signed

    #Generates key file
    openssl genrsa -out ${SSL_CONF_DIR}/private/${SERVER_NAME}.key 4096 2>/dev/null

    #Creates a file for the certificate's configuration
    cat <<EOF > ${SSL_CONF_FILE}
    [req]
    default_bit = 4096
    distinguished_name = req_distinguished_name
    prompt = no

    [req_distinguished_name]
    countryName             = ${CERT_COUNTRY}
    stateOrProvinceName     = ${CERT_STATE}
    localityName            = ${CERT_LOCALITY}
    organizationName        = ${CERT_ORG_NAME}
    commonName              = ${CERT_COMMON_NAME}
EOF

    #Generate certificate
    openssl req -x509 -new -key ${SSL_CONF_DIR}/private/${SERVER_NAME}.key -out ${SSL_CONF_DIR}/certs/${SERVER_NAME}.crt -config ${SSL_CONF_FILE} -days 365 2>/dev/null

    #Delete temporary file
    rm -v "${SSL_CONF_FILE}";

    #Validate configuration of nginx
    nginx -t
    chcon -R -h httpd_sys_content_t /data/www

    #Start and enable nginx if systemctl is present
    if type "systemctl" > /dev/null; then
        systemctl enable nginx
        systemctl start nginx
        systemctl status nginx
    else
        echo 'cannot find init system, please manually enable in your init system'
    fi
}
main 2>&1 | tee nginx.install.log
