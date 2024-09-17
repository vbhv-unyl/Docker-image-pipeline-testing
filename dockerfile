ARG TARGETPLATFORM

FROM --platform=$TARGETPLATFORM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY dist ./dist

RUN npm install --production

EXPOSE 5000

CMD ["node", "dist/bundle.js"]