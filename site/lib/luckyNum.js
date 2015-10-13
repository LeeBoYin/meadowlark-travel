var luckyNumbers = ["null", "eins", "zwei", "drei", "vier", "funf", "sechs", "sieben", "acht", "neun"];
exports.getLuckyNum = function(){
	var idx = Math.floor(Math.random()*luckyNumbers.length);
	return luckyNumbers[idx];
}