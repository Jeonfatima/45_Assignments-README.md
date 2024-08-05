"use strict";
// Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
function sandwich(items) {
    let sandwichItems = items;
    console.log(`the sandwich contains the following items `);
    for (let i = 0; i < sandwichItems.length; i++) {
        console.log(sandwichItems[i]);
    }
}
console.log("\nFIRST SANDWICH ");
sandwich(["bread", "cheese"]);
console.log("\nSECOND SANDWICH ");
sandwich(["bread", "meat", "veggies"]);
console.log("\nTHIRD SANDWICH ");
sandwich(["bread", "chicken", "cheese", "egg"]);
