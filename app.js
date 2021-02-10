var express = require('express'),
	app = express();

var port = process.env.PORT || 8080;
var io = require('socket.io').listen(app.listen(port));
app.use(express.static(__dirname + '/public'));

var presentation = io.on('connection', function (socket) {

	socket.on('slide-changed', function(data){
			presentation.emit('navigate', {
				hash: data.hash
			});
	});
});

console.log('Your presentation is running on http://localhost:' + port);