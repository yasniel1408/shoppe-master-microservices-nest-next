# Fase 1: Construcción de la aplicación
FROM node:21-alpine3.18 AS builder

# Establecer el directorio de trabajo
WORKDIR /usr/src

# Copiar los archivos de dependencias
COPY package.json package-lock.json ./

# Instalar todas las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación
RUN npm run build

# Fase 2: Imagen final de producción
FROM node:21-alpine3.18

# Establecer el directorio de trabajo
WORKDIR /usr/src

# Copiar solo los archivos necesarios desde la fase de construcción
COPY --from=builder /usr/src/.next ./.next
COPY --from=builder /usr/src/public ./public
COPY --from=builder /usr/src/package.json ./package.json
COPY --from=builder /usr/src/node_modules ./node_modules

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start"]
