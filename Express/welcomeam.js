var http = require('http');
var server = http.createServer(function(req, res)
{
    res.write("Welcome to Amrita Vishwa Vidyapeetham");
    res.end();
});
server.listen(3000);
console.log("Server running on Port 3000");
