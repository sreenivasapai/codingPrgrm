var http = require("http")
http.createServer(function(req,res)
{
    res.write("Welcome HTTP Server Created")
    res.end()
}).listen(3000)