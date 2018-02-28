var express = require('express');

var app = express();

app.get('/', function(request, response){
    response.end('i am express')
});

app.listen(3000);