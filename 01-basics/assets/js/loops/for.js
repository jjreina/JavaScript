const heroes = ["Batman", "Superman", "Wonder Woman", "Aquaman"];

console.warn("Traditional For");
for (let index = 0; index < heroes.length; index++) {
  console.log(heroes[index]);
}

console.warn("For in");
for (let i in heroes) {
  console.log(heroes[i]);
}

console.warn("For of");
for (let heroe of heroes) {
  console.log(heroe);
}
