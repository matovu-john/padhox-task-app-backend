const PORT = process.env.PORT || 5000;
const http = require('http');
const mainRouter = require('./modules/routers/main-router.js');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

   // console.log('The requested url is', req.url , 'and the method is', req.method);

    const handler = mainRouter(req);
  //  console.log(handler);
    handler(req, res);
});

server.listen(PORT, '0.0.0.0', ()=>{
    console.log('server running at port', PORT);
});
