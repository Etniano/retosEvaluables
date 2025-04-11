"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        return Math.sqrt(Math.pow((this.x - anotherPoint.getX()), 2) + Math.pow((this.y - anotherPoint.getY()), 2));
    };
    Point.prototype.calculateQuadrant = function () {
        if (this.x === 0 || this.y === 0)
            return 0;
        if (this.x > 0 && this.y > 0)
            return 1;
        if (this.x < 0 && this.y > 0)
            return 2;
        if (this.x < 0 && this.y < 0)
            return 3;
        return 4; // x > 0 && y < 0
    };
    Point.prototype.calculateNearest = function (points) {
        var nearest = points[0];
        var minDistance = this.calculateDistance(nearest);
        for (var i = 1; i < points.length; i++) {
            var distance = this.calculateDistance(points[i]);
            if (distance < minDistance) {
                minDistance = distance;
                nearest = points[i];
            }
        }
        return nearest;
    };
    return Point;
}());
exports.Point = Point;
