/* File System */

const {readFileSync, writeFileSync} = require(("fs"));

//need to parameters: file and encoding type
const first = readFileSync("./content/first.txt","utf8");
const second = readFileSync("./content/second.txt","utf8");

console.log(first);
console.log(second);

// Pass the file name and the content
// By default, if the file doesn't exist it will be created
// If it does exist the content will be overwriten.


// to append to the file
writeFileSync("./content/third.txt"," \nSecond line.",{flag:"a"});
