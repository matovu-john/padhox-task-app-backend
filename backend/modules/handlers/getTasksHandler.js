const getTasks = require('./data/getTasks.js');

const tasks = getTasks();

function getTasksHandler(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const status = url.searchParams.get('status');

    let tasksToSend;

    if (status === 'all') {
        tasksToSend = tasks;
    }

    else if (status === 'incomplete') {
        tasksToSend = tasks.filter(task => task.status === 'incomplete')
    } 

    else if (status === 'completed') {
        tasksToSend = tasks.filter(task => task.status === 'completed');
    }

    else if (status === 'abandoned') {
        tasksToSend = tasks.filter(task => task.status === 'abandoned');
    }

    if (!tasksToSend) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(`No task found with status ${status} `);
        return;
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(tasksToSend));
}

module.exports = getTasksHandler;