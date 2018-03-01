var Emitter = require('events');

var emitter = new Emitter();
var eventName = 'greet';

emitter.on(eventName, function() {
    console.log('Start emitter');
});

emitter.on(eventName, function() {
    console.log('Hi emitter');
});

emitter.emit(eventName);