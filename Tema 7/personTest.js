// Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe tener como mínimo 2 parámetros de entrada.

class Person
{
    constructor(nombre, genero, peso, estatura, yearOfBirth, hobbies)
    {
this.nombre = nombre;
this.genero = genero;
this.peso = peso;
this.estatura = estatura;
this.yearOfBirth = yearOfBirth;
this.hobbies = hobbies;
    }
calcularIMC()
{
    return this.peso / (this.estatura * this.estatura);
}
edad(añoActual)
{
    return añoActual - this.yearOfBirth;
}
printAll()
{
    console.log(`Nombre - ${this.nombre}`);
    console.log(`Género - ${this.genero}`);
    console.log(`Peso - ${this.peso} kg`);
    console.log(`Estatura - ${this.estatura} m`);
    console.log(`Año de Nacimiento - ${this.yearOfBirth}`);
}
printHobbies()
{
    this.hobbies.forEach((hobby, index) => {
    console.log(`${index + 1}. ${hobby}`);
    });
}
}
module.exports = Person;