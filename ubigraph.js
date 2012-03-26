var Ubigraph;

Ubigraph = (function() {

  Ubigraph.prototype.NOID = -1;

  function Ubigraph() {
    var clientOptions, xmlrpc;
    clientOptions = {
      host: 'localhost',
      port: 20738,
      path: '/RPC2'
    };
    xmlrpc = require('xmlrpc');
    this.client = xmlrpc.createClient(clientOptions);
  }

  Ubigraph.prototype.clear = function(callback) {
    return this.client.methodCall('ubigraph.clear', null, function(error, value) {
      if (error) console.log('ubigraph.clear error: ' + error);
      return callback(error, value);
    });
  };

  Ubigraph.prototype.newVertex = function(callback) {
    return this.client.methodCall('ubigraph.new_vertex', [], function(error, value) {
      if (error) console.log('ubigraph.new_vertex error: ' + error);
      return callback(error, value);
    });
  };

  Ubigraph.prototype.newVertexWithID = function(id, callback) {
    return this.client.methodCall('ubigraph.new_vertex_w_id', [id], function(error, value) {
      if (error) console.log('ubigraph.new_vertex_w_id error: ' + error);
      return callback(error, value);
    });
  };

  Ubigraph.prototype.newEdge = function(fromVertexID, toVertexID, callback) {
    return this.client.methodCall('ubigraph.new_edge', [fromVertexID, toVertexID], function(error, value) {
      if (error) console.log('ubigraph.new_edge error: ' + error);
      return callback(error, value);
    });
  };

  Ubigraph.prototype.newEdgeWithID = function(edgeID, fromVertexID, toVertexID, callback) {
    return this.client.methodCall('ubigraph.new_edge_w_id', [edgeID, fromVertexID, toVertexID], function(error, value) {
      if (error) console.log('ubigraph.new_edge_w_id error: ' + error);
      return callback(error, value);
    });
  };

  Ubigraph.prototype.removeVertex = function(vertexID, callback) {
    return this.client.methodCall('ubigraph.remove_vertex', [vertexID], function(error, value) {
      if (error) console.log('ubigraph.remove_vertex error: ' + error);
      return callback(error, value);
    });
  };

  Ubigraph.prototype.removeEdge = function(edgeID, callback) {
    return this.client.methodCall('ubigraph.remove_edge', [edgeID], function(error, value) {
      if (error) console.log('ubigraph.remove_edge error: ' + error);
      return callback(error, value);
    });
  };

  Ubigraph.prototype.setVertexAttribute = function(vertexID, property, value, callback) {
    return this.client.methodCall('ubigraph.set_vertex_attribute', [id, property, value], function(error, value) {
      if (error) console.log('ubigraph.set_vertex_attribute error: ' + error);
      return callback(error, value);
    });
  };

  Ubigraph.prototype.setEdgeAttribute = function(edgeID, property, value, callback) {
    return this.client.methodCall('ubigraph.set_edge_attribute', [id, property, value], function(error, value) {
      if (error) console.log('ubigraph.set_edge_attribute error: ' + error);
      return callback(error, value);
    });
  };

  return Ubigraph;

})();

exports.Ubigraph = Ubigraph;