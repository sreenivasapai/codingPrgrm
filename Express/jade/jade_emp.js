const express = require("express");
const app = express();

app.set('view engine','pug'); //set pug as template engine
app.get('/',(req,res) =>{
    const employee ={
        id:101, name:"Anu", salary:30000
    };
    //Route
    res.render('index12',{employee,employee});
});

//start server
app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
});