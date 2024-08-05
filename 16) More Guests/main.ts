let Guest_list : string[] = ["Abdullah" , "Fatima" , "Mahnoor" , "Haris"]
// for( let i=0 ; i < Guest_list.length ; i++){
//     console.log('Dear Sir/Madam ' + Guest_list[i] + ", We would  like to invite you to join us at \nDinner at our house on 4-May-2024. It would be our pleasure to have you.\n")
// }
let not_present = "Haris";

let new_guest = "Haya"

for( let i=0 ; i < Guest_list.length ; i++){
    console.log('Dear Sir/Madam ' + Guest_list[i] + ", We would  like to invite you to join us at \nDinner at our house on 4-May-2024. It would be our pleasure to have you.\n")
}

Guest_list.unshift("Teesha")
Guest_list[4] = new_guest
Guest_list.push("Ahmed")
for( let i=0 ; i < Guest_list.length ; i++){
    console.log('\nDear Sir/Madam ' + Guest_list[i] + ", We would  like to invite you to join us at \ntomorrow. It would be our pleasure to have you.\nWe have invited more guests as we found a bigger table now")
}

console.log(`\nMr.${not_present} would not be able to make it to dinner.`)