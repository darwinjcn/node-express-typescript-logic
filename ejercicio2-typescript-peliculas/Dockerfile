# Usamos la imagen oficial de Node.js versión 18
FROM node:18

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de configuración
COPY package*.json ./
COPY tsconfig.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el código fuente y la carpeta public
COPY . .

# Exponemos el puerto 3001 donde corre la aplicación web
EXPOSE 3001

# Comando para ejecutar el servidor web TypeScript
CMD ["npx", "ts-node", "server.ts"]