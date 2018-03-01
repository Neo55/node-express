var fs = require('fs');

fs.readFile('hello.txt', 'utf8', function(error, data) {
    console.log('Async file reading');

    if (error) throw error;

    console.log(data);
});

console.log('Sync file reading');

var fileContent = fs.readFileSync('hello.txt', 'utf8');
console.log(fileContent);