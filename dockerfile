FROM node:22.16.0 AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma
COPY .env ./

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

RUN npm install
RUN npx prisma generate
# RUN npx prisma migrate deploy

COPY . .

RUN npm run build

COPY entrypoint.sh ./
ENTRYPOINT ["./entrypoint.sh"]

EXPOSE 3000

