/*
* Dates
*/

let v;

const today = new Date();
let yesterday = new Date("Oct 3, 2022");
yesterday = new Date("10/3/2022");

v = today;
v = yesterday;

v = today.getMonth();    // Not zero based
v = today.getDay();
v = today.getFullYear();
v = today.getHours();
v = today.getMinutes();
v = today.getSeconds();
v = today.getMilliseconds();  // Milliseconds in day
v = today.getTime();  // Milliseconds since 1/1/1970 UTC

v = yesterday;
v.setMonth(4);
v.setDate(1);
v.setFullYear(2013);

console.log(v);
