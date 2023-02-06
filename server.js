const http = require('http')
const server = http.createServer((req, res) => {
    const {method} = req
    console.log(method)
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
        res.end('index')
    } else if (path == '/about') {
        res.end('/about')
    } else if (path == '/contact-me') {
        res.end('/contact')
    }
    res.statusCode = 404;
    res.end('404')
    
}

const PORT = 3000;

server.listen(PORT, ()=> {
    console.log(`El servidor esta escuchando en http://localhost:${PORT} `)
});