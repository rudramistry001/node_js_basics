//importing the http module for creating the web server
const http = require('http');

//using the http module function createserver to send a response to the server
const server = http.createServer((req,resp) =>{
    //resp is response that that will be given to the user on accesssing the url
   
    console.log(req.url);

    if(req.url == '/contact'){
        resp.end("This is the contact page of my local server")
    }
    
    if(req.url == '/about'){
        resp.end("This is the about page of my local server")
    }
    if(req.url == '/home'){
        resp.end("This is the home page of my local server")
    }
    else{
        resp.writeHead(404,"Page Not Found",{"Content-type" : "text/html"})
        resp.end("<h1>404 Page Not Found!</h1>");
    }

});
//serverport on which the web server will be accessible and 
//127.0.0.1 indicates the localhost 
server.listen(9000,'127.0.0.1',() => {

    console.log("Connected to Port 9000 and listening");
})