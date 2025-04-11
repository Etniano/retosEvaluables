import { Point } from './point';

const myPoint = new Point(3, 4);

console.log("toString():", myPoint.toString());

myPoint.setX(5);
myPoint.setY(-2);
console.log("Nuevas coordenadas:", myPoint.toString());

console.log("getX():", myPoint.getX());
console.log("getY():", myPoint.getY());

console.log("Distancia al origen:", myPoint.distanceToOrigin());

const anotherPoint = new Point(1, 1);
console.log("Distancia a otro punto (1,1):", myPoint.calculateDistance(anotherPoint));

console.log("Cuadrante:", myPoint.calculateQuadrant());

const pointsArray = [new Point(0, 0), new Point(10, 10), new Point(5, -1)];
const nearest = myPoint.calculateNearest(pointsArray);
console.log("Punto más cercano:", nearest.toString());