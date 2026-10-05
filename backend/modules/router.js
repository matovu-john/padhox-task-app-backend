const getTasksHandler = require('./handlers/getTasksHandler.js');

function router(req) {
    const url = new URL(req.url, `http://${req.headers.host}`);
   // console.log(url)

    if (url.pathname === '/api/get-tasks') {
        return getTasksHandler;
    } else {
        function temporary(req, res) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('chilllll... it is all good man');
        }

        return temporary;
    }
}

module.exports = router;