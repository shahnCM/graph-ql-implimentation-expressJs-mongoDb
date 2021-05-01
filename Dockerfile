FROM node:14-slim

RUN mkdir -p /var/src/app

WORKDIR /var/src/app

COPY ./package*.json ./

RUN npm i -g npm@latest
RUN npm install -g nodemon
RUN npm install

COPY . .

EXPOSE 3000
