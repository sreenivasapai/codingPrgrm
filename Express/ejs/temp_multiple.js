const express = require('express');
const app = express();

app.set('view engine','ejs');

//Route
app.get('/',(req,res)=>{
    const students = [
        {name : 'Anu', course : "MCA"},
        {name : 'Asha', course : "BCA"},
        {name : 'Arjun', course : "BBA"},
        {name : 'Amit', course : "MBA"}
    ];
    res.render('index3', { students: students });
});
//start server
app.listen(3000,()=> {
    console.log("Server is running on http://localhost:3000");
});