// This lab will introduce the readers to the most basic setup of a webserver
// in node.js. It will listen on port 8080 and send a simple "Hello, world!"
// response.
//Lets require/import the HTTP module
var http = require('http');

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(8080, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", 8080);
});
