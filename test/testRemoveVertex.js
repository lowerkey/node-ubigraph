
var ubigraph = require(__dirname + '/../ubigraph.js');
var u = new ubigraph.Ubigraph('127.0.0.1');
u.clear(function(){});

u.newVertex(function(error, value){
	if(error){
		console.log('newVertex error: ' + error);
	}
	
	console.log('vertex created.');
	
	u.removeVertex(value, function(error, value){
		console.log('vertex removed.');
	});
	
	/*
	setTimeout(function(){
		u.removeVertex(value, function(error, value){
			if(error)
				console.log('removeVertex error: ' + error);
			console.log('vertex removed.');
		});
	}, 500);
	*/
});