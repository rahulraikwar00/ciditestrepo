FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g tsx

EXPOSE 8080

CMD [ "npx", "tsx", "index.ts" ]