// References
let juan = {
  name: "Juan",
};

let ana = juan;
ana.name = "Ana";
console.log({ juan, ana });

const changeName = (person) => {
  person.name = "Tony";
  return person;
};

let peter = { name: "Peter" };
let tony = changeName(peter);
console.log({ peter, tony });

// Solve reference problem, usa spread operator
let juan2 = {
  name: "Juan2",
};

let ana2 = { ...juan2 }; // Spread operator
ana2.name = "Ana2";
console.log({ juan2, ana2 });

const changeName2 = ({ ...person }) => {
  person.name = "Tony2";
  return person;
};

let peter2 = { name: "Peter2" };
let tony2 = changeName2(peter2);
console.log({ peter2, tony2 });

// Refence problem with array
const cars = ["Audi", "Ford", "Mercedes"];

const otherCars = cars;

otherCars.push("Seat");

console.table({ cars, otherCars });

// Solucion - use spread
const otherCarsSpread = [...cars];

otherCarsSpread.push("Seat");

console.table({ cars, otherCarsSpread });
