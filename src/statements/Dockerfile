FROM node:alpine

WORKDIR /src/app

COPY package*.json ./

RUN yarn

ADD ./src/statements .

EXPOSE 4444

CMD [ "yarn", "dev:server" ]