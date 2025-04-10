const { crearVector, sumaVector, productoNumeroVector, restaVector, productoVector, sumaVectorForEach} = require('./tema5.js');
/// pruebaLibreria.js
let vector1 = crearVector(5, 10);
let vector2 = crearVector(5, 10);
console.log ("vector1: ", vector1, "vector2: ", vector2);
//sumar 2 vectores
let suma = sumaVector(vector1,vector2);
console.log ("suma: ", suma);
//multiplicar
let productoNumero = productoNumeroVector(2, vector1);
console.log("multiplicación vector: ", productoNumero);
//resta 2 vectores
let resta = restaVector(vector1, vector2);
console.log("resta: ", resta);
//multiplicar 2 vectores
let producto = productoVector(vector1, vector2);
console.log("producto de vectores: ", producto);

//sumaVector.forEach
console.log (sumaVectorForEach(vector1, vector2));