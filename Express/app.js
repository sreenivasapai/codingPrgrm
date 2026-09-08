const express = require('express');
const app = express();

//import router
const studentRoutes = require('./Routes/studentRoutes');

//use the router
app.use('/students', studentRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});