/* 
* Type Conversion
*/
let var1;

/* Explicit conversion */
// To String
var1 = 3;            // Number
var1 = String(var1);
var1 = true;       // Boolean
var1 = String(var1);
var1 = new Date(); // Date
var1 = String(var1);
var1 = [1,2,3,4];  // Array
var1 = String(var1);
// To Number
var1 = Number("3.3");
var1 = Number(true);
var1 = Number(null);
var1 = Number("What?");
var1 = Number([1,2,3]);

/* Implicit conversion */
var1 = (3 + 6);
var1 = (3 + "6");

// Results
console.log(var1);
console.log(typeof var1);