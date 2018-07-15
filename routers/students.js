const StudentController = require('../controller/student');

module.exports = function(app, connection){
    app.route('/students').get((req, res) => StudentController.get(req,res, connection))
       .post((req, res) => StudentController.create(req,res, connection));
 
    app.route('/students/:id')
       .get((req, res) => StudentController.getOne(req, res, connection))
       .put((req, res) => StudentController.update(req, res, connection))
       .delete((req, res) => StudentController.remove(req, res, connection));
};