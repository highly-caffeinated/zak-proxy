FROM node:14.15.4

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm ci

EXPOSE 3000

CMD ["node", "server/index.js"]