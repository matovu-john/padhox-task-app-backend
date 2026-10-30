const getTasksHandler = require('./handlers/getTasksHandler.js');
const postTaskHandler = require('./handlers/postTaskHandler.js');
const deleteTaskHandler = require('./handlers/deleteTaskHandler.js');
const patchTasksHandler = require('./handlers/patchTasksHandler.js');
const postUserHandler = require('./handlers/postUserHandler.js');

function router(req) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(req.method)
   
    if (req.method === 'OPTIONS') {
        return function tem(req, res) {
            res.writeHead(204);
            res.end();
        }
    }

    /////////////////////////
    /////////////////////////

    if (req.method === 'GET') {

        if (url.pathname === '/api/tasks') {
            return getTasksHandler;
        } 
    }

    /////////////////////////
    /////////////////////////

    if (req.method === 'POST') {
        if (url.pathname === '/api/tasks') return postTaskHandler;

        if(url.pathname === '/api/user') return postUserHandler;       
    }

    /////////////////////////
    /////////////////////////

    if (req.method === 'DELETE') {
        
        if (url.pathname === '/api/tasks') {
            return deleteTaskHandler;
        }
    }

    /////////////////////////
    /////////////////////////

    if (req.method === 'PATCH') {

        if (url.pathname === '/api/tasks') {
            return patchTasksHandler;
        }
    }
    /////////////////////////
    
    }

    


    


module.exports = router;