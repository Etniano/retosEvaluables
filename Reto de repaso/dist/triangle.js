"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
class Triangle {
    constructor(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    calculateLengthSides() {
        const side1 = this.vertex1.calculateDistance(this.vertex2);
        const side2 = this.vertex2.calculateDistance(this.vertex3);
        const side3 = this.vertex3.calculateDistance(this.vertex1);
        return [side1, side2, side3];
    }
}
exports.Triangle = Triangle;
