import { Movie } from "./Movie";
import * as fs from "fs";

export class Imdb
{
  public peliculas: Movie[];

  constructor(peliculas: Movie[]) {
    this.peliculas = peliculas;
  }
  public guardarEnFicheroJSON(nombreArchivo: string): void
  {
    const jsonString = JSON.stringify(this, null, 2);
    fs.writeFileSync(nombreArchivo, jsonString);
    console.log(`Archivo guardado como ${nombreArchivo}`);
  }
  public static obtenerInstanciaDesdeFicheroJSON(nombreArchivo: string):Imdb
  {
    const rawData = fs.readFileSync(nombreArchivo, 'utf-8');
    const jsonData = JSON.parse(rawData);
    const peliculas = jsonData.peliculas.map((p: any) =>
      new Movie(p.title, p.releaseYear, p.nationality, p.genre)
    );
    return new Imdb(peliculas);
  }
}