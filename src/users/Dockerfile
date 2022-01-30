FROM node:alpine

WORKDIR /src/app

COPY package*.json ./

RUN yarn

ADD ./src/users .

EXPOSE 3434

CMD [ "yarn", "dev:server" ]