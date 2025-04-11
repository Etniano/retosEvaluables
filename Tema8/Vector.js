"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * k));
        }
    }
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        if (this.elements.length !== v1.elements.length) {
            throw new Error("Vectors must have the same length");
        }
        var result = this.elements.map(function (el, i) { return el + v1.elements[i]; });
        return new Vector(result.length, Math.max.apply(Math, result));
    };
    Vector.prototype.subs = function (v1) {
        if (this.elements.length !== v1.elements.length) {
            throw new Error("Vectors must have the same length");
        }
        var result = this.elements.map(function (el, i) { return el - v1.elements[i]; });
        return new Vector(result.length, Math.max.apply(Math, result));
    };
    Vector.prototype.mult = function (v1) {
        if (this.elements.length !== v1.elements.length) {
            throw new Error("Vectors must have the same length");
        }
        var result = this.elements.map(function (el, i) { return el * v1.elements[i]; });
        return new Vector(result.length, Math.max.apply(Math, result));
    };
    Vector.prototype.multNumber = function (n) {
        var result = this.elements.map(function (el) { return el * n; });
        return new Vector(result.length, Math.max.apply(Math, result));
    };
    return Vector;
}());
exports.Vector = Vector;
