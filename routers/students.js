const StudentController = require('../controller/student');

module.exports = function(app){
    app.route('/students').get((req, res) => StudentController.get(req,res))
       .post((req, res) => StudentController.create(req,res));
 
    app.route('/students/:id')
       .get((req, res) => StudentController.getOne(req, res))
       .put((req, res) => StudentController.update(req, res))
       .delete((req, res) => StudentController.remove(req, res));
};