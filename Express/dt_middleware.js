const express = require('express');
const app = express();

// Application-level middleware
app.use((req, res, next) => {
    const dt = new Date();
    console.log("Current Date and Time:", dt.toString());
    next();
});

// Route
app.get('/', (req, res) => {
    res.send("Check Console For Current Date And Time");
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
