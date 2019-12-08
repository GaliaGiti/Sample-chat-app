var express = require('express');
var app = express();
var socket = require('socket.io');
var server = app.listen(600, function(){

    console.log("Listening to port number 600");
});

app.use(express.static('public'));

var io = socket(server);

io.on('connection', function(socket){
    console.log("made socket connection", socket.id);
});