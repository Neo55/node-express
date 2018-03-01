function displaySync(callback) {
    callback()
};

console.log('Start process');

setTimeout(function(){
    console.log('100')
}, 100);

setTimeout(function(){
    console.log('500')
}, 500);

displaySync(function(){
    console.log('callback');
});

console.log('Finish process');