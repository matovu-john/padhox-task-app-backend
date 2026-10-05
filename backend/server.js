const http = require('http');
const router = require('./modules/router.js');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  //  res.setHeader('Access_Control_Allow_')
    
    console.log(req.url);
    const handler = router(req);
  //  console.log(handler);
    handler(req, res);
});

server.listen(5000, ()=>{
    console.log('server running at port 5000');
});