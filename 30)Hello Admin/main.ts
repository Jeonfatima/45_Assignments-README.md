
let userNames : string[] = ["Fatima","Haya","Admin","Ahmed","Hamza"]

for(let i = 0 ; i<userNames.length ; i++ ){
    if( userNames[i] == "Admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`)
    }
}