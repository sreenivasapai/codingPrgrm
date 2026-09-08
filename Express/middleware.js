const express = require('express');
const app = express();

//middleware

app.use((req,res,next) => {
    console.log("Middleware Executer");
    next();
});

//Route
app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.listen(3000);