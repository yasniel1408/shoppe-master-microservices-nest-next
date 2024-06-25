# Fase 1: Construcción de la aplicación
FROM node:21-alpine3.18 AS builder

WORKDIR /usr/src

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --only=production

COPY . .

RUN npm run build

# Fase 2: Imagen final de producción
FROM node:21-alpine3.18

WORKDIR /usr/src

COPY --from=builder /usr/src/node_modules ./node_modules
COPY --from=builder /usr/src/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
