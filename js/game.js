Stopwatch = require('./stopwatch.js');

function Game(){
	this.creator = null;
	this.answer = null;
	this.players = [];	
	// would require more data structures!	
};

Game.prototype.startGame = function(utility,io){
	var stopwatch = new Stopwatch();
	var gameObject = this;
	//Game logic set
	//TODO :Send emits and call events
	
};

