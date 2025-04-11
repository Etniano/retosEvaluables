"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.actors = [];
        this.director = null;
        this.language = '';
        this.isMCU = false;
        this.mainCharacterName = '';
        this.producer = '';
        this.distributor = '';
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    Movie.prototype.printMovieDetails = function () {
        console.log("Title: ".concat(this.title, "\n      Release Year: ").concat(this.releaseYear, "\n      Nationality: ").concat(this.nationality, "\n      Genre: ").concat(this.genre, "\n      Language: ").concat(this.language, "\n      Is MCU: ").concat(this.isMCU ? "SI" : "No", "\n      Main Character: ").concat(this.mainCharacterName, "\n      Producer: ").concat(this.producer, "\n      Distributor: ").concat(this.distributor, "\n      Director: ").concat(this.director ? this.director.name : "NO ASIGNADO", "\n      Actors: ").concat(this.actors.map(function (actor) { return actor.name; }).join(", ")));
    };
    return Movie;
}());
exports.Movie = Movie;
