const StudentController = require('../controller/student');

module.exports = function(app){
    app.route('/students')
       .get(StudentController.get)
       .post(StudentController.create);

    app.route('/students/:id')
       .get(StudentController.getOne)
       .put(StudentController.update)
       .delete(StudentController.remove);
     
    app.route('/student/:id/teachers')
       .get(StudentController.findStudentByIdIcludeTeachers);    
};
