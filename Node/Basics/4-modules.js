// We'll use common.js
// Every file is a module
// Not all modules are a file

// const john = "John";
// const paul = "Paul";
// const george = "George";
// const ringo = "Ringo";

// const greeting = (name) => {
//   console.log(`Good afternoon ${name}!`);
// }

/* Split the file into modules */
const names = require("./2-names");
const greeting = require("./3-utils");

greeting("Dennis");
greeting(names.john);
greeting(names.paul);

// Reminder: You can set up your own properties