FROM node

WORKDIR /backend

COPY package*.json /backend

RUN npm install

COPY . /backend

CMD [ "node","server.js" ]