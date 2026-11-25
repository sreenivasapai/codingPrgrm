const express = require('express');
const app = express();

//middleware
app.use((req, res, next) => {
    console.log("Middleware function executed");
    next();
});

//Route
app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.listen(3000,()=>{
    console.log("Server Running on Port 3000");
});