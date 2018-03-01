var http = require('http');

var message = "777787Http server ready to work";

http.createServer(function(request, response) {
    console.log(message);

    response.end(message);
}).listen(3000, "127.0.0.1", () => console.log("575Server ready for requests"));