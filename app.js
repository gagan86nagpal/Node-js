var http = require('http');
var fs = require('fs');

// 404 response
function send404(response)
{
    response.writeHead(404,{"Content-Type" : "text/plain"});
    response.write("ERROR 404! Page not found!!");
    response.end();
}
// Handling user requests
function onRequest(request,response)
{
    if(request.method=='GET' && request.url == "/")
    {
        response.writeHead(200,{"Content-Type" : "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else
    {

        send404(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running");
