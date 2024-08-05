"use strict";
//Tests for equality and inequality with strings
console.log("Equality test:", "Fatima Salman" === "Fatima Salman");
console.log("Equality test:", "Fatima Salman" === "Haya salman");
// Tests using the lower case function
console.log("Lower case test:", "Fatima Salman".toLowerCase() === "fatima salman");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Equality test:", 6 === 6);
console.log("Inequality test", 100 !== 4);
console.log("Greater than test:", 12 > 10);
console.log("Less than test:", 12 < 10);
console.log("Greater than or equal to test:", 12 >= 10);
console.log("Less than or equal to test:", 12 <= 12);
// Tests using "and" and "or" operators
console.log("And operator test:", true && true);
console.log("Or operator test:", true || false);
// Test whether an item is in a array
const car = [1, 2, 3];
console.log("item presence test:", car.includes(1));
// Test whether an item is not in a array
const car1 = [1, 2, 3];
console.log("item presence test:", car1.includes(4));
