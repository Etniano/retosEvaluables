"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var professional_1 = require("./professional");
var bardem = new professional_1.Professional("Javier Badem", 55, 84, 181, false, "Spanish", 1, "Actor");
var penelope = new professional_1.Professional("Penelope Cruz", 50, 62, 168, false, "Spanish", 1, "Actress");
var almodovar = new professional_1.Professional("Pedro Almodovar", 75, 75, 170, false, "Spanish", 2, "Director");
bardem.printAttributes();
penelope.printAttributes();
almodovar.printAttributes();
