const fs = require('fs');
const path = require('path');

function readTasks() {
    const filePath = path.join(__dirname, '..', 'storage', 'tasks.json');
    console.log(filePath)

    try {
        const tasks = fs.readFileSync(filePath, 'utf-8');
      //  console.log(tasks)
        const taskss = JSON.parse(tasks);
        return taskss;
    } catch (error) {
        throw error;
    }
}


module.exports = readTasks;