import { Professional } from "./professional";

const bardem = new Professional("Javier Badem", 55, 84, 181, false, "Spanish", 1, "Actor");
const penelope = new Professional("Penelope Cruz", 50, 62, 168, false, "Spanish", 1, "Actress");
const almodovar = new Professional("Pedro Almodovar", 75, 75, 170, false, "Spanish", 2, "Director");

bardem.printAttributes();
penelope.printAttributes();
almodovar.printAttributes();