const returnTrue = () => {
  console.log("Return True");
  return true;
};

const returnFalse = () => {
  console.log("Return False");
  return false;
};

console.warn("%c AND operator", "color: #197521");
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

console.warn("%c =====AND=====", "color: #197521");
console.log(returnFalse() && returnTrue());
console.log(returnTrue() && returnFalse());

console.warn("%c OR operator", "color: #197521"); // Con un solo verdadero devuelve true
console.log(true || true); // true
console.log(true || false); // true
console.log(true || !false); // true
console.log(false || true); // true

console.warn("%c =====OR=====", "color: #197521");
console.log(returnTrue() || returnFalse());
console.log(returnFalse() || returnTrue());
