import { Professional } from "./professional";

export class Movie
{
  public title:string;
  public releaseYear:number;
  public actors:Professional[] = [];
  public nationality:string;
  public director:Professional | null = null;
  public language:string = '';
  public isMCU:boolean = false;
  public mainCharacterName:string = '';
  public producer:string = '';
  public distributor:string = '';
  public genre:string;

  constructor(title:string, releaseYear:number, nationality:string, genre:string)
  {
    this.title = title;
    this.releaseYear = releaseYear;
    this.nationality = nationality;
    this.genre = genre;
  }
  public printMovieDetails():void
  {
    console.log (`Title: ${this.title}
      Release Year: ${this.releaseYear}
      Nationality: ${this.nationality}
      Genre: ${this.genre}
      Language: ${this.language}
      Is MCU: ${this.isMCU ? "SI" : "No"}
      Main Character: ${this.mainCharacterName}
      Producer: ${this.producer}
      Distributor: ${this.distributor}
      Director: ${this.director ? this.director.name : "NO ASIGNADO"}
      Actors: ${this.actors.map(actor => actor.name).join(", ")}`);
  }
}