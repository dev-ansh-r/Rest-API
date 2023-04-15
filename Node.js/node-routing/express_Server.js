const express = require('express'),
    server = express();

server.set('port',process.env.PORT || 3000);

//basic route
server.get('/',(request,response)=>{
    response.send('Home Page');
});

server.get('/about',(request,response)=>{
    response.send('About Page');
});

server.get('/contact',(request,response)=>{
    response.send('Contact Page');
});

server.use((request,response)=>{
    response.type('text/plain');
    response.status(505);
    response.send('Error page');
});

server.listen(3000,()=>{
    console.log('Express started at 3000');
});