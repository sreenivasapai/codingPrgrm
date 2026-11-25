const express= require("express");
const app = express();

app.get('/',(req,res)=>{
    const currentdatetime = new Date();
    res.send("Current Date and Time is : " + `${currentdatetime}`);
});

app.listen(3000,()=>{
    console.log("Server Running on Port 3000");
});
