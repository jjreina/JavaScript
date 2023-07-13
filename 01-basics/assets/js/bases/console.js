const LOG_MESSAGE = "This is a log message";
const WARN_MESSAGE = "This is a warn message";
const ERROR_MESSAGE = "This is a error message";
let a = 10,
  b = 20,
  c = 30;

console.log("%c Addind css styles", "color:green; font-weight: bold");
console.log(LOG_MESSAGE);
console.warn(WARN_MESSAGE);
console.error(ERROR_MESSAGE);

console.table({ LOG_MESSAGE, WARN_MESSAGE, ERROR_MESSAGE });
console.table({ a, b, c });

console.log({ a });
