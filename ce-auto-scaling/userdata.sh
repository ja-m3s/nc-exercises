#!/usr/bin/env bash

apt update
apt install -y nodejs npm
npm install pm2 -g

git clone https://<creds>@github.com/nc-m3s/ce-load-balancing-node-api.git
cd /ce-load-balancing-node-api/app
npm install
pm2 start /ce-load-balancing-node-api/app/src/index.js