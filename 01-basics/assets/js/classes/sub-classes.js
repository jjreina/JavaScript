class Person {
  static _instances = 0;

  static get getInstances() {
    return Person._instances + " from get";
  }

  static message() {
    // No se pueden usar propiedades/atributos de la clase
    console.log(this.name); // undefined
  }

  name = "";
  code = "";
  phrase = "";
  food = "";

  constructor(
    name = "Empty name",
    code = "Empty code",
    phrase = "Empty phrase"
  ) {
    this.name = name;
    this.code = code;
    this.phrase = phrase;
    Person._instances++;
  }

  get getFavoriteFood() {
    return this.food;
  }

  set setFavoriteFood(food) {
    this.food = food.toUpperCase();
  }

  whoAmI() {
    console.log(`I am ${this.name} and my identity is ${this.code}`);
  }

  myPhrase() {
    this.whoAmI();
    console.log(`${this.code} say: ${this.phrase}`);
  }
}

class Hero extends Person {
  clan = "not clan";
  constructor(name, code, phrase) {
    super(name, code, phrase);
    this.clan = "Avengers";
  }
}

let spiderman = new Hero(
  "Peter Parker",
  "Spiderman",
  "With great power comes great responsibility"
);

// let spiderman = new Hero();

console.log(spiderman);
console.log(Hero._instances);
