"use strict";
let personNmae = "Haya";
console.log(`Upper case = Hello ${personNmae.toUpperCase()}`);
console.log(`Lower case = Hello ${personNmae.toLowerCase()}`);
console.log(`Title case = Hello ${personNmae.replace(/\bw/g, c => c.toUpperCase())}`);
