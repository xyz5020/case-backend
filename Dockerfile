FROM node:slim
WORKDIR /case-backend
ADD ./ /case-backend
RUN npm install
RUN npm install pm2 -g
CMD pm2 start server.js -i max --no-daemon
EXPOSE 8085
