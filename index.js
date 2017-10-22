const countdownmod = require ('./countdownmodule');
const countdown = new countdownmod(1);
countdown.on('secondElapsed',function(n) {
  if (n<0){
    countdown.emit('done','done');
	clearInterval(secondElapsed);
    return;
  }		                    			
  console.log(n + '!');
  countdown.count = countdown.count - 1;
}	);
countdown.on('done',function() {
  console.log('done');
});
var secondElapsed=setInterval( function (){
  countdown.emit('secondElapsed',countdown.count);},1000);



