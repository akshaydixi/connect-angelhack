var Game = require('./game');

var Connect = function(connectid){
	this.id = connectid;
	this.name = "";
	this.stat = "available";
	this.players = [];
	this.playerLimit = 4;
	this.gameObj = null;
};

Connect.prototype.setName = function( name ){
	this.name = name;
};

Connect.prototype.getName = function(){
	return this.name;
};

Connect.prototype.setStatus = function(stat){
	this.stat = stat;
};

Connect.prototype.getStatus = function(){
	return this.stat;
};

Connect.prototype.isAvailable = function(){
	return this.stat == 'available';
};

Connect.prototype.isFull = function(){
	return this.stat == 'full';
};

Connect.prototype.isPlaying = function(){
	return this.stat == 'playing';
};

Connect.prototype.addPlayer = function(player){
	if(this.state == 'available'){
		var found = false;
		for(var i=0; i<this.players.length; i++){
			if(this.players[i].id == player.id){
				found = true;
					break;
			}
		}
		if (!found){
			this.players.push(player);
			if(this.players.length == this.playerLimit){
				this.status = 'playing';
				this.gameObj = new Game();
				for(var i=0; i<this.players.length;i++){
					this.players[i].status = 'playing';
					//TODO : Creator and guessers?
				}
			}
			return true;
		}
	}
	return false;
};

Connect.prototype.removePlayer = function(player){
	var index = -1;
	for(var i =0;i<players.length;i++){
		if(this.players[i].id === player.id){
			index = i;
			break;
		}
	}
	if (index !=-1){
		this.players.remove(index);
	}
};

Connect.prototype.isGameAvailable = function(){
	return this.playerLimit > this.players.length;
};

Connect.prototype.createMessageObject = function(){
	var connect = this;
	var connectMessage = function(){
		this.id = connect.id;
		this.name = connect.name;
		this.stat = connect.stat;
		this.players = connect.players;
		this.playerLimit = connect.playerLimit;
	};
	return new connectMessage();
};

module.exports = Connect;
