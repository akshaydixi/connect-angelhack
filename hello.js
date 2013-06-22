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
