const express = require('express');
const app = express();

const StudentRouter = require('./student');
app.use('/students', StudentRouter);

app.listen(3000, () => {
    console.log('Server Running on Port 3000');
});