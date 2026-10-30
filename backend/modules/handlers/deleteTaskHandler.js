const readTasks = require('../fileReaders/readTasks.js');
const createNewTaskList = require('../creators/createNewTaskList.js');

function deleteHandler(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const taskId = url.searchParams.get('id');

    const currentTSaskList = readTasks();

    const updatedTaskList = currentTSaskList.filter(task => task.id !== taskId);
   // console.log('updatedTaskList is ', updatedTaskList);
    const successfull = createNewTaskList(updatedTaskList).success;
    console.log(successfull)

    if (successfull) console.log('successfully updated the tasklist');
}

module.exports = deleteHandler;