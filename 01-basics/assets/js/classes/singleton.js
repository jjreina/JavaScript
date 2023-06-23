class Singleton {
  static #instance; // private
  name = "";

  constructor(name = "") {
    if (!!Singleton.#instance) {
      return Singleton.#instance;
    }

    Singleton.#instance = this;
    this.name = name;
  }
}

let instece_1 = new Singleton("Iroman");
let instece_2 = new Singleton("Spiderman");
let instece_3 = new Singleton("Black Panther");

console.log(`Name of instance_1: ${instece_1.name}`);
console.log(`Name of instance_2: ${instece_2.name}`);
console.log(`Name of instance_3: ${instece_3.name}`);
