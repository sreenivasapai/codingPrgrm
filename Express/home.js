const express =require("express");
const app = express();

//Handle Get Request
app.get('/',(req,res)=>{
    res.send('<b>Welcome To Home Page </b>');
});

app.listen(3000,()=>{
    console.log("Server Running on Port 3000");
});