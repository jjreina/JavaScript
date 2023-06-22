class Rectangle {
  #area = 0; // private
  base = 0;
  height = 0;

  constructor(base, height) {
    this.base = base;
    this.height = height;
    this.#area = base * height;
  }

  // private
  #calcularArea() {
    return this.#area * 2;
  }

  show() {
    console.log(this.#calcularArea());
  }
}

let rectangle = new Rectangle(10, 15);

console.log(rectangle);
rectangle.show();
