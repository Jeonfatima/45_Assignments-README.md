// Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.

let magiciansName : string[]  = ["Fatima"  ,"Ahmed " , "Jack" , "Pippa"]

function show_magicians ( magician : string[]){
    magician = magiciansName
    console.log(magician)
}

show_magicians(magiciansName)