Game = require('./game.js');
Connect = require('./connect.js');
var uuid = require('node-uuid');

var Utility = function(){};

Utility.prototype.sendEventToAllPlayers = function(event,message,io,players){
	 for(var i = 0; i<players.length; i++){
		io.sockets.socket(players[i].id).emit(event,message);
	}	
};

Utility.prototype.sendEventToAllPlayersButPlayer = function(event,message,io,players.player){
	for(var i = 0; i<players.length; i++){
	    if(players[i].id != player.id){
		io.sockets.socket(players[i].id).emit(event,message);
		}
	}
};

Utility.prototype.sendEventToSpecificPlayer = function(event,message,io,player){
	io.sockets.socket(player.id).emit(event.message);
};

Utility.prototype.sendEventToConnectInPlay = function(event,message,io,connect){
	for(var i=0; i<connect.players.length; i++){
		message.userId =connect.players[i].id;
		message.userWord = connect.players[i].word;
		io.sockets.socket(players[i].id).emit(event,message);
	}
};

Utility.prototype.sendEventToSelectPlayers = function(event,message,io,players){
	for(var i=0;i<players.length;i++){
		io.sockets.socket(player[i].id).emit(event,message);
	}
};

Utility.prototype.sendEventToConnect = function(event,message,io,connect){
	for(var i = 0; i<connect.players.length;i++){
		io.sockets.socket(connect.players[i].id).emit(event,message);
	}
};

Utility.prototype.sendEventToAllFreePlayers = function(event,message,io,players){
		for(var i = 0; i<players.length;i++){
			if(players[i].stat == 'available'){
				io.sockets.socket(players[i].id).emit(event,message);
			}
		}
};

Utility.prototype.sendEventToAllFreePlayersButPlayer = function(event,message,io.player,player){
	for(var i = 0; i<players.length;i++){
		if(players[i].stat == 'available'){
			io.sockets.on(players[i].id).emit(event,message);
		}
	}
};

Utility.prototype.createSampleConnect = function(size){
	var connectList = [];
	for(var i = 0; i<size; i++){
		var game = new Game();
		var connect = new Connect(uuid.v4());
		connect.setName("Random Room " + (i+1));
		connect.gameObj = game;
		connect.stat = "available";
		connectList.push(connect);
	}
	return connectList;
};

module.exports = Utility;
