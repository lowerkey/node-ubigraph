#	A wrapper library for ubigraph.closed

class Ubigraph
	NOID: -1

	constructor: ->
		clientOptions = 
			host: 'localhost'
			port: 20738
			path: '/RPC2'
		
		xmlrpc = require('xmlrpc')
		@client = xmlrpc.createClient(clientOptions)
		
	clear: (callback)->
		@client.methodCall('ubigraph.clear', null, (error, value) ->
			if(error)
				console.log('ubigraph.clear error: ' + error)
			callback(error, value)
		)
	
	# callback is passed the following parameters:
	# 1. error: an error if one occurs
	# 2. vertexID: the returned id of the created vertex
	newVertex: (callback)->
		@client.methodCall('ubigraph.new_vertex', [], (error, value) ->
			if(error)
				console.log('ubigraph.new_vertex error: ' + error)
			callback(error, value)
		)
	
	# callback is passed the following parameters:
	# 1. error: an error if one occurs
	# 2. vertexID: the returned id of the created vertex
	newVertexWithID: (id, callback) ->
		@client.methodCall('ubigraph.new_vertex_w_id', [id], (error, value) ->
			if(error)
				console.log('ubigraph.new_vertex_w_id error: ' + error)
			callback(error, value)
		)
	
	# callback is passed the following parameters:
	# 1. error: an error if one occurs
	# 2. edgeID: the returned id of the created edge
	newEdge: (fromVertexID, toVertexID, callback) ->
		@client.methodCall('ubigraph.new_edge', [fromVertexID, toVertexID], (error, value) ->
			if(error)
				console.log('ubigraph.new_edge error: ' + error)
			callback(error, value)
		)
		
	# callback is passed the following parameters:
	# 1. error: an error if one occurs
	# 2. vertexID: the returned id of the created vertex
	newEdgeWithID: (edgeID, fromVertexID, toVertexID, callback) ->
		@client.methodCall('ubigraph.new_edge_w_id', [edgeID, fromVertexID, toVertexID], (error, value) ->
			if(error)
				console.log('ubigraph.new_edge_w_id error: ' + error)
			callback(error, value)
		)

	# callback is passed the following parameters:
	# 1. error: an error if one occurs
	# 2. value: the value returned from the server		
	removeVertex: (vertexID, callback) ->
		@client.methodCall('ubigraph.remove_vertex', [vertexID], (error, value) ->
			if(error)
				console.log('ubigraph.remove_vertex error: ' + error)
			callback(error, value)
		)
		
	# callback is passed the following parameters:
	# 1. error: an error if one occurs
	# 2. value: the value returned from the server		
	removeEdge: (edgeID, callback) ->
		@client.methodCall('ubigraph.remove_edge', [edgeID], (error, value) ->
			if(error)
				console.log('ubigraph.remove_edge error: ' + error)
			callback(error, value)
		)

	setVertexAttribute: (vertexID, property, value, callback) ->
		@client.methodCall('ubigraph.set_vertex_attribute', [id, property, value], (error, value) ->
			if(error)
				console.log('ubigraph.set_vertex_attribute error: ' + error)
			callback(error, value)
		)
		
	setEdgeAttribute: (edgeID, property, value, callback) ->
		@client.methodCall('ubigraph.set_edge_attribute', [id, property, value], (error, value) ->
			if(error)
				console.log('ubigraph.set_edge_attribute error: ' + error)
			callback(error, value)
		)