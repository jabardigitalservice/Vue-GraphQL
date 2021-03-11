FROM node:12.13.0-stretch as build
WORKDIR /app
COPY package*.json ./
RUN yarn install
ARG VUE_APP_GRAPQL_URL

ENV VUE_APP_GRAPQL_URL $VUE_APP_GRAPQL_URL
COPY . .
RUN yarn run build

FROM nginx:stable-alpine as production-stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
