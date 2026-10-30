const readTasks = require('../fileReaders/readTasks.js');
const createNewTaskList = require('../creators/createNewTaskList.js');

function patchTasksHandler(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const id = url.searchParams.get('id');
    const status = url.searchParams.get('status');

    const taskList = readTasks();

    const taskToUpdate = taskList.find(task => task.id === id);
    if (!taskToUpdate) {
        res.writeHead(404);
        res.end();
        return;
    }
    taskToUpdate.status = status;
    
    createNewTaskList(taskList);

    res.writeHead(204);
    res.end();
}

module.exports = patchTasksHandler;