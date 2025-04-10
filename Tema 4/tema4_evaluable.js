// Teniendo la siguiente estructura de objeto literal:

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
        aficiones: ["comer", "teatro", "dormir"],
        dni: {
            anyoExpedicion: 2013,
            lugarNacimiento: "Sevilla"
        },
        colorPelo: "pelirrojo"
    }
];

const añoActual = 2024;
let i=0;

//Mostrar todas las propiedades y su valor de un objeto persona utilizando FOR...IN

for (let i in personas)
    {
        console.log(`Datos de ${personas[i].nombre} ${personas[i].apellido}: ${personas[i].anyoNacimiento}, ${personas[i].aficiones}, DNI - Año de Expedición: ${personas[i].dni.anyoExpedicion}, Lugar de Nacimiento: ${personas[i].dni.lugarNacimiento}, Color de Pelo: ${personas[i].colorPelo}`);
    }

//Mostrar todos los elementos del array personas en la consola con un bucle for, con un bucle while y con un bucle for...of

    // for
for (let i = 0; i < personas.length; i++)
    {
        console.log(personas[i]);
    }

    //while

while (i < personas.length)
    {
        console.log(personas[i]); i++;
    }
    // for... of
for (let persona of personas)
    {
        console.log(persona);
    }

// Mostrar en la consola de javascript los elementos del array persona que cumplan que su año de nacimiento esté entre 1978 y 2000. hacerlo con un bucle for, while y for... of

   // for
for (let i = 0; i < personas.length; i++)
    {
        if (personas[i].anyoNacimiento >= 1978 && personas[i].anyoNacimiento <= 2000)
            {
                console.log(personas[i]);
            }
    }

    //while

while (i < personas.length)
    {
        if (personas[i].anyoNacimiento >= 1978 && personas[i].anyoNacimiento <= 2000)
            {
                console.log(personas[i]);
            }
            i++;
    }

    ///for...of

for (let persona of personas)
    {
        if (persona.anyoNacimiento >= 1978 && persona.anyoNacimiento <= 2000)
            {
                console.log(persona);
            }
    }

// Mostrar el siguiente mensaje:
// - "Tu edad está entre 40 y 20 años" para todos los elementos del array que cumple la condición del apartado anterior y "Tu edad no está entre los 40 y 20" para el resto de los casos
   
    /// for

for (let i = 0; i < personas.length; i++)
    {
        let edad = añoActual - personas[i].anyoNacimiento;
        if (edad >= 20 && edad <= 40)
            {
                console.log (`Tu edad está entre 40 y 20 años: ${personas[i].nombre} ${personas[i].apellido}`); }
        else
            {
                console.log(`Tu edad no está entre 40 y 20 años: ${personas[i].nombre} ${personas[i].apellido}`);
            }
    }

    ///while

while (i < personas.length)
    {
        let edad = añoActual - personas[i].anyoNacimiento;
    if (edad >= 20 && edad <= 40)
        {
                console.log(`Tu edad está entre 40 y 20 años: ${personas[i].nombre} ${personas[i].apellido}`);
        }
    else
    {
        console.log(`Tu edad no está entre 40 y 20 años: ${personas[i].nombre} ${personas[i].apellido}`);
    }
    i++;
    }
    /// for... of

for (let persona of personas)
        {
            let edad = añoActual - persona.anyoNacimiento;
            if (edad >= 20 && edad <= 40)
                {
                    console.log(`Tu edad está entre 40 y 20 años: ${persona.nombre} ${persona.apellido}`);
                }
            else
            {
                console.log(`Tu edad no está entre 40 y 20 años: ${persona.nombre} ${persona.apellido}`);
            }
        }

/// Agregar la afición "Jugar a la play" a todos los elementos del array personas utilizando el bucle for y for...of

   ///for

for (let i = 0; i < personas.length; i++)
    {
        personas[i].aficiones.push("Jugar a la play");
    }
    console.log(personas);

    /// for...of

for (let persona of personas)
    {
        persona.aficiones.push("Jugar a la play");
    }
    console.log(personas);
    