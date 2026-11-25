const express = require('express');
const app = express();

// Handle GET request
app.get('/about', (req, res) => {
    res.send('<h2>About Us Page</h2>');
});

// Start the server
app.listen(3000, () => {
console.log('Server running on port 3000');
});