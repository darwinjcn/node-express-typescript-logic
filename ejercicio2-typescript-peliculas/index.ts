// ENUMERACIÓN DE GÉNEROS DE PELÍCULAS
// Enum permite definir un conjunto de constantes nombradas
// Cada género tiene un valor numérico automático (empezando desde 0)
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
// Esto nos ayuda a tener un esquema claro de los datos
interface Pelicula {
  titulo: string;
  genero: GeneroPelicula;
  pais: PaisPelicula;
  año: number;
}

// FUNCIÓN PARA MOSTRAR TODOS LOS GÉNEROS DISPONIBLES
// Recorre el enum y muestra cada valor
function mostrarGeneros(): void {
  console.log("\n=== GÉNEROS DE PELÍCULAS DISPONIBLES ===");
  
  // Object.values extrae todos los valores del enum
  const generos = Object.values(GeneroPelicula);
  
  // Iteramos sobre cada género y lo mostramos
  generos.forEach((genero, index) => {
    console.log(`${index + 1}. ${genero}`);
  });
}

// FUNCIÓN PARA MOSTRAR TODOS LOS PAÍSES DISPONIBLES
// Similar a la función anterior pero para países
function mostrarPaises(): void {
  console.log("\n=== PAÍSES DE PELÍCULAS DISPONIBLES ===");
  
  const paises = Object.values(PaisPelicula);
  
  paises.forEach((pais, index) => {
    console.log(`${index + 1}. ${pais}`);
  });
}

// FUNCIÓN PARA MOSTRAR INFORMACIÓN DE UNA PELÍCULA
// Recibe un objeto de tipo Pelicula y muestra sus datos
function mostrarPelicula(pelicula: Pelicula): void {
  console.log("\n--- Información de la Película ---");
  console.log(`Título: ${pelicula.titulo}`);
  console.log(`Género: ${pelicula.genero}`);
  console.log(`País: ${pelicula.pais}`);
  console.log(`Año: ${pelicula.año}`);
  console.log("----------------------------------");
}

// FUNCIÓN PRINCIPAL QUE EJECUTA EL PROGRAMA
function main(): void {
  console.log("╔═══════════════════════════════════════════════╗");
  console.log("║   SISTEMA DE CATÁLOGO DE PELÍCULAS           ║");
  console.log("║   Ejercicio 2 - TypeScript con Enums         ║");
  console.log("╚═══════════════════════════════════════════════╝");
  
  // Mostramos todos los géneros disponibles
  mostrarGeneros();
  
  // Mostramos todos los países disponibles
  mostrarPaises();
  
  // EJEMPLO DE USO: Creamos algunas películas de ejemplo
  console.log("\n=== EJEMPLOS DE PELÍCULAS ===");
  
  // Película 1: Usamos los enums para asignar género y país
  const pelicula1: Pelicula = {
    titulo: "El Laberinto del Fauno",
    genero: GeneroPelicula.Drama,
    pais: PaisPelicula.España,
    año: 2006
  };
  mostrarPelicula(pelicula1);
  
  // Película 2
  const pelicula2: Pelicula = {
    titulo: "Avengers: Endgame",
    genero: GeneroPelicula.Accion,
    pais: PaisPelicula.EstadosUnidos,
    año: 2019
  };
  mostrarPelicula(pelicula2);
  
  // Película 3
  const pelicula3: Pelicula = {
    titulo: "Coco",
    genero: GeneroPelicula.Animacion,
    pais: PaisPelicula.Mexico,
    año: 2017
  };
  mostrarPelicula(pelicula3);
  
  // DEMOSTRAMOS EL USO DE LOS ENUMS
  console.log("\n=== VALIDACIÓN DE TIPOS CON ENUMS ===");
  console.log("Los enums garantizan que solo usemos valores válidos:");
  console.log(`- Género válido: ${GeneroPelicula.Terror}`);
  console.log(`- País válido: ${PaisPelicula.Japon}`);
  console.log("\nSi intentamos usar un valor no definido, TypeScript nos dará un error en tiempo de compilación.");
}

// EJECUTAMOS EL PROGRAMA PRINCIPAL
main();