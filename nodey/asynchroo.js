var fs = require("fs");
fs.readFile('inputfil2.txt', function(ferr,data){
  if(ferr) return console.error(ferr);
  console.log(data.toString());
});

console.log("Execution Ended");
