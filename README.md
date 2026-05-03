# 🚀 Node.js & TypeScript Fundamentals Lab

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
</p>

Este repositorio es un laboratorio técnico diseñado para demostrar la implementación de lógica de servidor, enrutamiento dinámico y tipado estricto. El proyecto integra **Node.js** para la lógica de backend y **TypeScript** para la gestión de estructuras de datos seguras, bajo una arquitectura preparada para contenedores.

---

## 🎯 Descripción del Proyecto

El laboratorio se divide en dos módulos core que aplican principios de escalabilidad y mantenibilidad en entornos de desarrollo modernos.

### 1. Gestión de Rutas y Vistas Dinámicas (Node.js + Express)
* **Objetivo:** Interceptación de peticiones para renderizado dinámico de respuestas.
* **Habilidades:** Manejo de Middlewares, procesamiento de formularios POST y gestión de estados de vista.
* **Acceso:** Puerto `3000`.

### 2. Estructuras de Datos y Tipado Estricto (TypeScript)
* **Objetivo:** Implementación de **Enumeraciones (Enums)** e Interfaces para modelos de datos robustos.
* **Habilidades:** Programación con tipado fuerte, arquitectura de API REST interna y lógica interactiva.
* **Acceso:** Puerto `3001`.

---

## 🏗️ Arquitectura y Tecnologías

Para maximizar la compatibilidad y el rendimiento, se han seleccionado las siguientes tecnologías:

* 🛠️ **Backend:** Node.js (Runtime) con Express.js para la gestión de rutas.
* 🛡️ **Tipado:** TypeScript para la prevención de errores y documentación técnica intrínseca.
* 🎨 **Frontend:** Interfaces limpias con HTML5 y CSS3 (Estética de tarjetas y gradientes).
* 🐳 **Contenedores:** Infraestructura dockerizada mediante Dockerfiles optimizados por módulo.

---

## 🚀 Instalación y Ejecución
Opción A: Con Docker (Recomendado)

Ideal para desplegar el laboratorio sin configurar dependencias locales:

### Clonar repositorio
* git clone [https://github.com/darwinjcn/node-express-typescript-logic.git](https://github.com/darwinjcn/node-express-typescript-logic.git)
* cd node-express-typescript-logic

### Levantar Módulo 1 (Node.js) en puerto 3000
* cd ejercicio1-node-animal
* docker build -t node-lab-1 .
* docker run -p 3000:3000 node-lab-1

### Levantar Módulo 2 (TypeScript) en puerto 3001
* cd ../ejercicio2-typescript-peliculas
* docker build -t ts-lab-2 .
* docker run -p 3001:3001 ts-lab-2

---

## 📁 Estructura del Proyecto

```text
node-express-typescript-logic/
├── ejercicio1-node-animal/           # Backend Node.js / Express
│   ├── server.js                     # Lógica de rutas y middleware
│   └── Dockerfile                    # Configuración de contenedor
├── ejercicio2-typescript-peliculas/  # Módulo de TypeScript
│   ├── server.ts                     # Implementación del servidor TS
│   ├── index.ts                      # Lógica de ejecución en consola
│   └── Dockerfile                    # Configuración de contenedor
└── capturas/                         # Documentación visual del flujo


---
