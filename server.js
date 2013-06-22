var gameport = process.env.PORT || 8080
var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
var express = require('express');
var UUID = require('node-uuid');
var verbose = false;
server.listen(8080);
console.log('\t Express listening on '+gameport);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});


app.get('/*',function(req,res){
  var file = req.params[0];
  if (verbose) console.log('\t Express requested for ' + file);
  
});

io.configure(function(){
	io.set('log level',0);
	io.set('authorization', function(handshakeData,callback){
	callback(null,true);
	});
});


io.sockets.on('connection', function (socket) {
	socket.userid = UUID();
	socket.emit('connected',{id: socket.userid});
	console.log('\t socket.io :: player '+ socket.userid + 'connected');
	socket.on('disconnect',function(){
		console.log('\t socket.io :: client disconnected ' + socket.userid);
});
});

