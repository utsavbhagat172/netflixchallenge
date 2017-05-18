var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));


app.get('*', function(req, res) {
	res.sendFile(__dirname + '/public/app/views/index.html');
});

http.listen(config.port, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log("Listening on port 3000");
	}
});