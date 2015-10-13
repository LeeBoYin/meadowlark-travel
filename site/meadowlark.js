var luckyNum = require('./lib/luckyNum.js');
var express = require('express');
var app = express();

//SET handlebars view engine
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//var luckyNumbers = ["null", "eins", "zwei", "drei", "vier", "funf", "sechs", "sieben", "acht", "neun"];


app.set('port', process.env.PORT || 3000);

//Home Page
app.get('/', function(req, res){
	// res.type('text/plain');
	// res.send('Welcome to Meadowlark');
	res.render('home');
});


//About Page
app.get('/about', function(req, res){
	// res.type('text/plain');
	// res.send('About Meadowlark');
	
	//get a random lucky numer
	//then send luckyNumber as an input to about view
	//var randomLuckyNumber = luckyNumbers[Math.floor(Math.random()*luckyNumbers.length)];
	res.render('about',{luckyNumber: luckyNum.getLuckyNum()});
});

//route for public static files
app.use(express.static('public'));

//customize 404 page
app.use(function(req, res){
	//res.type('text/plain');
	//res.send('404 - Not Found');
	res.status(404);
	res.render('404');
});

//customize 500 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	// res.type('text/plain');
	// res.send('500 - Server Error');
	res.status(500);
	res.render('500');
});


app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press ctrl+C to terminate.')
});

