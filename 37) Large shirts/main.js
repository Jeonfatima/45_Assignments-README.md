"use strict";
function make_shirt(size = "Large", text = "I love typescript") {
    console.log(`The size of my T-shirt is ${size} with a text "${text}" printed on it with beautiful colors.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Always stay happy");
