FROM postgres:15.3
WORKDIR /app
COPY ./scripts/init.sh /docker-entrypoint-initdb.d
COPY ./scripts/setup-db.sql ./scripts/db/setup-db.sql