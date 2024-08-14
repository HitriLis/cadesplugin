FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install typescript
COPY . .
RUN npm run build
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]