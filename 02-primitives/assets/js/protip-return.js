function createPerson1(name, surname) {
  return {
    name: name,
    surname: surname,
  };
}

/* ESMAC6 */
function createPerson2(name, surname) {
  return {
    name,
    surname,
  };
}

// Arrow function
const createPerson3 = (name, surname) => ({
  name,
  surname,
});

const person1 = createPerson1("Juan", "Reina");
const person2 = createPerson2("Juan", "Reina");
const person3 = createPerson3("Juan", "Reina");
console.log(person1);
console.log(person2);
console.log(person3);

// Rest arguments
const printArguments = (...args) => {
  // console.log(args);
  return args;
};

const printArguments2 = (age, ...args) => {
  console.log({ age, args });
};

printArguments2(10, true, false, "Juan", "Reina");

const args = printArguments(10, true, false, "Juan", "Reina");
console.log(args[0], args[1], args[2], args[3], args[4]);

const { surname } = createPerson3("Juan", "Reina");
console.log({ surname });

// Destructuring
const tony = {
  name: "Tony Stark",
  codeName: "Ironman",
  alive: false,
  age: 40,
  suits: ["Mark I", "Mark V", "Hulkbuster"],
};

const tony2 = {
  name: "Tony Stark2",
  codeName: "Ironman2",
  alive: false,
  age: 40,
  suits: ["Mark I", "Mark V", "Hulkbuster"],
};

const printProperties = ({ name, codeName, alive, age, suits }) => {
  console.log({ name });
  console.log({ codeName });
  console.log({ alive });
  console.log({ age });
  console.log({ suits });
};

printProperties(tony);
printProperties(tony2);
