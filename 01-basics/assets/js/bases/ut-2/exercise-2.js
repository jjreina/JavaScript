// Exercise: Alert, Confirm and Prompt

// consts
const ALERT_MESSAGE = "This is an alert message, click me to move on!!!";
const CONFIRM_MESSAGE = "Show me in an alert if you clicked on ok or false";
const PROMPT_MESSAGE = "Show me in an alert the message typed";
const CLICKED_MESSAGE = "You clicked on ";
const MOVEON_MESSAGE = " click me to move on!!!";
const OK_PROMPT = "You typed ";
const PLACEHOLDER = "Type something";

// Step 1: Alert
alert(ALERT_MESSAGE);

// Step 2: Confirm
let confirmMessage = confirm(CONFIRM_MESSAGE);
alert(CLICKED_MESSAGE + confirmMessage + MOVEON_MESSAGE);

// Step 3: Prompt
let promptMessage = prompt(PROMPT_MESSAGE, PLACEHOLDER);
alert(OK_PROMPT + promptMessage + MOVEON_MESSAGE);
