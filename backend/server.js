const PORT = process.env.PORT || 5000;
const http = require('http');
const router = require('./modules/router.js');
//const Database = require('better-sqlite3');
//console.log(Database)
//const database = new Database('tasklist.db');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    console.log(req.method, req.url);

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('it is all good bro. you are all connected');
        return;
    }
    const handler = router(req);
  //  console.log(handler);
    handler(req, res);
});

server.listen(PORT, '0.0.0.0', ()=>{
    console.log('server running at port 5000');
});