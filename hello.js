var gameport = process.env.PORT || 4004;
var io = require('socket.io');
var express = require('express');
var UUID = require('node-uuid');
var verbose = false;
var app = express.createServer();

app.listen( gameport );
console.log('\t :: Express :: Listening on port' + gameport );
app.get('/',function(req,res){
    res.sendfile(__dirname + '/simple.html');
    });

app.get('/*',function(req,res,next){
    var file = req.params[0];
    if (verbose) console.log('\t :: Express :: fole requested : '+file);
    res.sendfile(__dirname + '/' + file )
});


//Socket IO Stuff
var sio = io.listen(app);

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
        console.log('\t socket.io :: player ' + client.userid + 'disconnected:(';
    });
}); 


