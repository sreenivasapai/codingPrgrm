const express = new require('express');
const app = express();

app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString();
    console.log(`Request received at : ${time}`);
});
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});
