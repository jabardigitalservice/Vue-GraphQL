FROM arf95/npm-alpine:latest as build
WORKDIR /usr/src/app
RUN apk update && apk upgrade && \
    apk add --update --no-cache

COPY package*.json ./
COPY package-lock*.json ./
COPY . ./

RUN npm ci --production

# remove development dependencies
RUN npm prune --production

FROM arf95/npm-alpine:latest
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .