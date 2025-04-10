// Teniendo la siguiente estructura de objeto literal:

//persona =
//{
//   "nombre" : String,
//    "apellido" : String,
//    "anyoNacimiento" : Number,
//    "aficiones" : [Array]
//    "dni" :{"anyoExpedicion":Number,
//        "lugarNacimiento": String},
//    "colorPelo": string
// }
// crea un array de personas con 4 objetos de tiempo persona.

let personas = [
    {
        nombre: "Juan",
        apellido: "Pérez",
        anyoNacimiento: 1990,
        aficiones: ["leer", "fútbol", "comer"],
        dni: {
            anyoExpedicion: 2010,
            lugarNacimiento: "Madrid"
        },
        colorPelo: "castaño"
    },
    {
        nombre: "María",
        apellido: "Gómez",
        anyoNacimiento: 1985,
        aficiones: ["viajar", "pintura", "yoga"],
        dni: {
            anyoExpedicion: 2015,
            lugarNacimiento: "Barcelona"
        },
        colorPelo: "rubio"
    },
    {
        nombre: "Carlos",
        apellido: "López",
        anyoNacimiento: 2000,
        aficiones: ["videojuegos", "música", "bicicleta"],
        dni: {
            anyoExpedicion: 2018,
            lugarNacimiento: "Valencia"
        },
        colorPelo: "castaño"
    },
    {
        nombre: "Ana",
        apellido: "Martínez",
        anyoNacimiento: 2012,
        aficiones: ["musica", "teatro", "dormir"],
        dni: {
            anyoExpedicion: 2013,
            lugarNacimiento: "Sevilla"
        },
        colorPelo: "pelirrojo"
    }
];

let añoActual = 2024;

// Mostrar el nombre de los que tengan el pelo castaño
const persona1 = personas[0];
const persona2 = personas[1];
const persona3 = personas[2];
const persona4 = personas[3];

let Castaño = "";

if (persona1.colorPelo == "castaño") {
    Castaño += persona1.nombre + " ";
}
if (persona2.colorPelo == "castaño") {
    Castaño += persona2.nombre + " ";
}
if (persona3.colorPelo == "castaño") {
    Castaño += persona3.nombre + " ";
}
if (persona4.colorPelo == "castaño") {
    Castaño += persona4.nombre + " ";
}
console.log ("Personas con el pelo castaño: " + Castaño);

// Mayores de 30
const edad1 = añoActual - persona1.anyoNacimiento;
const edad2 = añoActual - persona2.anyoNacimiento;
const edad3 = añoActual - persona3.anyoNacimiento;
const edad4 = añoActual - persona4.anyoNacimiento;

if (edad1 > 30) {
    console.log(`${persona1.nombre} tiene ${edad1} años.`);
} else if (edad2 > 30) {
    console.log(`${persona2.nombre} tiene ${edad2} años.`);
} else if (edad3 > 30) {
    console.log(`${persona3.nombre} tiene ${edad3} años.`);
} else if (edad4 > 30) {
    console.log(`${persona4.nombre} tiene ${edad4} años.`);
} else {
    console.log("Ninguna persona tiene más de 30 años.");
}

// Lugar de nacimiento de personas con pelo castaño y DNI caducado o menores de edad y su afición sea comer o dormir

const DniCaducado = (anyoExpedicion) => añoActual - anyoExpedicion > 10;
const MenorDeEdad = (anyoNacimiento) => añoActual - anyoNacimiento < 18;
const AficionesComerODormir = (aficiones) => aficiones.includes ("comer") || aficiones.includes ("dormir");

if ((persona1.colorPelo == "castaño" && DniCaducado(persona1.dni.anyoExpedicion)) || (MenorDeEdad(persona1.anyoNacimiento) && AficionesComerODormir(persona1.aficiones)))
    {
        console.log(`Lugar de nacimiento (pelo castaño y DNI caducado o menor de edad con aficiones de comer o dormir): ${persona1.dni.lugarNacimiento}`);
    }
    if ((persona2.colorPelo == "castaño" && DniCaducado(persona2.dni.anyoExpedicion)) || (MenorDeEdad(persona2.anyoNacimiento) && AficionesComerODormir(persona2.aficiones)))
        {
            console.log(`Lugar de nacimiento (pelo castaño y DNI caducado o menor de edad con aficiones de comer o dormir): ${persona2.dni.lugarNacimiento}`);
        } 
    if ((persona3.colorPelo == "castaño" && DniCaducado(persona3.dni.anyoExpedicion)) || (MenorDeEdad(persona3.anyoNacimiento) && AficionesComerODormir(persona3.aficiones)))
        {
            console.log(`Lugar de nacimiento (pelo castaño y DNI caducado o menor de edad con aficiones de comer o dormir): ${persona3.dni.lugarNacimiento}`);
        }
    if ((persona4.colorPelo == "castaño" && DniCaducado(persona4.dni.anyoExpedicion)) || (MenorDeEdad(persona4.anyoNacimiento) && AficionesComerODormir(persona4.aficiones)))
        {
            console.log(`Lugar de nacimiento (pelo castaño y DNI caducado o menor de edad con aficiones de comer o dormir): ${persona4.dni.lugarNacimiento}`);
        } 
    else 
    { console.log("Ninguna persona cumple las condiciones especificadas."); }