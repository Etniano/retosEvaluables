"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imdb = void 0;
var Movie_1 = require("./Movie");
var fs = require("fs");
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.guardarEnFicheroJSON = function (nombreArchivo) {
        var jsonString = JSON.stringify(this, null, 2);
        fs.writeFileSync(nombreArchivo, jsonString);
        console.log("Archivo guardado como ".concat(nombreArchivo));
    };
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        this.guardarEnFicheroJSON(nombreFichero);
    };
    Imdb.obtenerInstanciaDesdeFicheroJSON = function (nombreArchivo) {
        var rawData = fs.readFileSync(nombreArchivo, 'utf-8');
        var jsonData = JSON.parse(rawData);
        var peliculas = jsonData.peliculas.map(function (p) {
            return new Movie_1.Movie(p.title, p.releaseYear, p.nationality, p.genre);
        });
        return new Imdb(peliculas);
    };
    Imdb.leerDesdeFicheroJSON = function (nombreFichero) {
        return this.obtenerInstanciaDesdeFicheroJSON(nombreFichero);
    };
    return Imdb;
}());
exports.Imdb = Imdb;
