const fs = require('fs');
const path = require('path');

function readJSONfile(fileName) {
    const filePath = path.join(__dirname, '..', 'storage', fileName);
    console.log(filePath)

    try {
        const file = fs.readFileSync(filePath, 'utf-8');
      //  console.log(file)
        const data = JSON.parse(file);
        return data;
    } catch (error) {
        throw error;
    }
}


module.exports = readJSONfile;