var fs = require('fs');

fs.appendFileSync('hello.txt', ' Addition in file');

fs.appendFile('hello.txt', 'Addition Async', function(error) {
    if (error) throw error;

    console.log('Record complete');
    var data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data);
});