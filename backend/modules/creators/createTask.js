const fs = require('fs');
const path = require('path');
const readTasks = require('../fileReaders/readTasks.js');

function createTask(task) {

    try {
        const currentTasks = readTasks();
        currentTasks.unshift(task);

        const filePath = path.join(__dirname, '..', 'storage', 'tasks.json');
        fs.writeFileSync(filePath, JSON.stringify(currentTasks));

            return {
                success: true
            }
    } catch (error) {
        throw error;
    }
}

module.exports = createTask;
