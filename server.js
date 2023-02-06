const http = require('http')
var fs = require('fs');



const server = http.createServer((req, res) => {
    const {method} = req
    switch(method){
        case 'GET':
            return handleGet(req, res);
        default:
            res.statusCode = 501;
            res.end(`The method can't be handled by the server: ${method}`);
    }
    
});

function handleGet(req, res) {
    const path = req.url;
    if(path === '/'){
        fs.readFile('/home/ion/repos/Odin/NodeJS/nodejs-basic-informational-site/index.html',(err, page) => {
            if(err){
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');  
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(page);
            }
        })
    } else if (path == '/about') {
        fs.readFile('/home/ion/repos/Odin/NodeJS/nodejs-basic-informational-site/about.html',(err, page) => {
            if(err){
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');  
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(page);
            }
        })
    } else if (path == '/contact-me') {
        fs.readFile('/home/ion/repos/Odin/NodeJS/nodejs-basic-informational-site/contact-me.html',(err, page) => {
            if(err){
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');  
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(page);
            }
        })
    } else {
        fs.readFile('/home/ion/repos/Odin/NodeJS/nodejs-basic-informational-site/404.html',(err, page) => {
            if(err){
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');  
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(page);
            }
        })
    }
}

const PORT = 3000;

server.listen(PORT, ()=> {
    console.log(`El servidor esta escuchando en http://localhost:${PORT} `)
});