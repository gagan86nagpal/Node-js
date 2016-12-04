var http = require('http');

function onRequest(request,response)
{
    console.log("A User made request" + request.url);
    response.writeHead(200,{"Context-type": "text/plain"});
    response.write("DATA HERE");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running");