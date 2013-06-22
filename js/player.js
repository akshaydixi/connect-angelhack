var Player = function(playerId){
	this.id = playerId;
	this.name = "";
	this.stat = 'available';
	this.creator = false;
	this.word = "";
	this.hint = "";
	};
Player.prototype.setName = function(name){
	this.name = name;
};

Player.prototype.getName = function(){
	return this.name;
};

Player.prototype.setStatus = function(stat){
	this.stat = stat;
};

Player.prototype.isAvailable = function(){
	return this.stat == 'available';
};

Player.prototype.isPlaying = function(){
	return this.stat == 'playing';
};

Player.prototype.setCreator = function(){
	this.creator = true;
};

Player.prototype.isCreator = function(){
	return this.creator == true;
};

Player.prototype.setWord = function(word){
	this.word = word;
};

Player.prototype.getWord = function(){
	return this.word;
};

Player.prototype.setHint = function(hint){
	this.hint = hint;
};

Player.prototype.getHint = function(){
	return this.hint;
};

module.exports = Player;
	
