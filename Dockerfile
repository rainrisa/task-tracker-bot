# https://github.com/prisma/prisma/issues/19729#issuecomment-1590734304
FROM node:18.15-slim

WORKDIR /app
COPY package.json yarn.lock ./ 
RUN yarn 
COPY . .

RUN yarn prisma generate
RUN yarn build

CMD ["yarn", "start:prod"]
