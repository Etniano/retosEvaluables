export
class Point
{
    private x:number;
    private y:number;
  
    constructor (x:number, y:number)
    {
      this.x = x;
      this.y = y;
    }
  
    public getX():number
    {
      return this.x;
    }
  
    public setX (x:number):void
    {
      this.x = x;
    }
  
    public getY():number
    {
      return this.y;
    }
  
    public setY (y:number):void
    {
      this.y = y;
    }
  
    public toString():string
    {
      return `(${this.x},${this.y})`;
    }
  
    public distanceToOrigin():number
    {
      return Math.sqrt (this.x ** 2 + this.y ** 2);
    }
  
    public calculateDistance (anotherPoint:Point):number
    {
      return Math.sqrt((this.x - anotherPoint.getX()) ** 2 + (this.y - anotherPoint.getY()) ** 2);
    }
  
    public calculateQuadrant():number
    {
      if (this.x === 0 || this.y === 0) return 0;
      if (this.x > 0 && this.y > 0) return 1;
      if (this.x < 0 && this.y > 0) return 2;
      if (this.x < 0 && this.y < 0) return 3;
      return 4; // x > 0 && y < 0
    }
  
    public calculateNearest(points: Point[]):Point
    {
      let nearest = points[0];
      let minDistance = this.calculateDistance(nearest);
  
      for (let i = 1; i < points.length; i++)
        {
        const distance = this.calculateDistance(points[i]);
        if (distance < minDistance) {
          minDistance = distance;
          nearest = points[i];
        }
      }
  
      return nearest;
    }
  }
  