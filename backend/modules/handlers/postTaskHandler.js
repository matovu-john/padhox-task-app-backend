const createTask = require('../creators/createTask.js');

function postTaskHandler(req, res) {
    let body = '';
    req.on('data', (chunk)=> body += chunk);
        
    req.on('end', ()=> {
        const task = JSON.parse(body);
        createTask(task);

        res.writeHead(204);
        res.end();
        
    });
}

module.exports = postTaskHandler;