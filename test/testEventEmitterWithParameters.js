var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('test', function(args){
	console.log('test: ' + args);
});

emitter.prototype.newVertex = function(id){
	
};

emitter.emit('test', [1, 3]);

var ClassWithEmitter = function(){
	this.value = 'test';
}
