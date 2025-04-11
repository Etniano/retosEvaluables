"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    setX(x) {
        this.x = x;
    }
    getY() {
        return this.y;
    }
    setY(y) {
        this.y = y;
    }
    toString() {
        return `(${this.x},${this.y})`;
    }
    distanceToOrigin() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    calculateDistance(anotherPoint) {
        return Math.sqrt(Math.pow((this.x - anotherPoint.getX()), 2) + Math.pow((this.y - anotherPoint.getY()), 2));
    }
    calculateQuadrant() {
        if (this.x === 0 || this.y === 0)
            return 0;
        if (this.x > 0 && this.y > 0)
            return 1;
        if (this.x < 0 && this.y > 0)
            return 2;
        if (this.x < 0 && this.y < 0)
            return 3;
        return 4; // x > 0 && y < 0
    }
    calculateNearest(points) {
        let nearest = points[0];
        let minDistance = this.calculateDistance(nearest);
        for (let i = 1; i < points.length; i++) {
            const distance = this.calculateDistance(points[i]);
            if (distance < minDistance) {
                minDistance = distance;
                nearest = points[i];
            }
        }
        return nearest;
    }
}
exports.Point = Point;
