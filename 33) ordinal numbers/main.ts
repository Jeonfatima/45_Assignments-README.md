// • Use an if-else chain inside the loop to print the proper ordinal ending for
//  each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let numbers : number[] = [1 ,2 ,3 ,4 , 5, 6, 7, 8, 9,]

for (let number of numbers ){
  
    if( number == 1){
     console.log(`${number}st`)
  }
  else if(number == 2){
    console.log(`${number}nd`)
  }
  else if(number == 3){
    console.log(`${number}rd`)
  }
  else{
    console.log(`${number}th`)
  }
}