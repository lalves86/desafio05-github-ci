FROM node:12.13-alpine

WORKDIR /usr/src

COPY package*.json ./

RUN npm install --only=development

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "node", "dist/main.js" ]