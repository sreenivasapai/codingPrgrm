var fs = require("fs")

fs.readFile('asynchronous.txt',function(ferr,data){
    if(ferr) return console.error(ferr);
    console.log(data.toString());
});

console.log("EXECUTON ENDS")