function Room(name){
	this.players=[];
	this.name = name;
	this.currentCreatorId = -1;
};

Room.prototype.addPlayer = function(player){
	this.players.push(player);
};

Room.prototype.removePlayer = function(player){
	var playerIndex = -1;
	for (var i =0; i<this.players.length; i++){
		if(this.players[i].id == player.id){
			playerIndex = i;
			break;
		}
	}
	this.players.remove(playerIndex);
};

Room.prototype.getPlayer = function(playerId){
	var player = null;
	for(var i = 0;i<players.length;i++){
		if(this.players[i].id == playerId){
			player = this.players[i];
			break;
		}
	}
	return player;
};

module.exports = Room;
