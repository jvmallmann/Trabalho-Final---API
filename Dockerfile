FROM node:21-alpine

ENV TZ=America/Sao_Paulo
RUN mkdir -p /home/node/apifinal

WORKDIR /home/node/apifinal

COPY ./package.json ./
COPY ./src ./src

RUN npm install

EXPOSE 3000

CMD ["node", "./src/index.js"]