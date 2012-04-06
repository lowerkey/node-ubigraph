
var ubigraph = require(__dirname + '/../ubigraph.js');
var u = new ubigraph.Ubigraph('127.0.0.1');
u.clear(function(){});

u.newVertex(function(error, v1){
	setTimeout(function(){
		u.newVertex(function(error, v2){
			setTimeout(function(){
				u.newEdge(v1, v2, function(error, e){
					console.log(e);
				});
			}, 100);
		});
	}, 100);
});