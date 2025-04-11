import { Vector } from './Vector';
const vector1 = new Vector(5, 10);
const vector2 = new Vector(5, 10); 

console.log("Vector 1:");
vector1.print();

console.log("Vector 2:");
vector2.print();

const addedVector = vector1.add(vector2);
console.log("Suma de Vector 1 y Vector 2:");
addedVector.print();

const subtractedVector = vector1.subs(vector2);
console.log("Resta de Vector 1 y Vector 2:");
subtractedVector.print();

const multipliedVector = vector1.mult(vector2);
console.log("Producto de Vector 1 y Vector 2:");
multipliedVector.print();

const scaledVector = vector1.multNumber(3);
console.log("Vector 1 multiplicado por 3:");
scaledVector.print();