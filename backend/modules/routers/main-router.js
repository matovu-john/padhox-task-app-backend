const tasksRouter = require('./tasks-router.js');

function mainRouter(req) {
    const url = new URL(req.url, `http://${req.headers.host}`);

    switch(url.pathname) {
        case '/api/tasks':
            return tasksRouter(req);

        default:
            return notFound;
    }

    function notFound(req, res) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(`our server did not find any route or file named "${url.pathname}". Please re-check the url you typed to make sure it wasn't a typo.`);
    }
}

module.exports = mainRouter;

