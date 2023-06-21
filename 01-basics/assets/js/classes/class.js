class Person {
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

let spiderman = new Person(
  "Peter Parker",
  "Spiderman",
  "With great power comes great responsibility"
);

let ironman = new Person("Tony Stark", "Ironman", "I´m Ironman");

console.log(spiderman);
console.log(ironman);

spiderman.whoAmI();
ironman.whoAmI();

spiderman.myPhrase();
ironman.myPhrase();

spiderman.setFavoriteFood = "Oranges";

console.log(spiderman.getFavoriteFood);
console.log(spiderman);
