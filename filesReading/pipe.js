var fs = require('fs');

var readableStream = fs.createReadStream('hello.txt', 'utf8');

var writeableStream = fs.createWriteStream('targetFile.txt');
var writeableStreamPipe = fs.createWriteStream('targetFilePipe.txt');

readableStream.on('data', function(chunk) {
    writeableStream.write(chunk);
});

readableStream.pipe(writeableStreamPipe);