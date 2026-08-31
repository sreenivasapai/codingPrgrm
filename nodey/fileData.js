const fs = require("fs");
const filedata = fs.readFileSync('inputfil1.txt');
console.log(filedata.toString());
console.log("End Of Program Exeecution");