/* Path module */

const path = require("path");

console.log(path.sep);

const filePath = path.join("/content","subfolder","test.txt");
console.log(`Full path: ${filePath}`);

const base = path.basename(filePath);
console.log(`Base file: ${base}`);

const absPath = path.resolve(__dirname,"content","subfolder","test.txt");
console.log(absPath);
