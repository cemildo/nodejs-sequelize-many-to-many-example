const ClassController = require('../controller/class');

module.exports = function(app){
    app.route('/class')
       .get(ClassController.get)
       .post(ClassController.create);

    app.route('/class/:id')
       .get(ClassController.getOne)
       .put(ClassController.update)
       .delete(ClassController.remove);

    app.route('/class/:id/students')
       .get(ClassController.findClassByIdIcludeStudent);  
};
