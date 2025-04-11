import { Professional } from "./professional";
import { Movie } from "./Movie";

const actor1 = new Professional("Javier Bardem", 55, 84, 1.81, false, "Spanish", 1, "Actor");
const actor2 = new Professional("Penélope Cruz", 50, 62, 1.68, false, "Spanish", 1, "Actress");
const director = new Professional("Pedro Almodóvar", 75, 75, 1.70, false, "Spanish", 2, "Director");

const movie = new Movie("Volver", 2006, "Spanish", "Drama");

movie.actors = [actor1, actor2];
movie.director = director;
movie.language = "Spanish";
movie.isMCU = false;
movie.mainCharacterName = "Raimunda";
movie.producer = "Agustín Almodóvar";
movie.distributor = "Warner Bros";

movie.printMovieDetails();