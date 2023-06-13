const cars = ["Audi", "Ford", "Mercedes", "Honda"];

console.warn("While");
let i = 0;
while (i < cars.length) {
  console.log(cars[i]);
  i++;
}

i = 0;
while (cars[i]) {
  if (i === 1) {
    i++;
    // break; //
    continue;
  }
  console.log(cars[i]);
  i++;
}

console.warn("Do While");
let j = 0;
do {
  console.log(cars[j]);
  j++;
} while (cars[j]);
