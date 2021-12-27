FROM node:14-alpine

RUN mkdir -p /usr/src/front-end
WORKDIR /usr/src/front-end

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/front-end
RUN npm install

RUN npm run build 

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm", "start"]