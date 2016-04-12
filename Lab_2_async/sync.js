// This server is part 1 of 2 for the async lab. This is intended to see some
// common mistakes that new node programmers can run into.

var http = require('http');
var fs = require('fs');

function handleRequest(request, response){

}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(8080, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", 8080);
});
