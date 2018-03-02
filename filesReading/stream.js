var fs = require('fs');

var writableStream = fs.createWriteStream('hello.txt');

writableStream.write('There are from stream');
writableStream.write('There second row \n');
writableStream.end('complete');

var readableStream = fs.createWriteStream('hello.txt', 'utf8');

readableStream.on('data', function(chunk) {
    console.log(chunk)
})