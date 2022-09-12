FROM node:latest

WORKDIR /usr/app

# COPY ./package.json /usr/app

COPY . /usr/app

RUN yarn install

RUN yarn start

# CMD ["yarn", "start"]
