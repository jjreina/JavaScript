const john = {
  name: "John",
  age: 30,
  print() {
    console.log(`Name: ${this.name} - age: ${this.age}`);
  },
};

const peter = {
  name: "Peter",
  age: 33,
};

const brad = {
  name: "Brad",
  age: 25,
};

// john.print();

function Person(name, age) {
  console.log("Person works");
  this.name = name;
  this.age = age;

  this.print = function () {
    console.log(`Name: ${this.name} - age: ${this.age}`);
  };
}

const brenda = new Person("Brenda", 18);
const mark = new Person("Mark", 23);
console.log(brenda);
brenda.print();
mark.print();
