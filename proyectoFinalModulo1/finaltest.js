"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imdb_1 = require("./imdb");
var professional_1 = require("./professional");
var readlineSync = require("readline-sync");
var imdb = imdb_1.Imdb.leerDesdeFicheroJSON("imdbBBDD.json");
console.log("Introduce los datod de un profesional:");
var name = readlineSync.question("Nombre: ");
var age = parseInt(readlineSync.question("Edad: "));
var weight = parseFloat(readlineSync.question("Peso: (kg): "));
var height = parseFloat(readlineSync.question("Altura: (cm): "));
var isRetired = readlineSync.question("¿Está retirado? (true/false): ") === "true";
var nationality = readlineSync.question("Nacionalidad: ");
var oscarsNumber = parseInt(readlineSync.question("Número de Oscars: "));
var profession = readlineSync.question("Profesión: ");
var NuevoProfesional = new professional_1.Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession);
if (imdb.peliculas.length > 0) {
    var primeraPelicula = imdb.peliculas[0];
    if (!primeraPelicula.actors) {
        primeraPelicula.actors = [];
    }
    primeraPelicula.actors.push(NuevoProfesional);
    console.log(" Profesional a\u00F1adido a la pel\u00EDcula: \"".concat(primeraPelicula.title, "\""));
}
else {
    console.log("No hay películas en la base de datos.");
}
imdb.escribirEnFicheroJSON("imdbBBDD.json");
console.log("Profesional añadido y guardado en el fichero JSON.");
