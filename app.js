var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/views', express.static(__dirname + '/views'));

app.use('/', function (req, res, next){
	//console.log('Request Url: ' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	res.send('<html><head></head><body><h1>'+
	req.params.id + '</h1></body></html>');
});


app.get('/api', function(req, res) {
	res.json({ firstname: 'John' , lastname: 'Doe' });
});

app.listen(port);