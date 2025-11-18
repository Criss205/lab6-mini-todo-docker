#Stage 1: construccion

FROM node:22 AS construccion

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run lint

RUN npm run build

#Stage 2: empaquetado

FROM nginx:latest AS empaquetado

WORKDIR /usr/share/nginx/html

COPY --from=construccion /usr/app/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]