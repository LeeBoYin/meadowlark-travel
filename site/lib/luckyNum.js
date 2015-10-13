var luckyNumbers = ["null", "eins", "zwei", "drei", "vier", "funf", "sechs", "sieben", "acht", "neun"];

//exports means global function which can be accessed 
exports.getLuckyNum = function(){
	var idx = Math.floor(Math.random()*luckyNumbers.length);
	return luckyNumbers[idx];
}