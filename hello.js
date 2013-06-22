var gameport = process.env.PORT || 8080;
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io');
var UUID = require('node-uuid');
var verbose = false;


app.listen( gameport );
console.log('\t :: Express :: Listening on port' + gameport );
app.get('/',function(req,res){
    res.sendfile(__dirname + '/index.html');
    });

app.get('/*',function(req,res,next){
    var file = req.params[0];
    if (verbose) console.log('\t :: Express :: fole requested : '+file);
    res.sendfile(__dirname + '/' + file )
});


//Socket IO Stuff
var sio = io.listen(server);

sio.configure(function(){
    sio.set('log level',0);
    sio.set('authorization',function(handshakeData,callback){
        callback(null,true);
    });
});

sio.sockets.on('connection',function(client){
    client.userid = UUID();
    client.emit('onconnected', {id: client.userid});
    console.log ( "\t socket.io :: player " + client.userid + " connected");
    client.on('disconnect',function(){
        console.log('\t socket.io :: player ' + client.userid + 'disconnected:(');
    });
}); 


