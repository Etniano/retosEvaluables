// 1. Se define un vector como array de numeros.
// 1.1 Crear

function crearVector(n, m)
{
    let vector = [];
    for (let i=0;i<n;i++)
    {
        vector.push( Math.floor( Math.random() * (m + 1)));
    }
    return vector
}
let n = 5;
let m = 10;
let vectorAleatorio = crearVector(n, m);
console.log ("vectorAleatorio",vectorAleatorio);
// 1.2 SUMAR
function sumaVector (v1, v2)
{
    if (v1.length !== v2.length)
    {
        console.log ("deben tener el mismo numero de elementos");
        return []
    }
    let resultado = [];
    for (let i=0;i<v1.length;i++) 
    {
        resultado.push (v1[i] + v2[i]);
    
    }
    return resultado;
}
// 1.3 Multiplicar por un numero
function productoNumeroVector(n, v) 
{
    let resultado = [];
    for (let i=0;i < v.length;i++)
    {
        resultado.push(v[i] * n);
    }
    return resultado;
}
// 1.4 Restar 2 vectores
function restaVector(v1, v2)
{
    if (v1.length != v2.length) {

    console.log ("deben tener el mismo numero de elementos");
    return[];
}
let resultado = [];
for (let i=0;i<v1.length;i++)
    {
        resultado.push(v1[i]-v2[i]);
    }
    return resultado;
}
//1.5 Multiplicar 2 vectores
function productoVector(v1, v2) 
{
    if (v1.length != v2.length)
        {
            console.log ("deben tener el mismo numero de elementos");
            return[];
        }
        let resultado = [];
        for (let i=0;i<v1.length;i++)
        {
            resultado.push(v1[i]*v2[i]);
        }
        return resultado;
}
//sumaVector .forEach
let sumaVectorforEach = (v1, _v2) =>
    {
        let resultado = [];
        v1.forEach ((valor, indice)=>[indice]);
    };
    return resultado;

// vinculo de exportación al archivo de prueba
module.exports = {crearVector, sumaVector, productoNumeroVector, restaVector, productoVector, sumaVectorForEach};