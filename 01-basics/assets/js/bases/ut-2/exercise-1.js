// Exercise: Using console methods and CSS styles

// Step 1: Define CSS styles as constants
const TITLE_STYLE = "font-size: 18px; font-weight: bold; color: blue;";
const MESSAGE_STYLE = "font-size: 16px; color: green;";
const WARNING_STYLE = "font-size: 16px; color: orange;";
const ERROR_STYLE = "font-size: 16px; color: red;";

// Step 2: Display messages using the console object
const WELCOME_MESSAGE = "Welcome to the application!";
const INFO_MESSAGE = "This is an informational message.";
const WARNING_MESSAGE = "This is a warning. Be cautious.";
const ERROR_MESSAGE = "Error! Something went wrong.";

console.log("%c" + WELCOME_MESSAGE, TITLE_STYLE);
console.log("%c" + INFO_MESSAGE, MESSAGE_STYLE);
console.warn("%c" + WARNING_MESSAGE, WARNING_STYLE);
console.error("%c" + ERROR_MESSAGE, ERROR_STYLE);

// Step 3: Display data in a table
let name1 = "John";
let age1 = 30;
let city1 = "New York";
let name2 = "Jane";
let age2 = 25;
let city2 = "San Francisco";
let name3 = "Bob";
let age3 = 40;
let city3 = "Chicago";

console.table([
  { name: name1, age: age1, city: city1 },
  { name: name2, age: age2, city: city2 },
  { name: name3, age: age3, city: city3 },
]);
