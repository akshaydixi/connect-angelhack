var Player = function(creator,guess,answer){
	var _creator = creator;
	var _guess = guess;
	var _answer = answer;
	var id;

var getIsCreator = function(){
	return _creator;
};

var getGuess = function(){
	return _guess;
};

var getAnswer = function(){
	return _answer;
};

return {
	getIsCreator:getIsCreator,
	getGuess:getGuess,
	getAnswer:getAnswer
	id:id
	}
};
exports.Player = Player;
	
