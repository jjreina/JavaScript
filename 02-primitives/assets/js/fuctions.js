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
