const student = require('./student');
const lecture = require('./class');
const teacher = require('./teacher');
const session = require('./registration');

const shemas = [student, lecture, teacher, session];

module.exports = {
    init: (sequelize) => {
      let models = {};
      shemas.map(shema => shema.init(sequelize))
            .map(model => models[model.name] = model)
      return models;
    }
}
