export
class Vector 
{
  private elements: number[];

  constructor(n: number, k: number) 
  {
    this.elements = [];
    for (let i = 0; i < n; i++) {
      this.elements.push(Math.floor(Math.random() * k));
    }
  }

  public print(): void 
  {
    console.log(this.elements);
  }

  public add(v1: Vector): Vector
  {
    if (this.elements.length !== v1.elements.length) {
      throw new Error("Vectors must have the same length");
    }
    const result = this.elements.map((el, i) => el + v1.elements[i]);
    return new Vector(result.length, Math.max(...result));
  }

  public subs(v1: Vector): Vector
  {
    if (this.elements.length !== v1.elements.length) {
      throw new Error("Vectors must have the same length");
    }
    const result = this.elements.map((el, i) => el - v1.elements[i]);
    return new Vector(result.length, Math.max(...result));
  }

  public mult(v1: Vector): Vector
  {
    if (this.elements.length !== v1.elements.length) {
      throw new Error("Vectors must have the same length");
    }
    const result = this.elements.map((el, i) => el * v1.elements[i]);
    return new Vector(result.length, Math.max(...result));
  }

  public multNumber(n: number): Vector
  {
    const result = this.elements.map(el => el * n);
    return new Vector(result.length, Math.max(...result));
  }
}