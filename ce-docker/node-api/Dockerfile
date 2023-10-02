FROM node:latest
 
WORKDIR /app

EXPOSE 3000

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["node", "src/index.js"]