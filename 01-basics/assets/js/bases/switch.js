const day = 2;
const DEFAULT = "Other value";

switch (day) {
  case 0:
    console.log("Monday");
    break;
  case 1:
    console.log("Tuesday");
    break;
  case 2:
    console.log("Wednesday");
    break;
  default:
    console.log(DEFAULT);
}

// Switch - case as literal object
const week = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
};

if (week[day] === undefined) {
  console.log(DEFAULT);
} else {
  console.log(week[day]);
}

console.log(week[day] || DEFAULT);
