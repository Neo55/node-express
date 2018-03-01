var Emitter = require('events');
var emitter = new Emitter();
var eventName = 'greet';

emitter.on(eventName, function(data){
    console.log(data);
});

emitter.emit(eventName, 'Tranfer');