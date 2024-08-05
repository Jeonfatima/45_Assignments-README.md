let personNmae : string= "Haya";
// Upper case
console.log(`Upper case = Hello ${personNmae.toUpperCase()}`);

// Lower case 
console.log(`Lower case = Hello ${personNmae.toLowerCase()}`); 

//Title case 
console.log(`Title case = Hello ${personNmae.replace(/\bw/g,c => c.toUpperCase())}`);