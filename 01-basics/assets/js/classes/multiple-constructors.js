class Person {
  name;
  surname;
  country;

  constructor(name, surname, country) {
    this.name = name;
    this.surname = surname;
    this.country = country;
  }

  // Multiple constructor
  static personByObject({ name, surname, country }) {
    return new Person(name, surname, country);
  }

  getInfo() {
    console.log(`Info: ${this.name}, ${this.surname}, ${this.country}`);
  }
}

let name_1 = "Melissa";
let surname_1 = "Flores";
let country_1 = "Florida";

let jonh = {
  name: "John",
  surname: "Snow",
  country: "Winterfell",
};

let peron_1 = new Person(name_1, surname_1, country_1);
peron_1.getInfo();

let peron_2 = Person.personByObject(jonh);
peron_2.getInfo();
