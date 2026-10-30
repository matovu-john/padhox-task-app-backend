const fs = require('fs');
const path = require('path');

function createNewTaskList(taskList) {

    try {

        const filePath = path.join(__dirname, '..', 'storage', 'tasks.json');
        fs.writeFileSync(filePath, JSON.stringify(taskList));

            return {
                success: true
            }
    } catch (error) {
        throw error;
    }
}

module.exports = createNewTaskList;
