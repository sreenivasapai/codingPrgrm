const express = require('express');
const app = express();

app.get('/user/:name/:age', (req, res) => {
    const username = req.params.name;
    const userage = req.params.age;
    res.send(`User Name is : ${username} and User Age is : ${userage}`);
});

app.listen(3000, () => {
    console.log('Server Running on Port 3000');
});
