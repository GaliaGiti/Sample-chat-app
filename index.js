var express = require('express');
var app = express();

var serverSidesocketIO = require('socket.io')

var portNumber = 8000;
var server = app.listen(portNumber, function(){
    console.log(`Listening to port number ${portNumber}`);
});

app.use(express.static('public'));

var serverSideIO = serverSidesocketIO(server);

serverSideIO.on('connection', function(clientSocket){
    console.log('made socket connection', clientSocket.id);

    clientSocket.on('disconnect', function(){
        console.log('somebody disconnected' + clientSocket.id)
    })

})



// var socket = require('socket.io');

// var io = socket(server);

/* io.on('connection', function(socket){
    console.log("made socket connection", socket.id);
}); */
