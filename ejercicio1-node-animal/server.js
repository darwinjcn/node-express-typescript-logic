// Importamos el framework Express para crear el servidor web
const express = require('express');
// Importamos el módulo path para manejar rutas de archivos
const path = require('path');

// Creamos la aplicación Express
const app = express();
// Definimos el puerto donde correrá el servidor
const puerto = 3000;

// Configuramos Express para procesar datos de formularios
// Este middleware permite leer datos enviados desde formularios HTML
app.use(express.urlencoded({ extended: true }));

// Configuramos la carpeta 'views' para servir archivos estáticos
// Esto permite que el servidor encuentre los archivos HTML
app.use(express.static(path.join(__dirname, 'views')));

// RUTA PRINCIPAL: Muestra el formulario inicial
// Cuando el usuario accede a la raíz del sitio, se envía index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// RUTA PARA PROCESAR EL FORMULARIO: Recibe el nombre del animal
// El método POST intercepta los datos enviados desde el formulario
app.post('/mostrar-animal', (req, res) => {
  // Extraemos el nombre del animal enviado desde el formulario
  const nombreAnimal = req.body.animal;
  
  // Generamos el HTML de la página de resultado dinámicamente
  // Aquí "interceptamos" la petición y generamos una nueva vista
  const htmlResultado = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Animal Favorito - Resultado</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .header {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          text-align: center;
          margin-bottom: 30px;
          width: 100%;
          max-width: 900px;
        }
        
        .header h1 {
          color: #667eea;
          font-size: 2.5em;
          margin-bottom: 10px;
        }
        
        .header p {
          color: #666;
          font-size: 1.1em;
        }
        
        .contenedor {
          background: white;
          padding: 50px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          text-align: center;
          max-width: 600px;
          width: 100%;
        }
        
        h2 {
          color: #667eea;
          margin-bottom: 20px;
          font-size: 2em;
        }
        
        .animal {
          font-size: 3em;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: bold;
          margin: 30px 0;
          padding: 20px;
          border: 3px solid #667eea;
          border-radius: 15px;
        }
        
        .mensaje {
          color: #666;
          font-size: 1.2em;
          margin: 20px 0;
        }
        
        a {
          display: inline-block;
          margin-top: 30px;
          padding: 15px 30px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s;
        }
        
        a:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        
        .footer {
          background: white;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          text-align: center;
          margin-top: 30px;
          width: 100%;
          max-width: 900px;
        }
        
        .footer p {
          color: #666;
          margin: 5px 0;
          font-size: 0.95em;
        }
        
        .footer strong {
          color: #667eea;
        }
        
        @media (max-width: 600px) {
          .header h1 {
            font-size: 1.8em;
          }
          .contenedor {
            padding: 30px 20px;
          }
          .animal {
            font-size: 2em;
          }
          .footer {
            font-size: 0.85em;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🐾 Animal Favorito</h1>
        <p>Ejercicio 1 - Node.js con Express (Dos vistas HTML)</p>
      </div>
      
      <div class="contenedor">
        <h2>¡Tu Animal Favorito es!</h2>
        <div class="animal">${nombreAnimal}</div>
        <p class="mensaje">🎉 ¡Excelente elección de animal favorito! 🎉</p>
        <a href="/">← Volver al inicio</a>
      </div>
      
      <div class="footer">
        <p><strong>Universidad Nacional Experimental de las Telecomunicaciones e Informática (UNETI)</strong></p>
        <p>Carrera: Ingeniería Informática | Materia: Programación 3</p>
        <p>Evaluación Práctica 1 - Ejercicio 1</p>
        <p>Fecha de entrega: 12 de diciembre de 2025</p>
      </div>
    </body>
    </html>
  `;
  
  // Enviamos el HTML generado como respuesta
  // Esto "recarga" mostrando la nueva página con el animal
  res.send(htmlResultado);
});

// Iniciamos el servidor y lo ponemos a escuchar en el puerto definido
app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
  console.log('Presiona Ctrl+C para detener el servidor');
});