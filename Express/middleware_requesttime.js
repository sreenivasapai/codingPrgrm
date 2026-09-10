const express = require('express');
const app =express();

app.use((req,res,next)=>{
    const time = new Date().toLocaleTimeString();
    console.log('Request Time:',time);
    next();
})
app.get('/',(req,res)=>{
    res.send("Time Logged In Console");
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});