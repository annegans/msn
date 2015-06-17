var express = require('express'); // Use the express library. 
var app = express(); // Create our app. 

var http = require('http');
server = http.createServer(app); // Create an HTTP server.
server.listen(process.env.PORT || 4000); // Listen on the default port, or on 4000 if there's not one.

app.use('/public', express.static(__dirname + '/public'));

app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
 // res.send('Hello World');
 // res.sendFile(path.join(__dirname + '/views/index.ejs'));
 res.render('index', { header: 'index' });
});


var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    socket.emit('connected');
    socket.on('chat', function(data) {
    writeLine(data.name, data.line);

});
    
});

