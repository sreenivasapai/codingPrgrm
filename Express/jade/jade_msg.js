const express = require('express');
const app = express();

//set pug as template engine
app.set('view engine','pug');
//Route
app.get('/',(req,res) =>{
    res.render('index11',{message:"Department Of CS and IT"});
});

//start server
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});