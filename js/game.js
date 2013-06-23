Stopwatch = require('./stopwatch.js');

function Game(){
	this.creator = null;
	this.answer = null;
	this.players = [];	
	// would require more data structures!	
};

Game.prototype.startGame = function(utility,io,connect){
	var stopwatch = new Stopwatch();
	var gameObject = this;
	this.creator = gameObject.chooseCreator(connect);
	utility.sendEventToConnectInPlay('creatorChosen',{chosenCreatorID : this.creator.id},io,connect);
	
	//Game logic set
	//TODO :Send emits and call events
	
};


Game.prototype.chooseCreator = function(connect){
	var length = connect.players.length;
	var index = Math.floor(Math.random()*length);
	connect.players[index].setCreator();
};
