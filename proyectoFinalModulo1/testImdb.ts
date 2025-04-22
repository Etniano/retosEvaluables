import { Movie } from "./Movie";
import { Imdb } from "./imdb";
const imdbDesdeArchivo = Imdb.obtenerInstanciaDesdeFicheroJSON("imdbBBDD.json");

const movie1 = new Movie("Volver", 2006, "Spain", "Drama");
const movie2 = new Movie("Vicky Cristina Barcelona", 2008, "USA/Spain", "Romantic Comedy");
const movie3 = new Movie("Biutiful", 2010, "Mexico/Spain", "Drama");
const movie4 = new Movie("Parallel Mothers", 2021, "Spain", "Drama");
const movie5 = new Movie("Mar adentro", 2004, "Spain", "Biography/Drama");

const imdbInstance = new Imdb ([movie1, movie2, movie3, movie4, movie5]);

imdbInstance.guardarEnFicheroJSON("imdbBBDD.json");
imdbInstance.escribirEnFicheroJSON("imdbBBDD.json");

console.log("Catálogo de películas:");
imdbInstance.peliculas.forEach((movie, index) => {
  console.log (`${index + 1}. ${movie.title} (${movie.releaseYear}) - ${movie.genre} - ${movie.nationality}`);
});
  console.log("Películas cargadas desde imdbBBDD.json:");
imdbDesdeArchivo.peliculas.forEach((peli, index) => {
  console.log(`${index + 1}. ${peli.title} (${peli.releaseYear}) - ${peli.genre}`);
});