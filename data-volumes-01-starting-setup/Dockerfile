FROM node

WORKDIR /app

COPY package*.json /app


RUN npm install

COPY . /app

ARG DEFAULTPORT=8001

ENV PORT=$DEFAULTPORT

EXPOSE $PORT

CMD [ "npm","start" ]