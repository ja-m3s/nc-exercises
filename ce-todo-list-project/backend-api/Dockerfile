FROM node:18.13.0

WORKDIR /app

COPY ./ ./

RUN npm install

EXPOSE 3000

ARG DATABASE_HOST=postgres-db

CMD [ "npm", "start" ]