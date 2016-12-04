var connect = require('connect');
var http = require('http');
var fs = require('fs');

var app=connect();

// middleware 1
function doFirst(request,response,next)
{
    console.log("Here i am , the first")
    next();
}
// middleware 2
function doSecond(request,response,next)
{
    console.log("Here i am , the second")
    next();
}

function index(request,response)
{
    console.log("User requested index.html");
    response.writeHead(200,{"Content-Type" : "text/html"});
    fs.createReadStream('./index.html').pipe(response);
}
app.use(doFirst);
app.use(doSecond);
app.use('/index',index);
http.createServer(app).listen(8888);
console.log("Server is running");