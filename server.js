const http = require('http')
const server = http.createServer((req, res) => {
    
    res.send('hello');
});

const PORT = 3000;

server.listen(PORT, ()=> {
    console.log(`El servidor esta escuchando en http://localhost:${PORT} `)
});