/* Variables
- Defining variables: var, let, const.
- must be declared before they can be used.
 */
var v1 = 1;  // Global scope and can be re-declared. Do not use.
let v2 = "Hello"; // block scoped
const v3 = "Professor";

// console.log(v2 + " " + v3);
// console.log(`${v2} ${v3}`);

/* Data Types
-	Dynamically typed.
- JavaScript will figure out the type by the initial value.
 */

// Undefined: variable declared but not initialized.
let dt;
// // Boolean
// dt = true;
// // Number: Any number, floating-point or integer
// dt = 10;
// //	Bigint: for integers too big to fit as an int.
// dt = 100n;
// // String: Any string. Single quote, double quote, backtick for templates
// dt = "This is a string";
// // Array: List of items.
// dt = ["Dodgers", "Mariners", "Giants"];
// // Object: Collection of property and value pairs. 
// dt = {dept:"CSC", IDNum:"3221", instructor:"Vickers"};
// // Null: Value unknown.
// dt = null;

// Display the data type
console.log(`Datetype: ${typeof(dt)}`);


/* Relational operators 
-	Greater/less than: a > b, a < b.
-	Greater/less than or equals: a >= b, a <= b.
*/

/* Equality operators
-	Equals: a == b, not assignment.
-	Not equals: a != b
-	Results are Boolean.
-	Strings are compared letter by letter. Something is greater than nothing.
-	Strict equality means types and values must be the same. Show with:
-	console.log('5'==5);
-	console.log('5'===5);
*/

console.log(" ");
console.log(" >>comparison <<");
let left, right;
left = 10;
right = 20;

console.log(left == right);
console.log(left != right);

right = "10"
console.log(`loosely: ${left == right}`);
console.log(`strictly: ${left === right}`);
