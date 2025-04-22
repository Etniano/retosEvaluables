import { parse } from "path";
import { Imdb } from "./imdb";
import { Professional } from "./professional";
import * as readlineSync from "readline-sync";

const imdb = Imdb.leerDesdeFicheroJSON("imdbBBDD.json");
console.log ("Introduce los datod de un profesional:");

const name = readlineSync.question("Nombre: ");
const age = parseInt(readlineSync.question("Edad: "));
const weight = parseFloat(readlineSync.question("Peso: (kg): "));
const height = parseFloat(readlineSync.question("Altura: (cm): "));
const isRetired = readlineSync.question("¿Está retirado? (true/false): ") === "true";
const nationality = readlineSync.question("Nacionalidad: ");
const oscarsNumber = parseInt(readlineSync.question("Número de Oscars: "));
const profession = readlineSync.question("Profesión: ");
const NuevoProfesional = new Professional (name, age, weight, height, isRetired, nationality, oscarsNumber, profession);

if (imdb.peliculas.length > 0)
{
    const primeraPelicula = imdb.peliculas[0];
    if (!primeraPelicula.actors)
    {
        primeraPelicula.actors = [];
    }
    primeraPelicula.actors.push(NuevoProfesional);
    console.log (` Profesional añadido a la película: "${primeraPelicula.title}"`);
}
else
{
    console.log ("No hay películas en la base de datos.");
}
imdb.escribirEnFicheroJSON("imdbBBDD.json");
console.log ("Profesional añadido y guardado en el fichero JSON.");