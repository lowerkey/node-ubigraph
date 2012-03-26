# node-ubigraph

This library wraps the xmlrpc calls to the ubigraph server in a little class.

All callback functions take `error` and `value` parameters, where the error 
parameter indicates an error if one occured, and value is the value returned by
the server.

0. Compilation:
    `coffee -c -b ubigraph.coffee;`
    Edit resulting ubigraph.js, appending `exports.Ubigraph = Ubigraph` to the file.

1. The constructor:
    Currently does not receive any parameters. Creates and stores the 
    connection to the ubigraph server. All subsequent functions are members of 
    the returned object.

	u = require('lib/ubigraph/ubigraph.js');
	ubigraph = new u.Ubigraph();

    The default host `localhost` is used. Drop me a line if that's a problem 
    for you. 

2. `clear(function(error, retval){ ... })`:
   Clears the graph and calls the supplied callback function.

        ubigraph.clear(function(error, value){
            if(error) throw error;
	        console.log('ubigraph cleared.');
        });

3. `newVertex(function(error, vertexID){ ... })`:
    creates a new vertex and calls the supplied callback function, passing 
    either error or null for the error and the returned vertex ID for the 
    vertexID parameter.

        ubigraph.newVertex(function(error, id){
            if(error) throw error;
            console.log('new edge created, id: ' + id);
        });

4. `newVertexWithID(newID, function(error, value){ ... })`:
    Creates a new vertex, supplying the id. Calls the supplied callback when 
    done, passing it an error if one occured.

        ubigraph.newVertexWithID(0, function(error, value){
            if(error) throw error;
            console.log('new vertex created');
        });

5. `newEdge(fromVertexID, toVertexID, callback)`:
    Creates an edge between vertices with ids fromVertexID and toVertexID. 
    Returns the edge id as the value parameter in the callback.

        ubigraph.newEdge(1, 2, function(error, edgeID){
	    if(error) throw error;
            console.log('edge created, edgeid: ' + edgeID);
        });

6. `newEdgeWithID(edgeID, fromVertexID, toVertexID, callback)`:
    Creates an edge with the supplied id

        ubigraph.newEdgeWithID(0, 1, 2, function(error, edgeID){
	    if(error) throw error;
	    console.log('edge created');
        });

7. `removeVertex(vertexID, callback)`:
    Removes a vertex from the graph.

        ubigraph.removeVertex(1, function(error, value){
            if(error) throw error;
            console.log('edge removed');
        });

8. `removeEdge(edgeID, callback)`:
    Removes an edge from the graph.

        ubigraph.removeEdge(0, function(error, value){
            if(error) throw error;
            console.log('edge removed');
        });

9. `setVertexAttribute(vertexID, property, value, callback)`
    Sets a vertex's attribute.

    See <http://ubietylab.net/ubigraph/content/Docs/index.html#vertexattributes> for available attributes.

        ubigraph.setVertexAttribute(0, 'label', 'Zeroeth Vertex', function(error, value){
            if(error) throw error;
	    console.log('vertex attribute set.');
        });

10. `setEdgeAttribute(edgeID, property, value, callback)`
    Sets an edge's attribute.

    See <http://ubietylab.net/ubigraph/content/Docs/index.html#edgeattributes> for details.

        ubigraph.setEdgeAttribute(0, 'label', 'This Is An Edge', function(error, value){
            if(error) throw error;
	    console.log('edge attribute set.');
        }

