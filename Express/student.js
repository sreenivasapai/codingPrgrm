const express = require('express');
const router = express.Router();

router.use((req,res,next) =>{
    console.log("Router Level Middleware executed");
    next();
});
router.get('/',(req,res)=>{
    res.send("All Students");
});
router.get('/:id',(req,res)=>{
    res.send("Student ID is : " + req.params.id);
});
module.exports = router;