# Usamos la imagen oficial de Node.js versión 18
FROM node:18

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de configuración del proyecto
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos todo el código fuente al contenedor
COPY . .

# Exponemos el puerto 3000 donde corre la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "server.js"]