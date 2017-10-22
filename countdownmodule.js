const util=require('util');
const events=require ('events');
const countDown=function countDown(timeToCount) {
	this.count=timeToCount;

};
util.inherits(countDown,events);

module.exports =countDown;

