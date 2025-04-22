"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Movie_1 = require("./Movie");
var imdb_1 = require("./imdb");
var imdbDesdeArchivo = imdb_1.Imdb.obtenerInstanciaDesdeFicheroJSON("imdbBBDD.json");
var movie1 = new Movie_1.Movie("Volver", 2006, "Spain", "Drama");
var movie2 = new Movie_1.Movie("Vicky Cristina Barcelona", 2008, "USA/Spain", "Romantic Comedy");
var movie3 = new Movie_1.Movie("Biutiful", 2010, "Mexico/Spain", "Drama");
var movie4 = new Movie_1.Movie("Parallel Mothers", 2021, "Spain", "Drama");
var movie5 = new Movie_1.Movie("Mar adentro", 2004, "Spain", "Biography/Drama");
var imdbInstance = new imdb_1.Imdb([movie1, movie2, movie3, movie4, movie5]);
imdbInstance.guardarEnFicheroJSON("imdbBBDD.json");
imdbInstance.escribirEnFicheroJSON("imdbBBDD.json");
console.log("Catálogo de películas:");
imdbInstance.peliculas.forEach(function (movie, index) {
    console.log("".concat(index + 1, ". ").concat(movie.title, " (").concat(movie.releaseYear, ") - ").concat(movie.genre, " - ").concat(movie.nationality));
});
console.log("Películas cargadas desde imdbBBDD.json:");
imdbDesdeArchivo.peliculas.forEach(function (peli, index) {
    console.log("".concat(index + 1, ". ").concat(peli.title, " (").concat(peli.releaseYear, ") - ").concat(peli.genre));
});
