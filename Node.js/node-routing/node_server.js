//server.js
const http = require('http'),
    url = require('url'),

//make a server.js file and write the following code in it.
makeServer = function(request,response){
    let path = url.parse(request.url).pathname;
    console.log(path)
    if(path == '/'){
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('Home Page');}
    else if(path == '/about'){
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('About Page');}
    else if(path == '/contact'){
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('Contact Page');}
    else{
        response.writeHead(404,{'Content-Type':'text/plain'});
        response.write('404 Page Not Found');}
    response.end();
},

server = http.createServer(makeServer);

server.listen(3000,()=>{
    console.log('Node started at 3000');
});
//run the server.js file using node server.js