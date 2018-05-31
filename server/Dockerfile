FROM node:carbon

EXPOSE 8080

WORKDIR /server
COPY . .

RUN yarn install

CMD yarn start:debug
