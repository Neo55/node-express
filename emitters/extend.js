var Emitter = require('events');
var util = require('util');

function User(){

}

util.inherits(User, Emitter);

var eventName = 'greet';

User.prototype.sayHi = function(data){
    this.emit(eventName, data);
}

var user = new User();

user.on(eventName, function(data){
    console.log(data);
});

user.sayHi('Hi i am extend');