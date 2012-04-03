var Ubigraph;

function Ubigraph(host){
	clientOptions = {
		host: host,
		port: 20738,
		path: '/RPC2'
	};
	xmlrpc = require('xmlrpc');
	this.client = xmlrpc.createClient(clientOptions);
}

Ubigraph.prototype.clear = function(callback){
	this.client.methodCall('ubigraph.clear', [], function(error, value){
		if(error)
			console.log('ubigraph.clear error: ' + error);
		if(callback)
			callback(error, value);
	});
};

Ubigraph.prototype.newVertex = function(callback){
	this.client.methodCall('ubigraph.new_vertex', [], function(error, value){
		if(error)
			console.log('ubigraph.new_vertex error: ' + error);
		callback(error, value);
	});
};

Ubigraph.prototype.newVertexWithID = function(id, callback){
	this.client.methodCall('ubigraph.new_vertex_w_id', [id], function(error, value){
		if(error)
			console.log('ubigraph.new_vertex_w_id error: ' + error);
		if(callback)
			callback(error, value);
	});
};

Ubigraph.prototype.newEdge = function(fromVertexID, toVertexID, callback){
	this.client.methodCall('ubigraph.new_edge', [fromVertexID, toVertexID], function(error, value){
		if(error)
			console.log('ubigraph.new_edge error: ');
		if(callback)
			callback(error, value);
	});
};

Ubigraph.prototype.newEdgeWithID = function(fromVertexID, toVertexID, id, callback){
	this.client.methodCall('ubigraph.new_edge_w_id', [id, fromVertexID, toVertexID], function(error, value){
		if(error)
			console.log('ubigraph.new_edge_w_id error: ' + error);
		if(callback)
			callback(error, value);
	});
};

Ubigraph.prototype.removeVertex = function(vertexID, callback){
	this.client.methodCall('ubigraph.remove_vertex', [vertexID], function(error, value){
		if(error)
			console.log('ubigraph.remove_vertex error: ' + error);
		if(callback)
			callback(error, value);
	});
};

Ubigraph.prototype.removeEdge = function(edgeID, callback){
	this.client.methodCall('ubigraph.remove_edge', [edgeID], function(error, value){
		if(error)
			console.log('ubigraph.remove_edge error: ' + error);
		if(callback)
			callback(error, value);
	});
};

Ubigraph.prototype.setVertexAttribute = function(vertexID, property, value, callback){
	this.client.methodCall('ubigraph.set_vertex_attribute', [vertexID, property, value], function(error, value){
		if(error)
			console.log('ubigraph.set_vertex_attribute error: ' + error);
		if(callback)
			callback(error, value);
	});
};

Ubigraph.prototype.setEdgeAttribute = function(edgeID, property, value, callback){
	this.client.methodCall('ubigraph.set_edge_attribute', [edgeID, property, value], function(error, value){
		if(error)
			console.log('ubigraph.set_edge_attribute error: ' + error);
		if(callback)
			callback(error, value);
	});
};

exports.Ubigraph = Ubigraph;
