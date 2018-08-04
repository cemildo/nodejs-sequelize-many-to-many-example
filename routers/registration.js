const RegistrationController = require('../controller/registration');

module.exports = function(app){
    app.route('/registration')
       .get(RegistrationController.get)
       .post(RegistrationController.create);

    app.route('/registration/:id')
       .get(RegistrationController.getOne)
       .put(RegistrationController.update)
       .delete(RegistrationController.remove); 
};
