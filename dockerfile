FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .

# Only generate client during build
RUN npm run prisma:generate
RUN npm run build

# Run migrations and start app at runtime
CMD ["sh", "-c", "npm run prisma:deploy && npm start"]