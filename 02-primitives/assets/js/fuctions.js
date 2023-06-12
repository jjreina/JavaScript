function greet(name) {
  console.log("Greetings " + name);
  console.log(arguments);
}

const arrowGreet = (name) => {
  console.log("Greetings " + name);
  /* arguments not works on arrow functions*/
  // console.log(arguments);
};

greet("John", 43, "Spain");
arrowGreet("Doe", 35, "Portugal");

function addTwo(a, b) {
  return a + b;
}

const addTwoArrow = (a, b) => {
  return a + b;
};

const addTwoArrowLight = (a, b) => a + b;

console.log(addTwo(2, 6));
console.log(addTwoArrow(2, 6));
console.log(addTwoArrowLight(2, 6));
