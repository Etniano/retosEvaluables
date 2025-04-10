// Parte 1: Enunciado del Reto

const persona = {
    nombre: "David",
    apellidos: ["Framit", "Fernandez"],
    edad: 35,
    padres: [
        {
            nombre: "Jesus",
            apellidos: ["Framit", "Cano"],
            edad: 65,
            padres: [
                {
                    nombre: "José",
                    apellidos: ["Framit", "Ros"],
                    edad: 85
                },
                {
                    nombre: "Antonia",
                    apellidos: ["Cano", "Gutierrez"],
                    edad: 82
                }
            ]
        },
        {
            nombre: "Josefina",
            apellidos: ["Fernandez", "Muñoz"],
            edad: 62,
            padres: [
                {
                    nombre: "Juan",
                    apellidos: ["Fernanzez", "Cortes"],
                    edad: 85
                },
                {
                    nombre: "Josefa",
                    apellidos: ["Muñoz", "Heredia"],
                    edad: 83
                }
            ]
        }
    ]
};

// Mostrar el nombre del abuelo por parte de madre
console.log("Nombre del abuelo materno:", persona.padres[1].padres[0].nombre);

// Mostrar el segundo apellido de la abuela por parte del padre
console.log("Segundo apellido de la abuela paterna:", persona.padres[0].padres[1].apellidos[1]);

// Sumar la edad de la madre y la del abuelo paterno
const edadMadre = persona.padres[1].edad;
const edadAbueloPaterno = persona.padres[0].padres[0].edad;
const sumaEdades = edadMadre + edadAbueloPaterno;

console.log("Suma de las edades de la madre y el abuelo paterno:", sumaEdades);

// Intercambiar las edades de los abuelos por parte de padre
let edadAbuelo = persona.padres[0].padres[0].edad;
persona.padres[0].padres[0].edad = persona.padres[0].padres[1].edad;
persona.padres[0].padres[1].edad = edadAbuelo;
console.log("Nueva edad del abuelo paterno:", persona.padres[0].padres[0].edad);
console.log("Nueva edad de la abuela paterna:", persona.padres[0].padres[1].edad);

// Añadirle a la abuela por parte de madre el segundo apellido del abuelo por parte de padre

persona.padres[1].padres[1].apellidos.push(persona.padres[0].padres[0].apellidos[1]);
console.log("Apellidos de la abuela materna:", persona.padres[1].padres[1].apellidos);

// Eliminar el primer apellido de la madre

persona.padres[1].apellidos.shift();
console.log("Apellidos de la madre:", persona.padres[1].apellidos);

// Mostrar la última letra del segundo apellido del abuelo por parte de padre (No se puede contar el número de letras, hay que hacerlo de forma automática).

const ultimoApellidoAbueloPaterno = persona.padres[0].padres[0].apellidos[1];
const ultimaLetra = ultimoApellidoAbueloPaterno[ultimoApellidoAbueloPaterno.length - 1];
console.log("Última letra del segundo apellido del abuelo paterno:", ultimaLetra);

//Nota: El que hizo el ejercicio me ha hecho sudar, no quiero mas Java por hoy xD. Ha estado entretenido