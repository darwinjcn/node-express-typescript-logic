// Importamos Express para crear el servidor web
import type { Request, Response } from 'express';
const express = require('express');
const path = require('path');

// ENUMERACIÓN DE GÉNEROS DE PELÍCULAS
// Enum permite definir un conjunto de constantes nombradas
enum GeneroPelicula {
  Accion = "Acción",
  Comedia = "Comedia",
  Drama = "Drama",
  Terror = "Terror",
  CienFiccion = "Ciencia Ficción",
  Romance = "Romance",
  Animacion = "Animación",
  Documental = "Documental"
}

// ENUMERACIÓN DE PAÍSES
// Definimos los países más comunes en la industria cinematográfica
enum PaisPelicula {
  EstadosUnidos = "Estados Unidos",
  Mexico = "México",
  España = "España",
  Argentina = "Argentina",
  Francia = "Francia",
  Japon = "Japón",
  CoreaDelSur = "Corea del Sur",
  India = "India"
}

// INTERFAZ PARA DEFINIR LA ESTRUCTURA DE UNA PELÍCULA
interface Pelicula {
  titulo: string;
  genero: GeneroPelicula;
  pais: PaisPelicula;
  año: number;
}

// Películas de ejemplo predefinidas
const peliculasEjemplo: Pelicula[] = [
  {
    titulo: "El Laberinto del Fauno",
    genero: GeneroPelicula.Drama,
    pais: PaisPelicula.España,
    año: 2006
  },
  {
    titulo: "Avengers: Endgame",
    genero: GeneroPelicula.Accion,
    pais: PaisPelicula.EstadosUnidos,
    año: 2019
  },
  {
    titulo: "Coco",
    genero: GeneroPelicula.Animacion,
    pais: PaisPelicula.Mexico,
    año: 2017
  }
];

// Creamos la aplicación Express
const app = express();
const puerto = 3001;

// Configuramos Express para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// RUTA PRINCIPAL: Envía la página HTML
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// RUTA API: Devuelve todos los géneros disponibles
// Esta ruta será llamada desde el JavaScript del cliente
app.get('/api/generos', (req: Request, res: Response) => {
  // Extraemos todos los valores del enum como un array
  const generos = Object.values(GeneroPelicula);
  res.json(generos);
});

// RUTA API: Devuelve todos los países disponibles
app.get('/api/paises', (req: Request, res: Response) => {
  const paises = Object.values(PaisPelicula);
  res.json(paises);
});

// RUTA API: Devuelve las películas de ejemplo
app.get('/api/peliculas', (req: Request, res: Response) => {
  res.json(peliculasEjemplo);
});

// RUTA API: Devuelve toda la información de enums
// Esta ruta combina géneros, países y películas en un solo objeto
app.get('/api/catalogo-completo', (req: Request, res: Response) => {
  const catalogo = {
    generos: Object.values(GeneroPelicula),
    paises: Object.values(PaisPelicula),
    peliculas: peliculasEjemplo,
    estadisticas: {
      totalGeneros: Object.keys(GeneroPelicula).length,
      totalPaises: Object.keys(PaisPelicula).length,
      totalPeliculas: peliculasEjemplo.length
    }
  };
  res.json(catalogo);
});

// Iniciamos el servidor
app.listen(puerto, () => {
  console.log('═══════════════════════════════════════════════');
  console.log('  SERVIDOR TYPESCRIPT INICIADO CORRECTAMENTE  ');
  console.log('═══════════════════════════════════════════════');
  console.log(`  🌐 URL: http://localhost:${puerto}`);
  console.log(`  📁 Ejercicio 2: Enumeraciones TypeScript`);
  console.log('  Presiona Ctrl+C para detener el servidor');
  console.log('═══════════════════════════════════════════════');
});