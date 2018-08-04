const ClassController = require('../controller/class');

module.exports = function(app){
    app.route('/classes')
       .get(ClassController.get)
       .post(ClassController.create);

    app.route('/classes/:id')
       .get(ClassController.getOne)
       .put(ClassController.update)
       .delete(ClassController.remove);
};
