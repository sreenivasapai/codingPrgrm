const express = require('express');
const app = express();

//Application level Middleware
app.use((req,res,next) => {
    console.log("Request Recived");
    next();
});

app.get('/',(req,res)=>{
    res.send("Welcome To Home Page");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});