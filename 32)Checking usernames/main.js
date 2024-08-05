"use strict";
// • Make a list of five or more usernames called current_users.
//  • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that
//  the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let currentUsers = ["Amani Sohail", "Ahmed Salman", "Erin Cowper", "Stacie Jules", "Teesha Prakash"];
let newUsers = ["Mahnoor Ali", "Fatima Salman", "Stacie Jules", "Hania Sheikh", "Ahmed Salman"];
const lowercaseCurrentUsers = currentUsers.map(user => user.toLowerCase());
for (let new_user of newUsers) {
    let lowercase_new_user = new_user.toLowerCase();
    if (lowercaseCurrentUsers.includes(lowercase_new_user)) {
        console.log(`The username ${new_user} is not available.`);
    }
    else {
        console.log(`The username ${new_user} is available.`);
    }
}
