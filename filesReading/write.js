var fs = require('fs');

fs.writeFile('hello.txt', 'Change text no 1', function(error) {
    if (error) throw error;
    console.log('Async record complete');
    var data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data)
});