var gameport = process.env.PORT || 8080
var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
var express = require('express');
var UUID = require('node-uuid');
var verbose = false;
var Player = require('./Player').Player;
var util = require('util');
var players;

function init(){
	players = [];
	setEventHandlers();
}

var  playerById = function(id){
	var i;
	for(i=0;i<players.length;i++){
		if(players[i].id==id)
			return players[i];
	};
	return false;
}

var setEventHandlers = function(){
	io.sockets.on('connection',onSocketConnection);
}

function onSocketConnection(client){
	client.on('disconnect',onClientDisconnect);
	client.on('newPlayer',onNewPlayer);
	//TODO : ADD more stuff!!
};

function onClientDisconnect(){
	util.log("Player has disconnected: "+this.id);
	var removePlayer = playerById(this.id);
	if(!removePlayer){
		util.log("ERROR : Player to remove not found");
		return;
	}
	players.splice(players.indexOf(removePlayer),1);
	this.broadcast.emit("remove player",{id:this.id});
};

function onNewPlayer(data){
	util.log("New player has connected : "+(players.length+1));
	var newPlayer = newPlayer(data.creator,data.guess,data.answer);
	newPlayer.id = UUID();
	newPlayer.arrID = players.length + 1;
	if(playerByID(this.id)){
		return;
	}
	
	this.broadcast.emit('new player',{id:newPlayer.id,name:newPlayer.easyid,guess:newPlayer.getGuess(),creator:newPlayer.getIsCreator(),answer:newPlayer.getAnswer()});
	var i,existingPlayer;
	util.log("Current players: ");
	util.log(newPlayer.easyid);
	for(i=0;i<players.length;i++){
		existingPlayer = players[i];
		util.log(existingPlayer.easyid);
		this.emit('new player',{id:exitingPlayer.id,name:existingPlayer.easyid,guess:existingPlayer.getGuess(),creator:existingPlayer.getIsCreator(),answer:existingPlayer.getAnswer()});
	}
	players.push(newPlayer);
	util.log("there are now " + players.length + "clients connected");
};
	
io.configure(function(){
	io.set('log level',3);
	io.set('transports',["websocket"]);
	io.set('authorization', function(handshakeData,callback){
	callback(null,true);
	});
});

server.listen(gameport);
init();

app.get('/',function(req,res){
	res.sendfile(__dirname + '/index.html');
});
