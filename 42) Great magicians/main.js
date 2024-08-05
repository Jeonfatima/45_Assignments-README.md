"use strict";
let magicians = ["Harry Potter", "David Copperfield", "Penn peter", "Teller", "Dynamo"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    return magicians;
}
magicians = make_great(magicians);
show_magicians(magicians);
