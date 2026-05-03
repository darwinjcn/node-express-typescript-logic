# 🚀 Node.js & TypeScript Fundamentals Lab

&lt;p align="center"&gt;
  &lt;img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /&gt;
  &lt;img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" /&gt;
  &lt;img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" /&gt;
  &lt;img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" /&gt;
&lt;/p&gt;

Este repositorio es un laboratorio técnico que demuestra la implementación de lógica de servidor, enrutamiento dinámico y tipado estricto. El proyecto integra **Node.js** para la lógica de backend y **TypeScript** para la gestión de estructuras de datos seguras, todo bajo una arquitectura preparada para contenedores.

---

## 🎯 Descripción del Proyecto

El laboratorio se divide en dos módulos core que resuelven problemas específicos de desarrollo web backend, aplicando principios de escalabilidad y mantenibilidad.

### 1. Gestión de Rutas y Vistas Dinámicas (Node.js + Express)
- **Objetivo:** Implementación de un sistema de interceptación de peticiones para renderizado dinámico de respuestas.
- **Habilidades demostradas:** Manejo de Middlewares, procesamiento de formularios vía POST, gestión de estados de vista y diseño responsivo.
- **Acceso:** Puerto `3000`.

### 2. Estructuras de Datos y Tipado Estricto (TypeScript)
- **Objetivo:** Uso de **Enumeraciones (Enums)** e Interfaces para definir modelos de datos robustos aplicados a un catálogo de cine.
- **Habilidades demostradas:** Programación con tipado fuerte, arquitectura de API REST interna y lógica de visualización interactiva.
- **Acceso:** Puerto `3001`.

---

## 🏗️ Arquitectura y Tecnologías

| Capa | Tecnología | Descripción |
|------|------------|-------------|
| **Backend** | Node.js + Express.js | Runtime principal y framework de rutas |
| **Tipado** | TypeScript | Prevención de errores en tiempo de desarrollo y documentación intrínseca |
| **Frontend** | HTML5 + CSS3 | Interfaces limpias con estética de tarjetas y gradientes |
| **Contenedores** | Docker | Infraestructura dockerizada con Dockerfiles optimizados por módulo |

---

## 📁 Estructura del Proyecto
node-express-typescript-logic/
├── ejercicio1-node-animal/           # Backend Node.js / Express
│   ├── server.js                     # Lógica de rutas
│   └── Dockerfile                    # Configuración de contenedor
├── ejercicio2-typescript-peliculas/  # Backend TypeScript
│   ├── server.ts                     # Implementación del servidor TS
│   ├── index.ts                      # Lógica de consola
│   └── Dockerfile                    # Configuración de contenedor
└── capturas/                         # Documentación visual del proyecto


---

## 🚀 Instalación y Ejecución

### Opción A: Con Docker (Recomendado)
Para desplegar el laboratorio de forma rápida sin configurar el entorno local:

```bash
# Clonar repositorio
git clone https://github.com/darwinjcn/node-express-typescript-logic.git
cd node-express-typescript-logic

# Levantar Módulo 1 (Node.js)
cd ejercicio1-node-animal
docker build -t node-lab-1 .
docker run -p 3000:3000 node-lab-1

# Levantar Módulo 2 (TypeScript)
cd ../ejercicio2-typescript-peliculas
docker build -t ts-lab-2 .
docker run -p 3001:3001 ts-lab-2


🎓 Contexto Académico
Este proyecto fue desarrollado originalmente como parte de la Evaluación Práctica 1 de la unidad curricular Programación 3 en la UNETI (Ingeniería Informática), bajo la supervisión del Prof. Carlos Márquez. Representa la aplicación práctica de conceptos de lógica de servidor y tipado avanzado.
👨‍💻 Autor
Darwin Colmenares
💼 [LinkedIn](https://linkedin.com/in/darwin-colmenares)
💬 [WhatsApp](https://wa.me/584265152896/) (Click para Chatear)
🐙 [GitHub](https://github.com/darwinjcn)
