const RegistrationController = require('../controller/registration');

module.exports = function(app){
    app.route('/sessions')
       .get(RegistrationController.get)
       .post(RegistrationController.create);

    app.route('/sessions/:id')
       .get(RegistrationController.getOne)
       .put(RegistrationController.update)
       .delete(RegistrationController.remove);

    app.route('/sessions/class/:id')
       .get(RegistrationController.findClassAndStudentBySessionId)
};
