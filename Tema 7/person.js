const Person = require('./personTest.js');

let persona = new Person ("Gregoria", "Mujer", 85, 1.80, 1989, ["Escuchar musica", "Bailar", "leer"]);
console.log("Tu IMC es: " + persona.calcularIMC());
console.log("Tu edad actual es: " + persona.edad(2025));
console.log("Atributos:");
persona.printAll();
console.log("Lista de hobbies:");
persona.printHobbies();