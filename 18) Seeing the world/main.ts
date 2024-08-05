let travel_places : string[] = [ "Korea" , "Turkey" , "Australia" , "Qatar" , "Saudi Arabia" ,]
console.log('original order:' ,travel_places)

//Print your array in alphabetical order without modifying the actual list.
console.log('Alphabetical order:' , [...travel_places].sort())

// Show that your array is still in its original order by printing it.
console.log('original order :',travel_places)

//Print your array in reverse alphabetical order without modifying the actual list.
console.log('Reverse alphabetical order:' , [...travel_places].sort().reverse())

// Show that your array is still in its original order by printing it.
console.log('original order :',travel_places)

// Reverse the order of your list. Print the array to show that its order has changed.
console.log('reversed order:' ,travel_places.reverse())

// Reverse the order of your list again. Print the list to show it’s back to its original orde
console.log('original order :',travel_places.reverse())

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Alphabetical order :',travel_places.sort())

// /Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Reverse alphabetical order :',travel_places.sort().reverse())