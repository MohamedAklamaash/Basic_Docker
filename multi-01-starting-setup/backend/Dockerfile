FROM node

WORKDIR /backend

COPY package*.json .

RUN npm install

COPY . /backend

ENV DB_USER=aklamaash
ENV DB_PASS=ehsan

EXPOSE 80

CMD [ "npm","start" ]