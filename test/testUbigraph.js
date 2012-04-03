function justLogErrors(error, value){
	console.log(error);
}

var ubigraph = require(__dirname + '/../ubigraph2.js');
var u = new ubigraph.Ubigraph();
u.clear();

function removeVertices(){
	for(var i=0; i<vertices.length; i++){
		u.removeVertex(vertices[i], function(error, value){
			console.log(value);
		});
	}
}

var vertices = [];
var counter = 0;
var interval = setInterval(function(){
	u.newVertex(function(error, value){
		vertices.push(value);
		console.log(value);
	});
	
	if(counter++ == 10){
		for(var i=0; i<vertices.length; i++){
			console.log(i + ': ' + vertices[i]);
		}
		clearInterval(interval);
		
		setTimeout(removeVertices(), 1000);
	}
}, 100);

console.log(vertices);

