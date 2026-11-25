const express = require('express');
const app = express();

app.get('/student/:id', (req, res) => {
    const studentId = req.params.id;
    res.send(`Student ID is : ${studentId}`);
});

app.listen(3000, () => {
    console.log('Server Running on Port 3000');
});
