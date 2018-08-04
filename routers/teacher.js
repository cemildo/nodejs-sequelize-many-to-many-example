const TeacherController = require('../controller/teacher');

module.exports = function(app){
    app.route('/teachers')
       .get(TeacherController.get)
       .post(TeacherController.create);

    app.route('/teachers/:id')
       .get(TeacherController.getOne)
       .put(TeacherController.update)
       .delete(TeacherController.remove);
};
