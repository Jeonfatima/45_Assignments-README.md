"use strict";
let Guest_list = ["Abdullah", "Fatima", "Mahnoor", "Haris"];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Sir/Madam ' + Guest_list[i] + ", We would  like to invite you to join us at \nDinner at our house on 4-May-2024. It would be our pleasure to have you.\n");
}
let not_present = "Haris";
let new_guest = "Haya";
Guest_list[3] = new_guest;
console.log("\n NEW INVITE LIST\n");
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Sir/Madam ' + Guest_list[i] + ", We would  like to invite you to join us at \nDinner at our house on 4-May-2024. It would be our pleasure to have you.\n");
}
console.log(`Mr.${not_present} would not be able to make it to dinner.`);
