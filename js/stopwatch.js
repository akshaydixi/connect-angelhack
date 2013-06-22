var util = require('util');
var events = require('events');
var underscore = require('underscore');

var Stopwatch = function(){
	if(false == (this instanceof Stopwatch)){
		return new Stopwatch();
	}

	this.minute = 60000;
	this.second = 1000;
	this.time = 2*this.minute;
	this.interval = undefined;

	events.EventEmitter.call(this);
	_.binAll(this);
};

util.inherits(Stopwatch, events.EventEmitter);

Stopwatch.prototype.start =function(){
	console.log("Starting stopwatch!");
	this.interval = setInterval(this.onTick,this.second/2);
	this.emit('start');
};

Stopwatch.prototype.stop = function(){
	console.log('Stopping stopwatch');
	if(this.interval){
		clearInterval(this.interval);
		this.emit('stop');
	}
};

Stopwatch.prototype.reset = function(){
	console.log('Resetting stopwatch');
	this.time = this.minute * 2;
	this.emit('reset');
};

Stopwatch.prototype.onTick = function(){
	var remainder = this.time,numMinutes,numSeconds,output="";
	if(this.time === 0){
		this.stop();
	return;
	}
	numMinutes = String(parseInt(remainder/this.minute, 10));
	remainder -= this.minute * numMinutes;
	numSeconds = String(parseInt(remainder / this.second,10));
	output = _.map([numMinutes,numSeconds],function(str){
		if(str.length == 1){
			str = "0" + str;
		}
		return str;
	}).join(":");

	this.emit('tick',output);
	this.time -= this.second/2;
};

module.exports = Stopwatch;	
