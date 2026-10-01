const express = require('express');
const app = express();

//set EJS as templating engine

app.set('view engine', 'ejs');

//Route
app.get('/',(req,res)=> {
    res.render('index',{message : "Welcome to Node.js and EJS"});

});

//start server

app.listen(3000,()=> {
    console.log("Server is running on http://localhost:3000");
});
