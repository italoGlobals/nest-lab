FROM node:latest

WORKDIR /usr/src/api

COPY . /usr/src/api/

RUN yarn install --no-optional --no-fund --lolevel=error

RUN yarn build

CMD ["yarn", "start", "start:prod "]
