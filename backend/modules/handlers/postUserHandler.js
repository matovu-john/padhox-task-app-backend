const getUsers = require('../fileReaders/readJSONfile.js');

function postUserHandler(req, res) {
    let body = '';
    req.on('data', chunk => body += chunk);

    req.on('end', ()=>{
        const userData = JSON.parse(body);
        let users;
        try {
            users = getUsers('users.json');
        } catch (error) {
            console.log(error.message)
            return;
        }
        users.unshift(userData);
        console.log(users);
    });
}

module.exports = postUserHandler;