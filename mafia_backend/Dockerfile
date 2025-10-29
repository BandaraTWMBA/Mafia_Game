FROM node:22

WORKDIR /app

# Copy backend package.json & package-lock.json
COPY package*.json ./

RUN npm install

# Copy backend source code
COPY . .

EXPOSE 5000

CMD ["npm", "run", "start:dev"]
