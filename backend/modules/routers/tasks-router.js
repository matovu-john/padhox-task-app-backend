const getTasksHandler = require('../handlers/getTasksHandler.js');
const postTaskHandler = require('../handlers/postTaskHandler.js');
const deleteTaskHandler = require('../handlers/deleteTaskHandler.js');
const patchTasksHandler = require('../handlers/patchTasksHandler.js');
const postUserHandler = require('../handlers/postUserHandler.js');

function tasksRouter(req) {
   switch(req.method) {
      case 'GET':
         return getTasksHandler;

      case 'POST':
         return postTaskHandler;

      case 'PATCH':
         return patchTasksHandler;

      case 'DELETE':
         return deleteTaskHandler;

      default:
         return unsupported;
   } 

   function unsupported(req, res) {
      res.writeHead(201, {'Content-Type': 'text/plain'});
      res.end(`Our server does not support the method "${req.method}" `);
   }
}

module.exports = tasksRouter;