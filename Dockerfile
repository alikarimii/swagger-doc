FROM node:12.14.1-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
COPY gulpfile.js ./
COPY ./src ./src
COPY ./api ./api
RUN npm ci --quiet && npm run build
#
# Production stage.
# This state compile get back the JavaScript code from builder stage
# It will also install the production package only
#
FROM node:12.14.1-alpine

WORKDIR /usr/node/app

COPY package*.json ./
RUN npm ci --quiet --only=production
USER node

## We just need the build to execute the command
COPY --from=builder --chown=node:node /usr/src/app/build ./build
EXPOSE 3000
CMD ["npm", "start"]