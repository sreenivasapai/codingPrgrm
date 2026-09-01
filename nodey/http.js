//http.js
//importing http module
const http = require("http")
//creating server 
const server = http.createServer((req,res) =>{
    //sending the responce
    res.write("This Is The Responce From The Server");
    //ending the responce
    res.end();
})

//server is listening on port 3000
server.listen((3000),() =>{
    console.log("Server Is Listening On Port 3000");
})