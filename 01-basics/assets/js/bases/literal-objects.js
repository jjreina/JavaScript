let character = {
  name: "Tony Stark",
  codeName: "Ironman",
  alive: false,
  age: 40,
  cords: {
    lat: 34.034,
    lng: -118.7,
  },
  suits: ["Mark I", "Mark V", "Hulkbuster"],
  address: {
    zip: "10880, 90265",
    localitation: "Malibu, California",
  },
  "last-film": "Infinity War",
};

console.log(character);
console.log("Name", character.name);
console.log("Name", character["name"]);
console.log("Lat", character.cords.lat);
console.log("Lat", character["cords"]["lat"]);
console.log("Last suit", character.suits[character.suits.length - 1]);

const x = "alive";
console.log("Alive", character[x]);
console.log("The last film", character["last-film"]);

character.suits.forEach((suit) => {
  console.log({ suit });
});

// Felete property of literal obgect
delete character.age;

// Pares key-value
const entresPares = Object.entries(character);
console.log(entresPares);

entresPares.forEach((item) => {
  console.log(item[0], item[1]);
});

// New Property
character.age = 40;

// Block literal object
Object.freeze(character);
delete character.age;

character.address.cp = 29190;
