FROM node:12.18.1

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /home/node/api

COPY package*.json ./

RUN npm install && npm i -g @adonisjs/cli

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3333

CMD [ "node", "server.js" ]
