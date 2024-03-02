FROM node

WORKDIR /app

COPY package.json .

RUN npm install

ARG BUILDPORT=3000

ENV PORT=${BUILDPORT}

EXPOSE $PORT
COPY . .

CMD ["node", "app.js"]